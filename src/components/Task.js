import React, { Component } from "react";

import { PropTypes } from "prop-types";

class Task extends Component {
   
   
   
   
   
    //esta es otra forma de mostrar css mediante una funcion
   styleCompleted(){
       return {
           fontSize: '20px',
    //esto es un condicional, si es false done se pinta en black y si es true gray 
           color: this.props.task.done ? 'gray' : 'black',
    //igual que arriba, si task.done es true marcala con una linea si no dejala normal
           textDecoration: this.props.task.done ? 'line-through' : 'none'
       }
   }

    render(){
        //con esta linea extraemos datos del json creado, y de sta manera nos ahorramos
        //tener que escribir this.props cada vez que queramos obtener sus datos
        const {task} = this.props;
        

                    //estas son distintas formas de meter css en nuestro codigo
            /* const redColor = {background: 'red'}; */
        return <div style={this.styleCompleted()} /* className="red" */ /* style={{background: 'red'}} *//*  style={redColor} */>
            {/* {this.props.task.title} -
             {this.props.task.description} - 
             {this.props.task.id} - 
             {this.props.task.done} */}

             {task.title} - 
             {task.description} - 
             {task.id} - 
             {task.done}
        <input type ="checkbox" onChange={this.props.checkDone.bind(this,task.id)}/>
        {/* con el metodo onclick creamos eventos que ocurren cuando hacemos click ene ste caso elimianr una nota
        .bind se usa para blindar/targetear un objetivo en este caso será task.id que es la que contiene la informacion de la nota a borrar
        le pasamos como parametros id y this */}
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
                x
            </button>
            </div>
    }

}

Task.propTypes = {
    task:PropTypes.object.isRequired
}



//puedes usar css de forma tradicional o con javascript mediante objetos, creamos el objeto
//y dentro de él colocamos todo nuestro css, despues en el div, input, button que queramos aplicar
//le añadimos style={objetoCreadoConNuestroCSS}
const btnDelete={
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    
}
export default Task;