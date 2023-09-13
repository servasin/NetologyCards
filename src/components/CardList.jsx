function CardList({title, children}) {

    return (
      <div className="cards">
        <h1>{title}</h1>
        {children}
      </div>
    )
  }
  
  export default CardList
  