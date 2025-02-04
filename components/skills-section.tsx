import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiMysql, SiFigma, SiJavascript, SiFlutter, SiPython, SiGithub } from 'react-icons/si';

export function SkillsSection() {
  const skills = [
    { name: 'React', icon: <FaReact className="w-12 h-12 text-blue-500" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12 text-white" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12 text-blue-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12 text-teal-400" /> },
    { name: 'HTML/CSS', icon: <SiHtml5 className="w-12 h-12 text-orange-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="w-12 h-12 text-green-500" /> },
    { name: 'SQL', icon: <SiMysql className="w-12 h-12 text-blue-400" /> },
    { name: 'Figma', icon: <SiFigma className="w-12 h-12 text-purple-400" /> },
    { name: 'JavaScript', icon: <SiJavascript className="w-12 h-12 text-yellow-400" /> },
    { name: 'Flutter', icon: <SiFlutter className="w-12 h-12 text-blue-400" /> },
    { name: 'Python', icon: <SiPython className="w-12 h-12 text-yellow-500" /> },
    { name: 'GitHub', icon: <SiGithub className="w-12 h-12 text-gray-500" /> },
  ];

  return (
    <section id="skills">
      <section id="skills" className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center">
                {skill.icon}
                <h3 className="text-xl font-semibold text-white mt-4">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

