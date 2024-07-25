

export const Product = () => {
  const myStyle = {width: "18rem"};
  return (
   
        <div className="card me-4" style={myStyle}>
        <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
      </div>
        
  )
}
