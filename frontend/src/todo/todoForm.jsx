import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = (e) => {
        // precionando Enter vai add
        if (e.key === 'Enter') {
            // precionando shift + enter vai pesquisar
            e.shiftKey ? props.handleSearch() : props.handleAdd()
                  // precionar esc limpa a tabela
        } else if (e.key === 'Escape') {
            props.handleClear() 
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input 
                    id='description' 
                    className='form-control' 
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description}>
                </input>
            </Grid>
        
            <Grid cols='12 3 2'> 
                <IconButton style='primary' icon='fa-plus'
                    onClick={props.handleAdd}>
                </IconButton>  
                <IconButton style='info' icon='fa-search'
                    onClick={props.handleSearch}>
                </IconButton>
                <IconButton style='default' icon='fa-times'
                    onClick={props.handleClear}>
                </IconButton>
            </Grid>
        </div>
    )
}





