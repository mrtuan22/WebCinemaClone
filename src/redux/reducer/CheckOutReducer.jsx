import { ADD_CHECKING, GET_LIST_TICKET_OFFICE } from "../constaints/CheckOutConstain";

const initialCheckOut = {
    ticketOffice: {},
    arrChecking: []
}

const CheckOutReducer = (state = initialCheckOut, action) => {
    switch (action.type) {
        case GET_LIST_TICKET_OFFICE: {
            return { ...state, ticketOffice: action.ticketOffice }
        }
        case ADD_CHECKING: {

            let newArrChecking = [...state.arrChecking];

            let seatItem = action.seatItem;

            let indexSeatItem = newArrChecking?.findIndex((seat) => seatItem.maGhe === seat.maGhe);
            console.log("indexSeatItem", indexSeatItem)
            if (indexSeatItem !== -1) {
                newArrChecking.splice(indexSeatItem, 1);
            } else {
                newArrChecking.push(seatItem);

            }
            state.arrChecking = newArrChecking;
            return { ...state }
        }
        default:
            return { ...state }
    }
}

export default CheckOutReducer;