export default{
    name: 'web-icon',
    props:{
        btnText: String,
        btnClasses: Array
    },
    methods:{
        handleEvent(ev){
            this.$emit('Clicked', ev)
        }
    }
}