import React from 'react';
import StreamForm from './StreamForm';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions/index';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    const stream = this.props.stream;

    if (!stream) {
      return <div>Cargando...</div>;
    }

    const { title, description } = stream;
    return (
      <div>
        <h3>Editar stream</h3>
        <StreamForm
          initialValues={{ title, description }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
