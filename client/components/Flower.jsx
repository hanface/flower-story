import React from 'react'

const Flower = ({flower}) => {

  return(
    <section className="flower">
      <img src={flower.photo} alt="photo of a flower" />
      <div className="flower-desc">
        <h4>{flower.name}</h4>
        <p>{flower.desc}</p>
      </div>
    </section>
  )

}

export default Flower