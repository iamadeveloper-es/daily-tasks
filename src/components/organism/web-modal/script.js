export default{
    name: 'web-modal',
    props:{
        content: Object,
        isOpen: Boolean 
    },
    methods:{
        closeModal(ev){
            this.$emit('CloseModal', ev)
        }
    },
    computed:{
        isModalOpen(){
            return this.isOpen
        }
    }
}