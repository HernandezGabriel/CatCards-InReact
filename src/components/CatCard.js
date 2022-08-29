import React, {useEffect,useState} from "react";

export default function NewCatCard(){
    const[catCard, setCatCard] = useState({
        catFact: "",
        catPic: "",
    })

useEffect(() => {
    console.log("ran catFact")
    fetch("http://localhost:8080/api/cards", {
        mode: "no-cors",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(catCard),
})
        .then(response =>response.json())
        .then(data => setCatCard(data.text))
    }, [])

useEffect(() => {
    fetch("http://localhost:8080/api/cards")
    .then(data => setCatCard(prevCatCard => ({
        ...prevCatCard,
        catPic:data.file
    })))
}, [])

return (
    <div id = "cat_card">
        <h4>{catCard.catFact}Testing</h4>
        <img src = {catCard.catPic} />
    </div>
    )
}