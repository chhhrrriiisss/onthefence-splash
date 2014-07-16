
window.fbAsyncInit = function() {
  FB.init({
  appId      : '313265985350347', // App ID
  channelURL : 'http://www.facebook.com/NZonthefence', // Channel File
  status     : true, // check login status
  cookie     : true, // enable cookies to allow the server to access the session
  oauth      : true, // enable OAuth 2.0
  xfbml      : true  // parse XFBML
  });

  // Additional initialization code here
  };

  // Load the SDK Asynchronously
  (function(d){
  var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
  js = d.createElement('script'); js.id = id; js.async = true;
  js.src = "//connect.facebook.net/en_US/all.js";
  d.getElementsByTagName('head')[0].appendChild(js);
  }(document));
  </script>

  <script type="text/javascript">
  twttr.anywhere(function (T) {
  T.bind("authComplete", function (e, user) {
    // triggered when auth completed successfully
  });

  T.bind("signOut", function (e) {
    // triggered when user logs out
  });

});


function openFeedback() {
    window.open("app/feedback.php", "On The Fence | Feedback", "width=580,height=390,toolbar=no,scrollbars=no");
}
function openDisclaimer() {
    window.open("app/disclaimer.htm", "On The Fence | Disclaimer", "width=675,height=400,toolbar=no,scrollbars=no");
}
function openTutorial() {
    window.open("app/tutorial.htm", "On The Fence | Tutorial", "width=996,height=617,toolbar=no,scrollbars=no");
}
function openApp() {
    window.open("app/index.html", "On The Fence | Tutorial", "width=980,height=600,toolbar=no,scrollbars=no");
}


// Convert Twitter API Timestamp to "Time Ago"

function relative_time(time_value) {
  var values = time_value.split(" ");
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
  var parsed_date = Date.parse(time_value);
  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
  var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
  delta = delta + (relative_to.getTimezoneOffset() * 60);

  var r = '';
  if (delta < 60) {
        r = 'a minute ago';
  } else if(delta < 120) {
        r = 'couple of minutes ago';
  } else if(delta < (45*60)) {
        r = (parseInt(delta / 60)).toString() + ' minutes ago';
  } else if(delta < (90*60)) {
        r = 'an hour ago';
  } else if(delta < (24*60*60)) {
        r = '' + (parseInt(delta / 3600)).toString() + ' hours ago';
  } else if(delta < (48*60*60)) {
        r = '1 day ago';
  } else {
        r = (parseInt(delta / 86400)).toString() + ' days ago';
  }

      return r;
  }

}); 


// Create Usable Links
String.prototype.linkify = function() {
       return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/, function(m) {
              return m.link(m);
      });
};

twttr.anywhere(function (T) {
  T("#tweet").hovercards({ expanded: true });
});
 

$(document).ready(function () {

    $.getJSON('cache/twitter-json.txt', function(data){
        $.each(data, function(index, item){
                $('#tweet').append('<div><p>' + item.text.linkify() + '</p></div>' + '<div id="web_intent">' + '<span class="time">' + relative_time(item.created_at) + '</span>' + '<img src="images/retweet_mini.png" width="16" height="16" alt="Retweet">' + '<a href="http://twitter.com/intent/retweet?tweet_id=' + item.id_str + '">' + 'Retweet</a>' + '<img src="images/reply_mini.png" width="16" height="16" alt="Reply">' + '<a href="http://twitter.com/intent/tweet?in_reply_to=' + item.id_str + '">' + 'Reply</a>' + '<hr />');
    });

});

