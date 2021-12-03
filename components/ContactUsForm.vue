<template>
    <div class="container contact-form">
    <!-- Contact Section Begin -->
    <section class="contact-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="contact-title">
                        <h4>Contacts Us</h4>
                        <p>Contrary to popular belief, Lorem Ipsum is simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, maki years old.</p>
                    </div>
                    <div class="contact-widget">
                        <div class="cw-item">
                            <div class="ci-icon">
                                <i class="ti-location-pin"></i>
                            </div>
                            <div class="ci-text">
                                <span>Address:</span>
                                <p>60-49 Road 11378 New York</p>
                            </div>
                        </div>
                        <div class="cw-item">
                            <div class="ci-icon">
                                <i class="ti-mobile"></i>
                            </div>
                            <div class="ci-text">
                                <span>Phone:</span>
                                <p>+65 11.188.888</p>
                            </div>
                        </div>
                        <div class="cw-item">
                            <div class="ci-icon">
                                <i class="ti-email"></i>
                            </div>
                            <div class="ci-text">
                                <span>Email:</span>
                                <p>hellocolorlib@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 offset-lg-1">
                    <div class="contact-form">
                        <div class="leave-comment">
                            <h4>Leave A Comment</h4>
                            <p>Our staff will call back later and answer your questions.</p>
                <form method="post" v-on:submit.prevent="processForm">
                    <h3>Drop Us a Message</h3>
                <div class="row">
                        <div class="col-md-12">
                            <div v-for="(field, i) in formFields" v-bind:key="i"  class="form-group">
                                <FormField v-bind:finfo="field" v-on:input="updateFormField"/>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="btnSubmit" class="btnContact btn btn-primary" value="Send Message" />
                            </div>
                        </div>
                </div>
                <div class="row">       
                        <div class="col-md-6">
                             <transition appear name="fade" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
                                <p v-if="show">hello</p>
                            </transition>
                            <transition name="fade" mode="out-in">
                                <button key="on" v-if="on" v-on:click="on = !on">on</button>
                                <button key="off" v-else v-on:click="on = !on">off</button>
                            </transition>
                              <button v-on:click="show = !show">
                                Toggle
                            </button>
                        </div>
                    </div>

                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Section End -->
    </div>
</template>

<script>
import FormField from "./FormField.vue";
export default {
    components:{
        FormField
    },
    data(){
        return{
           formFields:[],
           show:true,
           on:true 
        }
    },
    methods:{
        processForm(){
            const postData= {};
            this.formFields.forEach(function(field){
                postData[field.name] = field.value
            })
            console.log(postData)
        },
        updateFormField(field){
            const index = this.formFields.findIndex(item=>item.name == field.name)
            this.formFields.splice(index, 1, field)
        }
    },
    async fetch(){
        this.formFields = [
            {name:'name', type:'text', placeholder:"Your Name *", value:''},
            {name:'email', type:'text', placeholder:"Your Email *", value:''},
            {name:'phone', type:'text', placeholder:"Your Phone Number *", value:''},
            {name:'message', type:'textarea', placeholder:"Your Message *", value:''}
        ];
    }   
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>