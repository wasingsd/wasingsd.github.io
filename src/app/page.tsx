import React from 'react';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Layout,
  Globe,
  Database,
  Monitor,
  Code2,
  Cpu,
  Users,
  TrendingUp,
  Workflow,
  Settings,
  ShieldCheck,
  Zap
} from 'lucide-react';

const App = () => {
  const projects = [
    {
      title: "SRTA Digital Asset Management",
      category: "Government & Enterprise",
      description: "ระบบจัดการสินทรัพย์ดิจิทัลขนาดใหญ่สำหรับการรถไฟแห่งประเทศไทย (SRTA) เน้นประสิทธิภาพและความโปร่งใส",
      tags: ["Digital Transformation", "Asset Management", "Enterprise"],
      size: "large",
      icon: <ShieldCheck className="text-zinc-400" size={20} />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Miss Grand Application",
      category: "High-Traffic Entertainment",
      description: "แอปพลิเคชันรวม Livestreaming และ E-commerce สำหรับผู้ใช้งานจำนวนมากทั่วประเทศ",
      tags: ["Scalability", "Livestreaming", "Mobile Ecosystem"],
      size: "medium",
      icon: <Zap className="text-zinc-400" size={20} />,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1938&auto=format&fit=crop"
    },
    {
      title: "ZWAPMONEY (US)",
      category: "Global Startup",
      description: "Co-founder แพลตฟอร์ม Marketplace รองเท้า Sneaker ในสหรัฐอเมริกา ผสมผสานเทคโนโลยีสมัยใหม่",
      tags: ["Web3", "Marketplace", "International Business"],
      size: "medium",
      icon: <Globe className="text-zinc-400" size={20} />,
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Fizzy & Retail Analytics",
      category: "Retail Tech",
      description: "การวิเคราะห์ข้อมูลการขายและพัฒนาระบบ Marketplace เฉพาะทางจากประสบการณ์สาย Modern Retail",
      tags: ["Sales Analysis", "Business Intelligence", "Retail"],
      size: "small",
      icon: <TrendingUp className="text-zinc-400" size={20} />,
      image: "https://images.unsplash.com/photo-1551288049-bbda4865cda1?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const expertise = [
    { name: "Project Management", icon: <Workflow size={18} /> },
    { name: "Enterprise Solutions", icon: <Database size={18} /> },
    { name: "UI/UX Strategy", icon: <Layout size={18} /> },
    { name: "Team Leadership", icon: <Users size={18} /> },
    { name: "System Config", icon: <Settings size={18} /> },
    { name: "Digital Transformation", icon: <Cpu size={18} /> },
  ];

  return (
    /* พื้นหลังหลักแบบมีมิติ: ใช้ Grid Pattern และ Radial Gradient */
    <div className="min-h-screen bg-[#080808] text-[#f4f4f5] selection:bg-zinc-800 selection:text-white font-sans relative overflow-x-hidden">

      {/* Background Layer 1: Grid System */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Background Layer 2: Radial Spotlight เพื่อสร้างมิติความลึก */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.8),transparent_100%)]"></div>

      {/* Background Layer 3: Bottom Fog Transition เพื่อให้รอยต่อช่วงล่างนุ่มนวล */}
      <div className="absolute bottom-0 left-0 w-full h-[80vh] bg-gradient-to-t from-zinc-100 via-zinc-100/10 to-transparent pointer-events-none"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tighter hover:text-white transition-colors cursor-default text-white">
              WASIN.G
            </span>
            <span className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase font-medium">Lucas Strategy</span>
          </div>
          <div className="flex gap-8 text-sm text-zinc-400 items-center">
            <a href="#about" className="hover:text-white transition-colors hidden md:block">About</a>
            <a href="#work" className="hover:text-white transition-colors hidden md:block">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors text-xs uppercase tracking-widest border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all">
              Connect
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">

        {/* Hero Section */}
        <section id="about" className="mb-40">
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400 mb-8 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Leading Digital Transformation in Chiang Mai
              </div>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.95] text-white">
                Digital <br />
                <span className="text-zinc-500 italic">Architect.</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-12 max-w-2xl font-medium">
                Project Manager ผู้ขับเคลื่อนโครงสร้างพื้นฐานดิจิทัลให้รัฐวิสาหกิจ
                ด้วยประสบการณ์บริหารแพลตฟอร์มระดับ Enterprise และ Startup สเกลใหญ่
                ผสมผสาน Business Insight จากสายงานค้าปลีกสู่เทคโนโลยีที่ไร้พรมแดน
              </p>

              <div className="flex flex-wrap gap-4">
                {expertise.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] uppercase tracking-widest px-4 py-2 bg-white/5 border border-white/10 rounded-full text-zinc-300 hover:border-white/40 transition-colors backdrop-blur-sm font-semibold">
                    {skill.icon} {skill.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Image Slot */}
            <div className="hidden lg:block relative group">
              <div className="w-64 h-80 bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/10 relative shadow-2xl">
                <img
                  src="/wasinpf.jpg"
                  alt="Wasin Profile"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-zinc-800 rounded-bl-3xl"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 border-zinc-800 rounded-tr-3xl"></div>
            </div>
          </div>
        </section>

        {/* Work Section (Bento Grid) */}
        <section id="work" className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-[1px] w-8 bg-zinc-700"></div>
                <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-400 font-bold">Selected Works</h2>
              </div>
              <h3 className="text-4xl font-bold tracking-tight text-white">Enterprise Case Studies</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/80 backdrop-blur-md flex flex-col hover:border-white/20 transition-all duration-500 shadow-xl
                  ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                  ${project.size === 'medium' ? 'md:col-span-1 md:row-span-2' : ''}
                `}
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 opacity-[0.05] group-hover:opacity-20 transition-opacity duration-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale scale-110 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
                </div>

                <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
                        {project.icon}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-zinc-300 py-1 px-3 border border-zinc-800 rounded-full backdrop-blur-sm font-bold">
                        {project.category}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <h3 className={`font-bold mb-4 tracking-tight leading-none text-white transition-colors 
                        ${project.size === 'large' ? 'text-4xl md:text-5xl' : 'text-2xl'}`}>
                        {project.title}
                      </h3>
                      <p className="text-zinc-300 text-sm leading-relaxed mb-8 max-w-sm group-hover:text-white transition-colors font-medium">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="text-[9px] px-2 py-1 rounded border border-white/5 bg-white/5 text-zinc-400 uppercase font-bold tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-40 grid md:grid-cols-[1.2fr_1fr] gap-20 items-center text-zinc-900">
          <div className="relative">
            <div className="flex items-center gap-3 mb-10 text-zinc-950">
              <Code2 size={24} className="text-zinc-800" />
              <h2 className="text-2xl font-bold tracking-tight uppercase">Professional Path</h2>
            </div>

            <div className="space-y-12 relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-zinc-900/20"></div>

              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-zinc-950 border-4 border-white shadow-lg group-hover:scale-125 transition-transform"></div>
                <div className="mb-1 flex justify-between items-baseline">
                  <p className="text-zinc-950 font-bold text-xl tracking-tight">Project Manager</p>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">2023 - Present</span>
                </div>
                <p className="text-sm text-zinc-600 mb-3 font-bold uppercase tracking-tighter">Lucas Strategy</p>
                <p className="text-sm text-zinc-700 leading-relaxed max-w-md font-medium">บริหารโปรเจกต์ดิจิทัลทรานส์ฟอร์เมชันสำหรับภาครัฐและวิสาหกิจ มุ่งเน้นการสร้างผลกระทบเชิงบวกในพื้นที่ภาคเหนือ</p>
              </div>

              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-zinc-600 border-4 border-white shadow-md group-hover:scale-125 transition-transform"></div>
                <div className="mb-1 flex justify-between items-baseline">
                  <p className="text-zinc-800 font-bold text-xl tracking-tight">Co-founder & Lead PM</p>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">2021 - 2023</span>
                </div>
                <p className="text-sm text-zinc-600 mb-3 font-bold uppercase tracking-tighter">ZWAPMONEY (US)</p>
                <p className="text-sm text-zinc-700 leading-relaxed max-w-md font-medium">บริหารจัดการแพลตฟอร์ม Marketplace ขนาดใหญ่และวางโครงสร้างระบบหลังบ้านสำหรับตลาดระดับโลก</p>
              </div>

              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-zinc-400 border-4 border-white group-hover:scale-125 transition-transform"></div>
                <div className="mb-1 flex justify-between items-baseline">
                  <p className="text-zinc-500 font-bold text-xl tracking-tight">Retail Management</p>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Early Career</span>
                </div>
                <p className="text-sm text-zinc-500 mb-3 font-bold uppercase tracking-tighter">Thaiwatsadu</p>
                <p className="text-sm text-zinc-600 leading-relaxed max-w-md font-medium italic">ประสบการณ์พื้นฐานในอุตสาหกรรมค้าปลีกสมัยใหม่และการวิเคราะห์ข้อมูลยอดขาย</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-300 to-zinc-500 rounded-[3rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-zinc-950 rounded-[3rem] p-12 border border-white/10 shadow-2xl text-zinc-100">
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-1 w-8 bg-zinc-800 rounded-full overflow-hidden">
                  {i === 1 && <div className="h-full w-full bg-white"></div>}
                </div>)}
              </div>
              <h2 className="text-3xl font-bold mb-8 leading-tight tracking-tight italic">
                "Scaling systems requires <br />
                <span className="text-zinc-500">empathy for users.</span>"
              </h2>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-2 font-bold">University</p>
                  <p className="text-white text-2xl font-bold tracking-tighter">RMUTL '23</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-2 font-bold">Base Location</p>
                  <p className="text-white text-2xl font-bold tracking-tighter">Chiang Mai</p>
                </div>
              </div>
              <div className="mt-12 pt-10 border-t border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Monitor size={18} className="text-white" />
                </div>
                <p className="text-[11px] text-zinc-400 font-bold uppercase tracking-widest">Enterprise Solution Specialist</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="pt-24 pb-12 text-zinc-950">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="max-w-xl">
              <p className="text-zinc-500 text-[10px] mb-8 uppercase tracking-[0.6em] font-bold">Get in touch</p>
              <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter text-zinc-900">
                Let's <span className="text-zinc-400">talk.</span>
              </h2>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:wasin.gsd@gmail.com" className="flex items-center gap-3 bg-zinc-950 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all active:scale-95 shadow-xl">
                  <Mail size={18} /> Send Message
                </a>
                <a href="https://linkedin.com/in/wasin-garnsomdee" target="_blank" className="p-4 rounded-full bg-white border border-zinc-300 hover:border-zinc-950 transition-all text-zinc-500 hover:text-zinc-950 shadow-sm">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com" target="_blank" className="p-4 rounded-full bg-white border border-zinc-300 hover:border-zinc-950 transition-all text-zinc-500 hover:text-zinc-950 shadow-sm">
                  <Github size={24} />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-end gap-10 md:text-right">
              <div className="bg-zinc-200/50 backdrop-blur-sm p-6 rounded-3xl border border-zinc-300 max-w-[240px]">
                <p className="text-[9px] text-zinc-500 uppercase tracking-widest mb-3 font-bold">Status</p>
                <p className="text-xs text-zinc-800 leading-relaxed font-bold">
                  ยินดีรับปรึกษาด้าน Digital Transformation สำหรับวิสาหกิจและองค์กรภาครัฐ
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase font-bold mb-2">Developed by</span>
                <span className="text-xl font-bold tracking-tighter text-zinc-950">WASIN GARNSOMDEE</span>
                <span className="text-[10px] text-zinc-400 tracking-[0.4em] uppercase font-bold mt-4 italic">© 2025 ALL RIGHTS RESERVED.</span>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;