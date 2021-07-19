var firebaseConfig = {
    apiKey: "AIzaSyDXltZ4eDwJVXNrPaozhWIBxsWtBHDdhX0",
    authDomain: "internship-webdev.firebaseapp.com",
    projectId: "internship-webdev",
    storageBucket: "internship-webdev.appspot.com",
    messagingSenderId: "390967750780",
    appId: "1:390967750780:web:e482575eeb93255bea19f9",
    measurementId: "G-YFH4Q1PYNX"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  //Carousel
//Carousel
db.collection("Home Page").where("isCarousel", "==", true)
      .get()
      .then((querySnapshot) => {
          const mappings = {
            0: 'Carousel-Image-1',
            1: "Carousel-Image-2",
            2: "Carousel-Image-3"
          }

          let i = 0;
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            document.getElementById(mappings[i]).src = doc.data().img;
            i++;
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
      


//Create Hamper
db.collection("Home Page").where("isBanner", "==", true)
.get()
.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      document.getElementById("Image-1").src = doc.data().img;
    });
})
.catch((error) => {
    console.log("Error getting documents: ", error);
});


    