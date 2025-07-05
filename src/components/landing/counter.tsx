"use client"

import { useEffect } from "react"
import { animate, motion, useMotionValue, useTransform, useMotionTemplate } from "motion/react"

type CounterProps = {
    target: number
    suffix?: string
    duration?: number
}

export default function Counter({ target, suffix = "", duration = 2 }: CounterProps) {
    const count = useMotionValue(0)

    const formatted = useTransform(count, (latest) => {
        const roundedValue = Math.round(latest)
        return `${roundedValue.toLocaleString()}`
    })

    const display = useMotionTemplate`${formatted}${suffix}`

    useEffect(() => {
        const controls = animate(count, target, { duration })
        return () => controls.stop()
    }, [count, target, duration])

    return <motion.span>{display}</motion.span>
}
