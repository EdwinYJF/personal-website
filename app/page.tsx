import { Github, Linkedin, Mail, Award, BookOpen, Briefcase, Code, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20 px-4">
        <div className="container mx-auto text-center space-y-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold">Yong Jun Fai</h1>
          <p className="text-xl">AI Developer | Data Science Enthusiast</p>
          <p className="text-lg opacity-90">Bachelor of Computer Science (Hons) in Artificial Intelligence</p>

          <div className="flex justify-center gap-6 mt-8">
            <Link
              href="https://github.com/EdwinYJF"
              className="hover:opacity-80 transition-opacity flex items-center gap-2"
              target="_blank"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/yongjunfai"
              className="hover:opacity-80 transition-opacity flex items-center gap-2"
              target="_blank"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="mailto:yongjunfai@gmail.com"
              className="hover:opacity-80 transition-opacity flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl space-y-12">
        {/* Education */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Asia Pacific University of Technology & Innovation</CardTitle>
              <CardDescription>2022 March - 2025 February</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Bachelor of Computer Science (Hons) in Artificial Intelligence</p>
              <p className="mt-2">CGPA: 3.24 / 4.0</p>
              <div className="mt-4">
                <p className="font-medium mb-2">Memberships:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Google Development Student Club</Badge>
                  <Badge variant="secondary">AWS Cloud Club</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>IT Intern (AI Team) - Gamer2Gamer Sdn. Bhd.</CardTitle>
              <CardDescription>January 2024 - April 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Developed AI/ML-based eKYC solutions using Python and Git</li>
                <li>Performed statistical analysis to evaluate and improve model performance</li>
                <li>Conducted research in eKYC including literature reviews and competitor analysis</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Projects */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>CropDoctor - Crop Leaf Diseases Classification (FYP)</CardTitle>
                <Badge className="w-fit">Second Runner Up - Best Computer Science Innovation Award</Badge>
              </CardHeader>
              <CardContent>
                <p>Mobile app using MobileNetV3-large for crop leaf disease detection, achieving 98% accuracy</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Credit Card Fraud Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Built a detection system using LightGBM and XGBoost with Optuna optimization</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Competitions */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Competitions</h2>
          </div>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>PayHack 2024 Open Finance Hackathon</CardTitle>
                <CardDescription>November 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Developed a credit card fraud detection system using Python and LightGBM</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AWS Jam Competition</CardTitle>
                <CardDescription>November 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Secured 6th place out of 20 teams utilizing AWS services to solve real-world problems</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Skills & Certifications</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Git", "DVC", "C", "C++", "Microsoft SQL", "Engati", "R", "Java", "Figma", "LabVIEW"].map(
                  (skill) => (
                    <Badge key={skill} variant="secondary">
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
                  <Badge key={lang} variant="secondary">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Yong Jun Fai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
