import React from "react";
import "../CSS/OurStory.css";
import our_story_1 from "../Components/Assets/our-story-1.png";
import our_story_2 from "../Components/Assets/our-story-2.png";
import our_story_3 from "../Components/Assets/our-story-3.png";

const OurStory = () => {
  return (
    <div className="our-story">
      <div className="re-connecting-1">
        <img src={our_story_1} alt="" />
        <div>
          <h1>RE-CONNECTING HUMANS TO NATURE</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
        </div>
      </div>
      <div className="re-connecting-2">
        <img src={our_story_2} alt="" />
        <div>
          <h1>MEET ALISON</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
          <p>
            This is a great space to write a long text about your company and
            your services. You can use this space to go into a little more
            detail about your company. Talk about your team and what services
            you provide. Tell your visitors the story of how you came up with
            the idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
        </div>
      </div>
      <div className="re-connecting-3">
        <img  src={our_story_3} alt="" />
      </div>
    </div>
  );
};

export default OurStory;
