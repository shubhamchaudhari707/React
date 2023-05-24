export const inNumber = (num) => {
    return {
        type: "INCREMENT",
        payload:num
    }

}

export const deNumber=(num)=>{
    return {
        type:'DECREMENT',
        payload:num
    }
}

export const mulNumber=(num)=>{
    return {
        type:'MULTIPLY',
        payload:num
    }
}
export const divNumber=(num)=>{
    return {
        type:'DIVIDE',
        payload:num
    }
}








