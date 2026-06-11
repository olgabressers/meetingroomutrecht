"use client"

import { useEffect, useRef, useState } from "react"

interface StatCounterProps {
  value: string
  label: string
}

export function StatCounter({ value, label }: StatCounterProps) {
  const num = parseInt(value)
  const isNumeric = !isNaN(num)
  const suffix = isNumeric ? value.slice(String(num).length) : ""

  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView || !isNumeric) return
    const duration = 1800
    const startTime = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * num))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(num)
    }
    requestAnimationFrame(tick)
  }, [inView, isNumeric, num])

  return (
    <div ref={ref} className="bg-background px-6 py-8 text-center">
      <dt className={`font-serif font-light text-foreground ${isNumeric ? "text-4xl" : "text-xl leading-snug"}`}>
        {isNumeric ? `${count}${suffix}` : value}
      </dt>
      {label && (
        <dd className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</dd>
      )}
    </div>
  )
}
