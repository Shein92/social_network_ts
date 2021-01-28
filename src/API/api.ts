import axios from 'axios'

let instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": "51942aaa-243d-451f-aca7-fe5920feb22f"
	}
})

enum ResultCodesEnum {
	Success = 0,
	Error = 1,
	Captcha = 10
}

type AuthMeType = {
	data: {
		id: number,
		email: string,
		login: string
	}
	resultCode: number,
	messages: Array<string>
}

export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {
	return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => response.data)
}

export const getMyPage = () => {
	return instance.get<AuthMeType>('auth/me')
		.then(response => response.data)
}

export const login = (email: string, password: string, rememberMe: boolean = false) => {
	return instance.post(`auth/login`,{email, password, rememberMe});
}

export const logout = () => {
	return instance.delete(`auth/login`);
}

export const unfollowUser = (id: number) => {
	return instance.delete(`follow/${id}`)
		.then(response => response.data)
}

export const followUser = (id: number) => {
	return instance.post(`follow/${id}`, {})
		.then(response => response.data)
}

export const getMyProfilePage = (userId: number) => {
	return instance.get(`profile/${userId}`)
}
export const getUserStatus = (userId: number) => {
	return instance.get(`profile/status/${userId}`)
}
export const updateUserStatus = (status: string) => {
	return instance.put('profile/status', {status: status})
} 

export const savePhotoAPI = (file: any) => {
	const formData = new FormData();
	formData.append('image', file);
	return instance.put('/profile/photo', formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})
}

export const securityAPI = {
	getCaptcha() {
		return instance.get('/security/get-captcha-url')
	}
}