import React from 'react';
function Square(props){
    return(
        <button style={{height:'40px'}} onClick={props.onClick}>{props.value}</button>
    );
}
export default Square; 