export default{
    name: 'web-input',
    props:{
        type: String,
        placeHolder: String,
        value: String
    },
    methods:{
        emitValue(ev){
            this.$emit('EmitValue', ev)
        }
    }
}