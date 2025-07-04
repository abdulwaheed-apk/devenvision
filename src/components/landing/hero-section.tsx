import { Card } from "@/components/ui/card";
import { GradientSpan } from "@/components/gradient-span";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
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
                    backgroundImage: 'url(/hero-bg.webp)',
                }}
            ></div>

            {/* Content Container: Applies max-w-7xl to the text/buttons */}
            <div className="relative z-10 h-full flex items-start justify-center">
                <div className="max-w-7xl w-full mx-auto px-2 sm:px-6 lg:px-8 text-center h-full flex items-center justify-start">
                    <Card className='rounded-lg w-auto my-auto text-start py-6 px-6 sm:px-10 stroke bg-transparent backdrop-blur-xs stroke-[#5B5B5B] shadow-none gap-4 sm:gap-6'>
                        <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-heading font-bold leading-snug uppercase">
                            Empowering Businesses
                            <br />
                            <GradientSpan>
                                Through Scalable
                            </GradientSpan>
                            <br />
                            Digital Solutions
                        </h1>
                        <p className="text-base font-medium text-[#DEDEDE] max-w-2xl mx-auto">
                            DevEnvison offers cutting-edge software development and digital transformation services tailored to businesses of all sizes.
                        </p>
                        <Button
                            variant={'gradient'}
                            className={'max-w-64 mt-2 sm:mt-8 px-8 py-6'}

                        >
                            Get a Free Consultation
                        </Button>
                    </Card>
                </div>
            </div>
        </section>

    )
}