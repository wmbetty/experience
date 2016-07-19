var sst = 1,sst1 = 1;
function timeUpdate(){
    var videoPlayer = document.getElementById("video_0");
    var ct = videoPlayer.currentTime
    console.log(videoPlayer.currentTime);
    if(ct>28 && sst){
        videoPlayer.pause();
        $("#bg")[0].play();
        $(".mi").css({"display":"inline"});
        //$(".video_0").html('');
        //$(".mi").css({"display":"inline"});
        sst = 0;
    }
    if(ct>186 && sst1){
        videoPlayer.pause();
        $("#bg")[0].play();
        $(".wi").css({"display":"inline"});
        //$(".video_0").html('');
        //$(".mi").css({"display":"inline"});
        sst1 = 0;
    }

}
var start = 0;
$().ready(function(e) {
    $(window).load(function(){
        $("#stu").html('<audio loop="loop" id="bg"><source src="video/ring.mp3" type="audio/mpeg"></audio>');
        $("#video_0")[0].addEventListener("canplaythrough", function () {
            //document.write("canplaythrough " + name + "<br/>");
            //$("#video_0")[0].play();
        });

        var videoPlayer = document.getElementById("video_0");
        videoPlayer.addEventListener("timeupdate", timeUpdate, false);
        $(".call").on("click",function(){
            $("#bg")[0].pause();
            //$(".video_0").css({"display":"none"});
            //$(".video_1").css({"display":"inline"});
            $("#video_0")[0].play();
            //videoPlayer2.play();
            $(".mi").css({"display":"none"});
            //videoPlayer.removeEventListener("timeupdate");
        });
        $(".call1").on("click",function(){
            $("#bg")[0].pause();
            //$(".video_0").css({"display":"none"});
            //$(".video_1").css({"display":"inline"});
            $("#video_0")[0].play();
            //videoPlayer2.play();
            $(".wi").css({"display":"none"});
            //videoPlayer.removeEventListener("timeupdate");
        });
        $(".start").on("touchstart",function(){
            var videoPlayer = document.getElementById("video_0");
            videoPlayer.play();
            $(".start").css({"display":"none"});
            $(".mi").css({"display":"none"});
        });
    });

    /*var videoPlayer = document.getElementById("video_0");
     //droidfix.init(vid);
     videoPlayer.addEventListener("pause", function() {
     $(".video_0").html('');
     $(".mi").css({"display":"inline"});
     });*/

});/**
 * Created by Lenovo on 2016/7/19.
 */
