import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions/index';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onClickDelete = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderActions = () => {
    return (
      <Fragment>
        <Link to='/' className='ui button'>
          Cancelar
        </Link>
        <button
          onClick={() => this.onClickDelete()}
          className='ui button negative'
        >
          Borrar
        </button>
      </Fragment>
    );
  };

  renderModal = () => {
    if (this.props.stream !== undefined) {
      const { title, content, id } = this.props.stream;
      return (
        <Modal
          title={`Borrar Stream '${title}'`}
          content='Esta seguro que quiere borrar el stream?'
          actions={this.renderActions}
          onDissmis={() => history.push('/')}
        />
      );
    }
    return <div>Loading...</div>; //O un spinner maybe
  };
  render() {
    return this.renderModal();
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
