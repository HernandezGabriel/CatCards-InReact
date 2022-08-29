import { Card, CardImg, CardBody, CardText } from "reactstrap";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import React from "react";

function RenderCollection({ cards, deleteHandler, editHandler }) {
  return (
    <Card>
      <CardImg src={cards.imgUrl} alt="cat" className="collection-pic" />
      <CardBody>
        <CardText>{cards.caption}</CardText>

        <div id="collection_btns">
          <button
            onClick={(e) => {
              editHandler(e, cards.catCardId);
            }}
          >
            <FaEdit />
          </button>
          <button
            onClick={(e) => {
              deleteHandler(e, cards.catCardId);
            }}
          >
            <FaRegTrashAlt />
          </button>
        </div>
      </CardBody>
    </Card>
  );
}

const Collection = (props) => {
  const collections = props.collection.map((cards, id) => {
    return (
      <div key={id}>
        <RenderCollection
          deleteHandler={props.deleteHandler}
          editHandler={props.editHandler}
          cards={cards}
        />
      </div>
    );
  });

  return <>{collections}</>;
};

export default Collection;