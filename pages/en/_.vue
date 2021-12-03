<template>
    <div>
        <HeaderComponent/>
        <component :is="currentComponent"></component>
    </div>
</template>

<script>

export default {
    head(){
        return{
            link:[
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css'
                }
            ],
            script:this.$common.setJs()
        }
    },
    components:{
        ContactUsForm:() => import('../../components/ContactUsForm.vue'),
        LoginModel: () => import('../../components/models/Login.vue'),
        MedicalQues: () => import('../../components/MedicalQue.vue')
    },
    computed:{
        currentComponent(){
            return this.$store.state.currentComponent
        }
    }
}
</script>