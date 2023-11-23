import { FC, InputHTMLAttributes } from "react"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { label? : string}


export const Input:FC<InputProps> = (inputProps) => {
    return(
        <div>
            {inputProps.label && 
                <label
                    htmlFor={inputProps.id}
                    className="block text-xs text-gray-600 uppercase"
                >
                    {inputProps.label}
                </label>
            }
            
            <input
            {...inputProps}
            className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            />
        </div>
    )
}