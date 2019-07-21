import axios from 'axios'

export const getInternList = () => {
    return (dispatch) => {
        return axios.get('http://localhost:8080/intern')
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
    }
}

export const getInternbySourse = () => {
    return (dispatch) => {
        return axios.get('http://localhost:8080/intern/' + JSON.parse(sessionStorage.getItem('user')).ID + '/course')
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

export const getCourse = () => {
  return (dispatch) => {
    return axios.get('http://localhost:8080/courses')
    .then((res) => {
        dispatch({type:"GET_ALL_COURSE",getCourse:res.data})
    })
  }
}