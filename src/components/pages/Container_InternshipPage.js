import React, { Component } from 'react';
import InternshipPage from './InternshipPage'
import {connect} from 'react-redux'
import {SERVER_NAME} from "../../Constants"
import axios from 'axios'
class Container_InternshipPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            user : JSON.parse(sessionStorage.getItem('user'))
        }
    }
    render() {
        return (
            <div>
                <InternshipPage
                listIntern={this.props.listIntern}
                course={this.props.course}
                getInternList={() => this.props.getInternList()}
                getInternbySourse={() => this.props.getInternbySourse()}
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
      getInternList: () => {
        axios.get(SERVER_NAME + 'intern')
        .then((res) => {
          let items = []
          let stt = 1
          res.data.map((value => {
              let middle = value.Intern.DoB.split('-',3)
              let date = middle[2].substring(0,2) + "/" + middle[1] + "/" + middle[0]
              items.push([stt,value.Intern.ID,value.Intern.Name,value.Intern.PhoneNumber,value.Intern.Email,value.Intern.Gender ? "Male" : "Female",date,value.Intern.University,value.Intern.Faculty,value.Course,value.Intern.CourseID])
              stt++
            }))
          dispatch({type:"GET_ALL_INTERN",getInterns:items})
        })
      },
      getInternbySourse: () => {
        axios.get(SERVER_NAME + 'intern/' + JSON.parse(sessionStorage.getItem('user')).ID + '/course')
        .then((res) => {
          let items = []
          let stt = 1
          res.data.map((value => {
              let middle = value.DayofBirth.split('-',3)
              let date = middle[2].substring(0,2) + "/" + middle[1] + "/" + middle[0]
              items.push([stt,value.ID,value.Name,value.PhoneNumber,value.Email,value.Gender ? "Male" : "Female",date,value.University,value.Faculty,value.CourseName,value.CourseID])
              stt++
            }))
          dispatch({type:"GET_INTERN_BY_SOURSE",getInternBySourse:items})
        })
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps,)(Container_InternshipPage)
