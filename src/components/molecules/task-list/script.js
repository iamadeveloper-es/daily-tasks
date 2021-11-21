import WebModal from "@/components/organism/web-modal"
import WebInput from "@/components/atoms/web-input"
export default{
    name: 'task-list',
    components:{
        WebModal,
        WebInput
    },
    props:{
        task: Object 
    },
    data(){
        return{
            isModal: false,
            value: ''
        }
    },
    methods:{
        showModal(){
            this.isModal = true
        },
        hideModal(ev){
            this.isModal = false
            console.log(ev)
        },
        getInputValue(ev){
            this.value = ev.target.value
        }
    }
}