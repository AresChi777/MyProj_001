import Link from 'next/link'
import { faker } from '@faker-js/faker'
import { toast } from 'sonner'

import { useAuthStore } from '@/store/auth'
import { Button } from '@/components/base/button'

export const Header = () => {
  const user = useAuthStore((state) => state.user)

  const login = async () => {
    const user = { id: faker.string.uuid(), name: faker.person.fullName(), email: faker.internet.email() }
    useAuthStore.setState({ user })
    toast('Login successful', {
      description: `Logged in with ${user.name}.`,
      action: { label: 'OK', onClick: () => toast.dismiss() }
    })
  }

  const logout = async () => {
    useAuthStore.setState({ user: null })
    toast('Logout successful', {
      description: 'Logged out.',
      action: { label: 'OK', onClick: () => toast.dismiss() }
    })
  }

  return (
    <header className={'sticky top-0 z-10 h-14 border-b border-gray-400 bg-gray-200'}>
      <nav className={'container mx-auto flex h-full items-center gap-x-4 px-4'}>
        <Link href={'/'}>
          <span className={'text-xl font-bold tracking-tighter text-gray-800'}>{'Daiski'}</span>
        </Link>
        <div className={'flex-1'} />
        {user ? <Button onClick={logout}>{user.name}</Button> : <Button onClick={login}>{'Login'}</Button>}
      </nav>
    </header>
  )
}
