import { useRef } from 'react'
import { motion, useReducedMotion, useSpring } from 'motion/react'
import type { ReactNode, PointerEvent } from 'react'

/** Wrapper that lets a CTA drift a few pixels toward the cursor, then spring home. */
export function Magnetic({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(0, { stiffness: 180, damping: 16 })
  const y = useSpring(0, { stiffness: 180, damping: 16 })

  if (reduce) return <>{children}</>

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.18)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ x, y }}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}
