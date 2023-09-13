function Card({card}) {
  return (
    <div className="card" style={{width: '18rem'}}>
      {card.img ? <img src={card.img} className="card-img-top" alt="image"/> : ''}
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.text}</p>
        <a href={card.link} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default Card
