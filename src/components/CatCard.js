import React, {useEffect,useState} from "react";


export default function CatCard(props){

    const[editing, setEditing] = useState(false)
    const[caption, setCaption] = useState(props.caption)
    const[fact, setFact] = useState(props.catFact)



const deleteCard = () => {
        console.log(props.id)

        fetch(`http://localhost:8080/api/cards/${props.id}`,
     {
        method: 'DELETE',
        }).then(response=>console.log(response))
     .catch(e=>console.log(e))

     .then(props.updateCollections)


  }

  const updateCard = () => {
    fetch(`http://localhost:8080/api/cards/${props.id}`,
       {
          method: 'PUT',
          cache: 'no-cache',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
          {
             catCardId: props.id,
             catFact: `${fact}`,
             imgUrl: `${props.imgUrl}`,
             caption: `${caption}`,
         })


       }).then(response=>console.log(response))
       .catch(e=>console.log(e))
       .then(props.updateCollections)
 }
  const beginEdit = () =>{
    setEditing(true)

  }

  const saveEdits = () =>{
    setEditing(false)
    updateCard()

  }

return (
    <div id = "cat_card">
        {!editing && <h4>{props.catFact}</h4>}

        {props.caption && !editing && <h2>{props.caption}</h2>}
        <img width={400} src = {props.imgUrl} />
        {props.id && <button onClick={deleteCard}
               id="del_btn" type="button">&#128190;DELETE</button>}
        {props.id && !editing && <button onClick={beginEdit}
               id="del_btn" type="button">&#128190;EDIT</button>}
        {props.id && editing && <button onClick={saveEdits}
               id="del_btn" type="button">&#128190;Save</button>}

        {editing && <input onChange={event => {
               setCaption(event.target.value)
        }}

         type="text" placeholder="Type New Caption"/> }

        {editing && <input onChange={event => {
               setFact(event.target.value)
        }}

         type="text" placeholder="Edit Fact"/> }


    </div>
    )
}
