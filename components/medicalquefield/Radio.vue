<template>
    <div>
        <div v-for="(option, index) in options" :key="index">
            <input type="radio" :id="option.value" :value="option.value" @change="$emit('updateMq', $event, item)" />
            <label :for="option.value">{{ option.label }}</label>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        item:Object
    },
    computed:{
        options(){
            return this.item.options;
        }
    },
    emits:['updateMq']
}
</script>