
import React, {Component} from 'react';
 import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
 
import './App.css';
//asi importamos el arreglo de datos json que hemos creado en la carpeta sample.
import tasks from './sample/task.json';
//importamos los componentes que vamos creando para usarlos
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';
;

//gracias a props podemos alterar el valor de nuestro gelloworld aqui marcado
//le pasamos como parametro props y dentro del div marcamos props.nombre que le hayamos dado como id a nuestro texto u objeto a alternar

 /* function Helloworld(props){
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}

      </div>
  )
}  */
//cuando me diga que props no está definida la solución es añadirle un this.
/* class Helloworld extends React.Component { */
  //Asi jugamos con los estados, en caso de que sea true nos mostrará los div y h3 con textos
  //en caso de que sea false, nos mostrará el mensaje del else 3 veces, la misma que los textos
 /*  state = {
    show: true
  } */
  //funcion para cambiar el estado de show, almacenamos en una constante la fucnion que hará todo
  //para más abajo tener unicamente que llamar al nombre
 /*  toggleShow= ()=> { */
    //aqui estamos diciendo, show = lo opuesto al estado actual, si es true se vuelve false y viceversa
   /*  this.setState({show: !this.state.show})
  }
  
  render(){ */
    //Traducción, si this.state(arriba).show es verdadero pinta los textos
    //ponemos this poque no está definido show
   /*  if(this.state.show){
    return (
      <div id="hello">
      <h3>{this.props.subtitle}</h3>
      {this.props.mytext} */
     /*  onClick funciona para dar eventos a los botones, cuando le das pasa algo */
     /* con este cacho de codigo y el metodo de react setState podemos cambiar el estado antes citado de manera clara
     y limpia, cada vez que le damos al boton cambia el estado y nos muestra el texto de abajo */
    /*   <button onClick={this.toggleShow}>Toggle Show/Cambiar Estado </button>


      </div>
    )
    }else{
     return  <h1>
       There are not elements
       <button onClick={this.toggleShow}>Toggle Show/Cambiar Estado </button>
       </h1>
     
    }
  }
} */
//esta linea de codigo es identica a la funcion descrita más abajo
/* const app = () => <div>This is my component: <Helloworld/></div>

class Appp extends React.Component{
  render(){
    return <div>This is my component: <Helloworld/></div>
  }
  
} */

/* function App() {
  return (
    <div > */
      /* así llamamos a la funcion helloworld de arriba dentro del div 
      lo hacemos como si fuera una etiqueta de html. Podemos usar las fuciones las 
      veces que queramos unicamente teniendo que citarla */
     /*  This is my component: <Helloworld mytext="Hola Chadi" subtitle="subtitulo random"/>
       <Helloworld mytext="Chadi hola" subtitle="segundo mytext"/>
        <Helloworld mytext="Hola Hola" subtitle="tercer my text"/>
    </div>
  );
} */

class App extends Component{

  state = {
    tasks: tasks
  }
//se pueden pasar como parametros los valores que vamos a recibir/añadir o el nombre del objeto en este caso task
  addTask = (title, description) => {
   const newTask = {
     title: title, 
     description: description,
     id: this.state.tasks.length
   
   
   }
   
    
   
   //asi cambiamos el estado inicial
    this.setState({ 
     //...this.state.tasks = significa recoger todos los datos que ya teniamos de las tareas, y voy a añadir una newTask 
      tasks: [...this.state.tasks, newTask]
      
    }) 
  
  } 

    deleteTask = (id) =>{
      //metodo filter de javascript permite filtrar entree los datos que queramos
      const newTasks = this.state.tasks.filter(task => task.id !== id);
      this.setState({tasks: newTasks})

    }
    checkDone = (id) =>{

       const newTasks =  this.state.tasks.map(task=>{
          if(task.id === id){
            task.done = !task.done
          }
          return task;
        });
        this.setState({tasks: newTasks})
    }
  render() {
    
   
    return <div>
       
        <BrowserRouter>
          <Routes> 
            <Link to="/home">home</Link>
            <br></br>
            <Link to="/posts">posts</Link> 
        <Route exact path="/" element={()=>{
             return <div>
                <TaskForm addTask={this.addTask}/>
                <Tasks 
                 tasks={this.state.tasks}
                 deleteTask={this.deleteTask}
                 checkDone={this.checkDone}
                 />
               </div>
                }}>     

       
                  

        </Route>
      
      </Routes>
        
        <Posts/>
        
        </BrowserRouter>
       
    </div>
    
  }
}


export default App;
