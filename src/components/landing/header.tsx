import { Menu } from "@/components/landing/menu";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className={'flex justify-between items-center px-4 py-2 h-auto max-h-32'}>
            <div className="flex justify-center items-center w-60 h-32 p-2">
                <Image src={'/devenvision/devenvision-logo.png'} alt={'devenvision'} width={228} height={50} className={'w-full h-full'} />
            </div>
            <Menu />
            <Button className={'text-lg font-bold rounded-md text-white py-3 px-4'} style={{
                background: 'linear-gradient(117.97deg, #1D91FF 0.08%, #5EFFBB 100.46%)'

            }}>Book a Demo</Button>
        </header>
    )
}