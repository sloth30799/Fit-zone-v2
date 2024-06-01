import { ReactNode } from "react"

type TitleWithBorderProps = {
	children: ReactNode
	className?: string
}

const TitleWithBorder = ({ children, className }: TitleWithBorderProps) => {
	return (
		<div className={`relative ${className} top-corners p-1 px-3`}>
			<h1 className="text-primary underline underline-offset-4 hover:no-underline cursor-default">
				{children}
			</h1>
		</div>
	)
}

export default TitleWithBorder
