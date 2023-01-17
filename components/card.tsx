import * as React from "react"

interface Props {
    title?: string,
    children: JSX.Element
}

function Card(props: Props) {
    return (
      // <div className="card">
      //   <h2 className="card-title">{props.title}</h2>
      //   <ul className="list">
      //       {props.children}
      //   </ul> 
      // </div>
      <div className="text-cream-100 pb-6 rounded-md  lg:bg-gradient-to-r lg:from-transparent md:bg-gradient-to-r md:from-transparent bg-gradient-to-r from-cream-100/25" >
      {/* <div className="card"> */}
        <h2 className="card-title">{props.title}</h2>
        <ul className="list">
            {props.children}
        </ul> 
      </div>
    );
  }

export default Card;


