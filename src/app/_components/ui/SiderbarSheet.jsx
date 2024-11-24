import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { LuAlignJustify } from "react-icons/lu";
import logo from "@/assets/svg/logo.svg";
import Image from "next/image";


export function SidebarSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <LuAlignJustify className="w-8 h-8" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between h-full">
        <div>
          <SheetHeader>
            <SheetTitle>
            <Image src={logo} width={150} height={50} alt="logo" />

            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="w-full pt-10">
            <div className="grid gap-6">
              {/* Use SheetClose to close the sheet on link click */}
              <SheetClose asChild>
                <Link
                  href={`/about-us`}
                  className="font-medium text-custom-neutral20 hover:text-custom-primary"
                >
                  About Us
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href={`/services`}
                  className="font-medium text-custom-neutral20 hover:text-custom-primary"
                >
                  Our Services
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href={`/career`}
                  className="font-medium text-custom-neutral20 hover:text-custom-primary"
                >
                  Career
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href={`/contact-us`}
                  className="font-medium text-custom-neutral20 hover:text-custom-primary"
                >
                  Contact Us
                </Link>
              </SheetClose>
            </div>
            <div className="mt-5 w-full">
              <SheetClose asChild>
                <Link href={`/contact-us`}>
                  <button className="bg-custom-primary w-full hover:bg-[#b20779] text-white px-6 py-3 transition-all duration-200">
                    Get In Touch
                  </button>
                </Link>
              </SheetClose>
            </div>
          </div>
        </div>
        <SheetFooter>
          <div>
            <span className="text-titleSmall">{`Logo@${new Date().getFullYear()}, All Right Reserved.`}</span>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
