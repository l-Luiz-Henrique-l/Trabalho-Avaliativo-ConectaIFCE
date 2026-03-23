
import React from 'react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../../components/ui/dropdown-menu'
import AvatarUser from './avatar-user'
import { useUserMenu } from './useUserMenu'

function UserMenu() {

		const {	authUser, triggerLogout } = useUserMenu()
	return (
		<DropdownMenu>
  <DropdownMenuTrigger className='outline-none'>
			<AvatarUser avatarUrl={authUser?.avatarUrl} firstName={authUser?.firstName}
			lastName={authUser?.lastName} size='lg'/>
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
