import React from "react";
import Toast from './Toast'
import {useSelector} from "react-redux";
import {getToasts} from "../../modules/toast/selectors";
import {RootState} from "../../modules/types";


const ToastContainer: React.FC = () => {
    const toasts = useSelector((state: RootState) => getToasts(state))

    return <Toast toasts={toasts}/>
}


export default ToastContainer