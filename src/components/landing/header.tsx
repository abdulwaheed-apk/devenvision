import { Menu } from "@/components/landing/menu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
    return (
        <header className={'flex justify-between items-center px-4 py-2 h-auto max-h-32'}>
            <div className="flex justify-center items-center">
                <Link href={'/'}>
                <Image src={'/devenvision/devenvision-logo.png'} alt={'devenvision'} width={228} height={128} className={'w-full h-full min-h-24'} />
                </Link>
            </div>
            <Menu />
            <Button className={'text-lg font-bold rounded-md text-white py-3 px-4'} style={{
                background: 'linear-gradient(117.97deg, #1D91FF 0.08%, #5EFFBB 100.46%)'

            }}>Book a Demo</Button>
        </header>
    )
}