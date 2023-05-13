import {configureStore} from '@reduxjs/toolkit';
import todos from "./reducer/todos";
import visibility from "./reducer/visibility";

export default configureStore({
    reducer:{todos,visibility}
})
