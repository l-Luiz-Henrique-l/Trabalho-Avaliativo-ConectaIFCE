const KEY_TOKEN = 'acess-token'
function setAcessToken(token: string){
	localStorage.setItem(KEY_TOKEN, token)
}
function getAcessToken(){
	localStorage.getItem(KEY_TOKEN)
}
function clearAcessToken(){
	localStorage.removeItem(KEY_TOKEN)
}

export {
	setAcessToken,
	getAcessToken,
	clearAcessToken
}
