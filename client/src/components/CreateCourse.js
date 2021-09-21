import { useState , useContext } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import Form from './Form'
import Content, { Context } from '../Context'

const CreateCourse = () => {
   let history = useHistory()
   let { data, authenticatedUser } = useContext(Context)
   const [ course, setCourse ] = useState({})

   const { firstName, lastName } = authenticatedUser

   
   const change = (e) => {
    setCourse(prevValues => ({
        ...prevValues,
        [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = () => {
     course.userId =authenticatedUser.userId
     data.createCourse(course, authenticatedUser.emailaddress, authenticatedUser.password)
     .then(errors =>{
         if(errors.length){
             console.log(errors)
             setCourse({errors:errors})
         } else {
             history.push('/')
         }
     })
     .catch(err =>{
         console.log(err)
         return <Redirect to='/error'/>
     })
    }

    const handleCancel = () =>{
        history.push('/')
    }

    return(
        <main>
            <div className='wrap'>
                <h2> Create Course </h2>
                <Form 
                    submit={handleSubmit}
                    cancel={handleCancel}
                    errors={course.errors}
                    submitButtonText='Create Course'
                    elements={ () =>{
                        <div className='main--flex'>
                            <div>
                                <label htmlFor='title'> Course Title </label>
                                <input
                                    id='title'
                                    name='title'
                                    type='text'
                                    onChange={change}
                                />
                                <p>By {firstName} {lastName}</p>
                            </div>
                            <div>
                                <label htmlFor='descirption'> Course Description </label>
                                <textarea
                                    id='description'
                                    name='description'
                                    onChange={change}
                                />
                            </div>
                            <div>
                                <label htmlFor='estimatedTime'> Estimate Time </label>
                                <input
                                    id='estimatedTime'
                                    name='estimatedTime'
                                    type='text'
                                    onChange={change}
                                />
                            </div>
                            <div>
                                <label htmlFor='materialsNeeded'> Materials Needed </label>
                                <textarea
                                    id='materialsNeeded'
                                    name='materialsNeeded'
                                    onChange={change}
                                />
                            </div>
                        </div>                        
                    }}
                />
            </div>
        </main>
    )
}
export default CreateCourse