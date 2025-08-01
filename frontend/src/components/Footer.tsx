export const Footer = () => {
  return (
    <header className={'h-96 border-t border-gray-400 bg-gray-200'}>
      <nav className={'container mx-auto flex h-full items-center gap-x-4 px-4'}>
        <span className={'text-xl font-bold tracking-tighter text-gray-800'}>{'Mock footer'}</span>
      </nav>
      <div>
        <p className={'text-center text-sm text-gray-600'}>{'© 2023 DaiskiTry. All rights reserved.'}</p>
        <p className={'text-center text-sm text-gray-600'}>{'Made with ❤️ by DaiskiTry Team'}</p>
        
      </div>
    </header>
  )
}
