import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaUsers, FaRocket, FaAward, FaHeart, FaLightbulb, FaHandshake,
  FaLinkedin, FaTwitter, FaGithub, FaPlay, FaTrophy, FaGlobe
} from "react-icons/fa";
import { HiSparkles, HiTrendingUp } from "react-icons/hi";

const stats = [
  { icon: FaUsers, number: "10+", label: "Happy Clients", description: "Satisfied customers worldwide" },
  { icon: FaRocket, number: "20+", label: "Projects Delivered", description: "Successfully completed projects" },
  { icon: FaAward, number: "1+", label: "Years Experience", description: "Of industry expertise" },
  { icon: FaTrophy, number: "2", label: "Awards Won", description: "Recognition for excellence" }
];

const values = [
  {
    icon: FaLightbulb,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex problems and stay ahead of the curve.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: FaTrophy,
    title: "Excellence Always", 
    description: "Every project is delivered with the highest standards of code quality, design, and user experience without compromise.",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: FaHandshake,
    title: "Partnership Driven",
    description: "We build long-term relationships with our clients, becoming their trusted technology partner for growth.",
    gradient: "from-green-500 to-teal-600"
  },
  {
    icon: FaHeart,
    title: "People Focused",
    description: "Our team's well-being and client satisfaction are at the heart of everything we do and every decision we make.",
    gradient: "from-pink-500 to-red-500"
  }
];

const team = [
  {
    name: "Nishant Prajapati",
    role: "CEO & Founder", 
    bio: "5+ years building scalable solutions for startups and enterprises. Passionate about technology and business strategy.",
    skills: ["Strategy", "Leadership", "Product Vision"],
    social: { linkedin: "#", twitter: "#" },
    gradient: "from-blue-500 to-purple-600"
  },
  {
    name: "Bharat Yadav",
    role: "CTO & Co-Founder",
    bio: "Expert in cloud architecture and scalable systems. Leads our technical vision and innovation initiatives.",
    skills: ["Cloud Architecture", "DevOps", "Team Management"],
    social: { linkedin: "#", github: "#" },
    gradient: "from-purple-500 to-pink-600"
  },
  {
    name: "Shivang Mishra",
    role: "Lead Full-Stack Developer",
    bio: "Full-stack developer with expertise in React, Node.js, and modern development practices. Loves clean code.",
    skills: ["React", "Node.js", "System Design"],
    social: { linkedin: "#", github: "#" },
    gradient: "from-green-500 to-blue-500"
  },
  {
    name: "Rahul Tiwari",
    role: "Senior UI/UX Designer", 
    bio: "Creating beautiful and intuitive user experiences that drive engagement and conversions for our clients.",
    skills: ["UI Design", "UX Research", "Prototyping"],
    social: { linkedin: "#", twitter: "#" },
    gradient: "from-pink-500 to-purple-500"
  }
];

const timeline = [
  { year: "2024", title: "Company Founded", description: "Started with a vision to transform digital experiences" },
  { year: "2024", title: "First 5 Clients", description: "Built trust with early adopters and refined our process" },
  { year: "2025", title: "Team Expansion", description: "Grew to 15+ talented developers and designers" },
  { year: "2025", title: "10+ Projects", description: "Reached major milestone with diverse project portfolio" },
  { year: "2025", title: "Industry Recognition", description: "Won multiple awards for innovative solutions" },
  { year: "2025", title: "Country Level Expansion", description: "Serving clients across the country" }
];

export default function About() {
  const [activeTeamMember, setActiveTeamMember] = useState(0);
  const [hoveredValue, setHoveredValue] = useState(null);

  return (
    <div className="bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <HiSparkles className="text-yellow-400" />
                  <span className="text-sm">About GrowingUpp</span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl font-black mb-6">
                  We are <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Digital Craftsmen</span>
                </h1>
                
                <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                  A passionate team of developers, designers, and strategists committed to 
                  building exceptional digital experiences that drive real business results.
                </p>

                <div className="flex gap-4">
                  <motion.a
                    href="#story"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold hover:shadow-glow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    Our Story
                    <FaRocket />
                  </motion.a>
                  <motion.button
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-semibold hover:bg-white/20 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaPlay />
                    Watch Video
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                    <span className="text-gray-600 text-lg">Team Photo / Office</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold">Active Projects: 12</span>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-4 shadow-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold">1+</div>
                      <div className="text-xs">Years</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300">
                      <stat.icon size={28} />
                    </div>
                    <div className="text-4xl font-black text-gray-800 mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story & Values Section */}
        <section id="story" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  Our Journey
                </h2>
                
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2024, <strong className="text-gray-900">GrowingUpp</strong> started with a simple but powerful mission: 
                    to help businesses leverage technology for growth and success in the digital age.
                  </p>
                  
                  <p>
                    What began as a small team of passionate developers has evolved into a comprehensive 
                    digital agency that combines technical expertise with creative innovation and strategic thinking.
                  </p>
                  
                  <p>
                    We believe that great software is not just about clean code—it's about understanding 
                    business needs, user behavior, and market dynamics. This holistic approach has helped us 
                    deliver successful projects for startups, SMEs, and enterprise clients across various industries.
                  </p>
                  
                  <p>
                    Today, we continue to push boundaries, adopt new technologies, and create solutions 
                    that drive real business value for our clients worldwide.
                  </p>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-8">Our Milestones</h3>
                  <div className="space-y-4">
                    {timeline.map((item, index) => (
                      <motion.div
                        key={item.year}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                      >
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                          {item.year}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
                  Our Values
                </h2>
                
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      onMouseEnter={() => setHoveredValue(index)}
                      onMouseLeave={() => setHoveredValue(null)}
                      className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 ${
                        hoveredValue === index ? 'scale-105' : ''
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${value.gradient} text-white flex-shrink-0 ${
                          hoveredValue === index ? 'scale-110' : ''
                        } transition-transform duration-300`}>
                          <value.icon size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Talented individuals who bring creativity, technical expertise, and passion to every project
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                {team.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => setActiveTeamMember(index)}
                    className={`group cursor-pointer bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                      activeTeamMember === index ? 'border-blue-200 scale-105' : 'border-gray-100'
                    }`}
                    whileHover={{ y: -4 }}
                  >
                    <div className="text-center">
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300`}>
                        {member.name.split(' ').map(n => n.charAt(0)).join('')}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                      
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                key={activeTeamMember}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg"
              >
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${team[activeTeamMember].gradient} flex items-center justify-center text-white text-xl font-bold`}>
                  {team[activeTeamMember].name.split(' ').map(n => n.charAt(0)).join('')}
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{team[activeTeamMember].name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{team[activeTeamMember].role}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{team[activeTeamMember].bio}</p>
                
                <div className="flex gap-3">
                  {Object.entries(team[activeTeamMember].social).map(([platform, link]) => {
                    const Icon = platform === 'linkedin' ? FaLinkedin : platform === 'twitter' ? FaTwitter : FaGithub;
                    return (
                      <motion.a
                        key={platform}
                        href={link}
                        className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon className="text-gray-600 hover:text-blue-600" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
                Join our growing list of satisfied clients and let's create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-900 font-bold rounded-2xl hover:shadow-glow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Get In Touch
                  <HiSparkles />
                </motion.a>
                <motion.a
                  href="/projects"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-semibold hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  View Our Work
                  <FaGlobe />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
