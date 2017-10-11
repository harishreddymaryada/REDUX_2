import React from "react"
import {connect} from 'react-redux'

import { User } from '../components/User'
 import { Main } from '../components/Main'
import {setName} from '../actions/name_reducer1_action'

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("TEST2")}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
      return {
        user:state.reducer1
      }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    setName:(name) =>{
      dispatch(setName(name))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
