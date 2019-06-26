import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEm } from '../store/actions';
import { CharacterList } from '../components';

class CharacterListView extends Component {
  handleFetch = _ => {
    this.props.getEm(this.props.next);
  };

  componentDidMount() {
    this.handleFetch();
  }

  render() {
    const { characters, error, fetching,
            next, population, total } = this.props;

    return (
      <div className="CharactersList_wrapper">
        {population && total && <h1>Loaded {population}/{total}</h1>}
        {characters && <CharacterList characters={characters} />}
        {fetching && <p>. . . l o a d i n g . . .</p>}
        {error && <p>{error}</p>}
        {population < total &&
          <button onClick={this.handleFetch}>
            load characters
          </button>
        }
      </div>
    );
  }
}

const mapState = state => ({
  ...state.charsReducer
}); 

export default connect(
  mapState,
  { getEm }
)(CharacterListView);
