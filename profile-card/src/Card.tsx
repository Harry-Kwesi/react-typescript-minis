import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="img">
        <img
          src="https://media.istockphoto.com/id/1040472930/photo/nerdy-staring-at-camera.jpg?s=612x612&w=0&k=20&c=ZpM78SlhJi_MBdrRqPPXmfBydyKL3U3OiO1sYcwcyRs="
          alt="Bradley Steve"
        />
      </div>
      <div className="infos">
        <div className="name">
          <h2>Denzel Murphy</h2>
          <h4>@denzel</h4>
        </div>
        <p className="text">
          I'm a Passionate Front End Engineer, follow me to see my works.
        </p>
        <ul className="stats">
          <li>
            <h3>15K</h3>
            <h4>Views</h4>
          </li>
          <li>
            <h3>82</h3>
            <h4>Projects</h4>
          </li>
          <li>
            <h3>1.3M</h3>
            <h4>Followers</h4>
          </li>
        </ul>
        <div className="links">
          <button className="follow">Follow</button>
          <button className="view">View profile</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
