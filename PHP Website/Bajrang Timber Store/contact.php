<!-- All-Links -->
<?php include "layouts/all-links.php"; ?>

    <!-- Main Content -->
    <div id="main-wrapper">

        <!--Header section start-->
        <?php include "layouts/header.php"; ?>

        <!-- Page Banner Section Start -->
        <div class="page-banner-section section bg-image" data-bg="assets/images/banner/ban5.jpg">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="page-banner text-start">
                            <h2>Contact</h2>
                            <ul class="page-breadcrumb">
                                <li><a href="index.php">Home</a></li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!--Contact section start-->
        <div class="conact-section section pt-85 pt-lg-65 pt-md-55 pt-sm-45 pt-xs-35  pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="contact-form-wrap">
                            <h3 class="contact-title">Write Us</h3>
                            <form id="contact-form" action="" method="post">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <div class="name-fild-padding mb-sm-30 mb-xs-30">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="contact-form-style mb-20">
                                                        <label class="fild-name">Name</label>
                                                        <input name="name" placeholder="" type="text">
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="contact-form-style mb-20">
                                                        <label class="fild-name">Phone Number</label>
                                                        <input name="text" placeholder="" type="email">
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="contact-form-style mb-20">
                                                        <label class="fild-name">Email</label>
                                                        <input name="email" placeholder="" type="email">
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="check-box">
                                                        <input type="checkbox" id="create_account">
                                                        <label for="create_account">I am not a robot</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="contact-form-style bl">
                                            <label class="fild-name pl-15">Message</label>
                                            <textarea class="pl-15" name="message" placeholder="Type your message here.."></textarea>
                                            <button class="btn" type="submit"><span>Send message</span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <p class="form-messege"></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        <!--Contact Map section start-->
        <div class="contact-map-section section">
            <div class="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7790717643884!2d77.07881257517846!3d28.60640388526732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b68adc85e15%3A0x621d0c26f5444210!2sJindal%20Public%20School%20Dwarka-Best%20CBSE%20School%20in%20Dwarka-Top%20CBSE%20School%20in%20Dwarka!5e0!3m2!1sen!2sin!4v1715065810784!5m2!1sen!2sin" ></iframe>
            </div>
        </div>
        
        <!-- Newsletter Section Start -->
        <?php include "layouts/news-letter.php"; ?>
        
        <!--Footer section start-->
        <?php include "layouts/footer.php"; ?>
    </div>

<!-- All jquery file included here -->
<?php include "layouts/footer-script.php"; ?> 