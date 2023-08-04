import Angular from './images/angular.png';
import React from './images/react.png';
import Boostrap from './images/bootstrap.png';
import Csharp from './images/csharp.jpg';
import './course.css';
const CourseMap={
    Angular:Angular,
    React:React,
    Boostrap:Boostrap,
    Csharp:Csharp
}
function Course ({courseName}) {
    return ( 
    <div className='courseDiv'>
<img className='course' src={CourseMap[courseName]} />

    </div>

     );
}

export default Course ;