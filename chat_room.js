const firebaseConfig = {
      apiKey: "AIzaSyBe-vtO9glUeV9Ti0i2-M_Pbv7bFU3P-fs",
      authDomain: "kwitter-6eb64.firebaseapp.com",
      databaseURL: "https://kwitter-6eb64-default-rtdb.firebaseio.com",
      projectId: "kwitter-6eb64",
      storageBucket: "kwitter-6eb64.appspot.com",
      messagingSenderId: "681946603770",
      appId: "1:681946603770:web:5d342d33a90c69f7bda943",
      measurementId: "G-B631YHQ2YE"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
