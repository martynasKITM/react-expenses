
const Expense = (props)=>{
    return(
        <tr>
            <td>{props.date}</td>
            <td>{props.type}</td>
            <td>{props.description}</td>
            <td>{props.amount}</td>
        </tr>
    )
}

export default Expense