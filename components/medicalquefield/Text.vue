<template>
    <input type="text" :class="['form-control']" :value="item.saved_ans" :id="item.id" @change="$emit('updateMq', $event, item)" />    
</template>

<script>
export default {
    props:{
        item:Object
    },
    emits:['updateMq']
}
</script>