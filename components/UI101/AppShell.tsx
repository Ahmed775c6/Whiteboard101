'use client'
import {usePathname} from "next/navigation"
import SiteHeader from "./SiteHeader"
const AppShell = ({children}: {children: React.ReactNode}) => {
    const pathName = usePathname()
    const isFullScreenRoute = pathName?.startsWith("/workspace/") || pathName?.startsWith("/shared/")
 if(isFullScreenRoute){
return <>{children}</>


 }

    return (
<>
<SiteHeader/>
<div className="flex-1 flex flex-col pt-18">
{children}

</div>



</>
  )
}

export default AppShell
