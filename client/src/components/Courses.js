import { useState, useEffect, useContext} from 'react'
import {Context} from '../Context'
import { Link } from 'react-router-dom'

/**
 * Calls the list of all courses from the data base, maps them and 
 * renders them to the main page.
 */
const Courses = () =>{
    const {data} = useContext(Context)
    const [courses, setCourses] = useState([])
    
    useEffect(() =>{
        data.getAllCourses()
        .then(courses => setCourses(courses))
    }, [data])

    return(
        <main>
            <div className='wrap main--grid'>
                {courses.map(course =>(
                    <Link className='course--module course--link'
                    to={`courses/${course.id}`}
                    key={course.id}>
                        <h2 className='course--label'> Course </h2>
                        <h3 className='course--title'> {course.title}</h3>
                    </Link>
                ))}
                <Link className='course--module course--add--module'
                to='/courses/create'>
                    <span className="course--add--title">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                        New Course
                    </span>
                </Link>
            </div>
        </main>
    )
        }
export default Courses