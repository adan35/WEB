import { Component } from "react";
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";
import { getAuth, updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import "./signup.styles.scss";

export default class Signup extends Component {
    constructor() {
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        console.log("button is clicked");
        const { displayName, email, password, confirmPassword } = this.state;
        // password and confirmPassword must be same
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        const auth = getAuth();
        // create User With Email And Password
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                //update displayName
                updateProfile(user, { displayName })
                    .then(() => { }, function (error) {
                        alert(error);
                    });
                //clearing email and password input fields
                this.setState({
                    displayName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                })

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("msg: " + errorMessage + "\ncode:" + errorCode);
            });

    }
    //setState here
    handleChange = async event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>signup with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                        autoComplete="on"
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                        autoComplete="on"
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="password"
                        required
                        autoComplete="on"
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                        autoComplete="on"
                    />
                    <div className="button">
                        <CustomButton type="submit" onClick={this.handleSubmit}>SIGN UP</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}
