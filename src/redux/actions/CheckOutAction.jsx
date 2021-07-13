import { notification } from "antd";
import { checkOutManagerServices } from "../../services/CheckOutManagerServices";
import { notificationFunction } from "../../util/notification/notification";
import { STATUS } from "../../util/settings/config";
import { GET_LIST_TICKET_OFFICE } from "../constaints/CheckOutConstain";

export const getListTicketOfficeWithIdMaLichChieuAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const { data, status } = await checkOutManagerServices.getListTicketOffice(maLichChieu);
            if (status === STATUS.SUCCESS) {
                dispatch({
                    type: GET_LIST_TICKET_OFFICE,
                    ticketOffice: data.content
                })
            }
        } catch (errors) {
            console.log("Errors CheckoutAction: ", errors.reponse.data);
        }
    }
}

export const postTiketChekedAction = (model) => {
    return async dispatch => {
        try {
            const result = await checkOutManagerServices.postTiketChecked(model);
            console.log("result", result)
            if (result.status === STATUS.SUCCESS) {
                notificationFunction("success", "Đặt vé thành công")
                setTimeout(function () {
                    window.location.reload();
                }, 1000)
            }


        } catch (error) {
            console.log("postTiketChekedAction: ", error)
        }
    }
}