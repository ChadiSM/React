import React, { Component } from 'react';

 export default class TaskForm extends Component {

    state = {
        title : '',
        description : ''
    }

    //se puede llamar de cualquier forma.
    //con la sintaxis que tenemos en onsubmit y onchange ya podemos manipular los datos que incluyamos en el formulario, se guardan.
    onSubmit = e => {
        
        //le pasamos al boton  el metodo/funcion creado/a en app.js para añadir tareas 
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
       //con este meotod de java hacemos que el comportamiento por defecto de la página se pare osea que no 
        // se recarge la página cada vez que pulsamos sobre el boton save, así hacerla más fluida.
       


    }

    onChange = e => {
        console.log(e.target.name, e.target.value)
        //con este metodo leemos los datos introducidos en el formulario de abajo, de manera que e.target.value
        //tendrá el valor de cada tecla/letra que escriba el usuario. De esta forma recogemos datos de formularios
        this.setState({
           
            //con esta line cogemos el valor e.target.name que más abajo hemos establecido como title y description
            //esto lo hacemos para que al escribir en el formulario el programa sepa donde lo estamos haciendo
            //si en el title o description, es una forma de separar valores y usar la misma funcion para todo
            [e.target.name]: e.target.value
        })
    }

    //render lo usamos para que nos pinte algo en pantalla, en este caso lo que hay dentro de los {}
    render(){
    
        return (
          
            //ponemos this porque viene de una clase, queremos usar el metodo de la clase
            <form onSubmit = {this.onSubmit}>
                <input type="text"
                name="title"
                 placeholder="Write a task" 
                 onChange = {this.onChange} 
                 //dandole le valor el estado que hemos establecido arriba nuestro formulario estará conectado al estado
                 value={this.state.title}/>
               <br></br>
                <textarea 
                name="description"
                placeholder="write a description" 
                onChange = {this.onChange} 
                //dandole le valor el estado que hemos establecido arriba nuestro formulario estará conectado al estado
                value={this.state.description}
                 ></textarea>
                <input type="submit" />
               
            </form>
        )

    }

}

