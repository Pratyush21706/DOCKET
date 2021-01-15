var clr;
var cl1 = "#ffc972";
var cl2 = "#ff9b73";
var cl3 = "#b692fe";
var cl4 = "#01d4ff";
var cl5 = "#e4ee90";  
function setup(){
    sp = select(".sw")
    hp = select(".hd")
    pallet = select(".pallet");  
    wrap = select(".wrapper");
    nb = select("#nt");
    db = select("#dy");
    bdy = select("body")
    sds = select("#nam");
    logo = select(".logo")
    d1 = select(".lef")
    b1 = select(".pp")
    bgf = select(".bfg");
    curs = select(".csor");
    inDiv = select(".dsd")
    input = select("#cnt1")
    
    var firebaseConfig = {
  apiKey: "AIzaSyCed2nR1PG8BgoXu-Atz2gaiL4wvLCWGUo",
    authDomain: "donote-75c3f.firebaseapp.com",
    databaseURL: "https://donote-75c3f-default-rtdb.firebaseio.com",
    projectId: "donote-75c3f",
    storageBucket: "donote-75c3f.appspot.com",
    messagingSenderId: "504419586098",
    appId: "1:504419586098:web:7a83420d6cea419aedac2b"
  };
        //Initialising Firebase here
  firebase.initializeApp(firebaseConfig);
//    Console Logging firebase
  console.log(firebase);
//  Initialising the firebase database
 database = firebase.database();

    
     var ref = database.ref("Pratyush");
    ref.on("value", gotData, errData);
    
    
console.log(firebase);
}

function addNt(){
//    console.log("bruhh")
    inDiv.style("display","none")
    note = input.value();
     var data ={
          note : note,
         color : clr
     }
     
     database.ref("Pratyush").push(data,finished);
  console.log("send called");
    
     var ref = database.ref("Pratyush");
    ref.on("value", gotData, errData);
    
   

    
//    window.location.reload();
}

function errData(error) {
  if (error) {
    console.log('ooops');
  } else {
    console.log('Wow');
  }
}

function gotData(data) {
    console.log("dlj")
    var listings = selectAll(".note");
    for(var i =0; i<listings.length; i++){
        listings[i].remove();
    }
  var fruits = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(fruits);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    // Look at each fruit object!
     fruit = fruits[key];
      console.log(fruit.note)
      if(fruit.color==1){
//            console.log(ra)
    aa=createButton("").addClass("note").parent(wrap).style("background",cl1)
    createP(fruit.note).parent(aa).addClass("ntext")
        aa.mousePressed(bigB)
        aa.id("jj")
    }
      if(fruit.color==2){
//            console.log(ra)
    aa=createButton("").addClass("note").parent(wrap).style("background",cl2)
    createP(fruit.note).parent(aa).addClass("ntext")
          aa.mousePressed(bigB)
          aa.id("jj")
    }
      if(fruit.color==3){
//            console.log(ra)
    aa=createButton("").addClass("note").parent(wrap).style("background",cl3)
    createP(fruit.note).parent(aa).addClass("ntext")
          aa.mousePressed(bigB)
          aa.id("jj")
    }
      if(fruit.color==4){
//            console.log(ra)
    aa=createButton("").addClass("note").parent(wrap).style("background",cl4)
    createP(fruit.note).parent(aa).addClass("ntext")
          aa.mousePressed(bigB)
          aa.id("jj")
    }
      if(fruit.color==5){
//            console.log(ra)
    aa=createButton("").addClass("note").parent(wrap).style("background",cl5)
    createP(fruit.note).parent(aa).addClass("ntext")
          aa.mousePressed(bigB)
          aa.id("jj")
    }


     
  }
}

function finished(error) {
  if (error) {
    console.log('ooops');
  } else {
    console.log('data saved!');
  }
}
function draw(){
    console.log(clr)
//    curs.position(mouseX,mouseY)
var rand = random(1,9)
var ra = Math.round(rand);
  
//document.getElementById("of").innerHTML = input.value().length+"/60"



    }


function showPallet(){
    pallet.style("height","50vh");
    sp.style("display","none");    
    hp.style("display","block");
}

function hidePallet(){
     pallet.style("height","0vh");
    hp.style("display","none");    
    sp.style("display","block");
}

function night(){
    db.style("margin-left","40.6%")
    db.style("background","orange")
    nb.style("display","none");
    db.style("display","block")
    bdy.style("background","black");
    sds.style("color","white")
    logo.style("color","white")
    sp.style("background","white");
    sp.style("color","black");
    hp.style("background","white");
    hp.style("color","black");
    d1.style("border-right","2px solid #252525");
//        d1.style("background","#151515  ")
    b1.style("color","#f7f7f7")
    d1.style("background","black  ")

}

function dys(){
    console.log("sjh")
       bdy.style("background","white")
    nb.style("display","block");
    db.style("display","none");
    sds.style("color","black")
    logo.style("color","black")
    sp.style("background","black");
    sp.style("color","white");
    hp.style("background","black");
    hp.style("color","white");
            d1.style("background","white  ")
    d1.style("border-right","2px solid #e7e9ed");
    b1.style("color","gray")

}

function addNote(cl){
   
    if(cl == 1){
        ca = "#ffc972";
        clr = 1
    }
    if(cl == 2){
        ca = "#ff9b73";
        clr = 2
    }
    if(cl == 3){
        ca = "#b692fe";
        clr = 3
    }
    if(cl == 4){
        ca = "#01d4ff";
        clr = 4
    }
    if(cl == 5){
        ca = "#e4ee90";
        clr = 5
    }
    console.log(clr);
    inDiv.style("background",ca);
    inDiv.style("display","block");
}

function bigB(){
//    bgf.style("display","block")
//    hid();
}

function hid(){
    bgf.style("display","none")
}