// import { Menu } from "@/components/landing/menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/landing/menu";

export function Header() {
    return (
        <header className={'w-full px-4 py-2 h-auto max-h-32'}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center'>

                <div className="justify-center items-center flex">
                    <Link href={'/'}>
                        <Image src={'/devenvision/devenvision-header-logo.svg'} alt={'devenvision'} width={228} height={128} className={'w-full h-full min-h-24'} />
                    </Link>
                </div>
                <MainNav />
                <Button
                    className={'text-lg font-bold rounded-md text-white py-6 px-8 hidden lg:inline-flex cursor-pointer capitalize'} style={{
                        background: 'linear-gradient(117.97deg, #1D91FF 0.08%, #5EFFBB 100.46%)'

                    }}>Book a Demo</Button>
            </div>
        </header>
    );
}