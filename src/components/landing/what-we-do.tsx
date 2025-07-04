import { CircleCheck } from "lucide-react";
import { GradientSpan } from "@/components/gradient-span";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { points, stats } from "@/data";
import Image from "next/image";

export function WhatWeDo() {

    return (
        <section className={'max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white space-y-15'}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {/* <div className={'w-full bg-stone-50 shadow-sm'}>
                </div> */}
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
                        className={'px-8 py-6 mt-6'}
                    >
                        Explore More
                    </Button>

                </div>
            </div>
            <Card className="w-full rounded-xl p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 shadow-2xl border-none">
                {stats.map(stat => (
                    <div className="text-center" key={stat.title}>
                        <p className="font-heading text-4xl sm:text-[44px] font-bold text-[#111]">{stat.value}</p>
                        <h4 className="font-bold text-2xl text-black">{stat.title}</h4>
                    </div>
                ))}
            </Card>
        </section>
    )
}

const BentoGrid = () => {
    return (
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
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
                        <div className="rounded-lg bg-sky-50/5 py-6 px-7 h-full flex justify-center items-center">
                            <div className="space-y-1 border-4 border-spacing-0.5 border-dashed border-blue-500 rounded-lg h-full w-full grid place-content-center p-2">
                                <div className="bg-sky-100/60 rounded-lg p-2 text-lg font-bold text-center content-center size-20 mx-auto ">
                                    <GradientSpan className="leading-tight"> 99% </GradientSpan>
                                </div>
                                <h4 className="text-lg font-bold text-[#051634] capitalize">Satisfied Clients</h4>
                            </div>
                        </div>

                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg shadow-none outline outline-black/10" />
                </div>

            </div>
        </div>
    )
}