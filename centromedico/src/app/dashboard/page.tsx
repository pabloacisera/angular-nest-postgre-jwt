import React from 'react'

export default function Dashboard() {
  return(
    <div>
      <p>
        Esto es un Dasboard. Aqui hay una tabla de clientes
      </p>
      <a href="http://localhost:3000/client/view/:id"><button>Ver cliente por Id</button></a>
      <a href="http://localhost:3000/client/edit/:id"><button>Editar cliente por Id</button></a>
      <a href="http://localhost:3000/client/delete/:id"><button>Borrar cliente por Id</button></a>

    </div>
  )
}