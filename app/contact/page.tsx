"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [showStats, setShowStats] = useState(false)
  const [showHowToPlay, setShowHowToPlay] = useState(false)

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode")
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode))
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode))
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          showStats={showStats}
          setShowStats={setShowStats}
          showHowToPlay={showHowToPlay}
          setShowHowToPlay={setShowHowToPlay}
        />

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Have questions, suggestions, or feedback about Monumentle? We'd love to hear from you!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-amber-600" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What's this about?" />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us more about your question or feedback..." rows={6} />
                    </div>

                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-amber-600" />
                      Get in Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        For general inquiries, feedback, or support questions:
                      </p>
                      <a href="mailto:hello@monumentle.fun" className="text-amber-600 hover:text-amber-700 font-medium">
                        hello@monumentle.fun
                      </a>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Response Time</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We typically respond to all inquiries within 24-48 hours during business days.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Bug Reports</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Found a bug or technical issue? Please include details about your device, browser, and steps to
                        reproduce the problem.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">How often are new monuments added?</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        We regularly add new monuments to keep the game fresh and educational.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Can I suggest a monument?</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        We love suggestions for new monuments to include in the game.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Is Monumentle free to play?</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Yes! Monumentle is completely free to play with no ads or premium features.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
