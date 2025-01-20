import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from '../ui/separator'
import NavItems from './NavItems'
import { DialogTitle } from '@radix-ui/react-dialog'

  

const MobileNav = () => {
  return (
    <nav className='md:hidden'>
        <Sheet>
            <SheetTrigger className='align-middle'>
                <Image src="assets/icons/menu.svg" alt="menu"
                    width={24}
                    height={24}
                    className='cursor-pointer'/>
            </SheetTrigger>
                <SheetContent className='flex flex-col gap-6 bg-yellow-400 md:hidden'>
                        <DialogTitle>
                            <Image src="/assets/images/small.png" 
                            alt='logo'
                            width={250}
                            height={48}
                        />
                        </DialogTitle>
                    
                <Separator className='border-gray-50'/>
                <NavItems />
                </SheetContent>
        </Sheet>

    </nav>
  )
}

export default MobileNav
