import React, {Component} from 'react';
import Task from './Task';
//(biblioteca)proptypes nos ayuda a definir los datos que nos van pasando. Buscar más info porque no me he enterado de nada.
import PropTypes from 'prop-types';
class Tasks extends Component {
    render(){
     

        return this.props.tasks.map(task=>
             <Task 
             task={task} 
             key={task.id}
             deleteTask={this.props.deleteTask}
             checkDone={this.props.checkDone}/>);
         
        }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;