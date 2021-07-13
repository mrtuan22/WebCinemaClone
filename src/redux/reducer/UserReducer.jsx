import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { POST_USER_INFOMATION } from "../constaints/UserConstain";


let user = {};
let getUser = localStorage.getItem(USER_LOGIN);
if (getUser) {
    user = JSON.parse(getUser);
}

const initialUser = {
    userLogin: user,
    userInfo: {}
}

const UserReducer = (state = initialUser, action) => {
    switch (action.type) {
        case USER_LOGIN: {
            localStorage.setItem(USER_LOGIN, JSON.stringify(action.userData))
            localStorage.setItem(TOKEN, action.userData.accessToken)
            return { ...state, userLogin: action.userData }
        }
        case POST_USER_INFOMATION: {

            return { ...state, userInfo: action.userInfo }
        }
        default:
            return { ...state };
    }
}

export default UserReducer;