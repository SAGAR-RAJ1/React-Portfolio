const Card = (props) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" style={{ color: '#CBFC8F' }}>{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href={props.link} className="btn btn-primary">See The Code</a>
            </div>
        </div>
    );
}
export default Card;