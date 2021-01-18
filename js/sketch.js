var clr;
var cl1 = "#ffc972";
var cl2 = "#ff9b73";
var cl3 = "#b692fe";
var cl4 = "#01d4ff";
var cl5 = "#e4ee90"; 
var mont;
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
    load = select(".load")
    noNote = select(".nothing");
    bmag = select(".catB");
    if(localStorage.skin ==1){
        dys();
    }else if(localStorage.skin ==2){
        night();
    }
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

    
     var ref = database.ref(localStorage.uid);
    ref.on("value", gotData, errData);
    
    
console.log(firebase);
    mont = month();
    if(mont===1){
        mont = "Jan"
    }
     if(mont===2){
        mont = "Feb"
    }
      if(mont===3){
        mont = "March"
    }
      if(mont===4){
        mont = "April"
    }
          if(mont===5){
        mont = "May"
    }
         if(mont===6){
        mont = "June"
    }
         if(mont===7){
        mont = "July"
    }
         if(mont===8){
        mont = "August"
    }
         if(mont===9){
        mont = "Sep"
    }
         if(mont===10){
        mont = "Oct"
    }
         if(mont===11){
        mont = "Nov"
    }
         if(mont===12){
        mont = "Dec"
    }
    
}

function addNt(){
//    console.log("bruhh")
    inDiv.style("display","none")
    note = input.value();
     var data ={
          note : note,
         color : clr,
         type : "hyde",
         date : day()+" "+mont+" "+year()
     }
     
     database.ref(localStorage.uid).push(data,finished);
  console.log("send called");
    
     var ref = database.ref(localStorage.uid);
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
    load.style("display","none")
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
      console.log(fruit.type)
      
       if(fruit.type=="basic"){
       noNote.style("display","block");
           console.log(fruit.type)
       }
       if(fruit.type=="hyde"){
       noNote.style("display","none");
           console.log(fruit.type)
       }
      
      if(fruit.color==1){

    aa=createButton("").addClass("note").parent(wrap).style("background",cl1)
createP(fruit.note).parent(aa).addClass("ntext")
 createP(fruit.date).parent(aa).addClass("dtext")

        aa.mousePressed(bigB)
        aa.id("jj")
          

    }
      if(fruit.color==2){
                

    aa=createButton("").addClass("note").parent(wrap).style("background",cl2)
    createP(fruit.note).parent(aa).addClass("ntext");
           createP(fruit.date).parent(aa).addClass("dtext")

          aa.mousePressed(bigB)
          aa.id("jj")
    }
      if(fruit.color==3){
    aa=createButton("");
       aa.addClass("note").parent(wrap).style("background",cl3)
          
    createP(fruit.note).parent(aa).addClass("ntext")
     createP(fruit.date).parent(aa).addClass("dtext")

          aa.mousePressed(bigB)
          aa.id("jj")
    }
      if(fruit.color==4){
//            console.log(ra)
    aa=createButton("").addClass("note").parent(wrap).style("background",cl4)
    createP(fruit.note).parent(aa).addClass("ntext")
     createP(fruit.date).parent(aa).addClass("dtext")

          aa.mousePressed(bigB)
          aa.id("jj")
    }
      if(fruit.color==5){
//            console.log(ra)
    aa=createButton("").addClass("note").parent(wrap).style("background",cl5)
    
    createP(fruit.note).parent(aa).addClass("ntext")
           createP(fruit.date).parent(aa).addClass("dtext")

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
    bdy.style("background","#252525");
    sds.style("color","white")
    logo.style("color","white")
//    sp.style("background","white");
//    sp.style("color","black");
//    hp.style("background","black");
//    hp.style("color","black");
    d1.style("border-bottom","2px solid #252525");
        d1.style("border-right","2px solid #252525");

//        d1.style("background","#151515  ")
    b1.style("color","#f7f7f7")
    d1.style("background","black  ")
        noNote.style("color","#f7f7f7");
    noNote.style("background","#151515");
            noNote.style("box-shadow","box-shadow: 0px 0px 10px 0px red")
  localStorage.skin = 2


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
    d1.style("border-bottom","2px solid #e7e9ed");
        d1.style("border-right","2px solid #e7e9ed");

    b1.style("color","gray")
    noNote.style("color","black")
     noNote.style("color","#858585");
    noNote.style("background","white");
  localStorage.skin = 1

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
    hidePallet()
}

function bigB(){
//    bgf.style("display","block")
//    hid();
}

function hid(){
    bgf.style("display","none")
}

function sendTo(){
    bmag.style("display","block")
}
function gotData1(data) {
    load.style("display","none")
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
      console.log(fruit.type)
      
       if(fruit.type=="basic"){
       noNote.style("display","block");
           console.log(fruit.type)
       }
       if(fruit.type=="hyde"){
       noNote.style("display","none");
           console.log(fruit.type)
       }
      
      if(fruit.color==1){
//            console.log(ra)
    aa=createButton("").addClass("note").parent(wrap).style("background",cl1)
    createP(fruit.note).parent(aa).addClass("ntext")
        aa.mousePressed(bigB)
        aa.id("jj")
    }
    
  }
}
function gotData2(data) {
    load.style("display","none")
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
      console.log(fruit.type)
      
       if(fruit.type=="basic"){
       noNote.style("display","block");
           console.log(fruit.type)
       }
       if(fruit.type=="hyde"){
       noNote.style("display","none");
           console.log(fruit.type)
       }
      

      if(fruit.color==2){
//            console.log(ra)
    aa=createButton("").addClass("note").parent(wrap).style("background",cl2)
    createP(fruit.note).parent(aa).addClass("ntext")
          aa.mousePressed(bigB)
          aa.id("jj")
    }



     
  }
}
function gotData3(data) {
    load.style("display","none")
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
      console.log(fruit.type)
      
       if(fruit.type=="basic"){
       noNote.style("display","block");
           console.log(fruit.type)
       }
       if(fruit.type=="hyde"){
       noNote.style("display","none");
           console.log(fruit.type)
       }

      if(fruit.color==3){
//            console.log(ra)
    aa=createButton("").addClass("note").parent(wrap).style("background",cl3)
    createP(fruit.note).parent(aa).addClass("ntext")
          aa.mousePressed(bigB)
          aa.id("jj")
    }
      


     
  }
}
function gotData4(data) {
    load.style("display","none")
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
      console.log(fruit.type)
      
       if(fruit.type=="basic"){
       noNote.style("display","block");
           console.log(fruit.type)
       }
       if(fruit.type=="hyde"){
       noNote.style("display","none");
           console.log(fruit.type)
       }
      if(fruit.color==4){
//            console.log(ra)
    aa=createButton("").addClass("note").parent(wrap).style("background",cl4)
    createP(fruit.note).parent(aa).addClass("ntext")
          aa.mousePressed(bigB)
          aa.id("jj")
    } 
  }
}
function gotData5(data) {
    load.style("display","none")
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
      console.log(fruit.type)
      
       if(fruit.type=="basic"){
       noNote.style("display","block");
           console.log(fruit.type)
       }
       if(fruit.type=="hyde"){
       noNote.style("display","none");
           console.log(fruit.type)
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


function filter1(){
        bmag.style("display","none")

    console.log("I Filter 1");
   var ref = database.ref(localStorage.uid);
    ref.on("value", gotData1, errData);
}
function filter2(){
        bmag.style("display","none")

    console.log("I Filter 2");
   var ref = database.ref(localStorage.uid);
    ref.on("value", gotData2, errData);
}
function filter3(){
        bmag.style("display","none")

    console.log("I Filter 3");
   var ref = database.ref(localStorage.uid);
    ref.on("value", gotData3, errData);
}
function filter4(){
        bmag.style("display","none")

    console.log("I Filter 4");
   var ref = database.ref(localStorage.uid);
    ref.on("value", gotData4, errData);
}
function filter5(){
        bmag.style("display","none")

    console.log("I Filter 5");
   var ref = database.ref(localStorage.uid);
    ref.on("value", gotData5, errData);
}

function bigB(){
    console.log("sjj")
    aa.style("width","95%")
}