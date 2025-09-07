import { Code, Database, Wrench, Users, Brain, Cloud } from 'lucide-react';
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
      title: 'Frameworks & Libraries',
      icon: <Wrench className="h-6 w-6" />,
      skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Redux', 'Spring Boot', 'TailwindCSS'],
      color: 'bg-green-100 text-green-700 border-green-200'
    },
    {
      title: 'Databases',
      icon: <Database className="h-6 w-6" />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL'],
      color: 'bg-purple-100 text-purple-700 border-purple-200'
    },
    {
      title: 'Tools & Technologies',
      icon: <Cloud className="h-6 w-6" />,
      skills: ['Git', 'VS Code', 'AWS', 'Azure', 'RESTful APIs', 'CI/CD', 'GitHub'],
      color: 'bg-orange-100 text-orange-700 border-orange-200'
    },
    {
      title: 'Technical Concepts',
      icon: <Brain className="h-6 w-6" />,
      skills: ['OOP', 'Data Structures', 'Algorithms', 'System Design', 'SDLC', 'Agile'],
      color: 'bg-indigo-100 text-indigo-700 border-indigo-200'
    },
    {
      title: 'Soft Skills',
      icon: <Users className="h-6 w-6" />,
      skills: ['Problem Solving', 'Communication', 'Teamwork', 'Time Management', 'Adaptability', 'Fast Learner'],
      color: 'bg-pink-100 text-pink-700 border-pink-200'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-lg">
                  <div className="bg-blue-100 rounded-lg p-2 text-blue-600">
                    {category.icon}
                  </div>
                  <span className="text-gray-900">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className={`${category.color} hover:scale-105 transition-transform duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Certifications Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'AWS Training and Certification',
              'Foundations of User Experience (UX) Design - Coursera',
              'Programming Fundamentals - Coursera',
              'Programming Foundations with JavaScript, HTML, CSS - Coursera',
              'Object Oriented Programming in Java - Coursera'
            ].map((cert, index) => (
              <Card key={index} className="bg-white hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-gray-800 text-center">{cert}</p>
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