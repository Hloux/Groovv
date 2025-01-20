import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
      <header className="w-full border-b-2 border-b-black bg-yellow-400">
        <div className="wrapper flex items-center justify-between">
            <Link href="/" className="w-36">
                <Image src="/assets/images/small.png" width={250} height={80} alt="Groovv Logo"/>    
            </Link>

            <SignedIn>
                <nav className="md:flex-between hidden w-full max-w-xs">
                    <NavItems />
                </nav>
            </SignedIn>

            <div className="flex w-32 justify-end gap-3">
            <SignedIn>
                <UserButton />
                <MobileNav />
            </SignedIn>
            <SignedOut>
                <Button asChild className="rounded-full" size="lg">
                    <Link href="/sign-in">Login</Link>
                </Button>
            </SignedOut>
            </div>
        </div>
      </header>
  )
}

export default Header
