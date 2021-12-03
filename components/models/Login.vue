<template>
    <div id="logreg-forms">
        <transition name="component-fade" mode="out-in">
            <form class="form-signin" v-if="showSignIn" v-bind:key="'form-signin'" @submit.prevent="submitLogin">
                <h1 class="h3 mb-3 font-weight-normal" style="text-align: center"> Sign in</h1>
                <div class="social-login">
                    <button class="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                    <button class="btn google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
                </div>
                <p style="text-align:center"> OR  </p>
                <input v-model.trim="email" class="form-control" placeholder="Email address">
                <input type="password" v-model.trim="password" class="form-control" placeholder="Password">
                
                <button class="btn btn-success btn-block" type="submit"><i class="fas fa-sign-in-alt"></i> Sign in</button>
                <a href="#" id="forgot_pswd" v-on:click.prevent="changeForm('reset')">Forgot password?</a>
                <hr>
                <!-- <p>Don't have an account!</p>  -->
                <button class="btn btn-primary btn-block" type="button" id="btn-signup" v-on:click="changeForm('signup')"><i class="fas fa-user-plus"></i> Sign up New Account</button>
            </form>
        </transition>
        <transition name="component-fade" mode="out-in">
            <form class="form-reset" v-if="showReset" v-bind:key="'form-reset'">
                <input type="email" id="resetEmail" class="form-control" placeholder="Email address" required="" autofocus="">
                <button class="btn btn-primary btn-block" type="submit">Reset Password</button>
                <a href="#" id="cancel_reset" v-on:click.prevent="changeForm('signin')"><i class="fas fa-angle-left"></i> Back</a>
            </form>
        </transition>
        <transition name="component-fade" mode="out-in">
            <form  class="form-signup" v-if="showSignup" v-bind:key="'form-signup'">
                    <div class="social-login">
                        <button class="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
                    </div>
                    <div class="social-login">
                        <button class="btn google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign up with Google+</span> </button>
                    </div>
                    
                    <p style="text-align:center">OR</p>

                    <input type="text" id="user-name" class="form-control" placeholder="Full name" required="" autofocus="">
                    <input type="email" id="user-email" class="form-control" placeholder="Email address" required autofocus="">
                    <input type="password" id="user-pass" class="form-control" placeholder="Password" required autofocus="">
                    <input type="password" id="user-repeatpass" class="form-control" placeholder="Repeat Password" required autofocus="">

                    <button class="btn btn-primary btn-block" type="submit"><i class="fas fa-user-plus"></i> Sign Up</button>
                    <a href="#" id="cancel_signup" v-on:click.prevent="changeForm('signin')"><i class="fas fa-angle-left"></i> Back</a>
            </form>  
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return{
            showSignup: false,
            showReset: false,
            showSignIn: true,
            email:'',
            password:''
        }
    }, 
    methods:{
        changeForm(formname){
            if(formname == 'signin'){
                this.showSignIn = true;
                this.showSignup = false;
                this.showReset = false;
            }
            else if(formname == 'signup'){
                this.showSignIn = false;
                this.showSignup = true;
                this.showReset = false;

            }
            else if(formname == 'reset'){
                this.showSignIn = false;
                this.showSignup = false;
                this.showReset = true;
            }
        },
        async submitLogin(){
             const postData =  {
                'language': this.$store.state.language,
                'email': this.email,
                'password': this.password,
                'device_id':'6788',
                'device_type':"2"
            };
            try {
                const initData = await this.$axios.$post('/login', postData)
                this.$router.push('/en')   
            } catch (error) {
                if(error.response.status == 401){
                    this.$common.setAuthCookie(this.$cookies, error.response.data.response.newtoken)
                    this.submitLogin()
                }
            }
            
        }
    }
}
</script>
<style scoped>

/* sign in FORM */
#logreg-forms{
    width:412px;
    margin:10vh auto;
    background-color:#f3f3f3;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
#logreg-forms form {
    width: 100%;
    max-width: 410px;
    padding: 15px;
    margin: auto;
}
#logreg-forms .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
}
#logreg-forms .form-control:focus { z-index: 2; }
#logreg-forms .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
#logreg-forms .form-signin input[type="password"] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

#logreg-forms .social-login{
    width:390px;
    margin:0 auto;
    margin-bottom: 14px;
}
#logreg-forms .social-btn{
    font-weight: 100;
    color:white;
    width:190px;
    font-size: 0.9rem;
}

#logreg-forms a{
    display: block;
    padding-top:10px;
    color:lightseagreen;
}

#logreg-form .lines{
    width:200px;
    border:1px solid red;
}


#logreg-forms button[type="submit"]{ margin-top:10px; }

#logreg-forms .facebook-btn{  background-color:#3C589C; }

#logreg-forms .google-btn{ background-color: #DF4B3B; }



#logreg-forms .form-signup .social-btn{ width:210px; }

#logreg-forms .form-signup input { margin-bottom: 2px;}

.form-signup .social-login{
    width:210px !important;
    margin: 0 auto;
}


.component-fade-enter-active,
.component-fade-leave-active {
transition: opacity 0.5s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
opacity: 0;
}

/* Mobile */

@media screen and (max-width:500px){
    #logreg-forms{
        width:300px;
    }
    
    #logreg-forms  .social-login{
        width:200px;
        margin:0 auto;
        margin-bottom: 10px;
    }
    #logreg-forms  .social-btn{
        font-size: 1.3rem;
        font-weight: 100;
        color:white;
        width:200px;
        height: 56px;
        
    }
    #logreg-forms .social-btn:nth-child(1){
        margin-bottom: 5px;
    }
    #logreg-forms .social-btn span{
        display: none;
    }
    #logreg-forms  .facebook-btn:after{
        content:'Facebook';
    }
  
    #logreg-forms  .google-btn:after{
        content:'Google+';
    }

    
}
</style>