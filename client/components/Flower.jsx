import React from 'react'

const Flower = ({flower}) => {

  return(
    <section className="flower" style={{backgroundImage: `url(${flower.photo})`}}>
      <div className="flower-desc">
        <h4>{flower.name}</h4>
        <p>{flower.desc}</p>
      </div>
    </section>
  )

}

export default Flower