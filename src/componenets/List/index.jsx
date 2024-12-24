import "./index.css";
import Item from "../Item"

function List() {
    return (
        <ul className="nav">
            <Item name="Qizil" englishName="red"/>
            <Item name="Yashil" englishName="green"/>
            <Item name="Moviy" englishName="blue"/>
            <Item name="Sariq" englishName="yellow"/>
            <Item name="To'q qizil" englishName="maroon"/>
        </ul>
    );
}

export default List;