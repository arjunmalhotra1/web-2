export function Otp() {
    

    return <div>
        <SubOtpBox/>
        <SubOtpBox/>
        <SubOtpBox/>
        <SubOtpBox/>
        <SubOtpBox/>
    </div>
}

function SubOtpBox() {
    return <div>
        <input type="text" className="m-2 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white"></input>
    </div>
}