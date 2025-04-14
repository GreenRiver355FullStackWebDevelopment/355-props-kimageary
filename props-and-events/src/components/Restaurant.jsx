function Restaurant(props) {

  return (
    <div className="restaurant">
      <img src={props.restaurant.image} alt={props.name} />
      <h1>{props.restaurant.name}</h1>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>⭐ {props.restaurant.rating}</li>
      </ul>
    </div>
  );
}

export default Restaurant;
