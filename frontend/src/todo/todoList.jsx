import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

const TodoList =  props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : '' }>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='fa-check' hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}>
                    </IconButton>
                    <IconButton style='warning' icon='fa-undo' hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)}>
                    </IconButton>
                    <IconButton style='danger' icon="fa-trash" hide={!todo.done}
                        onClick={() => props.handleRemove(todo)}>         
                    </IconButton>
                </td>
            </tr>         
        ))
    }

    return (
      <table className='table'>
          <thead>
              <tr>
                  <th>Descrição</th>
                  <th className='tableActions'>Ações</th>
              </tr>
          </thead>
          <tbody>
              {renderRows()}
          </tbody>
      </table>
    )

}

const mapStateToProps = state => ({list: state.todo.list})
export default connect(mapStateToProps)(TodoList)