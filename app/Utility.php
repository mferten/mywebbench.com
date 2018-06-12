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
    public static function processSendMail($toMailAddress, $ccMailAddress, $bccMailAddress,
        $fromMailAddress, $mailMessage)
    {
        /**
         * Created for mfe web sites by Mehmet F. Erten
         * Date: 8/07/16 - 6/12/2018
         * AJAX used to send a mail
         */

        // mail(to,subject,message,headers,parameters);
        if (strlen($ccMailAddress) > 0 && strlen($bccMailAddress) > 0)
        {
            $headers = "From: " . $fromMailAddress . "\r\n" .
                       "CC: mferten@mfeweb.com," . $ccMailAddress . "\r\n" .
                       "Bcc: " . $bccMailAddress . "\r\n";
        }
        else if (strlen($ccMailAddress) > 0)
        {
            $headers = "From: " . $fromMailAddress . "\r\n" .
                       "CC: mferten@mfeweb.com," . $ccMailAddress . "\r\n";
        }
        else if (strlen($bccMailAddress) > 0)
        {
            $headers = "From: " . $fromMailAddress . "\r\n" .
                       "CC: mferten@mfeweb.com" . "\r\n" .
                       "Bcc: " . $bccMailAddress . "\r\n";
        }
        else
        {
            $headers = "From: " . $fromMailAddress . "\r\n" .
                       "CC: mferten@mfeweb.com" . "\r\n";
        }
        echo $headers;
        mail($toMailAddress,"An E-Mail sent to this address via www.mfeweb.com",$mailMessage, $headers);
    }

} # end of class
