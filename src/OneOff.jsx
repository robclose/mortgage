export default function OneOff ({ id, date, amount, handleDelete}) {


    return (

        <div 
        className="list-group-item list-group-item-info">
            <div className="d-flex justify-content-between w-100">
                <span>{date}</span>
                <span>£{amount}</span>
                <button type="button" 
            className="btn btn-light btn-sm"
            data-id={id} 
            onClick={ handleDelete }>❌</button>
            </div>
        </div>       
    );

}