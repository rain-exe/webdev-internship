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
    db.settings({timestampsInSnapshots:true});

let barIcon = document.getElementById("barIcon")
function navToggle() {
    let link = document.getElementsByClassName("link")
    link.style.display = "block"
}

async function bigFunction() {
    let add = 0
    let categories = []
    let container = document.getElementsByClassName("bigContainer")
    await db.collection("Home Page").where("isBanner", "==", false)
        .get()
        .then((document) => {
            document.forEach((doc) => {
                let data = doc.data()
                categories.push(data)
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    for (let i = 0; i < (categories.length/5); i++) {
        var rows = document.createElement("div");
        rows.className = "row";
        rows.style.display = "flex";
        rows.style.justifyContent = "space-around";
        for (let i = 0; i < 5; i++) {
            console.log(categories[i+add])
            var div = document.createElement("div");
            var anchor = document.createElement("a");
            var image = document.createElement("img");
            div.className = "col-md-2";
            div.style.padding = "0px";
            anchor.href = "#";
            image.src = categories[i+add].img
            image.style.maxWidth = "100%";
            image.style.height = "auto";
            image.style.border = "1px solid #dddddd"
            anchor.appendChild(image);
            anchor.innerHTML += "<p>"+categories[i+add].name+"</p>";
            anchor.style.color = "#777777"
            div.appendChild(anchor)
            rows.appendChild(div);
        }
        add = 5
        container[0].appendChild(rows)
    }
}

async function smallFunction() {
    let add = 0
    let categories = []
    let container = document.getElementsByClassName("smallContainer")
    await db.collection("Home Page").where("isBanner", "==", false)
        .get()
        .then((document) => {
            document.forEach((doc) => {
                let data = doc.data()
                categories.push(data)
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    for (let i = 0; i < (categories.length/2); i++) {
        var rows = document.createElement("div");
        rows.className = "row";
        rows.style.display = "flex";
        rows.style.justifyContent = "center";
        for (let i = 0; i < 2; i++) {
            console.log(categories[i+add])
            var div = document.createElement("div");
            var anchor = document.createElement("a");
            var image = document.createElement("img");
            div.className = "col-5";
            div.style.padding = "0px";
            div.style.margin = "0px 10px"
            anchor.href = "#";
            image.src = categories[i+add].img
            image.style.maxWidth = "100%";
            image.style.height = "auto";
            image.style.border = "1px solid #dddddd"
            anchor.appendChild(image);
            anchor.innerHTML += "<p>"+categories[i+add].name+"</p>";
            anchor.style.color = "#777777"
            div.appendChild(anchor)
            rows.appendChild(div);
        }
        add += 2
        container[0].appendChild(rows)
    }
}