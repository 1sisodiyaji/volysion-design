import Scales from "../ui/scales"


const CommonBorder = ({ children ,className}: { children: React.ReactNode ,className?:string}) => {
    return (
        <>
            <div className="flex flex-col flex-1 items-center justify-center w-full mx-auto max-w-page md:px-12 relative">
                <div className={`w-full relative flex flex-col items-center justify-center overflow-hidden py-24 md:py-32 ${className}`}>
                    <div className="absolute -inset-y-[30%] left-0 h-[160%] w-6 mask-t-from-90% mask-b-from-90%">
                        <Scales size={8} className="rounded-lg" />
                    </div>
                    <div className="absolute -inset-y-[20%] right-0 h-[160%] w-6 mask-t-from-90% mask-b-from-90%">
                        <Scales size={8} className="rounded-lg" />
                    </div>
                    <div className="absolute -inset-x-[30%] bottom-0 h-6 w-[160%] mask-r-from-90% mask-l-from-90%">
                        <Scales size={8} className="rounded-lg" />
                    </div>
                    {children}
                </div>
            </div>
   </>
  )
}

export default CommonBorder