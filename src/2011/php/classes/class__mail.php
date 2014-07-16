<?php

/**
 * LordWEB
 *
 * @package		LordWEB
 * @author		Vladica Savic
 * @copyright           Copyright (c) 2011, LordWEB.
 * @link		http://vladicasavic.iz.rs/
 * @since		Version 1.0
 * @filesource
 */

/*
  | -------------------------------------------------------------------
  | Mail
  | -------------------------------------------------------------------
  | PHP Class for sending email via SMTP
  |
*/
class LordWEBMail {

    /**
     * Send email
     *
     * @param    string  html email message
     * @param    string  email subject
     * @param    string  email sender address
     * @param    string  email recipient address
     * @return   bool    true if email is sent successfully, otherwise false
     */
    public function SendEmail($message, $subject, $from, $to) {
        $isSent = false;
        // Content-type header
        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        // Additional headers
        $headers .= 'From: <' . $from . '>' . "\r\n";

        mail($to, $subject, $message, $headers);

        if (mail) {
            $isSent = true;
        }
        return $isSent;
    }
}

?>
