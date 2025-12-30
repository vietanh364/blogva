"use client"; // BẮT BUỘC: Thêm dòng này ở đầu file để dùng được tính năng Click
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  // 1. Tạo State để lưu bài viết đang đọc
  const [selectedPost, setSelectedPost] = useState<any>(null);

  // DANH SÁCH 10 BÀI VIẾT BLOG
  const blogPosts = [
    { id: 1, title: "Java 21: Những tính năng mới đáng chú ý", excerpt: "Khám phá Virtual Threads và Pattern Matching - hai bước ngoặt giúp Java mạnh mẽ hơn bao giờ hết.", content: "Java 21 mang đến Project Loom với Virtual Threads giúp xử lý hàng triệu request cùng lúc mà không tốn tài nguyên hệ thống. Ngoài ra, Pattern Matching cho switch giúp code Java trở nên ngắn gọn và an toàn hơn như các ngôn ngữ hiện đại.", date: "26/12/2025", category: "Java Core", link: "#" },
    { id: 2, title: "Hành trình chinh phục Spring Boot cho Beginner", excerpt: "Lộ trình từ nắm vững Dependency Injection đến việc xây dựng RESTful API đầu tiên.", content: "Spring Boot giúp việc phát triển Java Backend trở nên dễ dàng. Bạn cần nắm vững các annotation như @RestController, @Service, @Repository và cách cấu hình Application Properties.", date: "25/12/2025", category: "Framework", link: "#" },
    { id: 3, title: "Quản lý bộ nhớ trong Java: Hiểu về Heap và Stack", excerpt: "Cách JVM quản lý bộ nhớ và bí kíp để tránh lỗi OutOfMemoryError kinh điển.", content: "Heap là nơi lưu trữ object, trong khi Stack lưu các tham chiếu và biến cục bộ. Việc tối ưu hóa Garbage Collection (GC) là chìa khóa để build hệ thống lớn.", date: "24/12/2025", category: "JVM", link: "#" },
    { id: 4, title: "Sử dụng Docker để đóng gói ứng dụng Java", excerpt: "Hướng dẫn viết Dockerfile tối ưu cho các dự án Spring Boot để triển khai nhanh chóng.", content: "Docker hóa ứng dụng Java giúp đảm bảo môi trường dev và prod đồng nhất. Sử dụng Multi-stage build để giảm dung lượng file JAR xuống mức tối thiểu.", date: "23/12/2025", category: "DevOps", link: "#" },
    { id: 5, title: "Java Stream API: Viết code ngắn gọn và hiệu quả", excerpt: "Thay thế các vòng lặp for/while truyền thống bằng phong cách lập trình hàm.", content: "Stream API kết hợp với Lambda Expression giúp xử lý dữ liệu (filter, map, reduce) cực nhanh và code sạch sẽ hơn rất nhiều.", date: "22/12/2025", category: "Java Core", link: "#" },
    { id: 6, title: "Bảo mật ứng dụng với Spring Security & JWT", excerpt: "Xây dựng hệ thống xác thực và phân quyền mạnh mẽ cho các ứng dụng Web hiện đại.", content: "JWT (JSON Web Token) là tiêu chuẩn để bảo mật Stateless API. Spring Security cung cấp các filter mạnh mẽ để bảo vệ resource của bạn.", date: "21/12/2025", category: "Security", link: "#" },
    { id: 7, title: "Microservices với Spring Cloud: Những điều cần biết", excerpt: "Kiến trúc hệ thống phân tán, Service Discovery và Circuit Breaker với Resilience4j.", content: "Khi hệ thống quá lớn, Microservices là giải pháp. Bạn cần học về Eureka Server để quản lý service và Gateway để định tuyến request.", date: "20/12/2025", category: "Architecture", link: "#" },
    { id: 8, title: "Unit Test trong Java với JUnit 5 và Mockito", excerpt: "Tại sao lập trình viên giỏi luôn viết test? Cách đạt code coverage cao cho dự án.", content: "Viết Unit Test giúp bạn tự tin khi refactor code. Mockito giúp giả lập các tầng database hoặc service bên thứ 3.", date: "19/12/2025", category: "Testing", link: "#" },
    { id: 9, title: "Tối ưu hóa Database với Spring Data JPA", excerpt: "Cách sử dụng Query Methods, Specification và tối ưu N+1 query để tăng tốc ứng dụng.", content: "Tránh lỗi N+1 bằng cách sử dụng @EntityGraph hoặc JPQL JOIN FETCH. Luôn kiểm soát log SQL để tối ưu hiệu năng.", date: "18/12/2025", category: "Database", link: "#" },
    { id: 10, title: "Học Java xong làm gì? Các hướng đi nghề nghiệp", excerpt: "Từ Web Developer, Android Dev đến Big Data Engineer - Java vẫn là 'ông vua' doanh nghiệp.", content: "Thị trường Java luôn khát nhân lực, đặc biệt là các dự án về ngân hàng, bảo hiểm và thương mại điện tử lớn.", date: "17/12/2025", category: "Career", link: "#" }
  ];

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
          <div className="hidden md:flex gap-8 text-[11px] text-zinc-400 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-blue-400 transition-colors">Trang chủ</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Về mình</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Kỹ năng</a>
            <a href="#certificates" className="hover:text-blue-400 transition-colors">Chứng chỉ</a>
            <a href="#blog" className="text-orange-500 hover:text-orange-400 transition-colors">Java Blog</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Dự án</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Liên hệ</a>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6 pt-40 pb-20 flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/20 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Backend Developer & Java Enthusiast
          </div>

          <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[1.1]">
            Xin chào, mình là <br />
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500 bg-clip-text text-transparent">
              Ngô Đức Việt Anh
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed font-light">
            Sinh viên năm 4 Hutech ngành Công Nghệ Thông Tin.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#blog" className="px-8 py-4 bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl font-bold hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] transition-all active:scale-95 text-center shadow-lg">
              ☕ Khám phá Blog Java
            </a>
            <a href="#contact" className="px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl font-bold hover:bg-zinc-800 transition-colors text-zinc-300 text-center">
              📞 Liên hệ ngay
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-100 group-hover:blur-2xl transition duration-700"></div>
          <div className="relative w-72 h-[400px] md:w-80 md:h-[480px] bg-zinc-900 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl transition-all duration-700 hover:rotate-0 rotate-2">
            <Image src="/avator.jpg" alt="Ngô Đức Việt Anh" fill className="object-cover group-hover:scale-110 transition-transform duration-700" priority />
          </div>
        </div>
      </div>

      {/* --- MỤC PROFILE MỚI ĐƯỢC CHÈN VÀO ĐÂY --- */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-blue-500"></span>
          Về bản thân
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-zinc-900/40 border border-white/5 p-10 rounded-[3rem] backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-orange-400">Tóm tắt tiểu sử</h3>
            <p className="text-zinc-300 leading-[1.8] text-lg font-light">
                Tôi hiện là sinh viên năm cuối tại <span className="text-white font-medium">Đại học Công nghệ TP.HCM (HUTECH)</span>. 
                Với niềm đam mê mãnh liệt trong lĩnh vực lập trình Backend, tôi tập trung xây dựng các hệ thống có hiệu năng cao và khả năng mở rộng tốt. 
                Bên cạnh việc học trên trường, tôi thường xuyên tìm tòi các công nghệ mới trong hệ sinh thái Java để giải quyết các bài toán thực tế.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-900/20 to-zinc-900/40 border border-white/5 p-8 rounded-[3rem]">
            <h3 className="text-xl font-bold mb-6 italic underline decoration-blue-500">Thông tin cơ bản</h3>
            <ul className="space-y-4 text-sm tracking-wide">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-500 uppercase font-bold text-[10px]">Học vấn</span>
                <span className="text-zinc-200">Kỹ thuật phần mềm</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-500 uppercase font-bold text-[10px]">Trường</span>
                <span className="text-zinc-200">HUTECH</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-500 uppercase font-bold text-[10px]">Lĩnh vực</span>
                <span className="text-zinc-200">Backend Development</span>
              </li>
              <li className="flex justify-between">
                <span className="text-zinc-500 uppercase font-bold text-[10px]">Trạng thái</span>
                <span className="text-emerald-400">Sẵn sàng thực tập</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* --- KẾT THÚC MỤC PROFILE --- */}

      {/* 4. SKILLS SECTION */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-orange-500"></span>
          Kỹ năng & Công nghệ
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Java", level: "95%", color: "bg-orange-500", icon: "☕" },
            { name: "Spring Boot", level: "90%", color: "bg-green-500", icon: "🍃" },
            { name: "Hibernate", level: "85%", color: "bg-yellow-600", icon: "🔗" },
            { name: "Microservices", level: "80%", color: "bg-blue-400", icon: "☁️" },
            { name: "MySQL", level: "85%", color: "bg-blue-500", icon: "🐬" },
            { name: "Docker", level: "75%", color: "bg-cyan-500", icon: "🐳" },
            { name: "Redis", level: "70%", color: "bg-red-500", icon: "🔴" },
            { name: "AWS", level: "65%", color: "bg-orange-400", icon: "☁️" },
          ].map((skill, index) => (
            <div key={index} className="bg-zinc-900/40 border border-white/5 p-6 rounded-3xl hover:bg-zinc-800/60 transition-all group">
              <div className="text-2xl mb-3">{skill.icon}</div>
              <h3 className="font-bold text-zinc-200 group-hover:text-white transition">{skill.name}</h3>
              <div className="mt-4 h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className={`h-full ${skill.color} transition-all duration-1000`} style={{ width: skill.level }}></div>
              </div>
              <p className="mt-2 text-[10px] text-zinc-500 font-mono text-right tracking-tighter">{skill.level}</p>
            </div>
          ))}
        </div>
      </section>
          


      {/* 5. CERTIFICATES SECTION */}
      <section id="certificates" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-blue-500"></span>
          Chứng chỉ cá nhân
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="https://www.credly.com/badges/cd70fb3a-c335-458c-ac80-b592e3b23b31/public_url" target="_blank" className="group relative bg-zinc-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-zinc-800/60 transition-all duration-500 hover:-translate-y-2 shadow-xl block">
            <div className="relative w-full h-40 bg-zinc-800 overflow-hidden">
                <Image src="/cert4.jpg" alt="Java Cert 1" fill className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
            </div>
            <div className="p-6">
              <h3 className="font-bold mb-1 group-hover:text-blue-400 transition">JavaScript Essentials 1</h3>
              <p className="text-zinc-500 text-[10px] leading-relaxed uppercase tracking-widest italic">Cisco Verified</p>
            </div>
          </a>

          <a href="https://www.credly.com/badges/62cf5f2d-5474-4c1a-9638-b731f733b542/public_url" target="_blank" className="group relative bg-zinc-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-zinc-800/60 transition-all duration-500 hover:-translate-y-2 shadow-xl block">
            <div className="relative w-full h-40 bg-zinc-800 overflow-hidden">
                <Image src="/cert5.jpg" alt="Java Cert 2" fill className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
            </div>
            <div className="p-6">
              <h3 className="font-bold mb-1 group-hover:text-cyan-400 transition">JavaScript Essentials 2</h3>
              <p className="text-zinc-500 text-[10px] leading-relaxed uppercase tracking-widest italic">Cisco Verified</p>
            </div>
          </a>

          <a href="https://www.credly.com/badges/72ae464c-9bfb-4e60-90f7-6467d85f49ce/public_url" target="_blank" className="group relative bg-zinc-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-zinc-800/60 transition-all duration-500 hover:-translate-y-2 shadow-xl block">
            <div className="relative w-full h-40 bg-zinc-800 overflow-hidden">
                <Image src="/cert6.jpg" alt="Net Cert" fill className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
            </div>
            <div className="p-6">
              <h3 className="font-bold mb-1 group-hover:text-indigo-400 transition">Networking Basics</h3>
              <p className="text-zinc-500 text-[10px] leading-relaxed uppercase tracking-widest italic">Cisco Verified</p>
            </div>
          </a>
        </div>
      </section>

      {/* 6. JAVA BLOG SECTION */}
      <section id="blog" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-orange-500"></span>
          Java Insights & Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="group bg-zinc-900/40 border border-white/5 p-8 rounded-[2.5rem] hover:bg-zinc-800/60 transition-all duration-500 shadow-xl border-l-4 border-l-orange-500">
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-widest">
                  {post.category}
                </span>
                <span className="text-zinc-600 text-xs font-mono">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-orange-400 transition leading-snug">
                {post.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3 italic font-light">
                "{post.excerpt}"
              </p>
              {/* SỬA LẠI NÚT KHÁM PHÁ */}
              <button 
                onClick={() => setSelectedPost(post)}
                className="inline-flex items-center gap-2 text-[10px] font-black text-white hover:gap-4 transition-all uppercase tracking-[0.2em] cursor-pointer"
              >
                Khám phá <span className="text-orange-500 text-lg">→</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PROJECTS SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-red-500"></span>
          Dự án Backend tiêu biểu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative bg-zinc-900/40 border border-white/10 p-10 rounded-[3rem] hover:bg-zinc-800/60 transition-all duration-500 shadow-2xl">
            <div className="relative z-10">
              <div className="text-5xl mb-6">☕</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition">Restaurant Management System</h3>
              <p className="text-zinc-400 leading-relaxed mb-8">Hệ thống quản lý nhà hàng xây dựng trên nền tảng Spring Boot và Microservices. Tích hợp thanh toán và quản lý kho thời gian thực.</p>
              <a href="https://drive.google.com/file/d/17TGgy2f08QwzdFADSzAf_KexLYAMIXhN/view?usp=drive_link" target="_blank" className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold rounded-2xl transition-all shadow-lg">
                <span>Xem Demo dự án</span> <span className="text-xl">📥</span>
              </a>
            </div>
          </div>
          <div className="group relative bg-zinc-900/20 border border-dashed border-white/10 p-10 rounded-[3rem] flex flex-col items-center justify-center text-zinc-600 italic">
             <p className="animate-pulse text-sm uppercase tracking-widest font-bold">New Java Project Coming Soon...</p>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 scroll-mt-20">
        <div className="bg-zinc-900/50 border border-white/10 rounded-[3rem] p-12 backdrop-blur-xl relative overflow-hidden shadow-inner">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">Kết nối với mình</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-xl group-hover:bg-orange-500 transition-all">📞</div>
              <div><p className="text-[10px] text-zinc-500 uppercase font-bold">Điện thoại</p><p className="text-lg font-medium">0846.593.346</p></div>
            </div>
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-xl group-hover:bg-blue-500 transition-all">✉️</div>
              <div><p className="text-[10px] text-zinc-500 uppercase font-bold">Email</p><p className="text-lg font-medium">ducvietanhn@gmail.com</p></div>
            </div>
            <a href="https://www.facebook.com/anh3604/" target="_blank" className="flex items-center gap-5 group hover:text-orange-400 transition">
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-xl group-hover:bg-orange-500 group-hover:text-white transition-all font-bold italic">f</div>
              <div><p className="text-[10px] text-zinc-500 uppercase font-bold">Facebook</p><p className="text-lg font-medium">fb.com/vietanh</p></div>
            </a>
            <a href="https://www.instagram.com/ngd.av/" target="_blank" className="flex items-center gap-5 group hover:text-orange-400 transition">
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-xl group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-red-500 group-hover:to-purple-500 transition-all">📸</div>
              <div><p className="text-[10px] text-zinc-500 uppercase font-bold">Instagram</p><p className="text-lg font-medium">@vietanh.dev</p></div>
            </a>
          </div>
        </div>
      </section>

      {/* HIỆN THỊ BÀI VIẾT (MODAL) */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-white/10 rounded-[2.5rem] max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 md:p-12 relative shadow-2xl animate-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-colors"
            >
              ✕
            </button>
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest">{selectedPost.category}</span>
            <h2 className="text-3xl font-bold mt-4 mb-6 leading-tight">{selectedPost.title}</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4 text-lg font-light">
              <p className="italic text-orange-200/70 border-l-2 border-orange-500 pl-4">{selectedPost.excerpt}</p>
              <p className="pt-4">{selectedPost.content}</p>
              <p>Hệ sinh thái Java luôn thay đổi, việc cập nhật những kiến thức này không chỉ giúp tối ưu code mà còn mở ra nhiều cơ hội nghề nghiệp lớn.</p>
            </div>
            <button 
              onClick={() => setSelectedPost(null)}
              className="mt-10 w-full py-4 bg-orange-600 rounded-2xl font-bold hover:bg-orange-500 transition-all uppercase tracking-widest text-sm"
            >
              Đóng bài viết
            </button>
          </div>
        </div>
      )}

      <footer className="text-center py-12 text-zinc-600 text-xs border-t border-white/5 uppercase tracking-widest font-bold">
        <p>© 2025 Ngo Duc Viet Anh | Java Backend Developer</p>
      </footer>
    </main>
  );
}