import { GraduationCap, Target, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Problem Solving',
      description: 'Strong analytical thinking and problem-solving approach to complex challenges'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Teamwork',
      description: 'Collaborative mindset with excellent communication and cross-functional skills'
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Eager to Learn',
      description: 'Fast learner with adaptability and passion for staying updated with latest technologies'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives me as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed">
                I'm an enthusiastic Computer Science Engineering student with a strong foundation in 
                programming and web development. My journey in technology is driven by curiosity and 
                a passion for creating solutions that make a difference.
              </p>
              
              <p className="text-lg leading-relaxed">
                With proficiency in multiple programming languages including Java, JavaScript, and Python, 
                I enjoy working across the full stack - from crafting responsive user interfaces with 
                React and modern CSS frameworks to building robust backend systems with Node.js and databases.
              </p>
              
              <p className="text-lg leading-relaxed">
                I'm eager to apply my problem-solving skills in real-world projects and contribute to 
                building scalable, efficient software solutions while continuously learning and growing 
                in this dynamic field.
              </p>
            </div>

            {/* Education */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-lg p-3">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium text-gray-900">Computer Science Engineering</p>
                        <p className="text-gray-600">LNCT Group of Colleges</p>
                        <p className="text-sm text-gray-500">Expected Graduation: June 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Strengths</h3>
            
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-3 text-blue-600">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Career Objective */}
            <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Career Objective</h4>
                <p className="text-gray-700 leading-relaxed">
                  To leverage my technical skills and passion for software development in a dynamic 
                  environment where I can contribute to innovative projects, learn from experienced 
                  professionals, and grow as a well-rounded software engineer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;