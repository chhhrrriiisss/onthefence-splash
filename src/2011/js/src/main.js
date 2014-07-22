
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



// Create Usable Links
String.prototype.linkify = function() {
       return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/, function(m) {
              return m.link(m);
      });
};
 

$(document).ready(function () {

    $("#launch-button").colorbox({
      iframe:true, 
      width:"980", 
      height:"600", 
      overlayClose: true, 
      close: "<div class='image-close'><img src='app/images/close.png' alt='Close' /></div>",
      xhrError: "Uh oh, something went a bit wrong.",
      href:"app/loader.html"
    });

    $("#tutorial-button").colorbox({
      iframe:true, 
      width:"980", 
      height:"600", 
      overlayClose: true, 
      close: "<div class='image-close'><img src='app/images/close.png' alt='Close' /></div>",
      xhrError: "Uh oh, something went a bit wrong.",
      href:" http://player.vimeo.com/video/32394055?placeValuesBeforeTB_=savedValues&TB_iframe=true&height=617&width=996&vimeo=true"
    });

    $("#promo-button").colorbox({
      iframe:true, 
      width:"980", 
      height:"600", 
      overlayClose: true, 
      close: "<div class='image-close'><img src='app/images/close.png' alt='Close' /></div>",
      xhrError: "Uh oh, something went a bit wrong."
    });

});

