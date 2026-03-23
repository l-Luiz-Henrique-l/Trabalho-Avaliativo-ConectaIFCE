import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar'
import type { UserDomain } from '../types/UserDomain'
import { useAvatar } from './useAvatar'

function AvatarUser({avatarUrl, firstName, lastName, size}: {
	avatarUrl: string | undefined,
	firstName: string | undefined,
	lastName: string | undefined,
	size: "default" | "sm" | "lg" | undefined}) {

		const {getInitials} = useAvatar(firstName, lastName)

		const initials = getInitials()


	return (
		<Avatar size={size}>
  <AvatarImage src={avatarUrl} />
  <AvatarFallback
	className='bg-primary/20 text-primary border border-primary/50 font-semibold'>{initials}
	</AvatarFallback>
</Avatar>
	)
}

export default AvatarUser
