
import React from 'react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './dropdown-menu'
import AvatarUser from './avatar-user'
import { useUserMenu } from './useUserMenu'

function UserMenu() {

		const {	authUser, getInicials, triggerLogout } = 	useUserMenu()
		const initials= getInicials()
	return (
		<DropdownMenu>
  <DropdownMenuTrigger className='outline-none'>
			<AvatarUser imageUrl={authUser?.avatarUrl} initials={initials} size='lg'/>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel className='text-sm font-semibold text-foreground'>{authUser?.name}</DropdownMenuLabel>
			<DropdownMenuLabel className='text-sx text-muted-foreground'>{authUser?.email}</DropdownMenuLabel>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>Perfil</DropdownMenuItem>
      <DropdownMenuItem variant='destructive' onClick={triggerLogout}>Sair</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>
	)
}

export default UserMenu
