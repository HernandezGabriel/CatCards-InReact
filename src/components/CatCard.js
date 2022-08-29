import { Card, CardImg, CardTitle, } from "reactstrap";
import { FaSave, FaCaretSquareRight, FaCat} from "react-icons/fa";


const CatCard = (props) => {
  return (
    <>
      <Card id="cat_card">
        <CardTitle id="cat_fact">{props.catCard.catFact}</CardTitle>
        <CardImg src={props.catCard.imgUrl} alt="cat" id="cat_pic" />
      </Card>
      <input
        onChange={(e) => {
          props.updateCaption(e.target.value);
        }}
        type="text"
        placeholder="Caption me!"
        id="caption_box"
      />

      <div id="button_holder">
        <button
          onClick={() => {
            props.saveCatCard(props.saveCaption);
            const input = document.getElementById("caption_box");
            input.value = "";
            if (props.catCard.caption < 1) {
              alert("Caption must like exist or something");
            }
            props.fetchCollection();
          }}
          id="save_btn"
        >
          <FaSave /> Save <FaCat /> To Collection
        </button>

        <button
          onClick={() => {
            props.fetchCatCard();
          }}
          id="next_btn"
        >
          Get Next <FaCat /> Card <FaCaretSquareRight />
        </button>
      </div>
    </>
  );
};

export default CatCard;