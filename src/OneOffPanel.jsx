import OneOff from "./OneOff"

export default function OneOffPanel ({ oneOffs, handleSubmit, handleDelete }) {


return (
    <>
<form action={ handleSubmit }>
    <input className="form-control form-control-sm mb-3 w-50" type="date" required name="date" />
    Amount £ <input className="form-control form-control-sm mb-3 w-25 d-inline" type="number" required min={0} name="amount" />
    <button className="btn btn-primary btn-sm mx-3" type="submit">Add</button>
</form>
<div className="list-group">
{oneOffs.map(o => {
    return (
        <OneOff 
            key={o[3]}
            id={o[3]}
            amount = {o[2]}
            date = {o[0].slice(0,7)}
            handleDelete = {handleDelete}
        />
    )
})}
</div>
</>)
}