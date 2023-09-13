import Card from "./Card"
import { Children } from "react"

function CardList({children}) {

    return (
      // <div className="cards">
      //   {/* {cards.map((card, i) =>
      //     <Card card={card} key={i}/>
      //   )}   */}
      //   {children}
      // </div>
      <div className="RowList">
        {Children.map(children, child =>
          <Card card={child} />
        )}
      </div>
    )
  }
  
  export default CardList
  