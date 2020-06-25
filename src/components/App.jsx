import React from "react";
import Header from "./Header";
import Card from "./Card";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <Header />

      <dl className="dictionary">
        <Card
          key={emojipedia[0].key}
          emoji={emojipedia[0].emoji}
          name={emojipedia[0].name}
          meaning={emojipedia[0].meaning}
        />
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              💪
            </span>
            <span>Tense Biceps</span>
          </dt>
          <dd>
            “You can do that!” or “I feel strong!” Arm with tense biceps. Also
            used in connection with doing sports, e.g. at the gym.
          </dd>
        </div>
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🙏
            </span>
            <span>Person With Folded Hands</span>
          </dt>
          <dd>
            Two hands pressed together. Is currently very introverted, saying a
            prayer, or hoping for enlightenment. Is also used as a “high five”
            or to say thank you.
          </dd>
        </div>
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🤣
            </span>
            <span>Rolling On The Floor, Laughing</span>
          </dt>
          <dd>
            This is funny! A smiley face, rolling on the floor, laughing. The
            face is laughing boundlessly. The emoji version of “rofl“. Stands
            for „rolling on the floor, laughing“.
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default App;

// key = {emojipedia.key}
// emoji = {emojipedia.emoji}
// name = {emojipedia.name}
// meaning = {emojipedia.meaning}

// key = {emojipedia[0].key}
// emoji = {emojipedia[0].emoji}
// name = {emojipedia[0].name}
// meaning = {emojipedia[0].meaning}
