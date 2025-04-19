import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CircleUserRound } from 'lucide-react'
import { toast } from 'sonner'

import { logout } from '@/services/auth'
import { useAuthStore } from '@/store/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/base/avatar'
import { Button } from '@/components/base/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/base/dropdown-menu'

const mockLinks = [
  { label: 'public', pathname: '/' },
  { label: 'guest', pathname: '/login' },
  { label: 'private', pathname: '/profile' }
]

export const Header = () => {
  const router = useRouter()
  const user = useAuthStore((state) => state.user)

  const onLogout = async () => {
    try {
      await logout()
      toast('Logout successful', {
        description: 'Logged out.',
        action: { label: 'OK', onClick: () => toast.dismiss() }
      })
    } catch (error) {
      error instanceof Error &&
        toast.error('Logout failed', {
          description: error.message,
          action: { label: 'OK', onClick: () => toast.dismiss() }
        })
    }
  }

  return (
    <header className={'sticky top-0 z-10 h-14 border-b border-gray-400 bg-gray-200'}>
      <nav className={'container mx-auto flex h-full items-center gap-x-4 px-4'}>
        <Link href={'/'}>
          <span className={'text-xl font-bold tracking-tighter text-gray-800'}>{'Daiski'}</span>
        </Link>
        <div className={'flex gap-x-2'}>
          {mockLinks.map((link) => (
            <Button key={link.pathname} asChild={true} variant={'link'}>
              <Link href={link.pathname}>
                <span className={'capitalize'}>{link.label}</span>
              </Link>
            </Button>
          ))}
        </div>
        <div className={'flex-1'} />
        {user ? (
          <DropdownMenu key={'user'}>
            <DropdownMenuTrigger asChild={true}>
              <Avatar>
                <AvatarImage src={user.image} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={'end'}>
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => router.push('/profile')}>{'Profile'}</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={onLogout}>{'Logout'}</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <DropdownMenu key={'login'}>
            <DropdownMenuTrigger asChild={true}>
              <Avatar>
                <AvatarFallback>
                  <CircleUserRound className={'size-full text-gray-800'} />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={'end'}>
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => router.push('/login')}>{'Login'}</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </nav>
    </header>
  )
}
