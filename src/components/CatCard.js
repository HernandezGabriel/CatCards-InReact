export default function CatCard(props){

const deleteCard = () => {
        console.log(props.id)

        fetch(`http://localhost:8080/api/cards/${props.id}`,
     {
        method: 'DELETE',
        }).then(response=>console.log(response))
     .catch(e=>console.log(e))

     .then(props.updateCollections)


  }

return (
    <div id = "cat_card">
        <h4>{props.catFact}</h4>
        {props.caption && <h2>{props.caption}</h2>}
        <img width={400} src = {props.imgUrl} />
        <button onClick={deleteCard}
               id="del_btn" type="button">&#128190;DELETE</button>
    </div>
    )
}
