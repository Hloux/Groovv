import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
    <section className="bg-cover bg-center bg-[url('/assets/images/test-2.png')] py-5 md:py-10 ">
      <div className="flex justify-center p-8">
        <div className="flex flex-col justify-center gap-2">
            <h1 className="h1-bold">
              Discover events all across South Africa
            </h1>
              <p className="p-regular-20 md:p-regular-24">
                Book your tickets now and attend some of the biggest events in the Country!
              </p>
          <Button size="lg" asChild className="bg-yellow-400 text-black button w-full sm:w-fit hover:bg-yellow-300">
            <Link href="#events">
              Explore
            </Link>
          </Button>
        </div>
      </div>
    </section>

    <section id="discover" className="w-full flex items-center py-8 p-7">
          <h3 className="h3-bold mr-auto">#DiwaKae near you</h3>
          <p className="ml-auto">Browse all</p>
    </section>
    <section>
      <div className="flex w-full flex-col gap-5 md:flex-row p-7">
        Discover
      </div>
    </section>
    </>
  )
}
