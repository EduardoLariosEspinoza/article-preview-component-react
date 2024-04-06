import { useState } from "react";

import Text from "./components/Text";

import "./App.css";

function App() {
  const [sharedActivated, setSharedActivated] = useState(false);

  let shareDiv;

  if (sharedActivated) {
    shareDiv = (
      <div id="profile" className="back-grey">
        <div id="profle-info">
          <Text className="share-text">SHARE</Text>
          <img src="icon-facebook.svg" alt="" className="social-icon" />
          <img src="icon-twitter.svg" alt="" className="social-icon" />
          <img src="icon-pinterest.svg" alt="" className="social-icon" />
        </div>

        <div className="triangle"></div>
      </div>
    );
  }

  function handleClick() {
    setSharedActivated((prev) => !prev);
  }

  return (
    <div id="card">
      <div id="div-image">
        <img src="drawers.jpg" alt="" id="top-image" />
      </div>
      <div id="div-content">
        <Text className="margin subtitle">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </Text>
        <Text className="margin text">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I have got some simple tips to help
          you make any room feel complete.
        </Text>
        <div id="profile" className="margin">
          <div id="profle-info">
            <img src="avatar-michelle.jpg" alt="" id="avatar-icon" />
            <div id="profile-text">
              <Text className="subtitle">Michelle Appleton</Text>
              <Text className="text">28 Jun 2020</Text>
            </div>
          </div>
        </div>
        {shareDiv}
        <button onClick={handleClick}>
          <img src="icon-share.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
