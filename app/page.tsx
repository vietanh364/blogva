import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30 overflow-x-hidden font-sans relative">
      
      {/* 1. HIỆU ỨNG ÁNH SÁNG NỀN */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-emerald-600/10 blur-[100px] rounded-full -z-10"></div>

      {/* 2. THANH ĐIỀU HƯỚNG */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex justify-between items-center px-10 py-5 max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tighter italic text-blue-400 uppercase">
            Viet Anh <span className="text-white font-normal">'s Blog</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-zinc-400 font-medium">
            <a href="#" className="hover:text-blue-400 transition-colors">Trang chủ</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Kỹ năng</a>
            <a href="#certificates" className="hover:text-blue-400 transition-colors">Chứng chỉ</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Liên hệ</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Dự án</a>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6 pt-40 pb-20 flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/20 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            AI Engineer & Creative Coder
          </div>

          <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[1.1]">
            Xin chào, mình là <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Ngô Đức Việt Anh
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed font-light">
            Đam mê xây dựng các hệ thống thông minh và trải nghiệm số hiện đại.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#skills" className="px-8 py-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl font-bold hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-center shadow-lg">
              ⚡ Xem kỹ năng
            </a>
            <a href="#contact" className="px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl font-bold hover:bg-zinc-800 transition-colors text-zinc-300 text-center">
              📞 Liên hệ ngay
            </a>
          </div>
        </div>

        <div className="relative group animate-in fade-in zoom-in duration-1000">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-100 group-hover:blur-2xl transition duration-700"></div>
          <div className="relative w-72 h-[400px] md:w-80 md:h-[480px] bg-zinc-900 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl transition-all duration-700 hover:rotate-0 rotate-2">
            <Image 
              src="/avatar.jpg" 
              alt="Ngô Đức Việt Anh" 
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </div>

      {/* 4. SKILLS SECTION (PHẦN KỸ NĂNG MỚI) */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-emerald-500"></span>
          Kỹ năng & Công nghệ
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Python", level: "90%", color: "bg-blue-500", icon: "🐍" },
            { name: "Next.js", level: "85%", color: "bg-white", icon: "⚛️" },
            { name: "TensorFlow", level: "80%", color: "bg-orange-500", icon: "🧠" },
            { name: "Tailwind CSS", level: "95%", color: "bg-cyan-400", icon: "🎨" },
            { name: "Node.js", level: "75%", color: "bg-green-500", icon: "🟢" },
            { name: "PostgreSQL", level: "70%", color: "bg-indigo-400", icon: "🐘" },
            { name: "Docker", level: "65%", color: "bg-blue-400", icon: "🐳" },
            { name: "Git", level: "90%", color: "bg-red-500", icon: "📂" },
          ].map((skill, index) => (
            <div key={index} className="bg-zinc-900/40 border border-white/5 p-6 rounded-3xl hover:bg-zinc-800/60 transition-all group">
              <div className="text-2xl mb-3">{skill.icon}</div>
              <h3 className="font-bold text-zinc-200 group-hover:text-white transition">{skill.name}</h3>
              <div className="mt-4 h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${skill.color} transition-all duration-1000`} 
                  style={{ width: skill.level }}
                ></div>
              </div>
              <p className="mt-2 text-[10px] text-zinc-500 font-mono text-right uppercase tracking-tighter">{skill.level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CERTIFICATES SECTION (4 Ô CÓ ẢNH) */}
      <section id="certificates" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-blue-500"></span>
          Chứng chỉ cá nhân
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Chứng chỉ 1 */}
          <div className="group relative bg-zinc-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-zinc-800/60 transition-all duration-500 hover:-translate-y-2 shadow-xl">
            <div className="relative w-full h-40 bg-zinc-800 overflow-hidden">
               <Image src="/cert1.jpg" alt="Certificate 1" fill className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
            </div>
            <div className="p-6">
              <h3 className="font-bold mb-1 group-hover:text-blue-400 transition">JavaScript Essentials 1</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">JavaScript Essentials 1</p>
            </div>
          </div>

          {/* Chứng chỉ 2 */}
          <div className="group relative bg-zinc-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-zinc-800/60 transition-all duration-500 hover:-translate-y-2 shadow-xl">
            <div className="relative w-full h-40 bg-zinc-800 overflow-hidden">
               <Image src="/cert2.jpg" alt="Certificate 2" fill className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
            </div>
            <div className="p-6">
              <h3 className="font-bold mb-1 group-hover:text-cyan-400 transition">JavaScript Essentials 2</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">JavaScript Essentials 2</p>
            </div>
          </div>

          {/* Chứng chỉ 3 */}
          <div className="group relative bg-zinc-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-zinc-800/60 transition-all duration-500 hover:-translate-y-2 shadow-xl">
            <div className="relative w-full h-40 bg-zinc-800 overflow-hidden">
               <Image src="/cert3.jpg" alt="Certificate 3" fill className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
            </div>
            <div className="p-6">
              <h3 className="font-bold mb-1 group-hover:text-indigo-400 transition">Networking Basics</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">Networking Basics</p>
            </div>
          </div>

          

        </div>
      </section>
{/* 4. PROJECTS SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-orange-500"></span>
          Dự án tiêu biểu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative bg-zinc-900/40 border border-white/10 p-10 rounded-[3rem] hover:bg-zinc-800/60 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl group-hover:bg-orange-500/10"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-6">📱</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition">App nhà hàng hiện đại</h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Ứng dụng di động tối ưu hóa quy trình gọi món và quản lý dịch vụ khách hàng. Tích hợp giao diện hiện đại và trải nghiệm mượt mà.
              </p>
              <a 
                href="https://drive.google.com/file/d/17TGgy2f08QwzdFADSzAf_KexLYAMIXhN/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg"
              >
                <span>Tải APK dự án</span>
                <span className="text-xl">📥</span>
              </a>
            </div>
          </div>
          <div className="group relative bg-zinc-900/20 border border-dashed border-white/10 p-10 rounded-[3rem] flex flex-col items-center justify-center text-zinc-600 italic">
             <p>Đang cập nhật thêm dự án mới...</p>
          </div>
        </div>
      </section>
      {/* 6. CONTACT SECTION */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 scroll-mt-20">
        <div className="bg-zinc-900/50 border border-white/10 rounded-[3rem] p-12 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl"></div>
          <h2 className="text-4xl font-bold mb-12">Liên hệ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-xl group-hover:bg-blue-500 transition-all">📞</div>
              <div><p className="text-[10px] text-zinc-500 uppercase font-bold">Điện thoại</p><p className="text-lg">0846.593.346</p></div>
            </div>
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-xl group-hover:bg-cyan-500 transition-all">✉️</div>
              <div><p className="text-[10px] text-zinc-500 uppercase font-bold">Email</p><p className="text-lg">ducvietanhn@gmail.com</p></div>
            </div>
            <a href="https://www.facebook.com/anh3604/" target="_blank" className="flex items-center gap-5 group hover:text-indigo-400 transition">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-xl group-hover:bg-indigo-500 group-hover:text-white transition-all font-bold">f</div>
              <div><p className="text-[10px] text-zinc-500 uppercase font-bold">Facebook</p><p className="text-lg">fb.com/vietanh</p></div>
            </a>
            <a href="https://www.instagram.com/ngd.av/" target="_blank" className="flex items-center gap-5 group hover:text-pink-400 transition">
              <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-xl group-hover:bg-pink-500 group-hover:text-white transition-all">📸</div>
              <div><p className="text-[10px] text-zinc-500 uppercase font-bold">Instagram</p><p className="text-lg">@vietanh.dev</p></div>
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center py-12 text-zinc-600 text-sm border-t border-white/5">
        <p>© 2025 Ngo Duc Viet Anh. Developed with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );

  
}