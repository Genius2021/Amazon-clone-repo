import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_RESET, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_MINE_LIST_FAIL, ORDER_MINE_LIST_REQUEST, ORDER_MINE_LIST_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_RESET, ORDER_PAY_SUCCESS } from "../constants/orderConstants";

export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return { ...state, loading: true };
        case ORDER_CREATE_SUCCESS:
            return { ...state, loading: false, success: true, order: action.payload }
        case ORDER_CREATE_FAIL:
            return { ...state, loading: false, error: action.payload }
        case ORDER_CREATE_RESET:
            return {};
        default:
            return state;
    }
}


export const orderDetailsReducer = (state = { loading: true, order: {} }, action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return { ...state, loading: true };
        case ORDER_DETAILS_SUCCESS:
            return { ...state, loading: false, order: action.payload };
        case ORDER_DETAILS_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export const orderPayReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_PAY_REQUEST:
            return { ...state, loadingPay: true };
        case ORDER_PAY_SUCCESS:
            return { ...state, loadingPay: false, successPay: true };
        case ORDER_PAY_FAIL:
            return { ...state, loadingPay: false, errorPay: action.payload };
        case ORDER_PAY_RESET:
            return {};
        default:
            return {...state}
    }
}

export const orderMineListReducer = (state = {orders:[]}, action) =>{
    switch (action.type) {
        case ORDER_MINE_LIST_REQUEST:
            return { ...state, loading: true };
        case ORDER_MINE_LIST_SUCCESS:
            return { ...state, loading: false, success: true, orders:action.payload };
        case ORDER_MINE_LIST_FAIL:
            return { ...state, loading: false, error: action.payload };
        case ORDER_PAY_RESET:
            return {};
        default:
            return {...state};
    }
}