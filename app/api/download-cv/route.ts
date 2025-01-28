// app/api/download-cv/route.ts
import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

export async function GET() {
  try {
    // Get the file path from the public directory
    const filePath = path.join(process.cwd(), 'public', 'Yong_Jun_Fai_(CV_latest).pdf')
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'CV file not found' },
        { status: 404 }
      )
    }

    // Read the file
    const fileBuffer = fs.readFileSync(filePath)
    
    // Create the response with the file content
    const response = new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Yong_Jun_Fai_CV.pdf"',
        'Content-Length': fileBuffer.length.toString(),
      },
    })
    
    return response
  } catch (error) {
    console.error('Error downloading CV:', error)
    return NextResponse.json(
      { error: 'Failed to download CV' },
      { status: 500 }
    )
  }
}