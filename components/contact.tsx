"use client"

import React, { useState } from "react"
import { Mail, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error"
    text: string
  } | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage({
        type: "success",
        text: "Message sent successfully! I'll get back to you soon.",
      })

      // Reset form
      setFormState({
        name: "",
        email: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <section id="contact" className="scroll-mt-16">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column: Form */}
        <div className="flex-1">
          {/* <div className="flex items-center space-x-2 mb-4">
            <Mail className="h-6 w-6 text-terminal-purple" />
            <h2 className="text-2xl font-bold font-mono text-terminal-purple">
              contact
            </h2>
          </div> */}
          <h2 className="font-mono text-2xl text-terminal-green mb-4 terminal-prompt">contact</h2>
          <Card className="bg-terminal-dark border-terminal-border">
            {/* <CardHeader className="border-b border-terminal-border">
              <CardTitle className="font-mono text-terminal-green">
                <span className="text-terminal-text">$</span> contact
              </CardTitle>
            </CardHeader> */}
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-terminal-green"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-terminal-black border-terminal-border text-terminal-text focus:border-terminal-green"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-terminal-green"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-terminal-black border-terminal-border text-terminal-text focus:border-terminal-green"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-terminal-green"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    className="bg-terminal-black border-terminal-border text-terminal-text focus:border-terminal-green min-h-[120px]"
                  />
                </div>

                {submitMessage && (
                  <div
                    className={`p-3 rounded-md ${
                      submitMessage.type === "success"
                        ? "bg-terminal-green/10 text-terminal-green"
                        : "bg-terminal-red/10 text-terminal-red"
                    }`}
                  >
                    {submitMessage.text}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-terminal-green hover:bg-terminal-green/90 text-terminal-black font-medium"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <span className="animate-spin mr-2">⠋</span>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
