import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Ashutosh_Kumar_Jaiswal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl ring-4 ring-white">
              AK
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Ashutosh Kumar Jaiswal
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold">
              Full-Stack Software Engineer
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionate about building scalable web applications and innovative solutions with modern technologies. 
              Experienced in full-stack development, cloud platforms, and creating seamless user experiences.
            </p>

            {/* Key Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {['React & Node.js', 'AWS & Cloud', 'Full-Stack Development', 'Microservices'].map((skill, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 text-blue-700 font-medium shadow-sm">
                  {skill}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <Button
                onClick={downloadResume}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              
              <Button
                variant="outline"
                onClick={scrollToAbout}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg transition-all duration-300"
              >
                Explore My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-8 mt-12">
              <a
                href="https://github.com/Ashutosh049-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://linkedin.com/in/ashutosh-kumar-jaiswal-128054256"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href="mailto:jashutosh528@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-8 w-8" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={scrollToAbout}
              className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
            >
              <ArrowDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;