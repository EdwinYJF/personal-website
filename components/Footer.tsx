"use client"

import { useEffect, useState } from "react"

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const interval = setInterval(
      () => {
        setYear(new Date().getFullYear())
      },
      1000 * 60 * 60,
    ) // Check every hour

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="py-8 mt-12 border-t">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>&copy; {year} Yong Jun Fai. All rights reserved.</p>
      </div>
    </footer>
  )
}
