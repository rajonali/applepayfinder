import { SELECT_LOCATION } from "../constants/action-types";


export function selectLocation(payload) {
  return { type: SELECT_LOCATION, payload };
}
