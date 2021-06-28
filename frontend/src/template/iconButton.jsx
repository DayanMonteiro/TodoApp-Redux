import React from 'react'
import If from './if'

export default props => (
    <If test={!props.hide}>
        <button className={'btn btn-'+ props.style}
            onClick={props.onClick}>  
           <i className={`fa ${props.icon}`} aria-hidden="true"></i>  
        </button>
    </If>
)

// <i className="fa fa-plus" aria-hidden="true"></i> 
//   <i className={'fa fa-'+ props.icon}></i>
//<i className={"fas fa-" + props.icon} icon="fa-plus" aria-hidden="true"></i> 
//  <i className={`fa ${props.icon}`} aria-hidden="true"></i> 