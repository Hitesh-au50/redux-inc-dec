// Decrement 

const Decrement=(state=0,action)=>{
    switch (action.type) {
        case 'Decrement':
            return state-2
    
        default:
          return state
    }
}

export default Decrement;