import CatCard from "./CatCard";
import { useState, useEffect, useCallback, } from "react";
import Collection from "./Collection";

const BASE_URL = "http://localhost:8081/api/cards";

const Main = () => {
  let [catCard, setCatCard] = useState({});

  const [collection, setCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [saveCaption, setSaveCaption] = useState(catCard.caption);

  const fetchCollection = useCallback(() => {
    fetch(BASE_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => setCollection(data));
    console.log(collection);
  }, []);
const fetchCatCard = useCallback(() => {
    fetch(BASE_URL + "/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => setCatCard(data));
    console.log(catCard);
  }, []);

  function deleteHandler(event, id) {
    fetch(BASE_URL + "/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        setIsLoading(!isLoading);
        return response.text();
      })
      .then((data) => {
        console.log(data);
        alert("Cat Card deleted!");
      })
      .catch((err) => {
        console.error(err);
        alert("Could not delete Cat Card!");
      });
  }

  function editHandler(event, id) {
    let cat_fact = document.getElementById("cat_fact");
    let cat_pic = document.getElementById("cat_pic");
    let caption = document.getElementById("caption_box");

    fetch(BASE_URL + "/" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        catCard["catCardId"] = data.catCardId;
        catCard["catFact"] = data.catFact;
        catCard["imgUrl"] = data.imgUrl;
        catCard["caption"] = data.caption;
        caption.value = data.caption;
        caption.disabled = false;
        caption.style.textAlign = "left";
        cat_fact.innerText = data.catFact;
        cat_pic.setAttribute("src", data.imgUrl);
        caption.focus();
      });
  }
function updateCaption(e) {
    setCatCard({
      ...catCard,
      caption: e,
    });
  }

  async function saveCatCard() {
    if (catCard.catCardId != undefined) {
      //          update
      await fetch(BASE_URL + "/" + catCard.catCardId, {
        method: "PUT",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(catCard),
      })
        .then((response) => {
          if (response.ok) {
            alert("Edit Saved!");
            setIsEdited((prevEdit) => !prevEdit);
          }
        })
        .catch((err) => {
          console.error("from POST " + err);
          alert("Could not save card!");
        });
    } else {
      // save
      await fetch(BASE_URL, {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(catCard),
      })
        .then((response) => {
          if (response.ok) {
            alert("Saved!");
            setIsLoading((prevLoad) => !prevLoad);
          }
        })
        .catch((err) => {
          console.error(err);
          alert("Could not save card!");
        });
    }
  }
useEffect(() => {
    fetchCatCard();
  }, []);

  useEffect(() => {
    updateCaption(catCard.caption);
  }, []);

  useEffect(() => {
    fetchCollection();
  }, [isLoading, isEdited, fetchCollection]);

  return (
    <>
      <h2>Welcome to Cat Cards</h2>
      <div id="card_side">
        <CatCard
          catCard={catCard}
          saveCatCard={saveCatCard}
          fetchCatCard={fetchCatCard}
          updateCaption={updateCaption}
          fetchCollection={fetchCollection}
          collection={collection}
          isEdited={isEdited}
          saveCaption={saveCaption}
        />
      </div>
      <div id="collection">
        <Collection
          catCard={catCard}
          collection={collection}
          updateCaption={updateCaption}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      </div>
    </>
  );
};
export default Main;