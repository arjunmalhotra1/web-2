import { ReactNode } from "react";

export default function({children}: {children: ReactNode}) {
    return <div>
        <div> Header</div>
        {children}
        <div> Footer</div>
    </div>
}