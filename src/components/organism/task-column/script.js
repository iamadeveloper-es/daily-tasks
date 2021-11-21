import { randomId } from "../../../utils"
import TaskList from "@/components/molecules/task-list"
import WebInput from "@/components/atoms/web-input"
import WebIconAction from "@/components/molecules/web-icon-action"
import ClickOutside from 'vue-click-outside'
export default{
    name: 'task-column',
    components:{
        TaskList,
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
            newTask: ''
        }
    },
    methods:{
        showAddTask(){
            this.isAddTask = true
        },
        hideAddTask(ev){
            console.log(ev.target.className)
            if(!ev.target.classList.contains('web-button') && !ev.target.classList.contains('web-input')){
                this.isAddTask = false
            }
        },
        addTask(ev){
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