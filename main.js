Webcam.set({
   
    width:350,
    height:300,
    image_format:"png",
    png_quality:90

});
 
camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img src="+data_uri+" id='capture_image'>";
});
}

console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5Mx6qb8b1/model.json",modelLoaded);

function modelLoaded(){
    console.log("model loaded");

}

function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img,gotresult);

}

function gotresult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("label").innerHTML=results[0].label;
        document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}