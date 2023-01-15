var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox")

function start(){
    Textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var Content = event.results[0][0].transcript;
    Textbox.innerHTML = Content;
    console.log(Content);

    if(Content == "take my selfie"){
        console.log("Taking selfie");
        speak();
    }

}

function speak(){
	var synth = window.speechSynthesis;
	speak_data = "Taking your selfie in five seconds";
	var utterThis = new SpeechSynthesisUtterance(speak_data); 
	synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_selfie();
        save();
    },5000);
}

Webcam.set({
    width:350,
    height:245,
    image_format:"png",
    png_quality:100,
});

camera = document.getElementById("camera");

function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    })
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}

