import { useState } from 'react'
import { firestore, firestorage } from './firebase'

function Test(){
    const [photo, setPhoto] = useState()

    function displayPhoto(e){
        //e.preventDefault()
        setPhoto(URL.createObjectURL(e.target.files[0]))
    }

    function parseFile(input){
        const file = input.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const file = event.target.result;
            const allLines = file.split(/\r\n|\n/);
            // Reading line by line
            var count = 0;
            for(var i = 0; i < allLines.length; i++){
                var arr = allLines[i].split('|');
                if(allLines[i] !== "" && arr[4] === "F" && arr[7].includes(".") && arr[20] === "CA" && arr[2].includes("KITCHEN")){
                    var EIN = arr[0]
                    var name = arr[2]
                    var webURL = arr[7]
                    var officerName = arr[8]
                    var zip = arr[14]
                    var city = arr[11]
                    var street = arr[16]
                    var address = street + " " + city + " CA " + zip
                    console.log(arr)
                    // firestore.collection('hackathonstuff').doc("mlhhtg2021").collection('nonprofits').doc(EIN).set({
                    //     name: name,
                    //     webURL: webURL,
                    //     officerName: officerName,
                    //     address: address,
                    //     city: city,
                    //     state: "CA",
                    // })
                    count++
                }
            }
            console.log(count)
        }

        reader.onerror = (event) => {
            alert(event.target.error.name);
        }

        reader.readAsText(file);
    }

    function createAccount(e){
        e.preventDefault()
        if(photo){
            const ref = firestorage.ref()
            const file = document.querySelector("#imageFile").files[0]
            console.log(file)
            // ref.child("test").put(file).then(snap => {
            //   snap.ref.getDownloadURL().then(url =>{
            //     //update user's photo in 'users' collection
            //     firestore.collection('users').doc(user.uid)
            //     .update({                    
            //         photo: url
            //     })
            //   })
            // })
        }
    }
    return (
        <form onSubmit={createAccount}>
            <input id = "imageFile" type="file" /*accept="image/*"*/ multiple={true} onChange={parseFile}/>
            <img src={photo} alt="img"/>
            <button type="submit">asd</button>
        </form>
    )
       
}

export default Test