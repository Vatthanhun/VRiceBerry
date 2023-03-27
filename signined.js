let jwt = localStorage.getItem("jwt")
if (jwt == null) {
    window.location.href = './index.html'
}

function loaduser() {
    const xhttp = new XMLHttpRequest()
    xhttp.open("GET", "https://www.mecallapi.com/api/auth/user")
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhttp.setRequestHeader("Authorization", "Bearer "+jwt)
    xhttp.send()
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 ) {
            const objects = JSON.parse(this.responseText)
            console.log(objects)
            if (objects['status'] == ok) {
                const user = objects['user']
                document.getElementById("pnumber").innerHTML = pnumber
            }
        }
    }
}
loaduser()

function logout() {
    localStorage.removeItem("jwt")
    window.location.href = "./index.html"
}

const db = firebase.firestore()
db.collection('DataUser').get().then((snapshot)=>{
    console.log(snapshot.docs)
})