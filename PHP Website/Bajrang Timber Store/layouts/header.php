<!--Header section start-->
<header class="header header-transparent header-sticky d-lg-block d-none">
    <div class="header-deafult-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-3 col-lg-2 col-md-4 col-12">
                    <!--Logo Area Start-->
                    <div class="logo-area">
                        <a href="index.php"><img src="assets/images/logo.png" alt=""></a>
                    </div>
                </div>
                <div class="col-xl-9 col-lg-10 col-md-8 d-none d-lg-block col-12">
                    <!--Header Menu Area Start-->
                    <div class="header-menu-area">
                        <nav class="main-menu d-flex justify-content-end">
                            <ul>
                                <li class="<?php if ($page == 'home') {
                                                echo 'active';
                                            } ?>"><a href="index.php">Home</a></li>
                                <li class="<?php if ($page == 'about') {
                                                echo 'active';
                                            } ?>"><a href="about.php">About</a></li>
                                <li class="<?php if ($page == 'product') {
                                                echo 'active';
                                            } ?>"><a href="products.php">Product</a></li>
                                <li <?php if ($page == 'contact') {
                                        echo 'active';
                                    } ?>><a href="contact.php">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<!--Header Mobile section start-->
<header class="header-mobile d-block d-lg-none">
    <div class="header-bottom menu-right">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="header-mobile-navigation d-block d-lg-none">
                        <div class="row align-items-center">
                            <div class="col-6 col-md-6">
                                <div class="header-logo">
                                    <a href="index.php">
                                        <img src="assets/images/logo.png" class="img-fluid" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="col-6 col-md-6">
                                <div class="mobile-navigation text-end">
                                    <div class="header-icon-wrapper">
                                        <ul class="icon-list justify-content-end">
                                            <li>
                                                <a href="javascript:void(0)" class="mobile-menu-icon" id="mobile-menu-trigger"><i class="fa fa-bars"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--Mobile Menu start-->
            <div class="row">
                <div class="col-12 d-flex d-lg-none">
                    <div class="mobile-menu"></div>
                </div>
            </div>
        </div>
    </div>
</header>

<!-- Offcanvas Menu Start -->
<div class="offcanvas-mobile-menu d-block d-lg-none" id="offcanvas-mobile-menu">
    <a href="javascript:void(0)" class="offcanvas-menu-close" id="offcanvas-menu-close-trigger">
        <i class="fa fa-times"></i>
    </a>
    <div class="offcanvas-wrapper">
        <div class="offcanvas-inner-content">
            <nav class="offcanvas-navigation">
                <ul>
                    <li><a href="index.php">Home</a></li>
                    <li><a href="about.php">About</a></li>
                    <li><a href="products.php">Product</a></li>
                    <li><a href="contact.php">Contact</a></li>
                </ul>
            </nav>

            <div class="offcanvas-widget-area">
                <div class="off-canvas-contact-widget">
                    <div class="header-contact-info">
                        <ul class="header-contact-info-list">
                            <li><i class="ion-android-phone-portrait"></i> <a href="tel://9999445773">9999445773 </a>
                            </li></br>
                            <li><i class="ion-android-phone-portrait"></i> <a href="tel://9925690556">9925690556 </a>
                            </li>
                            <li><i class="ion-android-mail"></i> <a href="mailto:bajranggupta25@gmail.com">bajranggupta25@gmail.com</a></li>
                        </ul>
                    </div>
                </div>

                <!--Off Canvas Widget Social Start-->
                <div class="off-canvas-widget-social">
                    <a href="#" title="Facebook"><i class="fa fa-facebook"></i></a>
                    <a href="#" title="Twitter"><i class="fa fa-twitter"></i></a>
                    <a href="#" title="LinkedIn"><i class="fa fa-instagram"></i></a>
                    <a href="#" title="LinkedIn"><i class="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>