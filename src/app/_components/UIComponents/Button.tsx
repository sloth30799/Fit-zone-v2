import { ReactNode } from "react"

type ButtonProps = {
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    className?: string
    children: ReactNode
}

const Button = ({ leftIcon, rightIcon, className, children }: ButtonProps) => {
    return (
        <button className={`${className} btn`}>
            {leftIcon && leftIcon}
            {children}
            {rightIcon && rightIcon}
        </button>
    )
}

export default Button
