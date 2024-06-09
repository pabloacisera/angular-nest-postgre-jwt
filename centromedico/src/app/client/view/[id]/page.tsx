import React from 'react'

function ViewClientId( { params } ) {
  return (
    <div>
      Aqui se muestra un solo cliente por id: {params.id}
    </div>
  )
}

export default ViewClientId
