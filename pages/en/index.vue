<template>
    <div>
    <HeaderComponent/>
    <!-- Hero Section Begin -->
    <div v-if="beforemount">Loading</div>
    <section class="hero-section">
        <div class="hero-items owl-carousel">
            <div class="single-hero-items set-bg hero-1" data-setbg="~assets/img/hero-1.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <span>Bag,kids</span>
                            <h1>Black friday</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore</p>
                            <a href="#" class="primary-btn">Shop Now</a>
                        </div>
                    </div>
                    <div class="off-card">
                        <h2>Sale <span>50%</span></h2>
                    </div>
                </div>
            </div>
            <div class="single-hero-items set-bg hero-2" data-setbg="~assets/img/hero-2.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <span>Bag,kids</span>
                            <h1>Black friday</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore</p>
                            <a href="#" class="primary-btn">Shop Now</a>
                        </div>
                    </div>
                    <div class="off-card">
                        <h2>Sale <span>50%</span></h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->

        <!-- Banner Section Begin -->
    <div class="banner-section spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4">
                    <div class="single-banner">
                        <img src="~/assets/img/banner-1.jpg" alt="">
                        <div class="inner-text">
                            <h4>Men’s</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="single-banner">
                        <img src="~/assets/img/banner-2.jpg" alt="">
                        <div class="inner-text">
                            <h4>Women’s</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="single-banner">
                        <img src="~/assets/img/banner-3.jpg" alt="">
                        <div class="inner-text">
                            <h4>Kid’s</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Banner Section End -->

        <!-- Women Banner Section Begin -->
    <section class="women-banner spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3">
                    <div class="product-large set-bg wmn-l" data-setbg="img/products/women-large.jpg">
                        <h2>Women’s</h2>
                        <a href="#">Discover More</a>
                    </div>
                </div>
                <div class="col-lg-8 offset-lg-1">
                    <div class="filter-control">
                        <ul>
                            <li v-for="(slider, i) in sliders" :key="i" v-on:click="activeSlider=slider" :class="{active:activeSlider === slider}">
                                {{ slider }}
                            </li>
                        </ul>
                    </div>
                    <transition name="component-fade" mode="out-in">
                        <component :is="currentSlider"></component>
                    </transition>
                </div>
            </div>
        </div>
    </section>
    <!-- Women Banner Section End -->
    </div>
</template>

<script>
export default {
    components:{
        Clothings:() => import('../../components/slider/Clothings.vue'),
        HandBag:() => import('../../components/slider/HandBag.vue')
    },
    asyncData (context) {
        //console.log(context.$config.apiSecret)
        //console.log(context.store.state.init.initData)
    },
    data(){
        return{
           beforemount:true,
           sliders:['Clothings', 'HandBag', 'Shoes', 'Accessories'],
           activeSlider:'Clothings' 
        }
    },
    computed:{
        currentSlider(){
            return this.activeSlider
        }
    },
    mounted(){
        this.beforemount = false;
        let jqueryintrval = setInterval(function(){
            if(typeof jQuery != 'undefined' && typeof owlCarousel != 'undefined'){
                clearInterval(jqueryintrval);
                jQuery('.hero-items').owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: true,
                    items: 1,
                    dots: false,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
                    smartSpeed: 1200,
                    autoHeight: false,
                    autoplay: true,
                })
            }
        }, 1000);

     
    },
    head(){
        return{
               script: [
                    {
                        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
                        body:true
                    },
                    {
                        src: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js',
                        body:true                        
                    }
                ],
        }
    }
}
</script>
<style scoped>
.hero-1{
    background-image: url('~assets/img/hero-1.jpg');
}
.hero-2{
    background-image: url('~assets/img/hero-2.jpg');
}
.wmn-l{
    background-image: url('~assets/img/products/women-large.jpg');
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.5s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}

</style>