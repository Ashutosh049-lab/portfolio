import { ExternalLink, Github, Code, Zap, Users, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'AI Resume Builder',
      description: 'An AI-powered resume-building platform that helps users create professional resumes with intelligent content suggestions and real-time preview.',
      longDescription: 'Contributed to the development of an AI-powered resume-building platform using Next.js, React.js, TypeScript, and Tailwind CSS. Integrated OpenAI and Gemini APIs to enhance resume content with professional phrasing, tailored summaries, and skill suggestions.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'Puppeteer'],
      githubUrl: 'https://github.com/Ashutosh049-lab/Ai_Resume_Builder',
      liveUrl: null,
      icon: <Code className="h-6 w-6" />,
      features: [
        'AI-powered content enhancement',
        'Real-time live preview',
        'PDF and Word export',
        'Responsive design',
        'SEO optimized'
      ]
    },
    {
      title: 'Revamped Niche Community Platform',
      description: 'An interactive platform for discovering and joining niche communities with real-time features and AI-powered recommendations.',
      longDescription: 'Developed an interactive platform for discovering and joining niche communities, featuring real-time updates and seamless user engagement using React.js and Firebase. Built responsive discussion boards with threaded comments and voting systems.',
      technologies: ['React.js', 'Tailwind CSS', 'Firebase', 'Node.js', 'PostgreSQL', 'Socket.IO', 'TypeScript'],
      githubUrl: 'https://github.com/Ashutosh049-lab/Revamped-Niche-Community-Platform-Project-',
      liveUrl: null,
      icon: <Users className="h-6 w-6" />,
      features: [
        'Real-time chat and updates',
        'AI-powered recommendations',
        'Discussion boards with voting',
        'Live polls and Q&A sessions',
        'Push notifications'
      ]
    },
    {
      title: 'Sidcup Family Golf Clone',
      description: 'A responsive clone of the Sidcup Family Golf website showcasing modern web development skills and attention to detail.',
      longDescription: 'Developed a responsive clone of the Sidcup Family Golf website using HTML, CSS, and JavaScript. Recreated core features and design elements to closely match the original site and enhance user experience.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      githubUrl: 'https://github.com/Ashutosh049-lab/SidcupFamilyGolfClone_Project',
      liveUrl: null,
      icon: <Palette className="h-6 w-6" />,
      features: [
        'Pixel-perfect design recreation',
        'Fully responsive layout',
        'Smooth animations',
        'Cross-browser compatibility',
        'Optimized performance'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing my skills and projects.',
      longDescription: 'This very website you\'re viewing! Built with modern web technologies including React, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and a clean, professional interface.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI', 'Vite'],
      githubUrl: '#',
      liveUrl: '#',
      icon: <Zap className="h-6 w-6" />,
      features: [
        'Modern responsive design',
        'Smooth scroll navigation',
        'Contact form integration',
        'SEO optimized',
        'Fast loading performance'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and technical projects demonstrating various skills and technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-blue-100 rounded-lg p-2 text-blue-600">
                    {project.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                </div>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-gray-300 hover:border-blue-600 hover:text-blue-600"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Interested in seeing more of my work?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
            onClick={() => window.open('https://github.com/Ashutosh049-lab', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;