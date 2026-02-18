export default function OneOffPanel ({ oneOffs, handleSubmit, handleDelete }) {


return (
    <>
    <h4>One-offs</h4>
<form action={ handleSubmit }>
    <input className="form-control form-control-sm mb-3 w-50" type="date" required name="date" />
    Amount £ <input className="form-control form-control-sm mb-3 w-25 d-inline" type="number" required min={0} name="amount" />
    <button className="btn btn-primary btn-sm mx-3" type="submit">Add</button>
</form>
<ul>
{oneOffs.map(o => {
    return <li
        key={o[3]}>{o[0]} £{o[2]} 
        <button type="button" 
            className="btn btn-outline-light btn-sm"
            data-id={o[3]} 
            onClick={ handleDelete }>❌</button></li>
})}
</ul>
</>)
}