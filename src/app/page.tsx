import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Metadata } from "next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";


export const metadata: Metadata = {
  title: 'DevEnvision | Software Development Company | Digital Solutions, Staffing, and Software - All Under One Roof',
  description: 'At DevEnvision, we aim to be the leading catalyst for digital transformation, offering top-tier software development, expert staffing solutions, and comprehensive technology consultancy—all in one Software Development Company.',
};
export default function HomePage() {
  return (
    <>
      <section
        className='relative w-full overflow-hidden'
        style={{
          height: 'calc(100vh - 134px)', // Adjust 134px to your Header's actual height
        }}
      >
        {/* Background Image Container (Full Screen Width) */}
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: 'url(/hero-bg.png)',
          }}
        ></div>

        {/* Content Container: Applies max-w-7xl to the text/buttons */}
        <div className="relative z-10 h-full flex items-start justify-center">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex items-center justify-start">
            <Card className='rounded-lg bg-white/[.08] w-auto my-auto text-start py-6 px-10 border border-white/15 shadow-none'>
              <h1 className="text-white text-5xl md:text-6xl lg:text-[64px] font-heading font-bold leading-snug uppercase">
                Empowering Businesses
                <br />
                <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#1D91FF] to-[#5EFFBB] '>
                  Through Scalable
                </span>
                <br />
                Digital Solutions
              </h1>
              <p className="mt-4 text-base font-medium text-[#DEDEDE] max-w-2xl mx-auto">
                DevEnvison offers cutting-edge software development and digital transformation services tailored to businesses of all sizes.
              </p>
              <button className="max-w-64 mt-8 px-6 py-3 bg-gradient-to-br from-[#1D91FF] to-[#5EFFBB] text-white font-bold text-lg rounded-lg shadow-md transition duration-300 cursor-pointer">
                Get a Free Consultation
              </button>
            </Card>
          </div>
        </div>
      </section>

      <div className='w-full bg-[#F5F5F7] py-10 min-h-72'>
        <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2'>
          <h2 className='text-3xl sm:text-[44px] font-bold uppercase font-heading py-4'>Our {' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-b from-[#1D91FF] to-[#5EFFBB]'>
              Clients
            </span>
          </h2>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-full my-6"
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <div className="p-1">
                    <Card className='flex flex-col justify-center items-center h-20 w-52 rounded-lg bg-white border border-white shadow-none'>
                      <Image
                        src={'/client.png'}
                        width={200}
                        height={80}
                        alt='Client logo'
                      />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
}
