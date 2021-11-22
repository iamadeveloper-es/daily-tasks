import { randomId } from "../../../utils"
import TaskList from "@/components/molecules/task-list"
import WebAdd from "@/components/organism/web-add"
import WebInput from "@/components/atoms/web-input"
import WebIconAction from "@/components/molecules/web-icon-action"
import ClickOutside from 'vue-click-outside'
export default{
    name: 'task-column',
    components:{
        TaskList,
        WebAdd,
        WebInput,
        WebIconAction
    },
    props:{
        column: Object,
        index: Number
    },
    data(){
        return{
            isAddTask: false,
            newTask: '',
            iconData: {
                icon: 'add',
                text: 'Add a card'
            },
            inputData: {
                type: 'text',
                placeHolder: '... New card name',
                value: ''
            },
            btnData: {
                text: 'Add card',
                classes: ['btn-sm','btn-blue']
            }
        }
    },
    methods:{
        handleValue(ev){
            this.newTask = ev.target.value
        },
        addNewTask(){
            if(this.newTask != ''){
                const payload = {
                    columnIndex: this.index,
                    data: {
                        name: this.newTask,
                        id: randomId(),
                    },
                }
                this.$store.commit('ADD_TASK', payload)
                this.newTask = ''
                this.isAddTask = false
            }
        }
    },
    directives: {
        ClickOutside
    }
}