import {Link} from "react-router-dom";
const Expense = (props)=>{
    return(
        <tr>
            <td>{props.date}</td>
            <td>{props.type}</td>
            <td>{props.description}</td>
            <td>{Number.parseFloat(props.amount).toFixed(2)}</td>
            <td><Link to={`expense/update/${props.id}`}>Redaguoti</Link></td>
            <td><Link to={`/expense/delete/${props.id}`}>Šalinti</Link></td>
        </tr>
    )
}

export default Expense