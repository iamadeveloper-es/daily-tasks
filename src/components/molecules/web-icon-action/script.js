import WebIcon from "@/components/atoms/web-icon"
export default{
    name: 'web-icon-action',
    components:{
        WebIcon
    },
    props:{
        icon: String,
        actionText: String
    },
    methods:{
        handleEvent(ev){
            this.$emit('Clicked', ev)
        }
    }
}