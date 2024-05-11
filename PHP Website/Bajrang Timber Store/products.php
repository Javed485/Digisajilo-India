<!-- All-Links -->
<?php include "layouts/all-links.php"; ?>

<style>
    
    .categories h4{
        background-color: grey;
        color: #fff;
        padding: 20px 10px;
        font-size: 24px;
    }
    .product_list li{
        cursor: pointer;
        padding: 10px 20px;
        font-size: 18px;
        font-weight: bold;
    }
    .categories .product_list li:hover {
        background-color: #5a4023;
        color: #fff;
    }
    .categories .product_list li.active {
        background-color: #5a4023;
        color: #fff;
    }
    .sub-products{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    label {
        font-size: 14px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 15px;
        color: #1b1a1a;
    }
    input.form-control {
        height: 50px;
        line-height: 50px;
        border: none;
        border: 1px solid #f4f4f4;
        background-color: #f4f4f4;
        border-radius: 1px;
        padding: 0 0 0 20px;
        font-size: 14px;
        border: 1px solid #5a4023;
    }
</style>

    <!-- Main Content -->
    <div id="main-wrapper">

        <!--Header section start-->
        <?php include "layouts/header.php"; ?>

        <!-- Page Banner Section Start -->
        <div class="page-banner-section section bg-image" data-bg="assets/images/banner/ban6.jpg">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="page-banner text-start">
                            <h2>Products</h2>
                            <ul class="page-breadcrumb">
                                <li><a href="index.php">Home</a></li>
                                <li>Products</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- products Section Start -->
        <div class="products-section section pt-60 pt-lg-40 pt-md-30 pt-sm-20 pt-xs-30  pb-70 pb-lg-50 pb-md-40 pb-sm-60 pb-xs-50">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="section-title text-center mb-50">
                            <h2>Our Wood Products</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-3 col-lg-3">
                        <div class="categories">
                            <h4>Categories</h4>
                            <ul class="product_list">
                                <?php 
                                    $curl = curl_init();
                                    curl_setopt_array($curl, array(
                                    CURLOPT_URL => 'https://bulkvyapar.com/api/fetch-categories',
                                    //   CURLOPT_URL => 'http://localhost/bulkvyapar/api/fetch-categories',
                                    CURLOPT_RETURNTRANSFER => true,
                                    CURLOPT_ENCODING => '',
                                    CURLOPT_MAXREDIRS => 10,
                                    CURLOPT_TIMEOUT => 0,
                                    CURLOPT_FOLLOWLOCATION => true,
                                    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                                    CURLOPT_CUSTOMREQUEST => 'POST',
                                    CURLOPT_POSTFIELDS =>'{
                                        "GST": "07AIEPG3379E1ZE"
                                        }',
                                    CURLOPT_HTTPHEADER => array(
                                        'Content-Type: application/json'
                                    ),
                                    ));
                                    
                                    $response = curl_exec($curl);
                                    curl_close($curl);
                                    $full = json_decode($response);
                                    $status = $full->status;
                                    if($status==200){ 
                                        $categories = $full->cat_name;
                                        $company_id = $full->company_id;
                                        foreach($categories as $id=>$category){
                                            echo '<li class="tablinks cat" data-catid="'.$id.'" data-cid="'.$company_id.'">'.$category.'</li>';
                                        }
                                    }
                                    else{
                                        echo "Something went wrong";
                                    }
                                ?>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-9 col-lg-9">
                        <!-- Categories 1 -->
                        <div id="cat" class="tabcontent">
                            <div class="row" id="products">
                                <?php 
                                    $curl = curl_init();
                                    curl_setopt_array($curl, array(
                                        CURLOPT_URL => 'https://bulkvyapar.com/api/fetch-all-products',
                                        //   CURLOPT_URL => 'http://localhost/bulkvyapar/api/fetch-all-products',
                                        CURLOPT_RETURNTRANSFER => true,
                                        CURLOPT_ENCODING => '',
                                        CURLOPT_MAXREDIRS => 10,
                                        CURLOPT_TIMEOUT => 0,
                                        CURLOPT_FOLLOWLOCATION => true,
                                        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                                        CURLOPT_CUSTOMREQUEST => 'POST',
                                        CURLOPT_POSTFIELDS =>'{
                                            "GST": "07AIEPG3379E1ZE"
                                        }',
                                        CURLOPT_HTTPHEADER => array(
                                        'Content-Type: application/json'
                                        ),
                                    ));
                                    
                                    $response = curl_exec($curl);
                                    curl_close($curl);
                                    $full = json_decode($response);
                                    $status = $full->status;
                                    if($status==200){ 
                                        foreach($full->products as $product){
                                            $attrs = '';
                                            foreach($product->attributes as $attr){
                                                $attrs .= $attr->attribute->name .'|' . $attr->field_value.':';
                                            }
                                            echo '<div class="col-sm-6 col-md-4 col-lg-4">
                                            <div class="project-item product_modal mb-4" data-bs-toggle="modal" data-bs-target="#product" data-pro_id="'.$product->id.'" data-unit_id="'.$product->unit.'" data-cid="'.$product->company_id.'" data-pro_name="'.$product->product_name.'" data-img="'.$product->picture_name.'" data-attr="'.$attrs.'" data-price="'.$product->price.'" data-state="'.$product->states->state_name.'" data-color="'.$product->color.'" data-package="'.$product->packaging_type.'" data-moq="'.$product->minimum_order_quantity.'" data-usage="'.$product->usage.'" data-unit="'.$product->units->name.'" data-product_type="'.$product->product_type.'">
                                                <div class="project__img">
                                                    <img src="https://bulkvyapar.com/public/images/company/'.$product->company_id.'/product/watermark_imgs/'.$product->picture_name.'" alt="project img">
                                                </div>
                                                <div class="project__content">
                                                    <h4 class="project__title fs-5 fw-bolder mt-3"><a href="#">'.$product->product_name.'</a></h4>
                                                </div>
                                            </div>
                                            </div>';
                                        }
                                    }
                                    else{
                                        echo "Something went wrong";
                                    }
                                ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Product Modal  -->
        <div class="modal fade" id="product" data-keyboard="false" data-backdrop="static">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-5 fw-bold">Description</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row"> 
                            <div class="col-12 col-md-6">
                                <div class="popup-image">
                                    <img src="" id="pro_img" alt="project img">
                                </div>
                            </div>
                            <div class="col col-md-6">
                                <div class="Description_section">
                                    <h5 id="pro_title" class="fs-5 fw-bold"></h5>
                                    <p class="price fw-bold text-danger" id="pro_price"></p>
                                    <div class="sub-products">
                                        <div>MOQ</div>
                                        <div id="moq"> </div>
                                        <div>Domestic Market</div>
                                        <div id="domestic_market"> </div>
                                        <div>Type</div>
                                        <div id="type"> </div>
                                        <div>Color</div>
                                        <div id="color"> </div>
                                        <div>Packaging</div>
                                        <div id="packaging"> </div>
                                        <div>Usage</div>
                                        <div id="usage"> </div>
                                        <div id="more" style="cursor:pointer;">More</div>
                                        <div></div>
                                    </div>
                                    <div class="sub-products" id="more_attr" style="display:none;"></div>
                                    <!-- <form method="post" action="https://akengineers.co/send_enquiry.php"> -->
                                    <form method="post" action="http://localhost/bajrang/send_enquiry.php">
                                        <input type="hidden" name="product_id" id="product_id">
                                        <input type="hidden" name="product_name" id="product_name">
                                        <input type="hidden" name="enquiry_to" id="enquiry_to">
                                        <input type="hidden" name="unit_id" id="unit_id">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group mt-3">
                                                    <label>Quantity</label>
                                                    <input type="number" class="form-control" placeholder="Enter Quantity" id="quantity" name="quantity" required>
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="form-group mt-3">
                                                    <label>Phone Number</label>
                                                <input type="number" class="form-control" placeholder="Enter Your Number" id="phone" name="phone" required>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="text-end mt-3">
                                            <button type="submit" class="btn btn__primary" name="submit">Send Enquiry</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Newsletter Section Start -->
        <?php include "layouts/news-letter.php"; ?>
        
        <!--Footer section start-->
        <?php include "layouts/footer.php"; ?>
    </div>

<!-- All jquery file included here -->
<?php include "layouts/footer-script.php"; ?>  

<!-- Scripts -->
<script>
    $(document).ready(function(){
        $(document).on('click','.cat',function(){
            var cat_id = $(this).data('catid');
            var company_id = $(this).data('cid');
            var product_html = '';
            
            $.ajax({
                // url : 'https://akengineers.co/ajax_products.php',
                url : 'http://localhost/bajrang/ajax_products.php',
                type : 'POST',
                data : {
                    'category_id' : cat_id,
                    'company_id' : company_id 
                },
                success : function(result){
                    var obj = JSON.parse(result);
                    $.each(obj.products, function(i,val){
                        var attrs = '';
                        $.each(val.attributes , function(j,atr){
                          attrs += atr.attribute.name+'|'+atr.field_value+':';
                        });
                         product_html += '<div class="col-sm-6 col-md-4 col-lg-4"><div class="project-item product_modal mt-4" data-bs-toggle="modal" data-bs-target="#product" data-pro_id="'+val.id+'" data-unit_id="'+val.unit+'" data-cid="'+company_id+'" data-pro_name="'+val.product_name+'" data-img="'+val.picture_name+'" data-attr="'+attrs+'" data-price="'+val.price+'" data-state="'+val.states.state_name+'" data-color="'+val.color+'" data-package="'+val.packaging_type+'" data-moq="'+val.minimum_order_quantity+'" data-usage="'+val.usage+'" data-unit="'+val.units.name+'" data-product_type="'+val.product_type+'"><div class="project__img"><img src="https://bulkvyapar.com/public/images/company/'+company_id+'/product/watermark_imgs/'+val.picture_name+'" alt="project img"></div><div class="project__content"><h4 class="project__title fs-5 fw-bolder mt-3"><a href="#">'+val.product_name+'</a></h4></div></div></div>';
                    });
                    $('#products').empty().html(product_html);
                }
            });
        });

        $(document).on('click','.product_modal',function(){
            var pro_name = $(this).data('pro_name');
            var attr = $(this).data('attr');
            var price = $(this).data('price');
            var state = $(this).data('state');
            var color = $(this).data('color');
            var package = $(this).data('package');
            var moq = $(this).data('moq');
            var usage = $(this).data('usage');
            var unit = $(this).data('unit');
            var img = $(this).data('img');
            var cid = $(this).data('cid');
            var product_type = $(this).data('product_type');
            var unit_id = $(this).data('unit_id');
            var pro_id = $(this).data('pro_id');
            
            $('#product_id').val(pro_id);
            $('#product_name').val(pro_name);
            $('#enquiry_to').val(cid);
            $('#unit_id').val(unit_id);
            var lastChar = attr.slice(-1);
            if (lastChar == ':') {
                strVal = attr.slice(0, -1);
            }
            var myArray = strVal.split(":");
            var more_attr = '';
            $.each(myArray, function(i,val){
                var split_val = val.split('|');
                more_attr += '<div>'+split_val[0]+'</div><div>'+split_val[1]+'</div>';
            });
            $('#pro_title').empty().html(pro_name);
            
            $('#pro_price').empty().html('₹ '+price+' / '+unit);
            $('#moq').empty().html(moq);
            $('#domestic_market').empty().html(state);
            $('#type').empty().html(product_type);
            $('#color').empty().html(color);
            $('#packaging').empty().html(package);
            $('#usage').empty().html(usage);
            $('#more_attr').empty().html(more_attr);
            // $("#pro_img").attr("src", 'http://localhost/bulkvyapar/public/images/company/'+cid+'/product/watermark_imgs/'+img);
            $("#pro_img").attr("src", 'https://bulkvyapar.com/public/images/company/'+cid+'/product/watermark_imgs/'+img);
        });

        $(document).on('click','#more',function(){
            $('#more_attr').show();
        });
    });
</script>