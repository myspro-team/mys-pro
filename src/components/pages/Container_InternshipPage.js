import React, { Component } from 'react';
import InternshipPage from './InternshipPage'
import {connect} from 'react-redux'
import {SERVER_NAME} from "../../Constants"
import axios from 'axios'
import { bindActionCreators } from 'redux'
import * as ActionCreators from './sections/redux/action/index'
class Container_InternshipPage extends Component {
  render() {
      return (
          <div>
              <InternshipPage
              listIntern={this.props.listIntern}
              course={this.props.course}
              getInternList={() => this.props.getInternList()}
              getInternbySourse={() => this.props.getInternbySourse()}
              getCourse={() => this.props.getCourse()}
              listInternBySourse={this.props.listInternBySourse}></InternshipPage>
          </div>
      );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    listIntern: state.interns,
    listInternBySourse: state.internBySourse,
    course: state.courseList
  }
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getInternList: bindActionCreators(ActionCreators.getInternList,dispatch),
    getInternbySourse: bindActionCreators(ActionCreators.getInternbySourse,dispatch),
    getCourse: bindActionCreators(ActionCreators.getCourse,dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps,)(Container_InternshipPage)
