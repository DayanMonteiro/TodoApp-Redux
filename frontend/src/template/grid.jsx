import React, { Component } from 'react'

export default class Grid extends Component {
    toCssClasses(numbers) {
        /* O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método. */
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        // celular
        if(cols[0]) classes += `col-xs-${cols[0]}`
        // tablets
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        // dispositivos médios
        if(cols[2]) classes += ` col-md-${cols[2]}`
        // telas maiores
        if(cols[3]) classes += ` col-lg-${cols[3]}`

        return classes 
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}

