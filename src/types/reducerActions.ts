// Project files
import iMedia from "../interfaces/iMedia";
import Type from "./reducerTypes";

type Action =
  | { type: Type.CREATE_ITEM; payload: iMedia }
  | { type: Type.UPDATE_ITEM; payload: iMedia }
  | { type: Type.DELETE_ITEM; payload: string }
  | { type: Type.SET_DATA; payload: iMedia[] };

export default Action;
