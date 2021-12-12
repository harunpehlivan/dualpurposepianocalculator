$(document).ready(function(){
var valA;
var valB;
var mode;
var display;
var lastBtn;
    
var resetAll=function(){     
    $("#display").text("0")
    valA="";
    valB="";
    mode="none";
    display="clear";
    lastBtn="digit";
};
var resetValues=function() {
    valA="";
    valB="";
    mode="none";
} 
var clickEquals=function(){
    if (valA!==""&&valB==""){
        valB=display;
        display=calculate(valA,mode,valB);
        $("#display").text(display);
    }
    lastBtn="equals";    
    mode="none";
}

var clickPercent=function(){
    if (valA!==""&&valB==""){
        display=valA*(display/100);
        $("#display").text(display);
    }
};
    
var calculate=function(valA, operator, valB){
    var result;
    switch(operator){
        case "plus":
            result=Number(valA)+Number(valB);
            break;
        case "minus":
            result=Number(valA)-Number(valB);
            break;
        case "times":
            result=valA*valB;
            break;
        case "divide":
            result=valA/valB;
            break;
        }
    return result;
    };
    
var clickDigit=function(value){
//function for when a digit is clicked
    if(lastBtn=="digit"){
        if(valA==""&&valB==""){
            if (display=="clear"){
                display=value;
                } else {
                display+=value;
                }
        } else if (valA!==""&&valB==""){
            display+=value;    
        }
    } else if(lastBtn=="operator"){
        if(valA!==""&&valB===""){//A=full, B=empty
            display=value;
        } else if(valA!==""&&valB!==""){//both full
            valA=display;
            display=value;
            valB="";
        }
        
    }
        
    $("#display").text(display.toString());
    lastBtn="digit";
    };
    
var clickOperator=function(operator){
    
    if(lastBtn=="digit"){//lastbtn is digit;        
        if (display=="clear"){
            display="0";
            valA="0";
        } else if(valA==""&&valB==""){//both vals empty
            valA=display;
        } else if (valA!==""&&valB==""){//A not empty; B is empty
            valB=display;
            display=calculate(Number(valA),mode,Number(display));
            mode=operator;
            lastBtn="operator";
        } else if (valA!==""&&valB!==""){//both not empty
            valA=display;
            mode=operator;
            }
    } else if (lastBtn=="operator"){
        if(valA!==""&&valB==""){
            mode=operaor;
        }else if (valA!==""&&valB!==""){
            valA=display;
            mode=operator;
        }
    } else if (lastBtn=="equals") {
        valA=display;
        valB="";
        lastBtn="operator";
        mode=operator;
    } 
    $("#display").text(Number(display));
    lastBtn="operator";
    mode=operator;
} 
resetAll();
    
 //operator buttons
  $("#equals").click(function(){
    clickEquals();
    var piano = Synth.createInstrument('piano');
    piano.play('F#', 5, 2); // plays C4 for 2s using the 'piano' sound profile   
    });
  $("#plus").click(function(){
      clickOperator("plus");
      var piano = Synth.createInstrument('piano');
      piano.play('D#', 5, 2); // plays C4 for 2s using the 'piano' sound profile 
  });
  $("#minus").click(function(){
    clickOperator("minus");
    var piano = Synth.createInstrument('piano');
    piano.play('C#', 5, 2); // plays C4 for 2s using the 'piano' sound profile   
    }); 
  $("#divide").click(function(){
    clickOperator("divide");
    var piano = Synth.createInstrument('piano');
    piano.play('G#', 4, 2); // plays C4 for 2s using the 'piano' sound profile   
    });
  $("#times").click(function(){
    clickOperator("times");
    var piano = Synth.createInstrument('piano');
    piano.play('A#', 4, 2); // plays C4 for 2s using the 'piano' sound profile 
    });
  
  //digit buttons
  $("#one").click(function(){
    clickDigit("1");
    var piano = Synth.createInstrument('piano');
    piano.play('C', 4, 2); // plays C4 for 2s using the 'piano' sound profile
  });
  $("#two").click(function(){
    clickDigit("2");
    var piano = Synth.createInstrument('piano');
    piano.play('D', 4, 2); // plays C4 for 2s using the 'piano' sound profile  
  });
  $("#three").click(function(){
    clickDigit("3");
    var piano = Synth.createInstrument('piano');
    piano.play('E', 4, 2); // plays C4 for 2s using the 'piano' sound profile 
  });
  $("#four").click(function(){
    clickDigit("4");
    var piano = Synth.createInstrument('piano');
    piano.play('F', 4, 2); // plays C4 for 2s using the 'piano' sound profile 
  });
  $("#five").click(function(){
    clickDigit("5");
    var piano = Synth.createInstrument('piano');
    piano.play('G', 4, 2); // plays C4 for 2s using the 'piano' sound profile 
  });
  $("#six").click(function(){
    clickDigit("6");
    var piano = Synth.createInstrument('piano');
    piano.play('A', 4, 2); // plays C4 for 2s using the 'piano' sound profile   
  });
  $("#seven").click(function(){
    clickDigit("7");
    var piano = Synth.createInstrument('piano');
    piano.play('B', 4, 2); // plays C4 for 2s using the 'piano' sound profile   
  });
  $("#eight").click(function(){
    clickDigit("8");
    var piano = Synth.createInstrument('piano');
    piano.play('C', 5, 2); // plays C4 for 2s using the 'piano' sound profile   
  });
  $("#nine").click(function(){
    clickDigit("9");
    var piano = Synth.createInstrument('piano');
    piano.play('D', 5, 2); // plays C4 for 2s using the 'piano' sound profile 
  });
  
  $("#zero").click(function(){
    clickDigit("0");
    var piano = Synth.createInstrument('piano');
    piano.play('E', 5, 2); // plays C4 for 2s using the 'piano' sound profile   
  });
  $("#decimal").click(function(){
    clickDigit(".");
    var piano = Synth.createInstrument('piano');
    piano.play('F', 5, 2); // plays C4 for 2s using the 'piano' sound profile 
  });
  $("#percent").click(function(){
    clickPercent();
    var piano = Synth.createInstrument('piano');
    piano.play('F#', 4, 2); // plays C4 for 2s using the 'piano' sound profile 
  });
  
   $("#AC").click(function(){
    resetAll();
    var piano = Synth.createInstrument('piano');
    piano.play('C#', 4, 2); // plays C4 for 2s using the 'piano' sound profile 
  });
    
  $("#CE").click(function(){
      var piano = Synth.createInstrument('piano');
      piano.play('D#', 4, 2); // plays C4 for 2s using the 'piano' sound profile 
      if (valA==""&&valB==""){
          resetAll();
      } else if (lastBtn=="equals"){
          resetAll();
      } else if (lastBtn=="digit"){
         if (valA!==""&valB==""){
            display="0";
            lastBtn="operator"
         } 
      } else if (lastBtn=="operator"){
          if (valA!==""&&valB==""){
              resetAll();
          }else if (valA!==""&&valB!==""){
              display="0"
              valB="";
          }
      }
      
      $("#display").text("0");
     
  });
 $("#dummy").click(function(){
   var piano = Synth.createInstrument('piano');
   piano.play('G', 5, 2); // plays C4 for 2s using the 'piano' sound profile 
   })    
  
});