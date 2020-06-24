import React, { Fragment } from 'react';
import Modal from '../Modal';

function StreamDelete() {
  const actions = () => {
    return (
      <Fragment>
        <button className='ui button'>Cancelar</button>
        <button className='ui button negative'>Borrar</button>
      </Fragment>
    );
  };

  return (
    <div>
      <Modal
        title='Borrar Stream'
        description='Esta seguro que quiere borrar el stream?'
        actions={actions}
      />
    </div>
  );
}

export default StreamDelete;
