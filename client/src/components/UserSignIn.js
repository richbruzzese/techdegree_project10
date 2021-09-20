import {useContext, useState} from 'react'
import {Context} from '../Context'
import { Link, useHistory, Redirect } from 'react-router-dom'
import Form from './Form'


const UserSignIn = () => {

    let history = useHistory()
    const { actions } = useContext(Context)
    const [userCreds, setUserCreds] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        errors: []
    })

    const { emailAddress, password, errors } = userCreds

    const change = (e) => {
        setUserCreds(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = () => {
        actions.signIn(emailAddress, password)
        .then(user =>{
            if (user === null){
                setUserCreds({errors: ['Sign-in Unsuccessful']})
            }else {
                history.goBack()
            }
        })
        .catch(err =>{
            console.log(err)
            return <Redirect to='/error' />
        })

    }

    const handleCancel = () =>{
        history.push('/')
    }

    return(
    <div class="form--centered">
        <h2>Sign In</h2>
            <Form 
                cancel={handleCancel}
                submit={handleSubmit}
                errors={errors}
                submitButtonText="Sign In"
                elements={() =>(
                    <>
                        <label htmlFor='emailAddress'> Email Address</label>
                        <input 
                            id="emailAddress"
                            name="emailAddress"
                            type="email"
                            onChange={change}
                        />
                        <label htmlFor='password'>Password</label>
                        <input 
                            id='password'
                            name='password'
                            type='password'
                            onChange={change}
                        />
                    </>
                )}
            />
                
        <p>Don't have a user account? Click here to <a href="signup">sign up</a>!</p>

    </div>
    )

}
export default UserSignIn