import Image from "next/image";
import { Card } from "@/components/ui/card";
import { GradientSpan } from "@/components/gradient-span";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export function ClientsCarousel() {
    return (
        <div className='w-full bg-[#F5F5F7] py-10 min-h-72'>
            <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2'>
                <h2 className='text-3xl sm:text-[44px] font-bold uppercase font-heading py-4'>Our {' '}
                    <GradientSpan> Clients </GradientSpan>
                </h2>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-full my-6"
                >
                    <CarouselContent className="gap-x-7">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="basis-auto">
                                <div className="p-1">
                                    <Card className='flex flex-col justify-center items-center h-20 w-52 rounded-lg bg-white border border-white shadow-none contain-content text-center'>
                                        <Image
                                            src={'/client.png'}
                                            width={200}
                                            height={80}
                                            alt='Client logo'
                                            className="cursor-grab"
                                        />
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}