import { HIDE_LOADING, LOADING } from "../constaints/LoadingConstain"

const initialLoading = {
    isValid: false
}

const LoadingReducer = (state = initialLoading, action) => {
    switch (action.type) {
        case HIDE_LOADING: {
            state.isValid = false;
            return { ...state }
        }
        case LOADING: {
            return { ...state, isValid: true }
        }
        default:
            return { ...state }
    }
}

export default LoadingReducer;