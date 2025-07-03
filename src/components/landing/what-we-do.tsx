import { CircleCheck } from "lucide-react";
import { GradientSpan } from "@/components/gradient-span";
import { Button } from "@/components/ui/button";
import { Card } from "../ui/card";
import { points, stats } from "@/data";

export function WhatWeDo() {

    return (
        <section className={'max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white space-y-15'}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className={'w-full bg-stone-50 shadow-sm'}>
                </div>
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
            <Card className="w-full rounded-xl p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 shadow-md border-none">
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