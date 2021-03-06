import {useState, useContext, useEffect} from 'react'
import {Context} from '../Context'
import { useHistory, useParams, Redirect, useLocation } from 'react-router-dom'
import Form from './Form'

const UpdateCourse = () => {
    let history = useHistory()
    const {id} = useParams()
    let {data, authenticatedUser} = useContext(Context)
    const [course, setCourse] = useState({})
    const [errors, setErrors] = useState({})
    const location = useLocation()
    const {courseUserId} = location.state || 0
    const { firstName, lastName, emailAddress, password } = authenticatedUser
    

    useEffect(() =>{
        data.getCourse(id)
        .then(course => setCourse(course))
    }, [data, id])

    const change = (e) => {
        setCourse(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value,
            }))
        }

    const handleSubmit = () => {
        data.updateCourse(id, course, emailAddress, password)
        .then( errs => {
            if (errs.length) {
                console.log(errors)
                setErrors({errs})
                console.log(course)
            } else {
                console.log(course)
                history.push(`/courses/${id}`)
            }
        })
        .catch(err =>{
            console.log(err)
            return <Redirect to='/error' />
        })
    }

    const handleCancel = () =>{
        history.push(`/courses/${id}`)
    }

    if(course === null){
        return <Redirect to='/notfound' />
    }else if(authenticatedUser.id !== courseUserId){
        return <Redirect to='/forbidden' />
    }else {
        return(
            <main>
                <div className='wrap'>
                    <h2>Update Course</h2>
                    <Form 
                        cancel={handleCancel}
                        errors={errors.errs}
                        submit={handleSubmit}
                        submitButtonText='Update Course'
                        elements={() =>(
                            <div className='main--flex'>
                            <div>
                                <label htmlFor='title'> Course Title </label>
                                <input
                                    id='title'
                                    name='title'
                                    type='text'
                                    defaultValue={course.title}
                                    onChange={change}
                                    onKeyUp={change}   
                                />
                                <p>By {firstName} {lastName}</p>

                                <label htmlFor='description'> Course Description </label>
                                <textarea
                                    id='description'
                                    name='description'
                                    defaultValue={course.description}
                                    onChange={change}
                                    onKeyUp={change}                                    
                                />
                            </div>
                            <div>
                                <label htmlFor='estimatedTime'> Estimate Time </label>
                                <input
                                    id='estimatedTime'
                                    name='estimatedTime'
                                    type='text'
                                    defaultValue={course.estimatedTime}
                                    onChange={change}
                                />

                                <label htmlFor='materialsNeeded'> Materials Needed </label>
                                <textarea
                                    id='materialsNeeded'
                                    name='materialsNeeded'
                                    defaultValue={course.materialsNeeded}
                                    onChange={change}
                                />
                            </div>
                        </div>    
                        )}
                    />
                </div>
            </main>
        )
    }

}
export default UpdateCourse