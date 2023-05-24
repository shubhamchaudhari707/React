import changeNumber from "./upDown";
import multiplyTheNumber from "./mulDiv";
import {combineReducers} from 'redux'


const rootreducer = combineReducers({
    changeNumber,
    multiplyTheNumber
})

export default rootreducer


