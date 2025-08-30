import {useSpring, motion} from 'framer-motion'
import {useEffect} from 'react'

export default function AnimatedNumber({value}: {value: number}){ 
  const spring = useSpring(value, {stiffness: 100, damping: 20})

  useEffect(() => {
    spring.set(value);
  }, [value])

  return(
    <motion.span>
        {spring.get().toFixed(0)}
    </motion.span>
  )
}