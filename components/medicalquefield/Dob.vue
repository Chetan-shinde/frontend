<template>
     <b-form-datepicker id="example-datepicker" v-model="dob" @input="updateDob" class="mb-2"></b-form-datepicker>
</template>

<script>
import { BFormDatepicker } from 'bootstrap-vue'
export default {
    components:{
        BFormDatepicker
    },
    props:{
        item:Object
    },
    data(){
        return{
            dob:''
        }
    },
    emits:['updateMq'],
    methods:{
        updateDob(){
            this.$emit('updateDob', this.item, this.dob)
        }
    }
}
</script>