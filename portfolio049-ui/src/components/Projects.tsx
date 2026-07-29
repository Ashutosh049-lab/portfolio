// import { ExternalLink, Github, Code, Zap, Users, Palette } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'AI Resume Builder',
//       description: 'An AI-powered resume-building platform that helps users create professional resumes with intelligent content suggestions and real-time preview.',
//       longDescription: 'Contributed to the development of an AI-powered resume-building platform using Next.js, React.js, TypeScript, and Tailwind CSS. Integrated OpenAI and Gemini APIs to enhance resume content with professional phrasing, tailored summaries, and skill suggestions.',
//       technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'Puppeteer'],
//       githubUrl: 'https://github.com/Ashutosh049-lab/Ai_Resume_Builder',
//       liveUrl: null,
//       icon: <Code className="h-6 w-6" />,
//       features: [
//         'AI-powered content enhancement',
//         'Real-time live preview',
//         'PDF and Word export',
//         'Responsive design',
//         'SEO optimized'
//       ]
//     },
//     {
//       title: 'Revamped Niche Community Platform',
//       description: 'An interactive platform for discovering and joining niche communities with real-time features and AI-powered recommendations.',
//       longDescription: 'Developed an interactive platform for discovering and joining niche communities, featuring real-time updates and seamless user engagement using React.js and Firebase. Built responsive discussion boards with threaded comments and voting systems.',
//       technologies: ['React.js', 'Tailwind CSS', 'Firebase', 'Node.js', 'PostgreSQL', 'Socket.IO', 'TypeScript'],
//       githubUrl: 'https://github.com/Ashutosh049-lab/Revamped-Niche-Community-Platform-Project-',
//       liveUrl: null,
//       icon: <Users className="h-6 w-6" />,
//       features: [
//         'Real-time chat and updates',
//         'AI-powered recommendations',
//         'Discussion boards with voting',
//         'Live polls and Q&A sessions',
//         'Push notifications'
//       ]
//     },
//     {
//       title: 'Sidcup Family Golf Clone',
//       description: 'A responsive clone of the Sidcup Family Golf website showcasing modern web development skills and attention to detail.',
//       longDescription: 'Developed a responsive clone of the Sidcup Family Golf website using HTML, CSS, and JavaScript. Recreated core features and design elements to closely match the original site and enhance user experience.',
//       technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
//       githubUrl: 'https://github.com/Ashutosh049-lab/SidcupFamilyGolfClone_Project',
//       liveUrl: null,
//       icon: <Palette className="h-6 w-6" />,
//       features: [
//         'Pixel-perfect design recreation',
//         'Fully responsive layout',
//         'Smooth animations',
//         'Cross-browser compatibility',
//         'Optimized performance'
//       ]
//     },
//     {
//       title: 'Portfolio Website',
//       description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing my skills and projects.',
//       longDescription: 'This very website you\'re viewing! Built with modern web technologies including React, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and a clean, professional interface.',
//       technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI', 'Vite'],
//       githubUrl: '#',
//       liveUrl: '#',
//       icon: <Zap className="h-6 w-6" />,
//       features: [
//         'Modern responsive design',
//         'Smooth scroll navigation',
//         'Contact form integration',
//         'SEO optimized',
//         'Fast loading performance'
//       ]
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             A showcase of my recent work and technical projects demonstrating various skills and technologies
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-200">
//               <CardHeader className="pb-4">
//                 <div className="flex items-center space-x-3 mb-3">
//                   <div className="bg-blue-100 rounded-lg p-2 text-blue-600">
//                     {project.icon}
//                   </div>
//                   <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed">{project.description}</p>
//               </CardHeader>
              
//               <CardContent className="space-y-6">
//                 {/* Technologies */}
//                 <div>
//                   <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, techIndex) => (
//                       <Badge key={techIndex} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Key Features */}
//                 <div>
//                   <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features</h4>
//                   <ul className="text-sm text-gray-600 space-y-1">
//                     {project.features.slice(0, 3).map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-center">
//                         <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex space-x-3 pt-4">
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="flex-1 border-gray-300 hover:border-blue-600 hover:text-blue-600"
//                     onClick={() => window.open(project.githubUrl, '_blank')}
//                   >
//                     <Github className="mr-2 h-4 w-4" />
//                     View Code
//                   </Button>
                  
//                   {project.liveUrl && (
//                     <Button
//                       size="sm"
//                       className="flex-1 bg-blue-600 hover:bg-blue-700"
//                       onClick={() => window.open(project.liveUrl, '_blank')}
//                     >
//                       <ExternalLink className="mr-2 h-4 w-4" />
//                       Live Demo
//                     </Button>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16">
//           <p className="text-lg text-gray-600 mb-6">
//             Interested in seeing more of my work?
//           </p>
//           <Button
//             variant="outline"
//             size="lg"
//             className="border-blue-600 text-blue-600 hover:bg-blue-50"
//             onClick={() => window.open('https://github.com/Ashutosh049-lab', '_blank')}
//           >
//             <Github className="mr-2 h-5 w-5" />
//             View All Projects on GitHub
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


























// import { ExternalLink, Github, Code, Zap, Users, Palette, Leaf } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'Gardening Planner',
//       description: 'A comprehensive gardening management platform that provides plant care reminders, helps users design their garden layout, and tracks seasonal tasks.',
//       longDescription: 'Built a comprehensive gardening management platform using React, TypeScript, and Firebase. Features include personalized plant care reminders, garden layout designer, pest tracking, weather integration, and community sharing. Designed to make gardening seamless and organized for users like Isabella who want to maintain healthy plants year-round.',
//       technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'OpenWeatherMap API', 'React Router'],
//       githubUrl: 'https://github.com/Ashutosh049-lab/Gardening-Planner/tree/main/my-react-app',
//       liveUrl: 'https://resilient-crumble-346567.netlify.app/',
//       icon: <Leaf className="h-6 w-6" />,
//       features: [
//         'Personalized plant care reminders',
//         'Interactive garden layout planner',
//         'Pest and disease tracker',
//         'Weather integration',
//         'Community sharing platform'
//       ]
//     },
//     {
//       title: 'AI Resume Builder',
//       description: 'An AI-powered resume-building platform that helps users create professional resumes with intelligent content suggestions and real-time preview.',
//       longDescription: 'Contributed to the development of an AI-powered resume-building platform using Next.js, React.js, TypeScript, and Tailwind CSS. Integrated OpenAI and Gemini APIs to enhance resume content with professional phrasing, tailored summaries, and skill suggestions.',
//       technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'Puppeteer'],
//       githubUrl: 'https://github.com/Ashutosh049-lab/Ai_Resume_Builder',
//       liveUrl: null,
//       icon: <Code className="h-6 w-6" />,
//       features: [
//         'AI-powered content enhancement',
//         'Real-time live preview',
//         'PDF and Word export',
//         'Responsive design',
//         'SEO optimized'
//       ]
//     },
//     {
//       title: 'Revamped Niche Community Platform',
//       description: 'An interactive platform for discovering and joining niche communities with real-time features and AI-powered recommendations.',
//       longDescription: 'Developed an interactive platform for discovering and joining niche communities, featuring real-time updates and seamless user engagement using React.js and Firebase. Built responsive discussion boards with threaded comments and voting systems.',
//       technologies: ['React.js', 'Tailwind CSS', 'Firebase', 'Node.js', 'PostgreSQL', 'Socket.IO', 'TypeScript'],
//       githubUrl: 'https://github.com/Ashutosh049-lab/Revamped-Niche-Community-Platform-Project-',
//       liveUrl: null,
//       icon: <Users className="h-6 w-6" />,
//       features: [
//         'Real-time chat and updates',
//         'AI-powered recommendations',
//         'Discussion boards with voting',
//         'Live polls and Q&A sessions',
//         'Push notifications'
//       ]
//     },
//     {
//       title: 'Sidcup Family Golf Clone',
//       description: 'A responsive clone of the Sidcup Family Golf website showcasing modern web development skills and attention to detail.',
//       longDescription: 'Developed a responsive clone of the Sidcup Family Golf website using HTML, CSS, and JavaScript. Recreated core features and design elements to closely match the original site and enhance user experience.',
//       technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
//       githubUrl: 'https://github.com/Ashutosh049-lab/SidcupFamilyGolfClone_Project',
//       liveUrl: null,
//       icon: <Palette className="h-6 w-6" />,
//       features: [
//         'Pixel-perfect design recreation',
//         'Fully responsive layout',
//         'Smooth animations',
//         'Cross-browser compatibility',
//         'Optimized performance'
//       ]
//     },
//     {
//       title: 'Portfolio Website',
//       description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing my skills and projects.',
//       longDescription: 'This very website you\'re viewing! Built with modern web technologies including React, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and a clean, professional interface.',
//       technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI', 'Vite'],
//       githubUrl: '#',
//       liveUrl: '#',
//       icon: <Zap className="h-6 w-6" />,
//       features: [
//         'Modern responsive design',
//         'Smooth scroll navigation',
//         'Contact form integration',
//         'SEO optimized',
//         'Fast loading performance'
//       ]
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             A showcase of my recent work and technical projects demonstrating various skills and technologies
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-200">
//               <CardHeader className="pb-4">
//                 <div className="flex items-center space-x-3 mb-3">
//                   <div className="bg-blue-100 rounded-lg p-2 text-blue-600">
//                     {project.icon}
//                   </div>
//                   <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed">{project.description}</p>
//               </CardHeader>
              
//               <CardContent className="space-y-6">
//                 {/* Technologies */}
//                 <div>
//                   <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, techIndex) => (
//                       <Badge key={techIndex} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Key Features */}
//                 <div>
//                   <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features</h4>
//                   <ul className="text-sm text-gray-600 space-y-1">
//                     {project.features.slice(0, 3).map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-center">
//                         <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex space-x-3 pt-4">
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="flex-1 border-gray-300 hover:border-blue-600 hover:text-blue-600"
//                     onClick={() => window.open(project.githubUrl, '_blank')}
//                   >
//                     <Github className="mr-2 h-4 w-4" />
//                     View Code
//                   </Button>
                  
//                   {project.liveUrl && (
//                     <Button
//                       size="sm"
//                       className="flex-1 bg-blue-600 hover:bg-blue-700"
//                       onClick={() => window.open(project.liveUrl, '_blank')}
//                     >
//                       <ExternalLink className="mr-2 h-4 w-4" />
//                       Live Demo
//                     </Button>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16">
//           <p className="text-lg text-gray-600 mb-6">
//             Interested in seeing more of my work?
//           </p>
//           <Button
//             variant="outline"
//             size="lg"
//             className="border-blue-600 text-blue-600 hover:bg-blue-50"
//             onClick={() => window.open('https://github.com/Ashutosh049-lab', '_blank')}
//           >
//             <Github className="mr-2 h-5 w-5" />
//             View All Projects on GitHub
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;








// import { ExternalLink, Github, Code, Zap, Users, Palette, Leaf } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'Gardening Planner',
//       description: 'A comprehensive gardening management platform that provides plant care reminders, helps users design their garden layout, and tracks seasonal tasks.',
//       longDescription: 'Built a comprehensive gardening management platform using React, TypeScript, and Firebase. Features include personalized plant care reminders, garden layout designer, pest tracking, weather integration, and community sharing. Designed to make gardening seamless and organized for users like Isabella who want to maintain healthy plants year-round.',
//       technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'OpenWeatherMap API', 'React Router'],
//       githubUrl: 'https://github.com/Ashutosh049-lab/Gardening-Planner/tree/main/my-react-app',
//       liveUrl: 'https://resilient-crumble-346567.netlify.app/',
//       image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&crop=center',
//       icon: <Leaf className="h-6 w-6" />,
//       features: [
//         'Personalized plant care reminders',
//         'Interactive garden layout planner',
//         'Pest and disease tracker',
//         'Weather integration',
//         'Community sharing platform'
//       ]
//     },
//     {
//       title: 'AI Resume Builder',
//       description: 'An AI-powered resume-building platform that helps users create professional resumes with intelligent content suggestions and real-time preview.',
//       longDescription: 'Contributed to the development of an AI-powered resume-building platform using Next.js, React.js, TypeScript, and Tailwind CSS. Integrated OpenAI and Gemini APIs to enhance resume content with professional phrasing, tailored summaries, and skill suggestions.',
//       technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'Puppeteer'],
//       githubUrl: 'https://github.com/Ashutosh049-lab/Ai_Resume_Builder',
//       liveUrl: 'https://ai-resume-builder-demo.vercel.app/',
//       image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop&crop=center',
//       icon: <Code className="h-6 w-6" />,
//       features: [
//         'AI-powered content enhancement',
//         'Real-time live preview',
//         'PDF and Word export',
//         'Responsive design',
//         'SEO optimized'
//       ]
//     },
//     {
//       title: 'Revamped Niche Community Platform',
//       description: 'An interactive platform for discovering and joining niche communities with real-time features and AI-powered recommendations.',
//       longDescription: 'Developed an interactive platform for discovering and joining niche communities, featuring real-time updates and seamless user engagement using React.js and Firebase. Built responsive discussion boards with threaded comments and voting systems.',
//       technologies: ['React.js', 'Tailwind CSS', 'Firebase', 'Node.js', 'PostgreSQL', 'Socket.IO', 'TypeScript'],
//       githubUrl: 'https://github.com/Ashutosh049-lab/Revamped-Niche-Community-Platform-Project-',
//       liveUrl: 'https://niche-community-platform.netlify.app/',
//       image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center',
//       icon: <Users className="h-6 w-6" />,
//       features: [
//         'Real-time chat and updates',
//         'AI-powered recommendations',
//         'Discussion boards with voting',
//         'Live polls and Q&A sessions',
//         'Push notifications'
//       ]
//     },
//     {
//       title: 'Sidcup Family Golf Clone',
//       description: 'A responsive clone of the Sidcup Family Golf website showcasing modern web development skills and attention to detail.',
//       longDescription: 'Developed a responsive clone of the Sidcup Family Golf website using HTML, CSS, and JavaScript. Recreated core features and design elements to closely match the original site and enhance user experience.',
//       technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
//       githubUrl: 'https://github.com/Ashutosh049-lab/SidcupFamilyGolfClone_Project',
//       liveUrl: 'https://sidcup-family-golf-clone.netlify.app/',
//       image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&h=400&fit=crop&crop=center',
//       icon: <Palette className="h-6 w-6" />,
//       features: [
//         'Pixel-perfect design recreation',
//         'Fully responsive layout',
//         'Smooth animations',
//         'Cross-browser compatibility',
//         'Optimized performance'
//       ]
//     },
//     {
//       title: 'Portfolio Website',
//       description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing my skills and projects.',
//       longDescription: 'This very website you\'re viewing! Built with modern web technologies including React, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and a clean, professional interface.',
//       technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI', 'Vite'],
//       githubUrl: 'https://github.com/Ashutosh049-lab/portfolio-website',
//       liveUrl: 'https://ashutosh-portfolio.vercel.app/',
//       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
//       icon: <Zap className="h-6 w-6" />,
//       features: [
//         'Modern responsive design',
//         'Smooth scroll navigation',
//         'Contact form integration',
//         'SEO optimized',
//         'Fast loading performance'
//       ]
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             A showcase of my recent work and technical projects demonstrating various skills and technologies
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border border-gray-200 overflow-hidden">
//               {/* Project Image */}
//               <div className="relative h-48 overflow-hidden">
//                 <img 
//                   src={project.image} 
//                   alt={project.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-blue-600">
//                   {project.icon}
//                 </div>
//               </div>

//               <CardHeader className="pb-4">
//                 <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
//                   {project.title}
//                 </CardTitle>
//                 <p className="text-gray-600 leading-relaxed">{project.description}</p>
//               </CardHeader>
              
//               <CardContent className="space-y-6">
//                 {/* Technologies */}
//                 <div>
//                   <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, techIndex) => (
//                       <Badge key={techIndex} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Key Features */}
//                 <div>
//                   <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features</h4>
//                   <ul className="text-sm text-gray-600 space-y-1">
//                     {project.features.slice(0, 3).map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-center">
//                         <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex space-x-3 pt-4">
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="flex-1 border-gray-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
//                     onClick={() => window.open(project.githubUrl, '_blank')}
//                   >
//                     <Github className="mr-2 h-4 w-4" />
//                     View Code
//                   </Button>
                  
//                   <Button
//                     size="sm"
//                     className="flex-1 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-200"
//                     onClick={() => window.open(project.liveUrl, '_blank')}
//                   >
//                     <ExternalLink className="mr-2 h-4 w-4" />
//                     Live Demo
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16">
//           <p className="text-lg text-gray-600 mb-6">
//             Interested in seeing more of my work?
//           </p>
//           <Button
//             variant="outline"
//             size="lg"
//             className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-200"
//             onClick={() => window.open('https://github.com/Ashutosh049-lab', '_blank')}
//           >
//             <Github className="mr-2 h-5 w-5" />
//             View All Projects on GitHub
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


















import { ExternalLink, Github, Code, Zap, Users, Palette, Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Improve My City',
      description: 'A full-stack civic issue reporting platform for submitting and tracking city complaints in real time.',
      longDescription:
        'Built a full-stack civic issue reporting application where citizens can submit, track, and manage city complaints in real time. Implemented secure JWT-based authentication, role-based access for admins, an AI chatbot for support, and automated email notifications for status updates.',
      technologies: [
        'React.js',
        'Redux Toolkit',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
        'AI Chatbot'
      ],
      githubUrl: 'https://github.com/Ashutosh049-lab/ImproveMyCity-Project',
      liveUrl: 'https://inquisitive-boba-2f9186.netlify.app/',
      image:
        'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?w=600&h=400&fit=crop&crop=center',
      icon: <Code className="h-6 w-6" />,
      features: [
        'Real-time civic complaint tracking',
        'JWT-based authentication and role-based access',
        'AI chatbot for user assistance',
        'Automated email notifications',
        'Responsive, mobile-friendly UI'
      ]
    },
    {
      title: 'MusicJunction – Music Entertainment Platform',
      description:
        'A full-stack music streaming and collaboration platform where users can upload, stream, and discover audio content with role-based access control.',
      longDescription:
        'Developed a full-stack music entertainment platform that lets musicians and listeners upload, stream, and discover audio content. Implemented secure JWT-based authentication and role-based authorization, collaborative projects, playlists, ratings, comments, and social interactions, along with WebSocket-based real-time feeds and AI-powered audio processing and recommendations.',
      technologies: [
        'React.js',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
        'WebSockets',
        'FFmpeg',
        'Spotify API'
      ],
      githubUrl: 'https://github.com/Ashutosh049-lab/MusicJunction-Music-Entertainment-Platform',
      liveUrl: 'https://shiny-jalebi-d5b170.netlify.app/',
      image:
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop&crop=center',
      icon: <Zap className="h-6 w-6" />,
      features: [
        'Upload, stream, and discover music tracks',
        'JWT-based authentication and role-based access',
        'Collaborative projects, playlists, ratings, and comments',
        'Real-time activity feed and notifications with WebSockets',
        'AI-enhanced audio processing and recommendations'
      ]
    },
    {
      title: 'Gardening Planner',
      description:
        'A comprehensive gardening management platform that provides plant care reminders, helps users design their garden layout, and tracks seasonal tasks.',
      longDescription:
        'Built a comprehensive gardening management platform using React, TypeScript, and Firebase. Features include personalized plant care reminders, garden layout designer, pest tracking, weather integration, and community sharing. Designed to make gardening seamless and organized for users like Isabella who want to maintain healthy plants year-round.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'OpenWeatherMap API', 'React Router'],
      githubUrl: 'https://github.com/Ashutosh049-lab/Gardening-Planner/tree/main/my-react-app',
      liveUrl: 'https://resilient-crumble-346567.netlify.app/',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&crop=center',
      icon: <Leaf className="h-6 w-6" />,
      features: [
        'Personalized plant care reminders',
        'Interactive garden layout planner',
        'Pest and disease tracker',
        'Weather integration',
        'Community sharing platform'
      ]
    },
    {
      title: 'AI Resume Builder',
      description:
        'An AI-powered resume-building platform that helps users create professional resumes with intelligent content suggestions and real-time preview.',
      longDescription:
        'Contributed to the development of an AI-powered resume-building platform using Next.js, React.js, TypeScript, and Tailwind CSS. Integrated OpenAI and Gemini APIs to enhance resume content with professional phrasing, tailored summaries, and skill suggestions.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'Puppeteer'],
      githubUrl: 'https://github.com/Ashutosh049-lab/Ai_Resume_Builder',
      liveUrl: 'http://localhost:3000/',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop&crop=center',
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
      description:
        'An interactive platform for discovering and joining niche communities with real-time features and AI-powered recommendations.',
      longDescription:
        'Developed an interactive platform for discovering and joining niche communities, featuring real-time updates and seamless user engagement using React.js and Firebase. Built responsive discussion boards with threaded comments and voting systems.',
      technologies: ['React.js', 'Tailwind CSS', 'Firebase', 'Node.js', 'PostgreSQL', 'Socket.IO', 'TypeScript'],
      githubUrl: 'https://github.com/Ashutosh049-lab/Revamped-Niche-Community-Platform-Project-',
      liveUrl: 'https://scintillating-semifreddo-c24b33.netlify.app/',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center',
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
      description:
        'A responsive clone of the Sidcup Family Golf website showcasing modern web development skills and attention to detail.',
      longDescription:
        'Developed a responsive clone of the Sidcup Family Golf website using HTML, CSS, and JavaScript. Recreated core features and design elements to closely match the original site and enhance user experience.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      githubUrl: 'https://github.com/Ashutosh049-lab/SidcupFamilyGolfClone_Project',
      liveUrl: 'https://jocular-platypus-6a8563.netlify.app/',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&h=400&fit=crop&crop=center',
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
      description:
        'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing my skills and projects.',
      longDescription:
        "This very website you're viewing! Built with modern web technologies including React, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and a clean, professional interface.",
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI', 'Vite'],
      githubUrl: 'https://github.com/Ashutosh049-lab/portfolio-website',
      liveUrl: 'https://ashutosh-portfolio-049.netlify.app/',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border border-gray-200 overflow-hidden h-full flex flex-col">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-blue-600">
                  {project.icon}
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <CardHeader className="pb-4 flex-shrink-0">
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed text-sm">{project.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4 flex-grow flex flex-col">
                  {/* Technologies */}
                  <div className="flex-shrink-0">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="flex-grow">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0 mt-2"></div>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4 flex-shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                    
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-200"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </div>
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
            className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-200"
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