<template>
    <div>
        <input type="text" class="form-control"  :value="finfo.value" :placeholder="finfo.placeholder" v-on:input="updateValue" v-if="finfo.type == 'text'"/>
        <textarea  class="form-control" :value="finfo.value" :placeholder="finfo.placeholder" v-on:input="updateValue" v-if="finfo.type == 'textarea'"></textarea>
    </div>
</template>

<script>
export default {
    props:{
        finfo:Object
    },
    emits:['input'],
    methods:{
        updateValue(e){
            this.$emit('input', {...this.finfo, value:e.target.value})
        }
    }
}
</script>