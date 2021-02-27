import { useState } from 'react'
import { firestore, firestorage } from '../utils/firebase'

const [photo, setPhoto] = useState()

function test(){
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
            if(allLines[i] != "" && arr[4] == "F" && arr[7] != "" && arr[20] == "CA"){
            console.log(arr[2])
            }
        }
        console.log(count)
        // allLines.forEach((line) => {
        //     console.log(line);
        // });
    };

    reader.onerror = (event) => {
        alert(event.target.error.name);
    };

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
    return (
        <form onSubmit={createAccount}>
            <input id = "imageFile" type="file" /*accept="image/*"*/ multiple={true} onChange={parseFile}/>
            <img src={photo} alt="img"/>
            <button type="submit">asd</button>
        </form>
    )
    }   
}