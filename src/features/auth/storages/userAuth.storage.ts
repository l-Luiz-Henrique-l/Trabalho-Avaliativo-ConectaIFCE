export type AuthUser = {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  handle: string;
  avatarUrl?: string;
  role: 'STUDENT' | 'PROFESSOR' | 'TECHNICIAN';
  campus: {
    id: string;
    name: string;
  };
  course?: string;
}

const KEY_AUTH_USER = 'auth_user'

function setStoreUser(user: AuthUser){
	localStorage.setItem(KEY_AUTH_USER, JSON.stringify(user))
}

function getStoreUser(): AuthUser | null {
	const raw = localStorage.getItem(KEY_AUTH_USER)
	if (!raw) return null
	return JSON.parse(raw) as AuthUser
}

function clearStoreUser(){
	localStorage.removeItem(KEY_AUTH_USER)
}

export{
	setStoreUser,
	getStoreUser,
	clearStoreUser
}
