<?php

/*
 * F. Kittel
 * Document:   * 
 */

class User_mdl extends CI_Model {

    public function __construct() {
        parent::__construct();
        $this->cryptkey = '';
    }
       
    public function logged_in() {
        return TRUE;
    }
}
