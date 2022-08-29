export default function CatCard(props){

return (
    <div id = "cat_card">
        <h4>{props.catFact}</h4>
        <img src = {props.imgUrl} />
    </div>
    )
}
