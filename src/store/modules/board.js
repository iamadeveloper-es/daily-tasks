import {board} from "../../board"
export default {
    state: {
        board: board
    },
    getters:{
        
    },
    mutations: {
        ADD_TASK(state, payload){
            state.board[Number(payload.columnIndex)].column.tasks.push(payload.data)
        },
        ADD_LIST(state, payload){
            state.board.push(payload)
        }
    },
    actions: {
    }
}