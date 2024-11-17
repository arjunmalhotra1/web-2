 interface ButtonProps {
    variant:"primary" | "secondary",
    size: "sm" | "md" | "lg"
    text: string,
    startIcon?:any;
    endIcon?:any;
    onClick: () => void
}

const variantStyles = {
    "default":"bg-purple-600 text-white",
    "default":"bg-purple-600 text-white"
}


export const Button = (props: ButtonProps) => {
  
    return <button></button>
}

<Button variant="primary" size="md" onClick={() =>{}} text={"asd"}/>