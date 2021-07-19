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
  db.collection("Home Page").where("isCarousel", "==", true)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(doc.id, " => ", doc.data());
              document.getElementById("Carousel-Image-1").src = "https://res.cloudinary.com/dvv9fvblr/image/upload/v1625213423/so8vebsg3hc6cdn69urd.jpg";
              document.getElementById("Carousel-Image-2").src = "https://res.cloudinary.com/dvv9fvblr/image/upload/v1625213727/mff295jr3kxepmbckowd.jpg";
              document.getElementById("Carousel-Image-3").src = "https://res.cloudinary.com/dvv9fvblr/image/upload/v1625213551/fwj6zc2vbcbdiqkeuoye.jpg";
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
        document.getElementById("Image-1").src = 'https://res.cloudinary.com/dvv9fvblr/image/upload/v1613376920/y21avghl1kw2bbmbn2re.jpg'
      });
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });

    