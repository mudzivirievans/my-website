import { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Phone, Download, Briefcase, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    e.currentTarget.reset();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'what-i-build', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      title: "Business Websites & Landing Pages",
      description: "Fast, responsive websites for companies and personal brands, optimized for clarity, performance, and conversions.",
      tech: ["Next.js", "React", "SEO", "Responsive"]
    },
    {
      title: "Web Applications & Dashboards",
      description: "Custom web apps and admin dashboards that automate workflows, manage data, and simplify daily operations.",
      tech: ["React", "Node.js", "PostgreSQL", "APIs"]
    },
    {
      title: "Mobile Apps (Flutter)",
      description: "Cross-platform mobile apps for Android and iOS built with Flutter for a smooth and consistent experience.",
      tech: ["Flutter", "Dart", "Firebase", "APIs"]
    },
    {
      title: "System Integration & Automation",
      description: "Connecting services, APIs, and tools so your business systems talk to each other and reduce manual work.",
      tech: ["APIs", "Automation", "Cloud"]
    }
  ];

  const skills = {
    Frontend: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Flutter UI"],
    Backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    "DevOps & Cloud": ["Docker", "Linux", "Nginx & SSL", "CI/CD (GitHub Actions)", "AWS", "Vercel", "DigitalOcean"],
    "Soft Skills": ["Communication", "Problem-Solving", "Ownership & Responsibility", "Client Collaboration"]
  };

  const experience = [
    {
      role: "Founder & Software Developer",
      company: "VansSoftwareLab",
      period: "2024 – Present",
      description: "Building custom software solutions, websites, and systems for businesses in Africa. Handling requirements, development, deployment, and support."
    },
    {
      role: "Web Developer",
      company: "Kelly Link (Botswana)",
      period: "2022 – 2024",
      description: "Designed and maintained company websites and internal tools, integrated payment gateways, and improved site performance."
    },
    {
      role: "Software Developer",
      company: "Padariro Entertainment Studios (Zimbabwe)",
      period: "2020 – 2022",
      description: "Developed internal systems and web applications, automated workflows, and supported day-to-day technical operations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-foreground transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-blue-600/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">
            EM
            <span className="block h-0.5 w-full bg-blue-600 mt-0.5"></span>
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('hero')} className={`hover:text-blue-500 transition-colors text-sm ${activeSection === 'hero' ? 'text-blue-500' : 'text-gray-300'}`}>Home</button>
            <button onClick={() => scrollToSection('what-i-build')} className={`hover:text-blue-500 transition-colors text-sm ${activeSection === 'what-i-build' ? 'text-blue-500' : 'text-gray-300'}`}>What I Build</button>
            <button onClick={() => scrollToSection('skills')} className={`hover:text-blue-500 transition-colors text-sm ${activeSection === 'skills' ? 'text-blue-500' : 'text-gray-300'}`}>Skills</button>
            <button onClick={() => scrollToSection('experience')} className={`hover:text-blue-500 transition-colors text-sm ${activeSection === 'experience' ? 'text-blue-500' : 'text-gray-300'}`}>Experience</button>
            <button onClick={() => scrollToSection('contact')} className={`hover:text-blue-500 transition-colors text-sm ${activeSection === 'contact' ? 'text-blue-500' : 'text-gray-300'}`}>Contact</button>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-gray-300 hover:text-blue-500">
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-gray-300 hover:text-blue-500">
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-blue-500"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-blue-600/20">
            <div className="px-6 py-4 space-y-4">
              <button 
                onClick={() => { scrollToSection('hero'); setMobileMenuOpen(false); }} 
                className={`block w-full text-left py-3 px-4 rounded-lg hover:bg-blue-600/10 transition-colors ${activeSection === 'hero' ? 'text-blue-500 bg-blue-600/10' : 'text-gray-300'}`}
              >
                Home
              </button>
              <button 
                onClick={() => { scrollToSection('what-i-build'); setMobileMenuOpen(false); }} 
                className={`block w-full text-left py-3 px-4 rounded-lg hover:bg-blue-600/10 transition-colors ${activeSection === 'what-i-build' ? 'text-blue-500 bg-blue-600/10' : 'text-gray-300'}`}
              >
                What I Build
              </button>
              <button 
                onClick={() => { scrollToSection('skills'); setMobileMenuOpen(false); }} 
                className={`block w-full text-left py-3 px-4 rounded-lg hover:bg-blue-600/10 transition-colors ${activeSection === 'skills' ? 'text-blue-500 bg-blue-600/10' : 'text-gray-300'}`}
              >
                Skills
              </button>
              <button 
                onClick={() => { scrollToSection('experience'); setMobileMenuOpen(false); }} 
                className={`block w-full text-left py-3 px-4 rounded-lg hover:bg-blue-600/10 transition-colors ${activeSection === 'experience' ? 'text-blue-500 bg-blue-600/10' : 'text-gray-300'}`}
              >
                Experience
              </button>
              <button 
                onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }} 
                className={`block w-full text-left py-3 px-4 rounded-lg hover:bg-blue-600/10 transition-colors ${activeSection === 'contact' ? 'text-blue-500 bg-blue-600/10' : 'text-gray-300'}`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block relative">
            <div className="absolute inset-0 rounded-full bg-blue-600/30 blur-3xl"></div>
            <img 
              src="/IMG_1985.jpeg" 
              alt="Evans Mudziviri" 
              className="w-32 h-32 rounded-full mx-auto border-2 border-blue-600 relative z-10 avatar-glow object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white animate-in fade-in slide-in-from-bottom-4 duration-1000 tracking-tight">
            Evans Mudziviri
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 tracking-wide">
            Full-Stack Software Developer & Tech Entrepreneur
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 leading-relaxed">
            I'm a full-stack software developer based in South Africa. I build modern web and mobile applications that help businesses automate processes, integrate systems, and grow. I focus on clean code, production-ready deployments, and real business impact.
          </p>
          <div className="flex gap-4 justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Hire Me
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-blue-600 text-blue-500 hover:bg-blue-600/10"
            >
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-400 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-cyan-400" />
              <span>5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">•</span>
              <span>Web • Mobile • Cloud</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">●</span>
              <span>Available for Full-Time or Contract</span>
            </div>
          </div>
        </div>
      </section>

      {/* What I Build Section */}
      <section id="what-i-build" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white tracking-tight">What I Build</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <Card 
                key={index} 
                className="glossy-card p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer bg-gray-900/50 border-gray-800"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{solution.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-blue-600/20 text-cyan-400 border-blue-600/30 hover:bg-blue-600/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white tracking-tight">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, techs]) => (
              <Card 
                key={category} 
                className="glossy-card p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-900/50 border-gray-800 hover:border-blue-600/50"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-500 tracking-wide">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs py-1 border-gray-700 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white tracking-tight">Experience</h2>
          <div className="space-y-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-green-500 hidden md:block"></div>
            {experience.map((exp, index) => (
              <div key={index} className="relative md:pl-12">
                <div className="absolute left-0 top-2 w-3 h-3 bg-blue-600 rounded-full border-2 border-black hidden md:block"></div>
                <Card className="glossy-card p-6 bg-gray-900/50 border-gray-800 hover:border-blue-600/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <span className="text-sm text-cyan-400">{exp.period}</span>
                  </div>
                  <p className="text-blue-500 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white tracking-tight">Let's Build Something</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm open to full-time roles, contract work, and collaborations. If you need a developer who can take a project from idea to deployment, let's talk.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/27733160196" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                >
                  <Phone className="h-6 w-6 group-hover:scale-110 transition-transform text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-500">WhatsApp/Phone</div>
                    <span>+27 733 160 196</span>
                  </div>
                </a>
                <a 
                  href="tel:+27812596028" 
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                >
                  <Phone className="h-6 w-6 group-hover:scale-110 transition-transform text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-500">Phone (alt)</div>
                    <span>+27 812 596 028</span>
                  </div>
                </a>
                <a 
                  href="mailto:evans@vanssoftwarelab.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                >
                  <Mail className="h-6 w-6 group-hover:scale-110 transition-transform text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <span>evans@vanssoftwarelab.com</span>
                  </div>
                </a>
                <div className="pt-4 space-y-3">
                  <a 
                    href="https://github.com/mudzivirievans"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/evans-mudziviri-b9b45a161"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            <Card className="glossy-card p-6 bg-gray-900/50 border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    name="name"
                    placeholder="Your Name" 
                    required
                    className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-600"
                  />
                </div>
                <div>
                  <Input 
                    name="email"
                    type="email" 
                    placeholder="Your Email" 
                    required
                    className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-600"
                  />
                </div>
                <div>
                  <Textarea 
                    name="message"
                    placeholder="Your Message" 
                    rows={5}
                    required
                    className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-600"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 Evans Mudziviri. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;