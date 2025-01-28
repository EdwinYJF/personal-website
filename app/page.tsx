import { Github, Linkedin, Mail, Award, BookOpen, Briefcase, Code, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { Footer } from "@/components/Footer"
import { DownloadButton } from "@/components/DownloadButton"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <header className="py-20 px-4 border-b-2 border-gray-200">
        <div className="container mx-auto text-center space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold">Yong Jun Fai</h1>
          <p className="text-xl text-gray-600">AI Developer | Data Science Enthusiast</p>

          <div className="flex justify-center gap-6 mt-8">
            <Link
              href="https://github.com/EdwinYJF"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              target="_blank"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/yongjunfai"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              target="_blank"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:yongjunfai@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          <DownloadButton />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-2xl space-y-16">
        {/* Education */}
        <section className="pb-16 border-b-2 border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-gray-600" />
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>
          <Card className="border-0 shadow-none">
            <CardHeader className="px-0">
              <CardTitle>Asia Pacific University of Technology & Innovation</CardTitle>
              <CardDescription className="text-gray-500">2022 March - 2025 February</CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <p className="mt-2">Second Upper Class</p>
              <div className="mt-4">
                <p className="font-medium mb-2">Memberships:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">IEEE APU Student Branch</Badge>
                  <Badge variant="outline">APU Google Development Student Club</Badge>
                  <Badge variant="outline">APU AWS Cloud Club</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience */}
        <section className="pb-16 border-b-2 border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-gray-600" />
            <h2 className="text-2xl font-semibold">Experience</h2>
          </div>
          <Card className="border-0 shadow-none">
            <CardHeader className="px-0">
              <CardTitle>IT Intern (AI Team) - Gamer2Gamer Sdn. Bhd.</CardTitle>
              <CardDescription className="text-gray-500">January 2024 - April 2024</CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <ul className="list-disc pl-4 space-y-2">
                <li>Developed AI/ML-based eKYC solutions using Python and Git</li>
                <li>Performed statistical analysis to evaluate and improve model performance</li>
                <li>Conducted research in eKYC including literature reviews and competitor analysis</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-none mt-6">
            <CardHeader className="px-0">
              <CardTitle>Chair of Computational Intelligence Society Chapter</CardTitle>
              <CardDescription>IEEE APU Student Branch</CardDescription>
              <CardDescription className="text-gray-500">May 2023 - February 2025</CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <p>Leading initiatives in computational intelligence and organizing related events.</p>
            </CardContent>
          </Card>
        </section>

        {/* Projects */}
        <section className="pb-16 border-b-2 border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-6 h-6 text-gray-600" />
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
          </div>
          <div className="space-y-6">
            <Card className="border-0 shadow-none">
              <CardHeader className="px-0">
                <CardTitle>CropDoctor - Crop Leaf Diseases Classification (FYP)</CardTitle>
                <div className="mt-2">
                  <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-200">
                    <Award className="w-4 h-4 mr-1" />
                    Second Runner Up - Best Computer Science Innovation Award
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="px-0">
                <p>Mobile app using MobileNetV3-large for crop leaf disease detection, achieving 98% accuracy</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none">
              <CardHeader className="px-0">
                <CardTitle>Credit Card Fraud Detection</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p>Built a detection system using LightGBM and XGBoost with Optuna optimization</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Competitions */}
        <section className="pb-16 border-b-2 border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-gray-600" />
            <h2 className="text-2xl font-semibold">Competitions</h2>
          </div>
          <div className="space-y-6">
            <Card className="border-0 shadow-none">
              <CardHeader className="px-0">
                <CardTitle>PayHack 2024 Open Finance Hackathon</CardTitle>
                <CardDescription className="text-gray-500">November 2024</CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <p>Developed a credit card fraud detection system using Python and LightGBM</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none">
              <CardHeader className="px-0">
                <CardTitle>AWS Jam Competition</CardTitle>
                <CardDescription className="text-gray-500">November 2023</CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <p>Secured 6th place out of 20 teams utilizing AWS services to solve real-world problems</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-gray-600" />
            <h2 className="text-2xl font-semibold">Skills & Certifications</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Git", "DVC", "Pandas", "Numpy", "Pytorch", "C", "C++", "Microsoft SQL", "Engati", "R", "Java", "Figma", "LabVIEW"].map(
                  (skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ),
                )}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Machine Learning with Python (IBM)</Badge>
                <Badge variant="outline">CCNA: Introductions to Networking</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["English", "Mandarin", "Bahasa Melayu", "Cantonese"].map((lang) => (
                  <Badge key={lang} variant="outline">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
