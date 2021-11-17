import './ball.css';

function Ball(props) {
  return (
    <div className="ball">
    <p>{props.num}</p>
    </div>
    );
}

export default Ball;