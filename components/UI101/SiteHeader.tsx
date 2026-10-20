
import Image from "next/image"
import Link from 'next/link'
import {OrganizationSwitcher, Show, SignIn, SignInButton, UserButton} from "@clerk/nextjs"
import {usePathname} from "next/navigation"
import { useAuth } from "@clerk/nextjs"
import { Button } from "../ui/button"
const Links = [
    {name: "Product", href: "/product"},
    {name : "how it works", href: "/how-it-works"},
    {name: "Pricing", href: "/pricing"},
]

const SiteHeader = () => {
  const pathName = usePathname()
  const { isSignedIn } = useAuth()

  const isLandingPage = pathName === "/"
  return (
   <header className="fixed inset-x-0 top-0 z-20 flex h-18 items-center justify-between border-b border-white/6 bg-background/70 px-6 backdrop-blur-md md:px-10 
   
   
   ">
  <Link href={isSignedIn && !isLandingPage ? "/dashboard" : "/"} 
  className="flex items-center">
   <Image src = "/logo.png" alt="Logo" width={314} height={160} className = "h-9 w-auto"  priority/>
   <h1 className = "font-semibold text-xl text-primary">Output</h1>
   </Link>
{
isLandingPage && 

(

<nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
{Links.map((link) => (
    <Link key={link.name} href={`#${link.href}`} 
    className="transition-colors hover:text-foreground">
        {link.name}
    </Link>
))}
</nav>  

)}

<div className="flex items-center gap-4">
  <Show when  = "signed-out">

<SignInButton mode="modal" >
  <Button  variant="ghost" size="sm">
  Get Started
</Button>


</SignInButton>

  </Show>
  <Show when = "signed-in">

<OrganizationSwitcher afterCreateOrganizationUrl="/dashboard" afterSelectOrganizationUrl="/dashboard" />

{isLandingPage &&(
  <Button size = "sm">
    <Link href="/dashboard">Dashboard</Link>
  </Button>
)}
<UserButton/>
  </Show>

</div>


   </header>
  )
}

export default SiteHeader
