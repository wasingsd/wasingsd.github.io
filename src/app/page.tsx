import React from 'react';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Layout,
  Layers,
  Globe,
  Database,
  ExternalLink,
  ChevronRight,
  Monitor,
  Code2,
  Cpu
} from 'lucide-react';

const App = () => {
  // ข้อมูลโปรเจกต์ที่อัปเดตล่าสุดตามโปรไฟล์ของคุณ Jeans
  const projects = [
    {
      title: "SRTA Digital Asset Management",
      category: "Government & Enterprise",
      description: "ระบบจัดการสินทรัพย์ดิจิทัลขนาดใหญ่สำหรับการรถไฟแห่งประเทศไทย (SRTA) เน้นประสิทธิภาพและความโปร่งใส",
      tags: ["Digital Transformation", "Asset Management", "Enterprise"],
      size: "large"
    },
    {
      title: "Miss Grand Application",
      category: "High-Traffic Entertainment",
      description: "แอปพลิเคชันรวม Livestreaming และ E-commerce สำหรับผู้ใช้งานจำนวนมากทั่วประเทศ",
      tags: ["Scalability", "Livestreaming", "Mobile Ecosystem"],
      size: "medium"
    },
    {
      title: "ZWAPMONEY (US)",
      category: "Global Startup",
      description: "Co-founder แพลตฟอร์ม Marketplace รองเท้า Sneaker ในสหรัฐอเมริกา ผสมผสานเทคโนโลยีสมัยใหม่",
      tags: ["Web3", "Marketplace", "International Business"],
      size: "medium"
    },
    {
      title: "Fizzy & Retail Analytics",
      category: "Retail Tech",
      description: "การวิเคราะห์ข้อมูลการขายและพัฒนาระบบ Marketplace เฉพาะทางจากประสบการณ์สาย Modern Retail",
      tags: ["Sales Analysis", "Business Intelligence", "Retail"],
      size: "small"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] selection:bg-white selection:text-black font-sans">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tighter hover:text-white transition-colors cursor-default">
              WASIN.G
            </span>
            <span className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase">Lucas Strategy</span>
          </div>
          <div className="flex gap-8 text-sm text-zinc-400 items-center">
            <a href="#about" className="hover:text-white transition-colors hidden md:block">About</a>
            <a href="#work" className="hover:text-white transition-colors hidden md:block">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors text-xs uppercase tracking-widest border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all">
              Work with me
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">

        {/* Hero Section */}
        <section id="about" className="mb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Leading Digital Transformation in Chiang Mai
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Crafting Systems for <br />
              <span className="text-zinc-500">Modern Enterprises.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10">
              Project Manager ผู้เชี่ยวชาญการขับเคลื่อนองค์กรรัฐวิสาหกิจและระบบ High-traffic
              ด้วยพื้นฐานจาก Modern Retail Management (RMUTL) และประสบการณ์สร้าง Startup
              มุ่งมั่นพัฒนาระบบซอฟต์แวร์ที่ซับซ้อนให้กลายเป็นประสบการณ์ที่เรียบง่าย
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-widest">
                <Database size={14} /> Enterprise Data
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-widest">
                <Monitor size={14} /> Scalable UI/UX
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-widest">
                <Cpu size={14} /> System Architecture
              </div>
            </div>
          </div>
        </section>

        {/* Work Section (Bento Grid) */}
        <section id="work" className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2 tracking-tight">Key Projects</h2>
              <p className="text-zinc-500">ผลงานการบริหารจัดการโครงการและนวัตกรรมดิจิทัล</p>
            </div>
            <div className="text-xs text-zinc-600 uppercase tracking-[0.3em]">
              Selected Works 2021—2025
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-[#121212] p-8 hover:border-white/20 transition-all duration-500
                  ${project.size === 'large' ? 'md:col-span-2 md:row-span-2 min-h-[400px]' : ''}
                  ${project.size === 'medium' ? 'md:col-span-1 md:row-span-2' : ''}
                `}
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold border-l border-zinc-700 pl-3">
                        {project.category}
                      </span>
                      <div className="p-2 rounded-full border border-white/5 group-hover:bg-white group-hover:text-black transition-all">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                    <h3 className={`font-bold mb-3 transition-colors ${project.size === 'large' ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="text-[9px] px-2 py-1 rounded-md border border-white/5 bg-white/5 text-zinc-400 uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual Accent */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/0 via-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Philosophy */}
        <section className="mb-32 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-10">
            <div>
              <h2 className="text-white text-2xl font-bold mb-8 flex items-center gap-3">
                <Code2 size={24} className="text-zinc-500" /> Career Journey
              </h2>
              <div className="space-y-10">
                <div className="relative pl-8 border-l border-zinc-800">
                  <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-white border-4 border-[#0a0a0a]"></div>
                  <p className="text-white font-bold mb-1 tracking-tight text-lg">Project Manager</p>
                  <p className="text-sm text-zinc-500 mb-3 uppercase tracking-widest">Lucas Strategy | 2023 - PRESENT</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">ดูแลการเปลี่ยนผ่านสู่ดิจิทัลของรัฐวิสาหกิจ และบริหารทีมพัฒนาซอฟต์แวร์ระดับ Enterprise ในเชียงใหม่</p>
                </div>
                <div className="relative pl-8 border-l border-zinc-800">
                  <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-zinc-600 border-4 border-[#0a0a0a]"></div>
                  <p className="text-zinc-200 font-bold mb-1 tracking-tight text-lg">Co-founder & Lead PM</p>
                  <p className="text-sm text-zinc-500 mb-3 uppercase tracking-widest">ZWAPMONEY (US) | 2021 - 2023</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">บริหารแพลตฟอร์ม Marketplace สำหรับตลาดรองเท้า Sneaker ในสหรัฐฯ และจัดการระบบ Fizzy</p>
                </div>
                <div className="relative pl-8 border-l border-zinc-800 opacity-60">
                  <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-zinc-800 border-4 border-[#0a0a0a]"></div>
                  <p className="text-zinc-400 font-bold mb-1 tracking-tight text-lg">Retail Operations</p>
                  <p className="text-sm text-zinc-500 mb-3 uppercase tracking-widest">Thaiwatsadu</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">จุดเริ่มต้นของการเข้าใจระบบธุรกิจค้าปลีกสมัยใหม่ (Modern Retail) และการวิเคราะห์ยอดขาย</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-zinc-900 to-transparent rounded-3xl -z-10 blur-2xl"></div>
            <div className="bg-zinc-900/50 backdrop-blur-xl rounded-[2.5rem] p-12 border border-white/5 shadow-2xl">
              <span className="text-6xl font-serif text-zinc-700 leading-none">“</span>
              <h2 className="text-white text-3xl font-bold mb-8 leading-tight">
                Empowering Public Services through <br />
                <span className="text-zinc-500">Agile Innovation.</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 italic">
                ผมใช้ประสบการณ์จากการทำ Startup มาประยุกต์กับโครงสร้างองค์กรขนาดใหญ่
                เพื่อให้เกิดความคล่องตัวและผลลัพธ์ที่วัดผลได้จริงในพื้นที่เชียงใหม่
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-white text-4xl font-bold tracking-tighter">RMUTL</p>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600 mt-2">Alumni (Retail Mgmt)</p>
                </div>
                <div>
                  <p className="text-white text-4xl font-bold tracking-tighter">3.5M+</p>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600 mt-2">Combined App Users</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer id="contact" className="border-t border-white/5 pt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
              <p className="text-zinc-500 text-sm mb-6 uppercase tracking-[0.4em]">Get in touch</p>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter hover:text-white transition-all cursor-default">
                wasin.gsd<span className="text-zinc-800">@</span>gmail.com
              </h2>
              <div className="flex gap-4">
                <a href="mailto:wasin.gsd@gmail.com" className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-all active:scale-95">
                  <Mail size={18} /> Send Message
                </a>
                <a href="https://linkedin.com/in/wasin-garnsomdee" target="_blank" className="p-4 rounded-full bg-[#121212] border border-white/10 hover:border-white transition-all text-zinc-400 hover:text-white">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com" target="_blank" className="p-4 rounded-full bg-[#121212] border border-white/10 hover:border-white transition-all text-zinc-400 hover:text-white">
                  <Github size={20} />
                </a>
              </div>
            </div>
            <div className="text-right flex flex-col items-end">
              <div className="bg-white/5 px-4 py-2 rounded-2xl border border-white/10 mb-6">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Available for</p>
                <p className="text-xs text-white font-medium">Digital Transformation Consulting</p>
              </div>
              <p className="text-zinc-700 text-[9px] tracking-widest uppercase">
                © 2025 WASIN GARNSOMDEE <br />
                BUILT WITH ANTIGRAVITY & NEXT.JS
              </p>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;