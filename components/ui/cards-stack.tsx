"use client"

import * as React from "react"
import { HTMLMotionProps, motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"

const CARD_Z_BASE = 10

interface CardStickyProps extends HTMLMotionProps<"div"> {
  index: number
  topOffset?: number
  incrementY?: number
}

const ContainerScroll = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      style={{ perspective: "1000px", ...props.style }}
      {...props}
    >
      {children}
    </div>
  )
})
ContainerScroll.displayName = "ContainerScroll"

const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
  (
    { index, topOffset = 96, incrementY = 40, children, className, style, ...props },
    ref
  ) => {
    const internalRef = React.useRef<HTMLDivElement>(null)
    const setRefs = React.useCallback(
      (node: HTMLDivElement | null) => {
        internalRef.current = node
        if (typeof ref === "function") ref(node)
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
      },
      [ref]
    )

    const stickyTop = topOffset + index * incrementY
    const { scrollYProgress } = useScroll({
      target: internalRef,
      offset: ["start end", `start ${stickyTop}px`],
    })
    const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1])
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])

    return (
      <motion.div
        ref={setRefs}
        style={{
          top: stickyTop,
          zIndex: CARD_Z_BASE + index,
          scale,
          opacity,
          ...style,
        }}
        className={cn("sticky", className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

CardSticky.displayName = "CardSticky"

export { ContainerScroll, CardSticky }
