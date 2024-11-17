export interface buttonProps {
    variant:"primary" | "secondary",
    size: "sm" | "md" | "lg"
    text: string,
    startIcon:any;
    endIcon:any;
    onClick: () => void
}



export const Button = () => {
    return <button></button>
}

<Button variant="primary" size="md" onClick={} text{}/>