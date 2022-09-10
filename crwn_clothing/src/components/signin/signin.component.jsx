import React, { Component } from 'react'
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./signin.styles.scss"

export default class Signin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        // sign In With Email And Password
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert(user.displayName + " signin success");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("msg: " + errorMessage + "\ncode:" + errorCode);
            });
            //clearing email and password input fields
            this.setState({ email: "", password: ""})
    }
    //setState here
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="signin">
                <h1>I already have an account</h1>
                <span>Sign in with your email or password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="email"
                        handleChange={this.handleChange}
                        required
                        autoComplete="on"
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="password"
                        handleChange={this.handleChange}
                        required
                        autoComplete="on"
                    />

                    <div className="buttons">
                        <CustomButton type="submit" onClick={this.handleSubmit}> SIGN IN </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignin> Sign in with google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
