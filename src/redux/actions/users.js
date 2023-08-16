import { api } from "../../api";
import { getAuthorizedUserFailed, getAuthorizedUserStarted, getUsersFailed, getUsersStarted, getUsersSucces, get_Authorized_user_success } from "../actionCreateros/users";
export const getUser = (id) => {
	return async (dispatch) => {
		try {
			dispatch(getUsersStarted());
			const responcer = await api.users.getUser(id);

			dispatch(getUsersSucces(responcer.data))


		} catch (error) {
			dispatch(getUsersFailed(error));

		}
	}
};

export const getAuthorizedUser = () => {
	return async (dispatch) => {
		try {
			dispatch(getAuthorizedUserStarted());
			const responcer = await api.users.getUser(1);

			dispatch(get_Authorized_user_success(responcer.data))


		} catch (error) {
			dispatch(getAuthorizedUserFailed(error));

		}
	}
};