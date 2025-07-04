import Image from "next/image";
import { GradientSpan } from "@/components/gradient-span";
import { whatWeOffer } from "@/data";
import { Button } from "@/components/ui/button";

export function WhatWeOffer() {
    return (
        <section className="py-15 bg-gradient-to-bl from-[#F4F7FB] to-[#C0EEEE] text-center">
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-15">
                <h4
                    className={"text-4xl sm:text-[44px] text-[#111] font-heading uppercase font-bold"}
                >
                    What we <GradientSpan> Offer </GradientSpan>{" "}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 px-4 sm:px-0">
                    {whatWeOffer.map((item, index) => (
                        <div
                            key={index}
                            className="bg-transparent rounded-xl relative shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
                        >
                            <div className="relative overflow-hidden">
                                <Image
                                    src={item.imgUrl}
                                    alt={item.title}
                                    className="object-cover group-hover:scale-105 group-hover:bg-transparent group-hover:backdrop-blur-sm w-full h-full transition-transform duration-300"
                                    width={374}
                                    height={470}
                                />
                            </div>
                            <div className="absolute bottom-0 bg-transparent p-4">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <Button variant={'gradient'} className="py-6 px-8">View More Services</Button>
            </div>

        </section>
    );
}
