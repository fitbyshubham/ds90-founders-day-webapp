import { useSpring, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export default function AnimatedNumber({value}: {value: number}){ 
  const count = useMotionValue(value)
  const spring = useSpring(count, {
    bounce: 0.25,
    duration: 0.6,
  })
  const rounded = useTransform(spring, (latest) => Math.round(latest))

  useEffect(() => {
    spring.set(value);
  }, [value, count])

  return(
    <motion.span>{rounded}</motion.span>
  )
}