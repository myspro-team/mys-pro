import React from 'react';
import InternPageForIntern from './sections/InternPageForIntern';
import InternPageForMentor from './sections/InternPageForMentor';


class MentorPage extends React.Component {

  constructor(props) {
        super(props);   
        this.state = {
            role: JSON.parse(sessionStorage.getItem('user')).Role
        };
  }

  render() {
    if(this.state.role === 1)
        return (
            <InternPageForIntern
            getInternbySourse={() => this.props.getInternbySourse()}
            listInternBySourse={this.props.listInternBySourse}
            ></InternPageForIntern>
            
        );
    else 
        return (
            <InternPageForMentor
            listIntern={this.props.listIntern}
            course={this.props.course}
            getInternList={() => this.props.getInternList()}
            getCourse={() => this.props.getCourse()}></InternPageForMentor>
        );
    }
  }

export default MentorPage
