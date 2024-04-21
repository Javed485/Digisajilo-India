<?php
if(isset($_REQUEST['submit'])){
    $product_id = $_REQUEST['product_id'];
    $product_name = $_REQUEST['product_name'];
    $enquiry_to = $_REQUEST['enquiry_to'];
    $unit_id = $_REQUEST['unit_id'];
    $quantity = $_REQUEST['quantity'];
    $phone = $_REQUEST['phone'];
    
    $curl = curl_init();

    curl_setopt_array($curl, array(
       CURLOPT_URL => 'https://bulkvyapar.com/api/save-enquiry',
    //   CURLOPT_URL => 'http://localhost/bulkvyapar/api/save-enquiry',
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => '',
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => 'POST',
      CURLOPT_POSTFIELDS =>'{
        "product_id": "'.$product_id.'","product_name" : "'.$product_name.'","enquiry_to" : "'.$enquiry_to.'","unit_id" : "'.$unit_id.'","quantity" : "'.$quantity.'","phone" : "'.$phone.'"
    }',
      CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json'
      ),
    ));
    
    $response = curl_exec($curl);
    $full_response = json_decode($response);
    curl_close($curl);
    if($full_response->status == '200'){
      echo '<script>alert("Enquiry sent successfully");</script>';
      echo '<script>window.location.href="http://localhost/casina/product.php";</script>';
    //    echo '<script>window.location.href="https://akengineers.co/product.php";</script>';
    }
    else{
      echo '<script>alert("Something went wrong");</script>';
      echo '<script>window.location.href="http://localhost/casina/product.php";</script>';
    //    echo '<script>window.location.href="https://akengineers.co/product.php";</script>';
    }
    
}
?>