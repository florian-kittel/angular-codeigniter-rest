<?php
defined('BASEPATH') OR exit('No direct script access allowed');
include_once APPPATH.'libraries/REST_Controller.php';

class Book extends REST_Controller {
    function all_get() {
        $data = new stdClass();
        $data->askfor = "All books";
        $this->response($data, 200);
    }
}