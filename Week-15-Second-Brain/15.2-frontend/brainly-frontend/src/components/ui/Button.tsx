 interface ButtonProps {
    variant:"primary" | "secondary",
    size: "sm" | "md" | "lg"
    text: string,
    startIcon?:any;
    endIcon?:any;
    onClick: () => void
}

type Variants = "primary" | "secondary"

const variantStyles = {
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-400 text-purple-600"
}

const defaultStyles = "rounded-md pd-4"
const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-2 px-6"
}


export const Button = (props: ButtonProps) => {
  
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}></button>
}

<Button variant="primary" size="md" onClick={() =>{}} text={"asd"}/>