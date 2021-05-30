
    var SpeechRecognition=window.webkitSpeechRecognition;
    var Recognition=new SpeechRecognition();

    function start(){
        document.getElementById("textbox").innerHTML="";
        Recognition.start();
    }
    Recognition.onresult=function (event){
        console.log(event);
        var content=event.results[0][0].transcript;
        console.log(content);
        document.getElementById("textbox").innerHTML=content;
     if(content=="take my selfie"){
         speak();
     }
    }
    function speak(){
        var synth=window.speechSynthesis;
        speak_data ="taking your selfie in five second";
     var utterthis=new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterthis);
     Webcam.attach(camera);
     setTimeout(function(){
         take_snapshot();
         save();
     },5000);
    }
    Webcam.set({
        width: 320,
        height: 240,
        image_format: 'jpeg',
        jpeg_quality: 90
      });
      camera=document.getElementById("camera");
      function take_snapshot(){
          Webcam.snap(function(data_uri){
              document.getElementById("result").innerHTML="<img id='selfie_image' src='"+data_uri+"'>";
          });
      }
      function save(){
          link=document.getElementById("link");
          image=document.getElementById("selfie_image").src;
          link.href=image;
          link.click();
      }