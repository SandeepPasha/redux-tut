import React from 'react';

function PropsRedux(props) {
    console.warn(props.data)
    const {data} = props
  return (
    <div>
        <h1>PropsRedux</h1>
        <h3>{data.name}</h3>
        <h3>{data.age}</h3>
    </div>
  )
}

export default PropsRedux;