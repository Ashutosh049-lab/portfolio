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
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              AK
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Ashutosh Kumar
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
              Fresher Software Engineer
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions with modern web technologies. 
              Ready to contribute to impactful projects and grow as a developer.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button
                onClick={downloadResume}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              
              <Button
                variant="outline"
                onClick={scrollToAbout}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 text-lg"
              >
                Learn More About Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href="https://github.com/Ashutosh049-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/ashutosh-kumar-jaiswal-128054256"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:jashutosh528@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={scrollToAbout}
              className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
            >
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;