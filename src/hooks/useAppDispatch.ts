import {useDispatch} from "react-redux";
import {store} from "../modules/store";

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch()
