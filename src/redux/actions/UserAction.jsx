import { history } from "../../App";
import { userServices } from "../../services/UserServices"
import { STATUS } from "../../util/settings/config";
import { POST_USER_INFOMATION, USER_LOGIN } from "../constaints/UserConstain";


export const userLoginActionFunc = (user) => {
    return async (dispatch) => {

        try {
            const { data, status } = await userServices.postUserLogin(user);
            if (status === STATUS.SUCCESS) {
                dispatch({
                    type: USER_LOGIN,
                    userData: data.content
                })
            }
            history.goBack();
        } catch (error) {
            console.log("User Login errors: ", error.response.data.content)
        }
    }

}

export const userInfomationAction = () => {
    return async dispatch => {
        try {
            const { data, status } = await userServices.postUserInfomation();

            if (status === STATUS.SUCCESS) {
                dispatch({
                    type: POST_USER_INFOMATION,
                    userInfo: data.content
                })
            }
        } catch (error) {
            console.log("userInfomationAction error: ", error.response)
        }
    }
}