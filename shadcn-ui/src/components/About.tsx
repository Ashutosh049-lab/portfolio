import { GraduationCap, Target, Users, Lightbulb, Code, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Problem Solving',
      description: 'Strong analytical thinking with expertise in system design and scalable architecture solutions'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Teamwork & Communication',
      description: 'Collaborative mindset with excellent communication skills and cross-functional team experience'
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Continuous Learning',
      description: 'Fast learner with adaptability and passion for staying updated with cutting-edge technologies'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Full-Stack Expertise',
      description: 'Comprehensive experience in both frontend and backend development with modern frameworks'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover my journey, expertise, and passion for creating innovative software solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="prose prose-xl text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                I'm a passionate Computer Science Engineering student with extensive experience in 
                full-stack development and modern web technologies. My expertise spans across 
                frontend frameworks like React and Angular, backend technologies including Node.js 
                and Spring Boot, and cloud platforms such as AWS and Azure.
              </p>
              
              <p className="text-xl leading-relaxed mb-6">
                With proficiency in multiple programming languages including Java, JavaScript, Python, 
                and TypeScript, I specialize in building scalable web applications, designing efficient 
                database schemas, and implementing microservices architecture. My experience includes 
                working with both SQL and NoSQL databases, RESTful APIs, and modern DevOps practices.
              </p>
              
              <p className="text-xl leading-relaxed">
                I'm driven by the challenge of solving complex problems and creating user-centric 
                solutions that make a real impact. My goal is to contribute to innovative projects 
                while continuously expanding my knowledge in emerging technologies and best practices.
              </p>
            </div>

            {/* Education & Achievement */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 rounded-xl p-3 shadow-lg">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
                      <div className="space-y-2">
                        <div>
                          <p className="font-semibold text-gray-900">Computer Science Engineering</p>
                          <p className="text-gray-700">LNCT Group of Colleges</p>
                          <p className="text-sm text-gray-600">Expected Graduation: June 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 rounded-xl p-3 shadow-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Achievements</h3>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-700">• 5+ Professional Certifications</p>
                        <p className="text-sm text-gray-700">• Multiple Full-Stack Projects</p>
                        <p className="text-sm text-gray-700">• Cloud Platform Expertise</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Core Strengths</h3>
            
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-3 text-white shadow-lg">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Career Objective */}
            <Card className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 border-indigo-200 shadow-xl">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Career Vision</h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To leverage my comprehensive technical skills and passion for innovation in building 
                  next-generation software solutions. I aim to contribute to impactful projects that 
                  solve real-world problems while continuously growing as a versatile full-stack engineer 
                  and technology leader.
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