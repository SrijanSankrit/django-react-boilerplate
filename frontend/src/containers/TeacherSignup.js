import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {signup} from '../actions/auth';
 import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TeacherSignup = ({setAlert, signup, isAuthenticated}) =>  {

    const [availableSubjects, setAvailableSubjects] = useState([]);

    const [formData, setFormData] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        password2 : '',
        subjects : [],
    });

    const fetchSubjects = async () => {
        const res = await axios.get('http://localhost:8000/api/accounts/subjects/');
        setAvailableSubjects(res.data);
    }

    useEffect(() => {
            fetchSubjects();
        }, [])

    const {firstName, lastName, email, password, password2, subjects} = formData;

    const onChange = e => {
        return setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    };

    const onCheckBox = e => {
        
        if(e.target.checked) {
            setFormData({
                ...formData,
                subjects : subjects.concat(e.target.value)
            });
        } else {
                setFormData({
                ...formData,
                subjects : subjects.filter((item) => item !== e.target.value)
                })
        }

    };

    const onSubmit = e => {
        e.preventDefault();

        signup(email, firstName, lastName, password, password2, subjects, false);

    };

    return (
        <div>
            <h1>Signup as a Teacher</h1>
            <p>Signup as a teacher to help people excel in these tough times.</p>
            
            <form className='auth_form' onSubmit={onSubmit}>
                
                <div className="auth_form_group">
                    <input 
                        className="auth_form_input" 
                        type="email" 
                        placeholder="Email Address" 
                        name="email" 
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>

                <div className="auth_form_group">
                    <input 
                        className="auth_form_input" 
                        type="text" 
                        placeholder="First Name" 
                        name="firstName" 
                        value={firstName}
                        onChange={onChange}
                        required
                    />
                </div>

                <div className="auth_form_group">
                    <input 
                        className="auth_form_input" 
                        type="text" 
                        placeholder="Last Name" 
                        name="lastName" 
                        value={lastName}
                        onChange={onChange}
                        required
                    />
                </div>

                <div className="auth_form_group">
                    <input 
                        className="auth_form_input" 
                        type="password" 
                        placeholder="password" 
                        name="password" 
                        value={password} 
                        minLength= '6'
                        onChange={onChange}
                        required
                    />
                </div>

                <div className="auth_form_group">
                    <input 
                        className="auth_form_input" 
                        type="password" 
                        placeholder="Re-enter password" 
                        name="password2" 
                        value={password2} 
                        minLength= '6'
                        onChange={onChange}
                        required
                    />
                </div>

                <div className="auth_form_group">
                    { availableSubjects.map(subject => (
                        <div key={subject.id}>
                            <input id={subject.id} name={subject.name} type="checkbox" value= {subject.id} onChange={onCheckBox} />
                            <p>{subject.name}</p>
                        </div>
                    )) }
                </div>

                <button className="auth_form_button">Signup</button>
            </form>

            <p>
                Already have an account ? <Link to="/login">Login already</Link> </p>
        </div>
    )
}

TeacherSignup.propTypes = {
    isAuthenticated : PropTypes.bool,
    signup : PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated,

})

export default connect(mapStateToProps, {signup})(TeacherSignup);
