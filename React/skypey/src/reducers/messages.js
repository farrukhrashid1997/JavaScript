import { getMessages } from "../static-data";

export default (state = getMessages(20), action) => {
    return state
}

