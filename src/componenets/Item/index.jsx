import "./index.css";

function Item(props) {
    return <li className="nav-item">{props.name} ({props.englishName})</li>
}

export default Item;