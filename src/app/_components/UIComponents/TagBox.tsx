import { ReactNode } from "react"

type TagBoxProps = {
    children: ReactNode
    className?: string
}

const TagBox = ({ children, className }: TagBoxProps) => {
    return (
        <div className={`relative ${className}`}>
            <div className="top-left-bar"></div>
            <div className="top-dot"></div>
            <div className="bottom-bar"></div>
            <h1 className="text-sm text-primary">{children}</h1>
        </div>
    )
}

export default TagBox
