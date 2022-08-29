import React, {useEffect,useState} from "react";
import CatCard from './CatCard'

export default function CardSide(){
   const[catData, setCatData] = useState({})
   const[caption, setCaption] =  useState(" ")

   const newCard = () => {
      fetch('http://localhost:8081/api/cards/random', {})

      .then((response)=>response.json())
      .then((actual)=> setCatData(actual))
      .then(console.log(catData))

      }

   useEffect(newCard, [])

   const saveCard = () => {
      fetch("http://localhost:8081/api/cards",
         {
            method: 'POST',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
            {
               catCardId: 0,
               catFact: `${catData.catFact}`,
               imgUrl: `${catData.imgUrl}`,
               caption: `${caption}`,
           })


         }).then(response=>console.log(response))
         .catch(e=>console.log(e))
   }


   return (
      <div>
         <CatCard catFact={catData.catFact} imgUrl={catData.imgUrl}/>

         <input onChange={event => {
            if(!event.target.value){
               setCaption(" ")
            } else{
               setCaption(event.target.value)
            }}}

            id="caption_box" type="text" placeholder="Caption me!"/>

         <div id="button_holder">

            <button onClick={saveCard}
               id="save_btn" type="button">&#128190; Save To Collection</button>

            <button onClick={newCard}
               id="next_btn" type="button">Get Next Card &#8680;</button>
        </div>


      </div>

)}