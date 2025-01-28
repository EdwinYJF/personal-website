'use client'

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function DownloadButton() {
  const downloadCV = async () => {
    try {
      const response = await fetch('/api/download-cv')
      if (!response.ok) throw new Error('Download failed')
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = "Yong_Jun_Fai_CV.pdf"
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading CV:', error)
    }
  }

  return (
    <Button onClick={downloadCV} className="mt-8" variant="outline">
      <Download className="mr-2 h-4 w-4" /> Download CV
    </Button>
  )
}