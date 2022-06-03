import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapp">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Raj KP</b> and <b>3 others </b> have birthday today.
          </span>
        </div>

        <img className="rightbarAd" src="/assets/ad.png" alt="" />

        <h4 className="rightbarTitle">Online Friends</h4>

        <ul className="rightbarFriendList">
          {Users.map(user => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}
