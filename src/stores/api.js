export const API_URL = import.meta.env.VITE_API_BASE_URL;
export const API_END_POINT = API_URL + "/api/"

//UserManagement
export const userSignUpUrl = API_END_POINT + "user/register";
export const userLoginUrl = API_END_POINT + "user/login";