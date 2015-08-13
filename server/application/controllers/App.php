<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class App extends CI_Controller {

    public function __construct() {
        parent::__construct();

        $this->load->model('user_mdl');
    }

    public function index() {
        /**
         * This handles if the user is logged in or not.
         */
        
        $newdata = array(
            'username' => 'johndoe',
            'email' => 'johndoe@some-site.com',
            'logged_in' => FALSE
        );

        $this->session->set_userdata($newdata);

        print_r($this->session->userdata());
        include(BASEPATH . '../../client/index.html');
    }

}
