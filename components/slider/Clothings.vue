<template>
    <div class="product-slider owl-carousel">
        <div class="product-item">
            <div class="pi-pic">
                <img src="~/assets/img/products/women-1.jpg" alt="">
                <div class="sale">Sale</div>
                <div class="icon">
                    <i class="icon_heart_alt"></i>
                </div>
                <ul>
                    <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                    <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                </ul>
            </div>
            <div class="pi-text">
                <div class="catagory-name">Coat</div>
                <a href="#">
                    <h5>Pure Pineapple</h5>
                </a>
                <div class="product-price">
                    $14.00
                    <span>$35.00</span>
                </div>
            </div>
        </div>
        <div class="product-item">
            <div class="pi-pic">
                <img src="~/assets/img/products/women-2.jpg" alt="">
                <div class="icon">
                    <i class="icon_heart_alt"></i>
                </div>
                <ul>
                    <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                    <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                </ul>
            </div>
            <div class="pi-text">
                <div class="catagory-name">Shoes</div>
                <a href="#">
                    <h5>Guangzhou sweater</h5>
                </a>
                <div class="product-price">
                    $13.00
                </div>
            </div>
        </div>
        <div class="product-item">
            <div class="pi-pic">
                <img src="~/assets/img/products/women-3.jpg" alt="">
                <div class="icon">
                    <i class="icon_heart_alt"></i>
                </div>
                <ul>
                    <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                    <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                </ul>
            </div>
            <div class="pi-text">
                <div class="catagory-name">Towel</div>
                <a href="#">
                    <h5>Pure Pineapple</h5>
                </a>
                <div class="product-price">
                    $34.00
                </div>
            </div>
        </div>
        <div class="product-item">
            <div class="pi-pic">
                <img src="~/assets/img/products/women-4.jpg" alt="">
                <div class="icon">
                    <i class="icon_heart_alt"></i>
                </div>
                <ul>
                    <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                    <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                </ul>
            </div>
            <div class="pi-text">
                <div class="catagory-name">Towel</div>
                <a href="#">
                    <h5>Converse Shoes</h5>
                </a>
                <div class="product-price">
                    $34.00
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
    /*------------------
        Product Slider
    --------------------*/
        let jqueryInterval = setInterval(function(){
            if(typeof jQuery != 'undefined' && typeof owlCarousel != 'undefined'){
                clearInterval(jqueryInterval);
                jQuery(".product-slider").owlCarousel({
                    loop: true,
                    margin: 25,
                    nav: true,
                    items: 4,
                    dots: true,
                    navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
                    smartSpeed: 1200,
                    autoHeight: false,
                    autoplay: true,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        576: {
                            items: 2,
                        },
                        992: {
                            items: 2,
                        },
                        1200: {
                            items: 3,
                        }
                    }
                });
            }
        }, 1000);

    }
}
</script>