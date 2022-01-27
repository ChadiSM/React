import React, { Component } from 'react';

export default class Posts extends Component {
 state={
     posts: []
 }
 
    //con este metodo por defecto de react lo que haremos será cargar los datos que vamos a pedir 
 //a la dirección url antes de que se muestre por pantalla el componente post.
 //fetch es una palabra reservada para hacer peticiones a otros servidores
     async componentDidMount  (){
    //hacemos una peticion a una url gracias a fetch y para poder leer por consola los resultados de la consulta
    //convertimos la constante res con los datos en un json => res.json()
     const res =  await fetch('https://jsonplaceholder.typicode.com/posts')
     const data =  await res.json();
     this.setState({posts: data})
     console.log(data)    
}
 
    render() {
    return <div>
        <h1>Posts</h1>
        {
            this.state.posts.map(post =>{
                return <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            }  )
        }
    </div>;
  }
}



