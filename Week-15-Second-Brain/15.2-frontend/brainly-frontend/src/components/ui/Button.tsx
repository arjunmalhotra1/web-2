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


export const Button = (props: ButtonProps) => {
  
    return <button className={""+defaultStrules + size}></button>
}

<Button variant="primary" size="md" onClick={() =>{}} text={"asd"}/>