import Image from "next/image";
import { GradientSpan } from "@/components/gradient-span";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { points, stats } from "@/data";
import { CircleCheck } from "lucide-react";

export function WhatWeDo() {

    return (
        <section className={'max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white space-y-15'}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <BentoGrid />
                <div className={'py-4 space-y-6'}>
                    <h2 className={'text-4xl sm:text-[44px] text-[#111] font-heading uppercase font-bold'}>
                        What {' '}
                        <GradientSpan> we do </GradientSpan>
                    </h2>
                    <p className={'text-base font-medium text-black'}>
                        At DevEnvision, we strive to be the leading catalyst for digital transformation, uniting innovative software development, expert staffing solutions, and comprehensive technology consultancy—all under one roof.
                    </p>

                    <ul className={'space-y-3'}>
                        {points.map((point, i) => (
                            <li key={i} className={'list-none flex items-center gap-x-3'}>
                                <CircleCheck size={16} color={'#1D91FF'} />
                                <span className={'text-base font-medium text-black'}>
                                    {point}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <Button
                        variant={'gradient'}
                        className={'px-8 py-6 mt-6 text-base'}
                    >
                        Explore More
                    </Button>

                </div>
            </div>
            <Card className="w-full rounded-xl p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 shadow-2xl border-none">
                {stats.map(stat => (
                    <div className="text-center" key={stat.title}>
                        <p className="font-heading text-4xl sm:text-[44px] font-bold text-[#111]">{stat.value}</p>
                        <h3 className="font-bold text-2xl text-black">{stat.title}</h3>
                    </div>
                ))}
            </Card>
        </section>
    )
}

const BentoGrid = () => {
    return (
        <div className="mx-auto w-full px-6 lg:max-w-7xl lg:px-8">
            <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-2">
                <div className="relative lg:row-span-2">
                    <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                        <Image
                            alt="about section gallery first image"
                            src="/about-two.png"
                            className="size-full object-contain object-top"
                            width={276}
                            height={425}
                        />
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
                </div>
                <div className="relative max-lg:row-start-1">
                    <Image
                        alt="about section gallery second image"
                        src="/about-two-2.png"
                        className="size-full object-contain object-center"
                        width={275}
                        height={192}
                    />
                </div>
                <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                    <div className="absolute inset-px rounded-lg bg-white" />
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                        <div className="rounded-lg bg-[#F4F7FB] py-6 px-7 h-full flex justify-center items-center">
                            <div className="space-y-1 border-2 border-spacing-0.5 bg-white border-dashed border-blue-500 rounded-lg h-full w-full grid place-content-center p-2">
                                <div className="bg-[#F4F7FB] rounded-lg p-2 text-lg font-bold text-center content-center size-20 mx-auto ">
                                    <GradientSpan className="leading-tight"> 99% </GradientSpan>
                                </div>
                                <h2 className="text-lg font-bold text-[#051634] capitalize">Satisfied Clients</h2>
                            </div>
                        </div>
                    </div>
                    {/* <div className="pointer-events-none absolute inset-px rounded-lg shadow-none outline outline-black/5" /> */}
                </div>

            </div>
        </div>
    )
}