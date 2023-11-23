import { ButtonHTMLAttributes, FC } from "react"
import LoadingDots from "../loading-dots/loading-dots"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { label? : string, loading?: false}


export const Button:FC<ButtonProps> = (inputProps) => {
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
            
            <button
                disabled={!inputProps.loading}
                className={`${
                    inputProps.loading
                    ? "cursor-not-allowed border-gray-200 bg-gray-100"
                    : "border-black bg-black text-white hover:bg-white hover:text-black"
                } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
            >
                {inputProps.loading ? (
                    <LoadingDots color="#808080" />
                ) : (
                <p>{inputProps.title}</p>
                )}
            </button>
        </div>
    )
}