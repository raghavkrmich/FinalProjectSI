window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        }
    )
});
document.querySelector("#close").onclick = function(){
    document.querySelector(".popup").style.display = "none";
};

document.querySelector("#close2").addEventListener("click", function(){
    document.querySelector(".popup2").style.display = "none";
});

document.querySelector("#btn").onclick = function(){
    document.querySelector(".popup2").style.display = "block";
}
// var videos = document.getElementsByTagName("video");
// for(let i = 0, len = videos.length; i < len; i++){
//     videos[i].onclick = function(){
//         videos[i].paused ? videos[i].play() : videos[i].pause();
//     }
// }


// $('#homeform').submit(function(){
//     return false;
// })

/*window.addEventListener("dblclick", function(){
    this.alert(new Date())
})*/

//document.querySelector("#btn").onclick = function(){alert('test')};