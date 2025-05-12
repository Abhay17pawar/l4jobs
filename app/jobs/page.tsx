"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, MapPin, ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"

export default function JobsPage() {
  const [salaryRange, setSalaryRange] = useState([50, 150])

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      logo: "/placeholder.svg?height=40&width=40",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      posted: "2 days ago",
      description:
        "We're looking for a Senior Frontend Developer to join our team. You'll be responsible for building user interfaces for our web applications.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateTech",
      logo: "/placeholder.svg?height=40&width=40",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110k - $140k",
      posted: "3 days ago",
      description:
        "We're seeking an experienced Product Manager to lead our product development efforts and drive our product strategy.",
      tags: ["Product Strategy", "Agile", "User Research", "Roadmapping"],
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "CloudSystems",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Austin, TX",
      type: "Remote",
      salary: "$100k - $130k",
      posted: "1 day ago",
      description: "Join our DevOps team to build and maintain our cloud infrastructure and CI/CD pipelines.",
      tags: ["AWS", "Kubernetes", "Docker", "CI/CD"],
    },
    {
      id: 4,
      title: "UX/UI Designer",
      company: "DesignHub",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Seattle, WA",
      type: "Contract",
      salary: "$90k - $120k",
      posted: "5 days ago",
      description:
        "We're looking for a talented UX/UI Designer to create beautiful and intuitive user interfaces for our products.",
      tags: ["Figma", "User Research", "Prototyping", "UI Design"],
    },
    {
      id: 5,
      title: "Backend Developer",
      company: "DataSystems Inc.",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$115k - $145k",
      posted: "1 week ago",
      description: "Join our backend team to build scalable and reliable APIs and services for our growing platform.",
      tags: ["Node.js", "Python", "MongoDB", "GraphQL"],
    },
    {
      id: 6,
      title: "Data Scientist",
      company: "AnalyticsPro",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$125k - $155k",
      posted: "3 days ago",
      description:
        "We're seeking a Data Scientist to help us extract insights from our data and build predictive models.",
      tags: ["Python", "Machine Learning", "SQL", "Data Visualization"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <header className="container mx-auto py-4 px-4 md:px-6 sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Link href="/">
              <Image src="/l4pro.png" alt="L4Jobs Logo" width={120} height={40} className="h-10 w-auto" />
            </Link>
          </motion.div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-foreground hover:text-rose-500 transition-colors">
                Home
              </Link>
              <Link href="/jobs" className="text-rose-500 font-medium">
                Jobs
              </Link>
              <Link href="/companies" className="text-foreground hover:text-rose-500 transition-colors">
                Companies
              </Link>
              <Link href="/about" className="text-foreground hover:text-rose-500 transition-colors">
                About
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-xl shadow-md p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Job title or keyword" className="pl-10" />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Location" className="pl-10" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-rose-500 hover:bg-rose-600 text-white">Search Jobs</Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Filters</h3>
                      <Button variant="ghost" size="sm" className="h-8 text-rose-500">
                        Reset
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-3">Job Type</h4>
                        <div className="space-y-2">
                          {["Full-time", "Part-time", "Contract", "Remote"].map((type) => (
                            <div key={type} className="flex items-center space-x-2">
                              <Checkbox id={`job-type-${type.toLowerCase()}`} />
                              <label
                                htmlFor={`job-type-${type.toLowerCase()}`}
                                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {type}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="text-sm font-medium mb-3">Experience Level</h4>
                        <div className="space-y-2">
                          {["Entry Level", "Mid Level", "Senior Level", "Director", "Executive"].map((level) => (
                            <div key={level} className="flex items-center space-x-2">
                              <Checkbox id={`exp-level-${level.toLowerCase().replace(" ", "-")}`} />
                              <label
                                htmlFor={`exp-level-${level.toLowerCase().replace(" ", "-")}`}
                                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {level}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="text-sm font-medium mb-3">Salary Range (k)</h4>
                        <div className="space-y-4">
                          <Slider
                            defaultValue={[50, 150]}
                            max={200}
                            step={5}
                            value={salaryRange}
                            onValueChange={setSalaryRange}
                          />
                          <div className="flex items-center justify-between">
                            <span className="text-sm">${salaryRange[0]}k</span>
                            <span className="text-sm">${salaryRange[1]}k</span>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="text-sm font-medium mb-3">Posted Within</h4>
                        <Select defaultValue="any">
                          <SelectTrigger>
                            <SelectValue placeholder="Any time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any time</SelectItem>
                            <SelectItem value="day">Past 24 hours</SelectItem>
                            <SelectItem value="week">Past week</SelectItem>
                            <SelectItem value="month">Past month</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                <span className="text-rose-500">{jobs.length}</span> Jobs Found
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Relevance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="salary-high">Highest Salary</SelectItem>
                    <SelectItem value="salary-low">Lowest Salary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="bg-card rounded-lg shadow-sm border border-border hover:border-rose-300 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:block">
                        <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center overflow-hidden">
                          <Image
                            src={job.logo || "/placeholder.svg"}
                            alt={`${job.company} logo`}
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className="text-rose-500 border-rose-200 bg-rose-50 dark:bg-rose-950 dark:border-rose-800"
                            >
                              {job.type}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{job.posted}</span>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="text-muted-foreground">{job.company}</div>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="font-normal">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{job.salary}</div>
                          <Button className="bg-rose-500 hover:bg-rose-600 text-white">Apply Now</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center mt-8"
            >
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" disabled>
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Previous page</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0 bg-rose-50 text-rose-500 border-rose-200 hover:bg-rose-100 dark:bg-rose-950 dark:border-rose-800 dark:hover:bg-rose-900"
                >
                  1
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  2
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  3
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  4
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  5
                </Button>
                <Button variant="outline" size="icon">
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Next page</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} L4Jobs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
