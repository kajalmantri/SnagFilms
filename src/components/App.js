import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FilmsList  from './FilmsList'
import {getFilmsList} from '../redux/action';

export class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getFilmsList();
  }

  
  render(){
    return (
      <div className='container'>
      <div className='row'>
        {this.props.films && 
        <FilmsList {...this.props} />
        }
      </div>    
    </div>
    )
  }
}


function mapStateToProps(state) {
  return {
      films: state.films.films
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  getFilmsList
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
