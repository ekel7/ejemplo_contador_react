import React from 'react'
import './ItemListContainer.css'
import {useState} from "react"
import ItemCount from '../ItemCount/ItemCount'


function ItemListContainer(props) {

  return (
    <div id="i_l_c_fondo">{props.bienvenida}
      <ItemCount stock={5} initial={0} onAdd={() => alert('Agregado al carrito')}/>
    </div>
    
  )


 
}

export default ItemListContainer