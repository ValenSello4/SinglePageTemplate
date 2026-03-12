import { useState } from "react";

const products = [
  { id: 1, name: "Vestido Noche", price: "$18.000", category: "Vestidos", description: "Vestido largo de gasa con caída fluida y escote en V", tag: "NUEVO" },
  { id: 2, name: "Blazer Onyx", price: "$14.500", category: "Sacos", description: "Blazer oversize en paño negro con botones dorados", tag: "" },
  { id: 3, name: "Pantalón Seda", price: "$11.200", category: "Pantalones", description: "Pantalón wide leg en seda italiana color marfil", tag: "FAVORITO" },
  { id: 4, name: "Top Miel", price: "$7.800", category: "Tops", description: "Top ajustado con tirantes finos y detalle drapeado", tag: "" },
  { id: 5, name: "Saco Crepúsculo", price: "$16.000", category: "Sacos", description: "Saco cruzado con cinturón incluido, corte asimétrico", tag: "NUEVO" },
  { id: 6, name: "Falda Eclipse", price: "$9.400", category: "Faldas", description: "Falda midi satinada con abertura lateral sutil", tag: "" },
];

const categories = ["Todos", "Vestidos", "Sacos", "Pantalones", "Tops", "Faldas"];
const navLinks = ["Inicio", "Colección", "Nosotras", "Contacto"];
const navIds = ["inicio", "coleccion", "nosotras", "contacto"];

const contacts = [
  { label: "Instagram", handle: "@auracomplementos", icon: "◈", link: "https://www.instagram.com/aura.complementos_/" },
  { label: "WhatsApp", handle: "+54 9 000 000 0000", icon: "◉", link: "https://wa.me/5490000000000" },
  { label: "Email", handle: "hola@aura.com", icon: "◇", link: "mailto:hola@aura.com" },
];

const playfair = "'Playfair Display', Georgia, serif";
const didact = "'Didact Gothic', sans-serif";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered = activeCategory === "Todos"
    ? products
    : products.filter(p => p.category === activeCategory);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="overflow-x-hidden w-full bg-[#0a0a0a] text-[#e8e0d5]" style={{ fontFamily: didact }}>
      <style>{`
        html { scroll-behavior: smooth; overflow-x: hidden; }

        @keyframes fadeUp     { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slideRight { from { transform:scaleX(0); } to { transform:scaleX(1); } }
        @keyframes float      { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-10px); } }
        @keyframes slideDown  { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }

        .fade-up      { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both; }
        .d1{animation-delay:.1s} .d2{animation-delay:.25s} .d3{animation-delay:.4s} .d4{animation-delay:.55s} .d5{animation-delay:.7s}
        .line-anim    { display:block; transform-origin:left; animation:slideRight 1s cubic-bezier(0.16,1,0.3,1) 0.6s both; }
        .float-anim   { animation: float 6s ease-in-out infinite; }
        .menu-anim    { animation: slideDown 0.3s ease; }

        .nav-link { position:relative; }
        .nav-link::after { content:''; position:absolute; bottom:-3px; left:0; width:0; height:1px; background:#b89a6a; transition:width 0.3s; }
        .nav-link:hover::after { width:100%; }

        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-thumb { background:#222; border-radius:2px; }
        .no-scrollbar::-webkit-scrollbar { display:none; }
      `}</style>

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-[#151515]"
        style={{ background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)" }}>
        <div className="flex justify-between items-center px-[5%] py-5">
          <span className="text-[1.3rem] tracking-[0.2em] text-[#e8e0d5]" style={{ fontFamily: playfair }}>
            AURA
          </span>

          <div className="hidden md:flex gap-10">
            {navIds.map((id, i) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="nav-link bg-transparent border-0 cursor-pointer text-[#666] hover:text-[#b89a6a] text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-300"
                style={{ fontFamily: didact }}>
                {navLinks[i]}
              </button>
            ))}
          </div>

          <a href="https://www.instagram.com/aura.complementos_/" target="_blank"
            className="hidden md:block text-[0.7rem] tracking-[0.18em] text-[#444] hover:text-[#b89a6a] no-underline transition-colors duration-300">
            ✦ @auracomplementos
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú"
            className="flex md:hidden flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-1 z-[101]">
            <span className={`block w-[22px] h-px bg-[#e8e0d5] transition-all duration-300 ${menuOpen ? "rotate-45 translate-x-[3px] translate-y-[6px]" : ""}`} />
            <span className={`block w-[22px] h-px bg-[#e8e0d5] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-[22px] h-px bg-[#e8e0d5] transition-all duration-300 ${menuOpen ? "-rotate-45 translate-x-[3px] -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div className="menu-anim fixed inset-0 z-[99] flex flex-col items-center justify-center gap-10"
          style={{ background: "rgba(10,10,10,0.98)" }}>
          {navIds.map((id, i) => (
            <button key={id} onClick={() => scrollTo(id)}
              className="bg-transparent border-0 cursor-pointer text-[#888] hover:text-[#b89a6a] text-[1rem] tracking-[0.3em] uppercase transition-colors duration-300"
              style={{ fontFamily: didact }}>
              {navLinks[i]}
            </button>
          ))}
          <a href="https://www.instagram.com/aura.complementos_/" className="text-[0.7rem] tracking-[0.2em] text-[#444] no-underline mt-4">
            ✦ @auracomplementos
          </a>
        </div>
      )}

      {/* ── HERO ── */}
      <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, #1a1208 0%, #0a0a0a 60%)" }} />
        <div className="hidden md:block absolute top-[15%] right-[8%] w-px h-[40vh]"
          style={{ background: "linear-gradient(to bottom, transparent, #b89a6a40, transparent)" }} />

        {/* Content wrapper con padding */}
        <div className="relative z-10 w-full px-[5%] pt-28 pb-20 md:pt-0 md:pb-0">
          <div className="max-w-[700px]">
            <p className="fade-up d1 text-[0.7rem] tracking-[0.4em] text-[#b89a6a] uppercase mb-6" style={{ fontFamily: didact }}>
              Nueva colección · 2025
            </p>
            <h1 className="fade-up d2 font-normal leading-[1.05] text-[#e8e0d5] mb-1"
              style={{ fontFamily: playfair, fontSize: "clamp(3rem,10vw,6.5rem)" }}>
              Vestite con
            </h1>
            <h1 className="fade-up d3 font-bold italic leading-[1.05] text-[#b89a6a] mb-8"
              style={{ fontFamily: playfair, fontSize: "clamp(3rem,10vw,6.5rem)" }}>
              tu aura.
            </h1>

            <div className="line-anim h-px w-[120px] bg-[#b89a6a] mb-8" />

            <p className="fade-up d4 text-[0.95rem] text-[#888] leading-[1.9] max-w-[420px] mb-12" style={{ fontFamily: didact }}>
              Ropa diseñada para mujeres que eligen con intención. Piezas que duran, que se sienten, que se recuerdan.
            </p>

            <div className="fade-up d5 flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollTo("coleccion")}
                className="bg-transparent border border-[#b89a6a] text-[#b89a6a] hover:bg-[#b89a6a] hover:text-[#0a0a0a] px-10 py-3 text-[0.7rem] tracking-[0.25em] uppercase cursor-pointer transition-all duration-300"
                style={{ fontFamily: didact }}>
                Ver colección
              </button>
              <button onClick={() => scrollTo("nosotras")}
                className="bg-transparent border border-[#222] text-[#555] hover:bg-[#1a1a1a] hover:text-[#e8e0d5] px-10 py-3 text-[0.7rem] tracking-[0.25em] uppercase cursor-pointer transition-all duration-300"
                style={{ fontFamily: didact }}>
                Nuestra historia
              </button>
            </div>
          </div>
        </div>

        {/* Float badge */}
        <div className="float-anim hidden md:flex absolute right-[10%] top-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border border-[#b89a6a30] flex-col items-center justify-center"
          style={{ background: "rgba(184,154,106,0.05)" }}>
          <span className="text-[2rem] text-[#b89a6a]" style={{ fontFamily: playfair }}>✦</span>
          <span className="text-[0.55rem] tracking-[0.25em] text-[#555] uppercase mt-2" style={{ fontFamily: didact }}>Hecho con amor</span>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[0.6rem] tracking-[0.3em] text-[#333] uppercase" style={{ fontFamily: didact }}>Scroll</span>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, #b89a6a, transparent)" }} />
        </div>
      </section>

      {/* ── CATÁLOGO ── */}
      <section id="coleccion" className="py-32 px-[5%] bg-[#0d0d0d]">
        <div className="text-center mb-16">
          <p className="text-[0.65rem] tracking-[0.4em] text-[#b89a6a] uppercase mb-4" style={{ fontFamily: didact }}>Temporada 2025</p>
          <h2 className="font-normal text-[#e8e0d5] mb-6" style={{ fontFamily: playfair, fontSize: "clamp(2rem,4vw,3.5rem)" }}>
            La Colección
          </h2>
          <div className="w-[60px] h-px bg-[#b89a6a] mx-auto" />
        </div>

        <div className="flex gap-2 justify-center md:flex-wrap overflow-x-auto md:overflow-visible no-scrollbar pb-2 md:pb-0 mb-14">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`shrink-0 border px-5 py-2 text-[0.65rem] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 whitespace-nowrap bg-transparent
                ${activeCategory === cat ? "border-[#b89a6a] text-[#b89a6a]" : "border-[#222] text-[#666] hover:border-[#b89a6a] hover:text-[#b89a6a]"}`}
              style={{ fontFamily: didact }}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          {filtered.map(product => (
            <div key={product.id}
              className="bg-[#111] border border-[#1a1a1a] cursor-pointer overflow-hidden group transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:border-[#b89a6a]">
              <div className="h-[280px] sm:h-[300px] relative flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #141414 0%, #1c1812 100%)" }}>
                <span className="text-[5rem] text-[#1e1e1e] select-none" style={{ fontFamily: playfair }}>✦</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(184,154,106,0.06)" }} />
                {product.tag && (
                  <div className="absolute top-4 left-4 bg-[#1a1a1a] group-hover:bg-[#b89a6a] text-[#b89a6a] group-hover:text-[#0a0a0a] text-[0.55rem] tracking-[0.2em] px-2 py-1 transition-all duration-300"
                    style={{ fontFamily: didact }}>
                    {product.tag}
                  </div>
                )}
              </div>
              <div className="p-5">
                <p className="text-[0.6rem] tracking-[0.2em] text-[#555] uppercase mb-1" style={{ fontFamily: didact }}>{product.category}</p>
                <h3 className="font-normal text-[#e8e0d5] text-[1.1rem] mb-2" style={{ fontFamily: playfair }}>{product.name}</h3>
                <p className="text-[0.78rem] text-[#555] leading-[1.7] mb-4" style={{ fontFamily: didact }}>{product.description}</p>
                <div className="flex justify-between items-center border-t border-[#1a1a1a] pt-4">
                  <span className="text-[1.1rem] text-[#b89a6a]" style={{ fontFamily: playfair }}>{product.price}</span>
                  <button className="bg-transparent border border-[#b89a6a] text-[#b89a6a] hover:bg-[#b89a6a] hover:text-[#0a0a0a] px-4 py-1.5 text-[0.6rem] tracking-[0.2em] uppercase cursor-pointer transition-all duration-300"
                    style={{ fontFamily: didact }}>
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── NOSOTRAS ── */}
      <section id="nosotras" className="py-32 px-[5%] bg-[#0a0a0a] flex items-center gap-16 lg:gap-24 flex-wrap">
        <div className="relative w-full md:flex-1 min-h-[280px] md:min-h-[400px]">
          <div className="absolute top-0 left-0 w-[180px] md:w-[240px] h-[240px] md:h-[320px] border border-[#1a1a1a] bg-[#0d0d0d]" />
          <div className="absolute top-[30px] md:top-[40px] left-[30px] md:left-[40px] w-[180px] md:w-[240px] h-[240px] md:h-[320px] border border-[#b89a6a30] flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #111 0%, #1a1208 100%)" }}>
            <span className="text-[5rem] md:text-[6rem] text-[#1e1e18] italic" style={{ fontFamily: playfair }}>A</span>
          </div>
          <div className="absolute bottom-4 right-8 text-right">
            <p className="italic text-[#b89a6a] leading-none" style={{ fontFamily: playfair, fontSize: "2.5rem" }}>desde</p>
            <p className="text-[#e8e0d5] leading-none" style={{ fontFamily: playfair, fontSize: "3rem" }}>2022</p>
          </div>
        </div>

        <div className="flex-1 min-w-[280px]">
          <p className="text-[0.65rem] tracking-[0.4em] text-[#b89a6a] uppercase mb-5" style={{ fontFamily: didact }}>Nuestra historia</p>
          <h2 className="font-normal text-[#e8e0d5] leading-[1.2] mb-8"
            style={{ fontFamily: playfair, fontSize: "clamp(2rem,3.5vw,3rem)" }}>
            Ropa que<br /><span className="italic text-[#b89a6a]">te define.</span>
          </h2>
          <p className="text-[0.9rem] text-[#666] leading-[2] mb-6" style={{ fontFamily: didact }}>
            Aura nació de la necesidad de tener ropa que no solo se vea bien, sino que se sienta bien. Que tenga historia, que tenga alma. Diseñamos cada pieza pensando en la mujer que la va a usar.
          </p>
          <p className="text-[0.9rem] text-[#666] leading-[2] mb-10" style={{ fontFamily: didact }}>
            Somos un emprendimiento 100% argentino. Trabajamos con telas seleccionadas, producción local y mucho amor por el detalle.
          </p>
          <div className="flex gap-12">
            {[["100%", "Local"], ["✦", "Artesanal"], ["❤", "Con alma"]].map(([val, label]) => (
              <div key={label}>
                <p className="text-[#b89a6a] mb-1" style={{ fontFamily: playfair, fontSize: "1.8rem" }}>{val}</p>
                <p className="text-[0.65rem] tracking-[0.2em] text-[#444] uppercase" style={{ fontFamily: didact }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="py-32 px-[5%] bg-[#0d0d0d] text-center">
        <p className="text-[0.65rem] tracking-[0.4em] text-[#b89a6a] uppercase mb-4" style={{ fontFamily: didact }}>Hablemos</p>
        <h2 className="font-normal text-[#e8e0d5] mb-2" style={{ fontFamily: playfair, fontSize: "clamp(2rem,4vw,3.5rem)" }}>
          Encontranos en
        </h2>
        <h2 className="italic text-[#b89a6a] mb-12" style={{ fontFamily: playfair, fontSize: "clamp(2rem,4vw,3.5rem)" }}>
          nuestras redes
        </h2>
        <div className="w-[60px] h-px bg-[#b89a6a] mx-auto mb-12" />

        <div className="flex gap-4 justify-center flex-wrap mb-16">
          {contacts.map(({ label, handle, icon, link }) => (
            <a key={label} href={link} target="_blank" rel="noopener noreferrer"
              className="group border border-[#1a1a1a] hover:border-[#b89a6a] bg-[#111] hover:bg-[#131108] px-10 py-8 min-w-[200px] cursor-pointer transition-all duration-300 no-underline flex flex-col items-center">
              <p className="text-[1.8rem] text-[#b89a6a] mb-3" style={{ fontFamily: playfair }}>{icon}</p>
              <p className="text-[0.6rem] tracking-[0.2em] text-[#444] uppercase mb-1" style={{ fontFamily: didact }}>{label}</p>
              <p className="text-[0.85rem] text-[#888]" style={{ fontFamily: didact }}>{handle}</p>
            </a>
          ))}
        </div>

        <p className="text-[0.75rem] text-[#333] tracking-[0.1em]" style={{ fontFamily: didact }}>
          Respondemos consultas de lunes a viernes · Envíos a todo el país
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#151515] px-[5%] py-8 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="text-[1rem] tracking-[0.2em] text-[#2a2a2a]" style={{ fontFamily: playfair }}>AURA</span>
        <span className="text-[0.6rem] tracking-[0.15em] text-[#2a2a2a] uppercase" style={{ fontFamily: didact }}>
          Hecho con amor · {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}