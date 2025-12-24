import React from 'react';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Description as DescriptionIcon,
  Insights as InsightsIcon
} from '@mui/icons-material';

// --- Placeholder for your existing Layout component ---
// In a real application, you would import this from a dedicated file.
const Layout = ({ children }) => {
  // The original HTML's body classes determine the site's overall look.
  // We'll apply these to the top-level div and use them for the header/footer.
  const bodyClassName = "font-[Poppins,Inter,sans-serif] bg-[#F8FAFC] dark:bg-[#0A2342] text-[#0A2342] dark:text-[#F8FAFC] transition-colors duration-300";

  return (
    <div className={bodyClassName}>
      <div className="relative min-h-screen w-full overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

// --- Header Component (Extracted from HTML) ---
const Header = () => {
  // Dynamic header behavior script converted to a React effect
  React.useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        // Equivalent of: bg-white/80 dark:bg-primary/80 backdrop-blur-sm shadow-md py-2
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        if (document.documentElement.classList.contains('dark')) {
          header.style.backgroundColor = 'rgba(10, 35, 66, 0.8)';
        }
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)';
        header.style.paddingTop = '0.5rem'; // py-2
        header.style.paddingBottom = '0.5rem'; // py-2
        header.style.transition = 'all 300ms';
      } else {
        // Equivalent of: py-4
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'none';
        header.style.boxShadow = 'none';
        header.style.paddingTop = '1rem'; // py-4
        header.style.paddingBottom = '1rem'; // py-4
        header.style.transition = 'all 300ms';
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Updates", href: "#" },
    { label: "Policies", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Login/Register", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="header" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
      <div className="max-w-[1280px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between rounded-[9999px] px-6 py-2 border border-transparent dark:border-[rgba(0, 224, 255, 0.2)] shadow-lg"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
          // Dark mode glassmorphism
          data-glassmorphism-dark-style={{ background: 'rgba(10, 35, 66, 0.3)' }}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🧠</span>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-[#0A2342] dark:text-[#F8FAFC]">EduIntel</h1>
              <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] hidden md:block">Empowering Smart Decisions through Intelligent Insights</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="text-[#0A2342] dark:text-[#F8FAFC] hover:text-[#00E0FF] dark:hover:text-[#00E0FF] transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              className="font-bold text-sm px-6 py-[0.625rem] rounded-[9999px] transition-all duration-300 transform hover:scale-[1.05]"
              href="#"
              style={{
                background: 'linear-gradient(to right, #0A2342, #00E0FF)',
                color: 'white',
                boxShadow: '0 0 15px 5px rgba(0, 224, 255, 0.3), 0 0 5px 0px rgba(0, 224, 255, 0.2)'
              }}
              data-hover-shadow="0 0 25px 8px rgba(0, 224, 255, 0.4), 0 0 10px 2px rgba(0, 224, 255, 0.3)"
            >
              <span className="truncate">🔍 Explore AI Portal</span>
            </a>
            <button className="lg:hidden text-[#0A2342] dark:text-[#F8FAFC]">
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// --- Footer Component (Extracted from HTML) ---
const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Policies", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-[#0A2342] text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">EduIntel</h3>
            <p className="text-sm text-gray-300">Making Governance Smarter, Decisions Faster.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a className="text-gray-300 hover:text-white" href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Higher Education Dept.</li>
              <li>Govt. Building, Capital City</li>
              <li>contact@eduintel.gov</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a className="text-gray-300 hover:text-white" href="#" aria-label="Twitter">
                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
              <a className="text-gray-300 hover:text-white" href="#" aria-label="LinkedIn">
                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-gray-300">
          <p>© 2024 EduIntel. All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
};

// --- Features Data Array (Extracted from Repetitive Structure) ---
const features = [
  {
    icon: SearchIcon,
    title: "AI-Powered Retrieval",
  },
  {
    icon: GroupIcon,
    title: "Role-Based Access",
  },
  {
    icon: DescriptionIcon,
    title: "Smart Policy Management",
  },
  {
    icon: InsightsIcon,
    title: "Insight Generation",
  },
];

// --- Updates Data Array (Extracted from Repetitive Structure) ---
const updates = [
  {
    date: "2024-07-26",
    category: "News",
    title: "New AI Policy Framework Released",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCC3knXUDw24bgVWSoO_giXD-UHiVxl04qWrGY5joQmpeXP50F7A93mSaj_9ci3oyRUR46vcs7caYx-Hj2JL1IGSwBwhzzPPCcrqjb5BygcLfYvuTIyhpb6rZNX5zhPNomDa45ueRRwZp0Csno1EKGAqmjgXYrNoGm9RlDNmQNqDudELNHbudmpKbVG9ZCnLd2U6kgdNJjz_HzoyycoHT5-AnZiPS05aGqyQX3Enros1GuL2-2f03wrn5540DYBr4Qz32Rv0OctpA",
  },
  {
    date: "2024-07-15",
    category: "Announcements",
    title: "EduIntel Platform Launch",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoQYQaSJ1oKYs3StBSjxGfxyH1N1SLyqj5vJgRvjvALaN-yiDMjAFRHoXlpDUSyZT8vCuKOGPLhgLxuz1kmWX9dpLb6bUVfzqN173kDdaeJtXbj3WF0dE0fEZHGpUUpXiILNHDcYY28HAtFfIiuPBnv9U_sFOcPT7ocRlxTscoyRKQABgZv3s171PV-wyDvRq4o4HTIMU6IOHrwNjSltCrc9sfEuVZlHtw5cv5SZIAUhp6XAU87vS_YXUHNUdtMTVe4c_XZSs3sw",
  },
  {
    date: "2024-07-01",
    category: "Updates",
    title: "AI Training Program for Staff",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbAIcDLNk-Bk6e1eQPnTJPYozJb-HVvlXtGIiersOCvnMvKH9_dixgoyV3IrHIMFQ4RC-u__eBz1wUhyoBWsQUNaL9I7CbwdT6pDYBxTt-vw_qKAasDRYF2UrbkmaOQKPPSpiY7mce2hRrlPykV03-E4KewaPx3NeoaYaILr0GqzeVf8NWf4ShZ05iFyIFIpyAjfyLJuT2BfqomUP6r0QooUdfy1SX2l8Xx2mJ4S42cCdK2WQYhc9FJTQT8FiZ7mQjclKioWPw4A",
  },
];


const Home = () => {
  return (
    <Layout>
      {/* CSS rules for animations/glassmorphism that use pseudo-selectors or @keyframes */}
      <style>
        {`
          @keyframes wave {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
          }
          .animate-wave {
              background-size: 200% 200%;
              animation: wave 10s ease infinite;
          }
          .glassmorphism {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
          }
          .dark .glassmorphism {
              background: rgba(10, 35, 66, 0.3);
          }
        `}
      </style>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center animate-wave overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(135deg, #0A2342 0%, #00E0FF 100%)', // 'gradient-wave'
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/simple-dashed.png')" }}
        />
        <div className="max-w-[1280px] mx-auto px-6 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 text-left">
              <h1 className="text-4xl md:text-6xl font-[900] leading-tight tracking-tight text-white">
                Revolutionizing Policy Access with AI
              </h1>
              <p className="text-base md:text-lg font-normal text-gray-200">
                EduIntel is an AI-powered data retrieval system for the Higher Education Department, empowering smart decisions through intelligent insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="font-bold px-8 py-3 rounded-[9999px] transition-all duration-300 transform hover:scale-[1.05]"
                  href="#"
                  style={{
                    background: 'linear-gradient(to right, #00E0FF, #48D1CC)', // to-cyan-400
                    color: '#0A2342', // text-primary
                    boxShadow: '0 0 15px 5px rgba(0, 224, 255, 0.3), 0 0 5px 0px rgba(0, 224, 255, 0.2)'
                  }}
                  data-hover-shadow="0 0 25px 8px rgba(0, 224, 255, 0.4), 0 0 10px 2px rgba(0, 224, 255, 0.3)"
                >
                  <span className="truncate">💡 Start Searching</span>
                </a>
                <a
                  className="border-2 font-bold px-8 py-3 rounded-[9999px] transition-all duration-300"
                  href="#"
                  style={{
                    borderColor: '#00E0FF', // border-primary-focus
                    color: '#00E0FF', // text-primary-focus
                  }}
                  data-hover-bg="#00E0FF"
                  data-hover-color="#0A2342"
                >
                  <span className="truncate">📘 Learn More</span>
                </a>
              </div>
            </div>
            <div className="relative hidden md:block">
              <img
                alt="AI Brain Illustration"
                className="w-full h-auto object-cover transform scale-[1.25]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPzh2gzcnH1eHpgIKEEcwG6HUiAmHPhv_KSRbYcMa_GwEj36ll1nWENI8YTS1icVEYU4gbdhMBMTq_N5uTHxFhcMxisxu1q5WkPCgvVfOE2OzCfGYSgNAd_5vFrNP-rcqoDhezKuWgb83LWetBjxaNY08Zf5VU04LTDvALIAWs3cQ4ezqqzKlzsRrJneO3ae9DqcHFwEC4QKQA3btmoYHGfOCxV4Wgn-H7RMnUYlmJauNxK7ydOQU-2tjsEl9TPzjAxHExlXsxTw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Section Divider --- */}

      {/* Vision Section */}
      <section className="py-20 md:py-32 bg-[#F8FAFC] dark:bg-[#0A2342]">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] dark:text-[#F8FAFC]">Making Governance Smarter, Decisions Faster.</h2>
          <div
            className="w-24 h-1 mx-auto my-6 rounded-[9999px]"
            style={{
              backgroundColor: '#00E0FF', // bg-primary-focus
              boxShadow: '0 0 15px 5px rgba(0, 224, 255, 0.3), 0 0 5px 0px rgba(0, 224, 255, 0.2)' // shadow-glow-primary
            }}
          ></div>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-[#6B7280] dark:text-[#9CA3AF]">
            Our vision is to transform policy access and decision-making within the Higher Education Department through the power of AI.
          </p>
        </div>
      </section>

      {/* --- Section Divider --- */}

      {/* Core Features Section */}
      <section className="py-20 md:py-24 bg-[#F8FAFC] dark:bg-[rgba(10, 35, 66, 0.05)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] dark:text-[#F8FAFC]">Core Features</h2>
            <p className="text-[#6B7280] dark:text-[#9CA3AF] mt-2">The essential pillars of the EduIntel platform.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-8 rounded-[0.75rem] glassmorphism border border-[rgba(10, 35, 66, 0.1)] dark:border-[rgba(0, 224, 255, 0.2)] text-center transition-all duration-300 transform hover:-translate-y-2"
                data-hover-border="#00E0FF"
                data-hover-shadow="0 0 15px 5px rgba(0, 224, 255, 0.3), 0 0 5px 0px rgba(0, 224, 255, 0.2)"
              >
                <div
                  className="inline-block p-4 rounded-[9999px] mb-4"
                  style={{
                    backgroundColor: 'rgba(10, 35, 66, 0.1)', // bg-primary/10
                  }}
                  data-dark-bg="rgba(0, 224, 255, 0.1)" // dark:bg-primary-focus/10
                >
                  <feature.icon className="text-4xl" style={{ color: '#0A2342' }} data-dark-color="#00E0FF" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0A2342] dark:text-[#F8FAFC]">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section Divider --- */}

      {/* About Section */}
      <section className="py-20 md:py-24 bg-[#F8FAFC] dark:bg-[#0A2342]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                alt="About EduIntel"
                className="rounded-[0.75rem] shadow-lg w-full h-auto"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC3knXUDw24bgVWSoO_giXD-UHiVxl04qWrGY5joQmpeXP50F7A93mSaj_9ci3oyRUR46vcs7caYx-Hj2JL1IGSwBwhzzPPCcrqjb5BygcLfYvuTIyhpb6rZNX5zhPNomDa45ueRRwZp0Csno1EKGAqmjgXYrNoGm9RlDNmQNqDudELNHbudmpKbVG9ZCnLd2U6kgdNJjz_HzoyycoHT5-AnZiPS05aGqyQX3Enros1GuL2-2f03wrn5540DYBr4Qz32Rv0OctpA"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] dark:text-[#F8FAFC] mb-4">About EduIntel</h2>
              <p className="text-[#6B7280] dark:text-[#9CA3AF] mb-6">
                EduIntel is a cutting-edge AI platform designed to streamline policy access and enhance decision-making within the Higher Education Department. Our system leverages advanced AI algorithms to provide intelligent insights and efficient data retrieval.
              </p>
              <a className="font-bold hover:underline" href="#" style={{ color: '#0A2342' }} data-dark-color="#00E0FF">Know More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section Divider --- */}

      {/* Latest Updates Section */}
      <section className="py-20 md:py-24 bg-[#F8FAFC] dark:bg-[rgba(10, 35, 66, 0.05)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] dark:text-[#F8FAFC]">Latest Updates</h2>
            <p className="text-[#6B7280] dark:text-[#9CA3AF] mt-2">News, announcements, and platform changes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {updates.map((update) => (
              <div
                key={update.title}
                className="rounded-[0.75rem] overflow-hidden shadow-lg border border-[rgba(10, 35, 66, 0.1)] dark:border-[rgba(0, 224, 255, 0.2)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  backgroundColor: '#FFFFFF', // bg-surface
                }}
                data-dark-bg="rgba(10, 35, 66, 0.05)" // dark:bg-surface-dark/50
              >
                <img className="w-full h-48 object-cover" src={update.imageSrc} alt={update.title} />
                <div className="p-6">
                  <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-2">{update.date} | {update.category}</p>
                  <h3 className="font-bold text-lg mb-3 text-[#0A2342] dark:text-[#F8FAFC]">{update.title}</h3>
                  <a className="font-semibold text-sm hover:underline" href="#" style={{ color: '#0A2342' }} data-dark-color="#00E0FF">Read More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section Divider --- */}

      {/* CTA Section */}
      <section
        style={{
          backgroundImage: 'linear-gradient(135deg, #0A2342 0%, #00E0FF 100%)', // bg-gradient-wave
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">🚀 Ready to Experience Smart Policy Search?</h2>
          <a
            className="font-bold px-10 py-4 rounded-[9999px] shadow-lg transition-all duration-300 transform hover:scale-[1.05] inline-block"
            href="#"
            style={{
              backgroundColor: '#FFFFFF', // bg-white
              color: '#0A2342', // text-primary
            }}
            data-hover-bg="#00E0FF" // hover:bg-primary-focus
            data-hover-color="#FFFFFF" // hover:text-white
          >
            Login to EduIntel Portal
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Home;