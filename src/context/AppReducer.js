export const AppReducer = (state , action)=>
{
    switch (action.type) {
         case 'ADD_TRANS':
            return {
              ...state,
              transactions: [action.payload, ...state.transactions]
            }

        case "DELETE_TRANS":
            return {
                ...state,
                transactions: state.transactions.filter(transaction=>transaction.id !== action.payload)
            }

        default:
            return state
    }
}
