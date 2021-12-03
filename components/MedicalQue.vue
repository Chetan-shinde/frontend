<template>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6 ">
            <form @submit.prevent="submitQue">
                <div v-for="(item, index) in mqs" :key="index" class="form-group">
                    <label :for="item.id">{{ item.que }}</label>
                    <MedicalQueFieldDob :item="item" @updateDob="updateDob" v-if="item.type == 'dob'"/>
                    <MedicalQueFieldRadio :item="item" @updateMq="updateMq"  v-else-if="item.type == 'radio'" />
                    <MedicalQueFieldText :item="item" @updateMq="updateMq" v-else-if="item.type == 'text'" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div class="col-md-3"></div>
    </div>
</template>

<script>
import DOB from "./medicalquefield/Dob.vue";
import Radio from "./medicalquefield/Radio.vue";
import Text from "./medicalquefield/Text.vue";

export default {
    async fetch(){
       await this.$common.getMqs(this);
    },
    components:{
        MedicalQueFieldDob:DOB,
        MedicalQueFieldRadio:Radio,
        MedicalQueFieldText:Text
    },
    computed:{
        mqs(){
            //console.log(this.$store.state.mq.list)
            return this.$store.state.mq.list;
        }
    },
    methods:{
        updateMq(e, item){
            //item.saved_ans = e.target.value;
            let payload = {};
            payload.item = item;
            payload.ans = e.target.value;
            this.$store.commit('mq/updateList', payload)
        },
        updateDob(item, ans){
            let payload = {};
            payload.item = item;
            payload.ans = ans;
            this.$store.commit('mq/updateList', payload)
        },
        submitQue(){
            console.log(this.$store.state.mq.list)
        }
    }
}
</script>