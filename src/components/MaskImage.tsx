import { motion, useReducedMotion } from 'motion/react'

type MaskImageProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
}

/**
 * Image that reveals upward out of a clip mask while settling from a slight
 * zoom. Observer sits on the outer wrapper (the clipped child starts at zero
 * visible area, so it can never trigger its own reveal).
 */
export function MaskImage({ src, alt, className, imgClassName }: MaskImageProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={`relative overflow-hidden ${className ?? ''}`}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        variants={{
          hidden: { clipPath: 'inset(0 0 100% 0)' },
          show: {
            clipPath: 'inset(0 0 0% 0)',
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
          },
        }}
      >
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full object-cover ${imgClassName ?? ''}`}
          variants={{
            hidden: { scale: 1.14 },
            show: {
              scale: 1,
              transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        />
      </motion.div>
    </motion.div>
  )
}
