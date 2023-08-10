
import React from 'react'
import Main from './Main.jsx'
import Header from './Header.jsx'
import data from './Data.jsx'

export default function App(){

  const card = data.map((item) => {
    return (
      <Main 
          key={item.id}
          {...item}
       />
    )
  })

  return (
    <div className="container">
        <Header />
        <section className="cards-list">
                {card}
        </section>
    </div>
  )
}
