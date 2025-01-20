import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t-2 border-black bg-yellow-400">
        <div className="p-5">
            <Link href='/'>
                <Image src="/assets/images/smallogo.png" 
                        alt="logonly"
                        width={150}
                        height={200} />
            </Link>
            <p>2025 GROOVV. All Rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
