//var counter = 0;

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            //console.log(counter);
            //if (counter == 0){
                document.querySelector(".popup").style.display = "block";
                //counter++;
            //}
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

window.addEventListener("load", function(){
    var videos = document.getElementsByTagName("video");
    for (let i = 0, len = videos.length; i < len; i++){
        videos[i].pause();
    }
})
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
