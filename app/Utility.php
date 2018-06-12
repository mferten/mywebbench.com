<?php

namespace App;

class Utility
{
    # In use to send an email message for now

    /**
     * Properties
     */


    /**
	   * send an email message
	   */
    public static function processSendMail($toMailAddress, $mailMessage)
    {
        /**
         * Created for mfe web sites by Mehmet F. Erten
         * Date: 6/12/2018
         * AJAX used in myWebBench.js to send a mail
         */

        // mail(to,subject,message,headers,parameters);
        $headers = "From: mferten@mfeweb.com\r\n" .
                   "CC: mferten@mfeweb.com" . "\r\n";

        mail($toMailAddress,"a User Opinion is Sent from MyWebBench.com",$mailMessage, $headers);
    }

} # end of class
