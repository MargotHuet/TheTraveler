import React, { useState } from "react";
import { Fragment } from "react";
import Navbar from './Navbar';
import axios from "axios";

function Register() {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState(''); 

    const handleCreateUser = (e) => {
        e.preventDefault();
    
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
    
        axios.post("http://localhost:5000/register", userData)
        .then(response => {
            console.log(response);
            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
            setIsSubmitted(true);
            setSubmissionMessage('Inscription réussie.')
        })
        .catch(error => {
            console.log(error);
            setSubmissionMessage('Il semble que vous soyez déjà inscrit. Connectez-vous.')
        });
    };

    return(
        <Fragment>
            <Navbar />
            <div>
                <h1 className="text-center mt-5">Inscription</h1>
                <form onSubmit={handleCreateUser} action="/register" method="post">
                    <div className="divide-y divide-gray-200">
					        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
							        <input 
                                        autocomplete="off" 
                                        value={firstName}
                                        onChange={(event) => {setFirstname(event.target.value)}} 
                                        id="firstname" 
                                        name="firstName" 
                                        type="text" 
                                        className="peer placeholder-transparent h-10 w-1/4 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
                                        placeholder="Your firstname"
                                    />
							        <label for="firstname" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Your firstname</label>
						        </div>
                                <div className="relative">
							        <input 
                                        autocomplete="off" 
                                        value={lastName}
                                        onChange={(event) => {setLastname(event.target.value)}} 
                                        id="lastname" 
                                        name="lastName" 
                                        type="text" 
                                        className="peer placeholder-transparent h-10 w-1/4 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
                                        placeholder="Your lastname" 
                                    />
							        <label for="lastname" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Your lastname</label>
						        </div>
						        <div className="relative">
							        <input 
                                        autocomplete="off" 
                                        value={email}
                                        onChange={(event) => {setEmail(event.target.value)}} 
                                        id="email" 
                                        name="email" 
                                        type="email" 
                                        className="peer placeholder-transparent h-10 w-1/4 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
                                        placeholder="Email address"
                                    />
							        <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						        </div>
						        <div className="relative">
							        <input 
                                        autocomplete="off" 
                                        value={password}
                                        onChange={(event) => {setPassword(event.target.value)}} 
                                        id="password" 
                                        name="password" 
                                        type="password" 
                                        className="peer placeholder-transparent h-10 w-1/4 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
                                        placeholder="Password"
                                    />
							        <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						        </div>
						        <div className="relative">
							        <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1">Inscription</button>
						        </div>
					        </div>
                        </div>
                </form>
                 {/* Efface les données du formulaire et affiche un message lorsque la soumission des données est OK */}
            {isSubmitted  && ( 
                <div className="text-center mt-3">  
                    <p>{submissionMessage}</p>
                </div>
            )} 
            </div>
        </Fragment>
    )
}

export default Register;