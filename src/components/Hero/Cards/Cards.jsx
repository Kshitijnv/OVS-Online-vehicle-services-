import "./cards.css";
function Cards(props) {
  return (
    <div class="grid-container">
      <div class="card">
        <div class="image-container-card">
          <img src={props.image} alt={props.altmsg}></img>
        </div>
        <div class="card-content">
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
