"use client"

import type React from "react"

export function handleContactClick(e: React.MouseEvent<HTMLAnchorElement>) {
  const card = document.getElementById("contact-card")
  if (!card) return
  const { top, bottom } = card.getBoundingClientRect()
  if (top < window.innerHeight && bottom > 0) {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent("shake-submit-btn"))
  }
  // else: let the browser scroll to #contact-card naturally (respects scroll-mt-40)
}

export function ContactLink({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <a href="#contact-card" className={className}>
      {children}
    </a>
  )
}
