import React from 'react'

const Flower = ({flower}) => {

  return(
    <section>
      <h4>{flower.name}</h4>
      <img src={flower.photo} />
      <p>{flower.desc}</p>
    </section>
  )

}

export default Flower