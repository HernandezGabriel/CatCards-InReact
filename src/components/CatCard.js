export default function CatCard(props){

return (
    <div id = "cat_card">
        <h4>{props.catFact}</h4>
        <img width={400} src = {props.imgUrl} />
    </div>
    )
}
