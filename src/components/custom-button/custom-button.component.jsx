import React from 'react'
import "./custom-button.styles.scss"

export const CustomButton = ({children, isGoogleSignin, inverted, ...otherProps}) => {
    return (
        <div className={`${inverted ? 'inverted' : ''} ${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </div>
    )
}
