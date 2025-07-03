import {ReactNode} from "react";

export function GradientSpan({children}:{children:ReactNode}) {
    return (
        <span className='text-transparent bg-clip-text bg-gradient-to-b from-[#1D91FF] to-[#5EFFBB]'>
            {children}
        </span>
    )
}