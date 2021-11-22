import WebInput from "@/components/atoms/web-input"
import WebIconAction from "@/components/molecules/web-icon-action"
import ClickOutside from 'vue-click-outside'
export default{
    name: 'web-add',
    components:{
        WebInput,
        WebIconAction
    },
    props:{
        iconData: Object,
        inputData: Object,
        btnData: Object
    },
    data(){
        return{
            isAdd: false,
        }
    },
    directives: {
        ClickOutside
    },
    methods:{
        showAdd(){
            this.isAdd = true
        },
        hideAdd(ev){
            console.log(ev.target.className)
            if(!ev.target.classList.contains('web-button') && !ev.target.classList.contains('web-input')){
                this.isAdd = false
            }
        },
        handleValue(ev){
            this.$emit('InputValue', ev)
        },
        addAction(ev){
            this.$emit('AddAction', ev)
            this.isAdd = false
        }
    }
}