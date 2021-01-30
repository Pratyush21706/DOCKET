var ram = 1;
localStorage.uid;
localStorage.skin;
localStorage.areunoob;

function setup(){
    di = select(".main");
    input = select(".ipp");
    load = select(".load");
    
//    Firebase Config
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
}

function fullit(){
    di.style("display","block")
}

function check(){
    let iv= input.value();
    localStorage.uid = iv;
    console.log(localStorage.uid);
    console.log(localStorage.skin);
     var data ={
          name : localStorage.uid,
          type : "basic"
     }
     database.ref(localStorage.uid).push(data,finished);
  console.log("send called");
    load.style("display","block")

}

function finished(error) {
  if (error) {
    console.log('ooops');
  } else {
    console.log('data saved!');
    window.location.href = "./home.html"
          localStorage.areunoob= 1;

  }
}

function lm(){
    localStorage.skin = "1"
    console.log("light")
}
function dm(){
    localStorage.skin = "2";
        console.log("dark")
}

function draw(){
     console.log(localStorage.uid);
    console.log(localStorage.skin);
   if(localStorage.areunoob==null){
        window.location.href = "./index.html"
    }
    if(localStorage.areunoob==1){
        console.log("jj")
    }  
}

