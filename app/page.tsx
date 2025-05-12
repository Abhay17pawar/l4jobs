"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  Search,
  MapPin,
  Briefcase,
  ChevronRight,
  Star,
  Building,
  Users,
  TrendingUp,
  Download,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  const { scrollY } = useScroll()
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const mobileAppRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const heroInView = useInView(heroRef, { once: false, amount: 0.2 })
  const statsInView = useInView(statsRef, { once: false, amount: 0.3 })
  const featuredInView = useInView(featuredRef, { once: false, amount: 0.2 })
  const testimonialsInView = useInView(testimonialsRef, { once: false, amount: 0.3 })
  const mobileAppInView = useInView(mobileAppRef, { once: false, amount: 0.2 })
  const ctaInView = useInView(ctaRef, { once: false, amount: 0.5 })

  const heroY = useTransform(scrollY, [0, 300], [0, 100])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.5])
  const parallaxY1 = useTransform(scrollY, [0, 1000], [0, -150])
  const parallaxY2 = useTransform(scrollY, [0, 1000], [0, -100])
  const parallaxY3 = useTransform(scrollY, [0, 1000], [0, -50])

  const featuredJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      posted: "2 days ago",
      description:
        "Lead the development of our next-generation web applications using React, TypeScript, and Next.js. You'll collaborate with designers and backend engineers to create seamless user experiences.",
      requirements: [
        "5+ years of React experience",
        "Strong TypeScript skills",
        "Experience with Next.js",
        "CSS-in-JS expertise",
      ],
      benefits: ["Flexible remote work", "Health insurance", "401(k) matching", "Unlimited PTO"],
      companySize: "50-100 employees",
      industry: "Technology",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateTech",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110k - $140k",
      posted: "3 days ago",
      description:
        "Drive product strategy and roadmap for our SaaS platform. You'll work closely with engineering, design, and marketing teams to deliver features that delight our customers.",
      requirements: [
        "3+ years in product management",
        "Experience with SaaS products",
        "Strong analytical skills",
        "Excellent communication",
      ],
      benefits: ["Hybrid work model", "Comprehensive benefits", "Stock options", "Professional development budget"],
      companySize: "100-250 employees",
      industry: "Software",
      rating: 4.6,
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "CloudSystems",
      location: "Austin, TX",
      type: "Remote",
      salary: "$100k - $130k",
      posted: "1 day ago",
      description:
        "Build and maintain our cloud infrastructure on AWS. You'll automate deployments, optimize performance, and ensure high availability of our services.",
      requirements: [
        "AWS certification",
        "Experience with Kubernetes",
        "CI/CD pipeline expertise",
        "Infrastructure as Code",
      ],
      benefits: ["100% remote", "Home office stipend", "Generous vacation policy", "Learning allowance"],
      companySize: "25-50 employees",
      industry: "Cloud Services",
      rating: 4.7,
    },
    {
      id: 4,
      title: "UX/UI Designer",
      company: "DesignHub",
      location: "Seattle, WA",
      type: "Contract",
      salary: "$90k - $120k",
      posted: "5 days ago",
      description:
        "Create beautiful and intuitive interfaces for our mobile and web applications. You'll conduct user research, create wireframes, and deliver high-fidelity designs.",
      requirements: [
        "Strong portfolio",
        "Experience with Figma",
        "User research skills",
        "Mobile app design experience",
      ],
      benefits: [
        "Flexible hours",
        "Portfolio development",
        "Potential for full-time conversion",
        "Creative environment",
      ],
      companySize: "10-25 employees",
      industry: "Design Agency",
      rating: 4.5,
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "TechCorp Inc.",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "I found my dream job through L4Jobs in just two weeks! The platform made it easy to filter for remote positions that matched my skills, and the application process was seamless.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateTech",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "After struggling with other job sites, L4Jobs was a breath of fresh air. The detailed company profiles helped me find a culture that aligned with my values.",
      rating: 5,
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "UX Designer",
      company: "DesignHub",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The job recommendations were spot-on! L4Jobs understood my experience and suggested positions that were perfect for my career growth.",
      rating: 4,
    },
  ]

  const stats = [
    { id: 1, value: "10,000+", label: "Job Listings", icon: Briefcase },
    { id: 2, value: "5,000+", label: "Companies", icon: Building },
    { id: 3, value: "1M+", label: "Job Seekers", icon: Users },
    { id: 4, value: "85%", label: "Success Rate", icon: TrendingUp },
  ]

  const appFeatures = [
    {
      title: "Instant Job Alerts",
      description: "Get notified the moment new jobs matching your skills are posted.",
      icon: "bell",
    },
    {
      title: "One-Tap Apply",
      description: "Apply to jobs with a single tap using your saved profile and resume.",
      icon: "tap",
    },
    {
      title: "Interview Scheduler",
      description: "Schedule and manage your interviews directly from the app.",
      icon: "calendar",
    },
    {
      title: "Career Insights",
      description: "Access salary data and career path information for informed decisions.",
      icon: "chart",
    },
  ]

  return (
    <main className="min-h-screen bg-background transition-colors duration-300 overflow-hidden">
      {/* Decorative elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          style={{ y: parallaxY1 }}
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-rose-200/20 to-transparent dark:from-rose-900/10 dark:to-transparent blur-3xl"
        />
        <motion.div
          style={{ y: parallaxY2 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-amber-200/10 to-transparent dark:from-amber-900/5 dark:to-transparent blur-3xl"
        />
        <motion.div
          style={{ y: parallaxY3 }}
          className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-200/10 to-transparent dark:from-purple-900/5 dark:to-transparent blur-3xl"
        />
      </div>

      <header className="container mx-auto py-4 px-4 md:px-6 sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
          <Image
            src="/l4pro.png"
            alt="L4Jobs Logo"
            width={120}
            height={40}
            className="h-16 w-auto p-2 bg-white rounded-lg shadow-md"
          />
          </motion.div>
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button - Only visible on small screens */}
            <MobileNav />

            {/* Desktop Navigation - Hidden on small screens */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-foreground hover:text-rose-500 transition-colors">
                Home
              </Link>
              <Link href="/jobs" className="text-foreground hover:text-rose-500 transition-colors">
                Jobs
              </Link>
              <Link href="/companies" className="text-foreground hover:text-rose-500 transition-colors">
                Companies
              </Link>
              <Link href="/about" className="text-foreground hover:text-rose-500 transition-colors">
                About
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex gap-1 items-center text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/50"
              >
                <Download className="h-4 w-4" />
                <span>Get the App</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section ref={heroRef} className="relative overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-rose-100/30 to-transparent dark:from-rose-950/30 dark:to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,113,133,0.1),transparent_50%)]" />
        </motion.div>

        <div className="container mx-auto py-20 md:py-32 px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={heroInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <Badge
                variant="outline"
                className="px-4 py-1 text-rose-500 border-rose-200 bg-rose-50 dark:bg-rose-950/50 dark:border-rose-800 rounded-full"
              >
                #1 Job Platform in the USA
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-amber-500 dark:from-rose-400 dark:to-amber-300">
              Find Your Dream Job in the USA
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Browse thousands of job listings from top companies across the United States. Your next career opportunity
              is just a click away.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-card/80 backdrop-blur-sm rounded-xl shadow-lg p-6 max-w-4xl mx-auto border border-border"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            </div>
            <div className="mt-4 flex justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Search Jobs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={statsRef} className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={statsInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="mx-auto mb-4 bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-900/30 dark:to-rose-800/20 w-16 h-16 rounded-2xl flex items-center justify-center text-rose-500 shadow-md"
                >
                  <stat.icon className="h-8 w-8" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-amber-500 dark:from-rose-400 dark:to-amber-300"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={featuredRef} className="container mx-auto py-16 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-500 rounded-full text-sm font-medium mb-3">
            Featured Opportunities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Top Jobs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of top job opportunities from leading companies across the USA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-card/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-border hover:border-rose-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-rose-500 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{job.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded-full dark:bg-rose-900 dark:text-rose-100">
                      {job.posted}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                      <span className="text-sm ml-1">{job.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Building className="h-4 w-4 mr-2" />
                    {job.companySize}
                  </div>
                  <div className="font-medium">{job.salary}</div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">{job.description}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Requirements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-rose-500 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.benefits.map((benefit, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="font-normal group-hover:bg-rose-100 group-hover:text-rose-800 dark:group-hover:bg-rose-900/30 dark:group-hover:text-rose-200 transition-colors"
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-2 group/btn border-rose-200 dark:border-rose-800 hover:border-rose-300 dark:hover:border-rose-700"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-rose-600 dark:from-rose-400 dark:to-rose-500">
                    View Job
                  </span>
                  <ChevronRight className="ml-2 h-4 w-4 text-rose-500 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            className="group border-rose-200 dark:border-rose-800 hover:border-rose-300 dark:hover:border-rose-700"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-rose-600 dark:from-rose-400 dark:to-rose-500">
              View All Jobs
            </span>
            <ChevronRight className="ml-2 h-4 w-4 text-rose-500 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <section ref={testimonialsRef} className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-sm font-medium mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from professionals who found their dream jobs through our platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border relative group hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -top-5 left-6">
                  <div className="bg-gradient-to-br from-rose-400 to-amber-400 p-2 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.13456 9H5.37305C5.37305 5.5 7.87305 4.5 9.62305 4.5C10.1231 4.5 10.3731 5 10.1231 5.5C9.87305 6 9.37305 6.5 9.37305 7C9.37305 8 10.3731 9 11.8731 9C13.3731 9 14.3731 8 14.3731 7C14.3731 6.5 13.8731 6 13.6231 5.5C13.3731 5 13.6231 4.5 14.1231 4.5C15.8731 4.5 18.3731 5.5 18.3731 9H14.6231"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.37305 9V13.5C8.37305 14.6046 9.26848 15.5 10.3731 15.5H13.3731C14.4776 15.5 15.3731 14.6046 15.3731 13.5V9"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>

                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-muted border-2 border-rose-200 dark:border-rose-800">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-muted"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section ref={mobileAppRef} className="container mx-auto py-20 px-4 md:px-6 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={mobileAppInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-3">
              Just Launched
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We've Launched Our Mobile Apps{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-rose-500 dark:from-purple-400 dark:to-rose-400">
                Exclusively for You
              </span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Take your job search on the go with our powerful mobile apps. Get instant notifications, apply with a
              single tap, and manage your career from anywhere.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={mobileAppInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 bg-gradient-to-br from-purple-400 to-rose-400 p-2 rounded-lg shadow-md">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={mobileAppInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5675 12.0084C17.5548 9.53092 19.5593 8.15063 19.6699 8.08643C18.4021 6.17084 16.4367 5.91643 15.7431 5.90084C14.0701 5.72799 12.4525 6.87287 11.6039 6.87287C10.7362 6.87287 9.40562 5.91643 7.97949 5.94756C6.12949 5.97869 4.40649 7.03873 3.47949 8.67092C1.54649 11.9971 2.96699 17.0557 4.81699 19.4975C5.76954 20.6893 6.86954 22.0385 8.30649 21.9846C9.71137 21.9307 10.2525 21.0926 11.9255 21.0926C13.5793 21.0926 14.0887 21.9846 15.5631 21.9537C17.0759 21.9307 18.0284 20.7389 18.9431 19.5369C20.0431 18.1568 20.4963 16.8096 20.5187 16.7352C20.4867 16.7248 17.5817 15.5537 17.5675 12.0084Z" />
                  <path d="M14.7912 4.03826C15.5787 3.06623 16.1081 1.75342 15.9512 0.416016C14.8287 0.467809 13.4599 1.20186 12.6349 2.15342C11.8974 2.99967 11.2599 4.35967 11.4362 5.65686C12.6937 5.75547 13.9656 4.98748 14.7912 4.03826Z" />
                </svg>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold leading-tight">App Store</div>
                </div>
              </motion.a>
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={mobileAppInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M3.60001 2.40002C3.40001 2.60002 3.30001 2.90002 3.30001 3.30002V20.7C3.30001 21.1 3.40001 21.4 3.60001 21.6L3.70001 21.7L13.4 12L3.70001 2.30002L3.60001 2.40002Z"
                    fill="white"
                  />
                  <path
                    d="M17.8 16.4L13.4 12L17.8 7.60001L21.9 9.80001C23.1 10.5 23.1 11.6 21.9 12.3L17.8 16.4Z"
                    fill="white"
                  />
                  <path
                    d="M17.8 7.59999L13.4 12L3.69999 2.29999C3.89999 2.09999 4.29999 1.99999 4.69999 2.19999L17.8 7.59999Z"
                    fill="white"
                  />
                  <path
                    d="M17.8 16.4L4.69999 21.8C4.29999 22 3.89999 21.9 3.69999 21.7L13.4 12L17.8 16.4Z"
                    fill="white"
                  />
                </svg>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold leading-tight">Google Play</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={mobileAppInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Enhanced decorative elements */}
            <div className="absolute -z-10 inset-0">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-300/40 to-rose-300/40 dark:from-purple-900/30 dark:to-rose-900/30 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-tr from-amber-300/40 to-rose-300/40 dark:from-amber-900/30 dark:to-rose-900/30 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
            </div>

            {/* Premium device frame */}
            <div className="relative mx-auto">
              {/* Device reflection/glare effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 dark:from-white/0 dark:via-white/10 dark:to-white/0 rounded-[60px] z-0 rotate-[20deg] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Device shadow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-gray-900/20 to-gray-900/0 dark:from-gray-900/40 dark:to-gray-900/0 rounded-[50px] blur-xl z-0 transform translate-y-2"></div>

              {/* Phone frame */}
              <div className="relative mx-auto w-[300px] h-[620px] bg-gradient-to-b from-gray-800 to-black rounded-[40px] border-[12px] border-black overflow-hidden shadow-[0_0_0_2px_rgba(255,255,255,0.1),0_20px_50px_-12px_rgba(0,0,0,0.5)] dark:shadow-[0_0_0_2px_rgba(255,255,255,0.05),0_20px_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur-sm z-10">
                {/* Power button */}
                <div className="absolute right-[-14px] top-28 w-[3px] h-12 bg-gray-700 rounded-l-sm"></div>

                {/* Volume buttons */}
                <div className="absolute left-[-14px] top-20 w-[3px] h-8 bg-gray-700 rounded-r-sm"></div>
                <div className="absolute left-[-14px] top-32 w-[3px] h-8 bg-gray-700 rounded-r-sm"></div>

                {/* Device notch */}
                <div className="absolute top-0 inset-x-0 h-7 bg-black z-10 flex justify-center items-end">
                  <div className="w-40 h-[18px] bg-black rounded-b-3xl flex items-center justify-center">
                    <div className="w-16 h-4 bg-black rounded-b-lg relative flex items-center justify-center">
                      <div className="absolute w-2 h-2 rounded-full bg-gray-800 mr-6"></div>
                      <div className="absolute w-3 h-3 rounded-full bg-gray-800"></div>
                    </div>
                  </div>
                </div>

                {/* Status bar */}
                <div className="absolute top-0 inset-x-0 h-7 flex justify-between items-center px-6 z-20">
                  <div className="text-white text-xs font-medium">9:41</div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" />
                    </svg>
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                    </svg>
                    <div className="flex items-center">
                      <div className="h-3.5 w-1 bg-white rounded-sm"></div>
                      <div className="h-2.5 w-1 bg-white/80 rounded-sm ml-[2px]"></div>
                      <div className="h-1.5 w-1 bg-white/60 rounded-sm ml-[2px]"></div>
                      <div className="h-0.5 w-1 bg-white/40 rounded-sm ml-[2px]"></div>
                    </div>
                    <div className="text-white text-xs font-medium">89%</div>
                  </div>
                </div>

                {/* Mobile screen content - enhanced responsive version of the site */}
                <div className="w-full h-full overflow-y-auto bg-background scrollbar-hide pt-7">
                  {/* Mobile Header */}
                  <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b p-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <Image src="/l4pro.png" alt="L4Jobs Logo" width={80} height={30} className="h-8 w-auto" />
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 rounded-full bg-rose-100/50 dark:bg-rose-900/30 text-rose-500">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                      </button>
                      <button className="p-1.5 rounded-full bg-muted/50">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Mobile Hero */}
                  <div className="px-4 py-6 bg-gradient-to-b from-rose-100/30 via-amber-50/20 to-transparent dark:from-rose-950/30 dark:via-amber-950/10 dark:to-transparent">
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-2 py-0.5 text-xs bg-gradient-to-r from-rose-500 to-amber-500 text-white dark:from-rose-400 dark:to-amber-400 rounded-full">
                          #1 Job Platform
                        </span>
                        <span className="animate-pulse inline-block w-2 h-2 bg-rose-500 rounded-full"></span>
                      </div>
                      <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-amber-500 dark:from-rose-400 dark:to-amber-300">
                        Find Your Dream Job
                      </h1>
                      <p className="text-sm text-muted-foreground mt-1">
                        Browse thousands of job listings from top companies
                      </p>
                    </div>

                    <div className="bg-card/80 backdrop-blur-sm rounded-xl shadow-md p-4 border border-border relative overflow-hidden">
                      <div className="absolute -right-6 -top-6 w-20 h-20 bg-gradient-to-br from-rose-200/30 to-amber-200/30 dark:from-rose-900/20 dark:to-amber-900/20 rounded-full blur-md"></div>
                      <div className="relative mb-3">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-rose-400" />
                        <Input
                          placeholder="Job title or keyword"
                          className="pl-9 h-9 text-sm border-rose-200/50 dark:border-rose-800/50 focus-visible:ring-rose-400/30"
                        />
                      </div>
                      <div className="relative mb-3">
                        <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-rose-400" />
                        <Input
                          placeholder="Location"
                          className="pl-9 h-9 text-sm border-rose-200/50 dark:border-rose-800/50 focus-visible:ring-rose-400/30"
                        />
                      </div>
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white shadow-md"
                      >
                        Search Jobs
                      </Button>
                    </div>
                  </div>

                  {/* Mobile Featured Jobs */}
                  <div className="px-4 py-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-semibold">Featured Jobs</h2>
                      <span className="text-xs text-rose-500 font-medium">View all</span>
                    </div>
                    <div className="space-y-4">
                      {featuredJobs.slice(0, 3).map((job, index) => (
                        <motion.div
                          key={job.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-card rounded-xl p-4 border border-border shadow-sm hover:shadow-md hover:border-rose-200 dark:hover:border-rose-800 transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-start gap-2">
                              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-900/30 dark:to-rose-800/20 flex items-center justify-center text-rose-500 shadow-sm">
                                {index === 0 && <Briefcase className="h-4 w-4" />}
                                {index === 1 && <Building className="h-4 w-4" />}
                                {index === 2 && <Users className="h-4 w-4" />}
                              </div>
                              <div>
                                <h3 className="font-medium text-sm">{job.title}</h3>
                                <p className="text-xs text-muted-foreground">{job.company}</p>
                              </div>
                            </div>
                            <span className="bg-rose-100 text-rose-800 text-xs px-1.5 py-0.5 rounded-full dark:bg-rose-900/50 dark:text-rose-200">
                              {job.posted}
                            </span>
                          </div>
                          <div className="pl-10">
                            <div className="flex items-center text-xs text-muted-foreground mb-2">
                              <MapPin className="h-3 w-3 mr-1 text-rose-400" />
                              {job.location}
                            </div>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {job.requirements.slice(0, 2).map((req, i) => (
                                <span key={i} className="text-xs bg-muted/50 px-2 py-0.5 rounded-full">
                                  {req}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-amber-500 dark:from-rose-400 dark:to-amber-300">
                                {job.salary}
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 text-xs border-rose-200 dark:border-rose-800 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/50"
                              >
                                Apply Now
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Categories */}
                  <div className="px-4 py-6 bg-gradient-to-b from-muted/30 to-transparent">
                    <h2 className="text-lg font-semibold mb-4">Browse Categories</h2>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: "Technology", icon: "laptop" },
                        { name: "Marketing", icon: "megaphone" },
                        { name: "Design", icon: "palette" },
                        { name: "Finance", icon: "dollar" },
                        { name: "Healthcare", icon: "heart" },
                        { name: "Education", icon: "book" },
                      ].map((category, index) => (
                        <motion.div
                          key={category.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="bg-card rounded-xl p-3 border border-border hover:border-rose-200 dark:hover:border-rose-800 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3"
                        >
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-900/30 dark:to-rose-800/20 flex items-center justify-center text-rose-500 shadow-sm">
                            {category.icon === "laptop" && (
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                              </svg>
                            )}
                            {category.icon === "megaphone" && (
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                                />
                              </svg>
                            )}
                            {category.icon === "palette" && (
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                />
                              </svg>
                            )}
                            {category.icon === "dollar" && (
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            )}
                            {category.icon === "heart" && (
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                            )}
                            {category.icon === "book" && (
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm font-medium">{category.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile App Promo */}
                  <div className="px-4 py-6">
                    <div className="bg-gradient-to-br from-rose-50 to-amber-50 dark:from-rose-950/50 dark:to-amber-950/50 rounded-xl p-4 shadow-md relative overflow-hidden">
                      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-rose-200/40 to-amber-200/40 dark:from-rose-900/30 dark:to-amber-900/30 rounded-full blur-xl"></div>
                      <h3 className="text-base font-semibold mb-2">Get the L4Jobs App</h3>
                      <p className="text-xs text-muted-foreground mb-3">
                        Apply to jobs on the go and get instant notifications
                      </p>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 text-xs border-rose-200 dark:border-rose-800 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/50 flex-1"
                        >
                          App Store
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 text-xs border-rose-200 dark:border-rose-800 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/50 flex-1"
                        >
                          Google Play
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Footer */}
                  <div className="px-4 py-6 bg-card/80 border-t border-border mt-4">
                    <div className="flex justify-center mb-4">
                      <Image src="/l4pro.png" alt="L4Jobs Logo" width={80} height={30} className="h-6 w-auto" />
                    </div>
                    <div className="flex justify-center gap-4 mb-4">
                      <a href="#" className="text-xs text-rose-500 font-medium">
                        Home
                      </a>
                      <a href="#" className="text-xs text-muted-foreground hover:text-rose-500 transition-colors">
                        Jobs
                      </a>
                      <a href="#" className="text-xs text-muted-foreground hover:text-rose-500 transition-colors">
                        Companies
                      </a>
                      <a href="#" className="text-xs text-muted-foreground hover:text-rose-500 transition-colors">
                        About
                      </a>
                    </div>
                    <div className="text-center text-xs text-muted-foreground">
                      © {new Date().getFullYear()} L4Jobs. All rights reserved.
                    </div>
                  </div>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
              </div>

              {/* Phone reflection */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent rounded-t-[40px] z-20 pointer-events-none"></div>
            </div>

            {/* Floating elements */}
                    <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -right-4 top-20 bg-white dark:bg-gray-800 rounded-xl p-2 shadow-lg hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-rose-500">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs font-medium">Application Sent!</span>
              </div>
            </motion.div>


                      <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -left-4 bottom-40 bg-white dark:bg-gray-800 rounded-xl p-2 shadow-lg hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-500">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
                <span className="text-xs font-medium">New job alert!</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      <section ref={ctaRef} className="container mx-auto py-16 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="bg-card/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7 }}
              className="p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-rose-200/40 to-transparent dark:from-rose-900/20 dark:to-transparent rounded-full blur-2xl -z-10"></div>

              <div className="inline-block mb-4 bg-gradient-to-br from-rose-400 to-rose-500 p-3 rounded-lg text-white shadow-md">
                <Users className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4">For Job Seekers</h2>
              <p className="text-muted-foreground mb-6">
                Create a profile, upload your resume, and get matched with your dream job. Set up job alerts to never
                miss an opportunity.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <div className="bg-rose-100 p-1 rounded-full mr-3 dark:bg-rose-900/30">
                    <ChevronRight className="h-4 w-4 text-rose-500" />
                  </div>
                  Create a free account
                </li>
                <li className="flex items-center">
                  <div className="bg-rose-100 p-1 rounded-full mr-3 dark:bg-rose-900/30">
                    <ChevronRight className="h-4 w-4 text-rose-500" />
                  </div>
                  Upload your resume
                </li>
                <li className="flex items-center">
                  <div className="bg-rose-100 p-1 rounded-full mr-3 dark:bg-rose-900/30">
                    <ChevronRight className="h-4 w-4 text-rose-500" />
                  </div>
                  Get matched with employers
                </li>
                <li className="flex items-center">
                  <div className="bg-rose-100 p-1 rounded-full mr-3 dark:bg-rose-900/30">
                    <ChevronRight className="h-4 w-4 text-rose-500" />
                  </div>
                  Track your applications
                </li>
              </ul>
              <Button className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
                Create Account
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7 }}
              className="p-8 md:p-12 bg-gradient-to-br from-rose-50 to-transparent dark:from-rose-950/50 dark:to-transparent relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-amber-200/40 to-transparent dark:from-amber-900/20 dark:to-transparent rounded-full blur-2xl -z-10"></div>

              <div className="inline-block mb-4 bg-gradient-to-br from-amber-400 to-amber-500 p-3 rounded-lg text-white shadow-md">
                <Building className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4">For Employers</h2>
              <p className="text-muted-foreground mb-6">
                Post job listings, browse resumes, and connect with qualified candidates. Streamline your hiring process
                with our powerful tools.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <div className="bg-amber-100 p-1 rounded-full mr-3 dark:bg-amber-900/30">
                    <ChevronRight className="h-4 w-4 text-amber-500" />
                  </div>
                  Post job listings
                </li>
                <li className="flex items-center">
                  <div className="bg-amber-100 p-1 rounded-full mr-3 dark:bg-amber-900/30">
                    <ChevronRight className="h-4 w-4 text-amber-500" />
                  </div>
                  Browse candidate profiles
                </li>
                <li className="flex items-center">
                  <div className="bg-amber-100 p-1 rounded-full mr-3 dark:bg-amber-900/30">
                    <ChevronRight className="h-4 w-4 text-amber-500" />
                  </div>
                  Track applicants
                </li>
                <li className="flex items-center">
                  <div className="bg-amber-100 p-1 rounded-full mr-3 dark:bg-amber-900/30">
                    <ChevronRight className="h-4 w-4 text-amber-500" />
                  </div>
                  Analytics and reporting
                </li>
              </ul>
              <Button
                variant="outline"
                className="border-amber-200 dark:border-amber-800 hover:border-amber-300 dark:hover:border-amber-700 bg-white/50 dark:bg-black/20 backdrop-blur-sm"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500">
                  Post a Job
                </span>
                <ArrowRight className="ml-2 h-4 w-4 text-amber-500" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <footer className="bg-card/80 backdrop-blur-sm border-t border-border py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image src="/l4pro.png" alt="L4Jobs Logo" width={120} height={40} className="h-8 w-auto mb-4" />
              <p className="text-muted-foreground text-sm">
                Connecting talented professionals with their dream jobs across the USA.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <ThemeToggle />
                <div className="flex gap-2">
                  <a href="#" className="bg-muted/50 hover:bg-muted p-2 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-muted/50 hover:bg-muted p-2 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-muted/50 hover:bg-muted p-2 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Job Seekers</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Create Profile
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Job Alerts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Career Advice
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Salary Calculator
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Employers</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Post a Job
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Browse Resumes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Recruiting Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Enterprise Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Download Our App
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} L4Jobs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
