import "./closeFriend.css";

export default function CloseFriend({ user }) {
  return (
    <li className="sidebarFriend">
      <div className="sidebarFriendDiv">
        <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.username}</span>
      </div>
    </li>
  );
}
