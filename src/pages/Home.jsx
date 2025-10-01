import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  FaRocket, FaMobileAlt, FaGlobe, FaCloud, FaCode, FaUsers, 
  FaStar, FaCheckCircle, FaArrowRight, FaPlay, FaQuoteLeft,
  FaAward, FaTrophy, FaHeart, FaLightbulb, FaShieldAlt,
  FaHandshake, FaClock, FaPhone, FaEnvelope, FaRobot, FaLock
} from "react-icons/fa";
import { 
  HiSparkles, HiLightningBolt, HiTrendingUp, HiBadgeCheck,
  HiChartBar, HiCog, HiDesktopComputer, HiDatabase
} from "react-icons/hi";

// Modern Services Data with Visual Cards
const services = [
  {
    Icon: FaGlobe,
    title: "Web & Mobile App Development",
    description: "Custom web and mobile applications tailored to your business needs",
    features: ["React/Next.js", "Mobile Apps", "PWA", "E-commerce"],
    gradient: "from-blue-500 to-cyan-500",
    bgImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    iconBg: "bg-blue-100",
    textColor: "text-blue-600"
  },
  {
    Icon: HiDatabase,
    title: "Enterprise Software Modernization", 
    description: "Transform legacy systems into cutting-edge digital solutions",
    features: ["System Migration", "API Development", "Cloud Integration", "Automation"],
    gradient: "from-purple-500 to-pink-500",
    bgImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    iconBg: "bg-purple-100",
    textColor: "text-purple-600"
  },
  {
    Icon: HiChartBar,
    title: "Data Analytics & BI",
    description: "Extract valuable insights from your data for informed decisions",
    features: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Dashboards"],
    gradient: "from-green-500 to-teal-500",
    bgImage: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    iconBg: "bg-green-100",
    textColor: "text-green-600"
  },
  {
    Icon: FaRobot,
    title: "AI & Emerging Tech",
    description: "Stay ahead with artificial intelligence and emerging technologies",
    features: ["Machine Learning", "AI Solutions", "Automation", "Chatbots"],
    gradient: "from-orange-500 to-yellow-500",
    bgImage: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    iconBg: "bg-orange-100", 
    textColor: "text-orange-600"
  },
  {
    Icon: FaCloud,
    title: "Cloud & DevOps",
    description: "Optimize infrastructure with cloud computing and DevOps practices",
    features: ["AWS/Azure", "CI/CD", "Docker", "Kubernetes"],
    gradient: "from-blue-600 to-indigo-600",
    bgImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    iconBg: "bg-blue-100",
    textColor: "text-blue-600"
  },
  {
    Icon: FaLock,
    title: "Cybersecurity & QA",
    description: "Protect your digital assets and ensure software quality",
    features: ["Security Audits", "Quality Testing", "Compliance", "Risk Assessment"],
    gradient: "from-red-500 to-pink-500",
    bgImage: "linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)",
    iconBg: "bg-red-100",
    textColor: "text-red-600"
  }
];

// Company Stats
const stats = [
  { number: "500+", label: "Projects Completed", icon: FaRocket },
  { number: "50+", label: "Happy Clients", icon: FaUsers },
  { number: "8+", label: "Years Experience", icon: FaAward },
  { number: "98%", label: "Success Rate", icon: FaTrophy }
];

// Client Testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    role: "CTO",
    text: "GrowingUpp transformed our vision into reality with their exceptional development skills. The team delivered beyond our expectations!",
    rating: 5,
    avatar: "SJ",
    project: "E-commerce Platform"
  },
  {
    name: "Rajesh Patel",
    company: "StartupHub",
    role: "Founder & CEO",
    text: "Working with GrowingUpp has been a game-changer for our business. They increased our user engagement by over 300%!",
    rating: 5,
    avatar: "RP",
    project: "Mobile App Development"
  },
  {
    name: "Maria Garcia",
    company: "Digital Solutions Ltd",
    role: "Product Manager",
    text: "Professional, reliable, and innovative. GrowingUpp helped us scale our platform to serve 100K+ users seamlessly.",
    rating: 5,
    avatar: "MG",
    project: "Cloud Infrastructure"
  }
];

// Our Values
const values = [
  {
    icon: HiBadgeCheck,
    title: "Quality Excellence",
    description: "We maintain the highest standards in every project, ensuring exceptional results that exceed expectations."
  },
  {
    icon: FaLightbulb,
    title: "Innovation First", 
    description: "We embrace cutting-edge technologies and creative solutions to solve complex business challenges."
  },
  {
    icon: FaHandshake,
    title: "Client Partnership",
    description: "We build long-term relationships with our clients, becoming their trusted technology partner."
  },
  {
    icon: FaClock,
    title: "Timely Delivery",
    description: "We respect deadlines and deliver projects on time without compromising on quality or functionality."
  }
];

// Process Steps
const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understanding your vision and requirements through detailed consultation and strategic planning.",
    icon: HiLightningBolt
  },
  {
    step: "02", 
    title: "Design & Prototype",
    description: "Creating wireframes, mockups, and interactive prototypes to visualize your solution.",
    icon: HiDesktopComputer
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Building your solution with clean code, rigorous testing, and quality assurance.",
    icon: FaCode
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Deploying your solution and providing ongoing maintenance and support services.",
    icon: FaRocket
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden"> {/* Fix horizontal scroll */}
      <Header />
      <main>
        {/* Interactive Hero Section */}
        <Hero />

        {/* Company Introduction */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                <HiSparkles />
                About GrowingUpp
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Unlock Your Business's True Potential
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We craft solutions that are as unique as your business, helping you stand out in the digital crowd. 
                Our team of seasoned experts delivers software that's not just functional but also beautiful and user-friendly.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">Your Vision, Our Expertise</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Every project at GrowingUpp starts with understanding your vision. We blend your ideas 
                    with our technical expertise to create a seamless development process.
                  </p>
                </div>

                {/* Stats Grid - Fixed spacing */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-4 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
                    >
                      <div className="inline-flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        <stat.icon size={20} />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 h-80 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Innovation at Work</h4>
                    <p className="text-gray-600">Watch how we transform ideas into reality</p>
                  </div>
                  
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <FaPlay className="text-blue-600 ml-1" size={20} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Modern Services Section with Visual Cards */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
                <HiCog />
                Our Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Comprehensive Digital Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From web development to AI solutions, we offer end-to-end services to transform your business digitally.
              </p>
            </motion.div>

            {/* Modern Service Cards Grid - Fixed responsive layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Card Background with Image */}
                  <div 
                    className="h-48 relative flex items-center justify-center text-white"
                    style={{ background: service.bgImage }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20"></div>
                    
                    {/* Icon */}
                    <motion.div
                      className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white"
                      animate={{
                        scale: hoveredService === index ? 1.1 : 1,
                        rotate: hoveredService === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.Icon size={32} />
                    </motion.div>
                    
                    {/* Floating Animation Elements */}
                    {hoveredService === index && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full opacity-60"
                            initial={{
                              x: Math.random() * 300,
                              y: Math.random() * 200,
                              opacity: 0
                            }}
                            animate={{
                              x: Math.random() * 300,
                              y: Math.random() * 200,
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: Math.random()
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="bg-white p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-md text-xs">
                          +{service.features.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Learn More Button */}
                    <motion.div
                      className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-purple-600 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <FaArrowRight size={12} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Fixed spacing */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Seamless Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From concept to execution, we ensure you're part of the journey, every step of the way.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                          <step.icon size={20} />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-blue-200 flex items-center justify-center text-xs font-bold text-blue-600">
                          {step.step}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {/* Connector Line - Only for large screens */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-blue-300 to-purple-300"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values - Fixed layout */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">Why Choose GrowingUpp?</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We're passionate about what we do, and we pour that passion into every project we take on. 
                  Whether you're a small business just starting out or a big brand looking to level up, we've got your back.
                </p>

                <div className="space-y-4">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                        <value.icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">💡</div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h4>
                    <p className="text-gray-600 mb-6">Let's make magic happen together!</p>
                    <motion.button
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-lg transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      Get in Touch
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Testimonials - Fixed layout */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-green-100 text-green-600 text-sm font-medium">
                <FaQuoteLeft />
                Client Success Stories
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients who've experienced amazing results.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 text-center shadow-lg"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <FaStar key={i} className="text-2xl text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-xl text-gray-800">{testimonials[currentTestimonial].name}</div>
                    <div className="text-purple-600 font-medium">{testimonials[currentTestimonial].role}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].company}</div>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full text-sm font-medium text-gray-700">
                  <FaCheckCircle className="text-green-500" />
                  Project: {testimonials[currentTestimonial].project}
                </div>
              </motion.div>

              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentTestimonial === index 
                        ? 'bg-purple-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Fixed layout */}
        <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-gray-300">
                Imagine your business getting tons of new customers. We've already helped many businesses do that. 
                Let us help your business grow too!
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-900 font-bold rounded-2xl text-lg hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <FaRocket />
                  Get Free Consultation
                </motion.a>
                <motion.a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <FaPhone />
                  Call: +91 98765 43210
                </motion.a>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-8 text-sm text-gray-300">
                <div className="flex items-center justify-center gap-2">
                  <FaEnvelope />
                  hello@growingupp.com
                </div>
                <div className="flex items-center justify-center gap-2">
                  <FaClock />
                  24/7 Support Available
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
