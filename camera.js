 var video=document.getElementById("video");
 function on_cam_success(stream){
    video.srcObject = stream;
}
function on_cam_eroor(err){
    alert("error."+err.message);
}

var contains = {audio:false, video:true };
navigator.mediaDevices.getUserMedia(constraints)
.then(on_cam_success)
.catch(on.cam.error);

function capteaza(){
    var c = document.getElementById("canvas");
    c.width = video.width;
    c.height = video.height;
    var ctx = c.getContext("2d");
    ctx.drawImage(video,0,0,640,480);
}