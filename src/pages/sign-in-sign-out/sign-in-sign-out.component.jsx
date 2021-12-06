import React from 'react'
import Signin from "../../components/signin/signin.component";
import Signup from "../../components/signup/signup.component";
import "./sign-in-sign-out.styles.scss"

export const SigninSignout = () => {
    return (
        <div className="signin-signup">
            <Signin />
            <Signup />
        </div>
    )
}
