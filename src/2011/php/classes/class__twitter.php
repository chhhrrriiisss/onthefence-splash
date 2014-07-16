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
  | Twitter
  | -------------------------------------------------------------------
  | PHP Class for reading latest tweets
  |
*/

class LordWEBTweet {
    public $Name;
    public $Date;
    public $Text;
    public $StatusID;
    public function GetTweets($twitter_name, $twitt_limit = 5) {
        $twitts = array();

        $raw_twitts = @file_get_contents('http://twitter.com/statuses/user_timeline/' . $twitter_name . '.json?count=' . $twitt_limit);
        
        $twitts_details  = @json_decode($raw_twitts);
		if(isset($twitts_details)){
			foreach ($twitts_details as $twitt)
			{
				$twittObj = new LordWEBTweet();
				$twittObj->Date = $this->GetFriendlyTwitterTime($twitt->created_at);
				$twittObj->Text = $twitt->text;
				$twittObj->Name = $twitter_name;
				$twittObj->StatusID = $twitt->id_str;
				
				$twitts[] = $twittObj;
			}
		}
       return $twitts;
    }

    private function GetFriendlyTwitterTime($raw_time) {
        $current_time = strtotime("now");
        $twitt_time = strtotime($raw_time);
        $time_diff = $current_time - $twitt_time;

        $minute = 60;
        $hour = $minute * 60;
        $day = $hour * 24;
        $week = $day * 7;

        if (is_numeric($time_diff) && $time_diff > 0) {
            if ($time_diff < 3)
                return "right now";
            if ($time_diff < $minute)
                return floor($time_diff) . " seconds ago";
            if ($time_diff < $minute * 2)
                return "about 1 minute ago";
            if ($time_diff < $hour)
                return floor($time_diff / $minute) . " minutes ago";
            if ($time_diff < $hour * 2)
                return "about 1 hour ago";
            if ($time_diff < $day)
                return floor($time_diff / $hour) . " hours ago";
            if ($time_diff > $day && $time_diff < $day * 2)
                return "yesterday";
            if ($time_diff < $day * 365)
                return floor($time_diff / $day) . " days ago";
            return "over a year ago";
        }
    }

}

?>
