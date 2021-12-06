import React from 'react'
import "./custom-button.styles.scss"

export const CustomButton = ({children, isGoogleSignin, ...otherProps}) => {
    return (
        <div className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </div>
    )
}
