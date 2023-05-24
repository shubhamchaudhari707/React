let initilzation = 1;

const multiplyTheNumber=(state=initilzation, action)=>{
    switch (action.type) {
        case "MULTIPLY":
            return state * action.payload
           
        case "DIVIDE":
            return state / action.payload
           
    
        default:
            return state;
    }
}


export default multiplyTheNumber;