import { randomId } from "../../../utils" 
import WebAdd from "@/components/organism/web-add"
import TaskColumn from "@/components/organism/task-column"
import { mapState } from "vuex"
export default{
    name: 'Board',
    components: {
        WebAdd,
        TaskColumn
    },
    data(){
        return{
            boardData: undefined,
            inptValue: '',
            iconData: {
                icon: 'add',
                text: 'Add new list'
            },
            inputData: {
                type: 'text',
                placeHolder: '... New List name',
                value: ''
            },
            btnData: {
                text: 'Add list',
                classes: ['btn-sm','btn-blue']
            }
        }
    },
    created(){
        this.configView()
    },
    methods:{
        configView(){
            this.boardData = this.board.board
        },
        handleValue(ev){
            this.inptValue = ev.target.value
        },
        addNewList(){
            if(this.inptValue != ''){
                const payload = {
                    column: {
                        title: this.inptValue,
                        id: randomId(),
                        tasks: []
                    }
                }
                this.$store.commit('ADD_LIST', payload)
                this.inptValue = ''
            }
        }
    },
    computed:{
        ...mapState(['board']),
        getInputValue(){
            return this.inptValue
        }
    }
}