import TaskColumn from "@/components/organism/task-column"
import { mapState } from "vuex"
export default{
    name: 'Board',
    components: {
        TaskColumn
    },
    data(){
        return{
            boardData: undefined
        }
    },
    created(){
        this.configView()
    },
    methods:{
        configView(){
            this.boardData = this.board.board
        }
    },
    computed:{
        ...mapState(['board'])
    }
}