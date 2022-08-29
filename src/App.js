import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

    <h1>Welcome to Cat Cards</h1>

    <div id="card_side">

        <div id="cat_card">
            <h4 id="cat_fact"></h4>
            <img id="cat_pic"/>
        </div>

        <input id="caption_box" type="text" placeholder="Caption me!"/>
        <div id="button_holder">
            <button id="save_btn" type="button">&#128190; Save To Collection</button>
            <button id="next_btn" type="button">Get Next Card &#8680;</button>
        </div>
    </div>

    <h2>Your Collection</h2>
    <div id="collection">

    </div>

    <script type="text/javascript" src="js/app.js"></script>

  </div>
  );
}

export default App;
