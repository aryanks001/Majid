import { useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'

type PreloaderProps = {
  onDone: () => void
}

/** Black curtain intro: wordmark breathes in, then the curtain lifts. */
export function Preloader({ onDone }: PreloaderProps) {
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) {
      onDone()
      return
    }
    document.body.style.overflow = 'hidden'
    const t = setTimeout(onDone, 1900)
    return () => {
      document.body.style.overflow = ''
      clearTimeout(t)
    }
  }, [reduce, onDone])

  if (reduce) return null

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-night-deep"
      exit={{ y: '-100%' }}
      transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
    >
      <motion.img
        src="/majid-logo.svg"
        alt="Majid Developments"
        className="h-12 w-auto md:h-16"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  )
}
