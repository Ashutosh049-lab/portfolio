import { Code, Database, Wrench, Users, Brain, Cloud, Globe, Layers } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="h-6 w-6" />,
      skills: ['JavaScript', 'Java', 'Python', 'TypeScript', 'HTML5', 'CSS3'],
      color: 'bg-blue-100 text-blue-700 border-blue-200'
    },
    {
      title: 'Frontend Development',
      icon: <Globe className="h-6 w-6" />,
      skills: ['React', 'Angular', 'Next.js', 'Redux', 'jQuery', 'TailwindCSS', 'Responsive Web Design', 'UI'],
      color: 'bg-green-100 text-green-700 border-green-200'
    },
    {
      title: 'Backend & Frameworks',
      icon: <Wrench className="h-6 w-6" />,
      skills: ['Node.js', 'Express.js', 'Spring Boot', 'Django', 'J2EE', 'Hibernate', 'RESTful APIs'],
      color: 'bg-purple-100 text-purple-700 border-purple-200'
    },
    {
      title: 'Databases',
      icon: <Database className="h-6 w-6" />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL', 'Database Schema Design'],
      color: 'bg-orange-100 text-orange-700 border-orange-200'
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="h-6 w-6" />,
      skills: ['AWS', 'Azure', 'Cloud Platforms', 'CI/CD', 'Git', 'Microservices'],
      color: 'bg-indigo-100 text-indigo-700 border-indigo-200'
    },
    {
      title: 'Development Concepts',
      icon: <Layers className="h-6 w-6" />,
      skills: ['Full-Stack Development', 'System Design', 'Scalable Web Applications', 'Object Oriented Programming(OOPs)', 'Data Structure Algorithm'],
      color: 'bg-teal-100 text-teal-700 border-teal-200'
    },
    {
      title: 'Tools & Technologies',
      icon: <Brain className="h-6 w-6" />,
      skills: ['Testing & Debugging', 'AI', 'VS Code', 'GitHub', 'SDLC', 'Agile'],
      color: 'bg-rose-100 text-rose-700 border-rose-200'
    },
    {
      title: 'Soft Skills',
      icon: <Users className="h-6 w-6" />,
      skills: ['Fast Learner', 'Adaptability', 'Time Management', 'Teamwork', 'Problem Solving', 'Effective Communication'],
      color: 'bg-pink-100 text-pink-700 border-pink-200'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills, development expertise, and professional capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-lg">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-3 text-white shadow-lg">
                    {category.icon}
                  </div>
                  <span className="text-gray-900 font-semibold">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className={`${category.color} hover:scale-105 transition-all duration-200 cursor-default font-medium px-3 py-1`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Certifications Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'AWS Training and Certification', provider: 'Amazon Web Services', icon: '☁️' },
              { title: 'Foundations of User Experience (UX) Design', provider: 'Coursera', icon: '🎨' },
              { title: 'Programming Fundamentals', provider: 'Coursera', icon: '💻' },
              { title: 'Programming Foundations with JavaScript, HTML, CSS', provider: 'Coursera', icon: '🌐' },
              { title: 'Object Oriented Programming in Java', provider: 'Coursera', icon: '☕' }
            ].map((cert, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{cert.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{cert.title}</h4>
                      <p className="text-sm text-gray-600">{cert.provider}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;