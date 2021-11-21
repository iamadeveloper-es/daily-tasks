import TaskList from "@/components/molecules/task-list"
export default{
    name: 'task-column',
    components:{
        TaskList
    },
    props:{
        column: Object
    }
}