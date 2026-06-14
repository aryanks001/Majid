import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type MaskedLineProps = {
  children: ReactNode
  delay?: number
  className?: string
}

/**
 * A single line of display type that rises out of an overflow mask.
 * The viewport observer lives on the outer mask: the inner line starts
 * translated outside the clip, so observing it directly would never fire.
 */
export function MaskedLine({ children, delay = 0, className }: MaskedLineProps) {
  const reduce = useReducedMotion()
  return (
    <motion.span
      className={`block overflow-hidden pb-[0.12em] mb-[-0.12em] ${className ?? ''}`}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.span
        className="block will-change-transform"
        variants={{
          hidden: { y: '110%' },
          show: {
            y: '0%',
            transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] },
          },
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  )
}
