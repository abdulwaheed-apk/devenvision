import { Fragment } from 'react'
import { Metadata } from 'next'
import { ClientsCarousel, HeroSection, WhatWeDo, WhatWeOffer } from '@/components/landing'

export const metadata: Metadata = {
    title: 'DevEnvision | Software Development Company | Digital Solutions, Staffing, and Software - All Under One Roof',
    description:
        'At DevEnvision, we aim to be the leading catalyst for digital transformation, offering top-tier software development, expert staffing solutions, and comprehensive technology consultancy—all in one Software Development Company.',
}
export default function HomePage() {
    return (
        <Fragment>
            <HeroSection />
            <ClientsCarousel />
            <WhatWeDo />
            <WhatWeOffer />
        </Fragment>
    )
}
