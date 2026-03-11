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

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos"
    ? products
    : products.filter(p => p.category === activeCategory);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Didact Gothic', sans-serif", background: "#0a0a0a", color: "#e8e0d5", overflowX: "hidden", width: "100%" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Didact+Gothic&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; overflow-x: hidden; }
        body { overflow-x: hidden; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes slideRight {
          from { transform: scaleX(0); } to { transform: scaleX(1); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }

        .fade-up   { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both; }
        .fade-in   { animation: fadeIn 1.2s ease both; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.25s; }
        .d3 { animation-delay: 0.4s; }
        .d4 { animation-delay: 0.55s; }
        .d5 { animation-delay: 0.7s; }

        .line-anim {
          display: inline-block;
          transform-origin: left;
          animation: slideRight 1s cubic-bezier(0.16,1,0.3,1) 0.6s both;
        }

        .card-hover {
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease, border-color 0.4s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
          border-color: #b89a6a !important;
        }
        .card-hover:hover .card-img-overlay {
          opacity: 1 !important;
        }
        .card-hover:hover .card-tag-inner {
          background: #b89a6a !important;
          color: #0a0a0a !important;
        }

        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0;
          width: 0; height: 1px;
          background: #b89a6a;
          transition: width 0.3s ease;
        }
        .nav-link:hover { color: #b89a6a !important; }
        .nav-link:hover::after { width: 100%; }

        .btn-primary {
          background: transparent;
          border: 1px solid #b89a6a;
          color: #b89a6a;
          padding: 0.75rem 2.5rem;
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.35s ease;
          font-family: 'Didact Gothic', sans-serif;
        }
        .btn-primary:hover {
          background: #b89a6a;
          color: #0a0a0a;
        }

        .filter-btn {
          background: transparent;
          border: 1px solid #222;
          color: #666;
          padding: 0.5rem 1.4rem;
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Didact Gothic', sans-serif;
        }
        .filter-btn:hover, .filter-btn.active {
          border-color: #b89a6a;
          color: #b89a6a;
        }

        .float { animation: float 6s ease-in-out infinite; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 2px; }

        section { width: 100%; }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1.4rem 5%",
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #151515",
      }}>
        <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.3rem", letterSpacing: "0.2em", color: "#e8e0d5" }}>
          AURA
        </span>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {["inicio", "coleccion", "nosotras", "contacto"].map((id, i) => (
            <button key={id} onClick={() => scrollTo(id)}
              className="nav-link"
              style={{ background: "none", border: "none", cursor: "pointer", color: "#666", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Didact Gothic', sans-serif" }}>
              {navLinks[i]}
            </button>
          ))}
        </div>
        <a href="https://instagram.com" style={{ fontSize: "0.7rem", letterSpacing: "0.18em", color: "#444", textDecoration: "none", transition: "color 0.3s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#b89a6a")}
          onMouseLeave={e => (e.currentTarget.style.color = "#444")}>
          ✦ @auracomplementos
        </a>
      </nav>

      {/* ── HERO ── */}
      <section id="inicio" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "0 5%" }}>
        {/* bg texture */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 50%, #1a1208 0%, #0a0a0a 60%)" }} />
        {/* decorative lines */}
        <div style={{ position: "absolute", top: "15%", right: "8%", width: "1px", height: "40vh", background: "linear-gradient(to bottom, transparent, #b89a6a40, transparent)" }} />
        <div style={{ position: "absolute", bottom: "15%", left: "5%", width: "80px", height: "1px", background: "#b89a6a40" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}>
          <p className="fade-up d1" style={{ fontSize: "0.7rem", letterSpacing: "0.4em", color: "#b89a6a", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Nueva colección · 2025
          </p>
          <h1 className="fade-up d2" style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
            fontWeight: 400, lineHeight: 1.05,
            color: "#e8e0d5", marginBottom: "0.3rem",
          }}>
            Vestite con
          </h1>
          <h1 className="fade-up d3" style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
            fontWeight: 700, fontStyle: "italic",
            lineHeight: 1.05, color: "#b89a6a",
            marginBottom: "2rem",
          }}>
            tu aura.
          </h1>

          <div className="line-anim" style={{ display: "block", height: "1px", width: "120px", background: "#b89a6a", marginBottom: "2rem" }} />

          <p className="fade-up d4" style={{ fontSize: "0.95rem", color: "#888", lineHeight: 1.9, maxWidth: "420px", marginBottom: "3rem" }}>
            Ropa diseñada para mujeres que eligen con intención. Piezas que duran, que se sienten, que se recuerdan.
          </p>

          <div className="fade-up d5" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => scrollTo("coleccion")}>Ver colección</button>
            <button className="btn-primary" style={{ borderColor: "#222", color: "#555" }} onClick={() => scrollTo("nosotras")}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#1a1a1a"; (e.currentTarget as HTMLButtonElement).style.color = "#e8e0d5"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "#555"; }}>
              Nuestra historia
            </button>
          </div>
        </div>

        {/* Floating badge */}
        <div className="float" style={{
          position: "absolute", right: "10%", top: "50%", transform: "translateY(-50%)",
          width: "160px", height: "160px", borderRadius: "50%",
          border: "1px solid #b89a6a30",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          background: "rgba(184,154,106,0.05)",
        }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#b89a6a" }}>✦</span>
          <span style={{ fontSize: "0.55rem", letterSpacing: "0.25em", color: "#555", textTransform: "uppercase", marginTop: "0.5rem" }}>Hecho con amor</span>
        </div>

        {/* scroll hint */}
        <div style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.3em", color: "#333", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #b89a6a, transparent)" }} />
        </div>
      </section>

      {/* ── CATÁLOGO ── */}
      <section id="coleccion" style={{ padding: "8rem 5% 6rem", background: "#0d0d0d" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.4em", color: "#b89a6a", textTransform: "uppercase", marginBottom: "1rem" }}>Temporada 2025</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, color: "#e8e0d5", marginBottom: "1.5rem" }}>
            La Colección
          </h2>
          <div style={{ width: "60px", height: "1px", background: "#b89a6a", margin: "0 auto" }} />
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3.5rem" }}>
          {categories.map(cat => (
            <button key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
          {filtered.map((product) => (
            <div key={product.id} className="card-hover"
              style={{ background: "#111", border: "1px solid #1a1a1a", cursor: "pointer", position: "relative", overflow: "hidden" }}>
              {/* Image area */}
              <div style={{ height: "300px", background: `linear-gradient(135deg, #141414 0%, #1c1812 100%)`, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "5rem", color: "#1e1e1e", userSelect: "none" }}>✦</span>
                <div className="card-img-overlay" style={{ position: "absolute", inset: 0, background: "rgba(184,154,106,0.06)", opacity: 0, transition: "opacity 0.4s ease" }} />
                {product.tag && (
                  <div className="card-tag-inner" style={{ position: "absolute", top: "1rem", left: "1rem", background: "#1a1a1a", color: "#b89a6a", fontSize: "0.55rem", letterSpacing: "0.2em", padding: "0.3rem 0.7rem", transition: "all 0.3s ease" }}>
                    {product.tag}
                  </div>
                )}
              </div>
              {/* Info */}
              <div style={{ padding: "1.5rem" }}>
                <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#555", textTransform: "uppercase", marginBottom: "0.4rem" }}>{product.category}</p>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.2rem", fontWeight: 400, color: "#e8e0d5", marginBottom: "0.5rem" }}>{product.name}</h3>
                <p style={{ fontSize: "0.8rem", color: "#555", lineHeight: 1.7, marginBottom: "1.2rem" }}>{product.description}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #1a1a1a", paddingTop: "1rem" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#b89a6a", fontWeight: 400 }}>{product.price}</span>
                  <button className="btn-primary" style={{ padding: "0.4rem 1rem", fontSize: "0.6rem" }}>Ver más</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOBRE NOSOTRAS ── */}
      <section id="nosotras" style={{ padding: "8rem 5%", background: "#0a0a0a", display: "flex", alignItems: "center", gap: "6rem", flexWrap: "wrap" }}>
        {/* Left: decorative */}
        <div style={{ flex: "1 1 300px", position: "relative", minHeight: "400px" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "240px", height: "320px", border: "1px solid #1a1a1a", background: "#0d0d0d" }} />
          <div style={{ position: "absolute", top: "40px", left: "40px", width: "240px", height: "320px", border: "1px solid #b89a6a30", background: "linear-gradient(135deg, #111 0%, #1a1208 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "6rem", color: "#1e1e18", fontStyle: "italic" }}>A</span>
          </div>
          <div style={{ position: "absolute", bottom: "1rem", right: "2rem", textAlign: "right" }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontStyle: "italic", color: "#b89a6a", lineHeight: 1 }}>desde</p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", color: "#e8e0d5", lineHeight: 1 }}>2022</p>
          </div>
        </div>

        {/* Right: text */}
        <div style={{ flex: "1 1 380px" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.4em", color: "#b89a6a", textTransform: "uppercase", marginBottom: "1.2rem" }}>Nuestra historia</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400, color: "#e8e0d5", lineHeight: 1.2, marginBottom: "2rem" }}>
            Ropa que<br /><span style={{ fontStyle: "italic", color: "#b89a6a" }}>te define.</span>
          </h2>
          <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 2, marginBottom: "1.5rem" }}>
            Aura nació de la necesidad de tener ropa que no solo se vea bien, sino que se sienta bien. Que tenga historia, que tenga alma. Diseñamos cada pieza pensando en la mujer que la va a usar.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 2, marginBottom: "2.5rem" }}>
            Somos un emprendimiento 100% argentino. Trabajamos con telas seleccionadas, producción local y mucho amor por el detalle.
          </p>
          <div style={{ display: "flex", gap: "3rem" }}>
            {[["100%", "Local"], ["✦", "Artesanal"], ["❤", "Con alma"]].map(([num, label]) => (
              <div key={label}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#b89a6a", marginBottom: "0.2rem" }}>{num}</p>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#444", textTransform: "uppercase" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" style={{ padding: "8rem 5%", background: "#0d0d0d", textAlign: "center" }}>
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.4em", color: "#b89a6a", textTransform: "uppercase", marginBottom: "1rem" }}>Hablemos</p>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, color: "#e8e0d5", marginBottom: "1rem" }}>
          Encontranos en
        </h2>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontStyle: "italic", color: "#b89a6a", marginBottom: "3rem" }}>
          nuestras redes
        </h2>
        <div style={{ width: "60px", height: "1px", background: "#b89a6a", margin: "0 auto 3rem" }} />

        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "4rem" }}>
          {[
            { label: "Instagram", handle: "@auracomplementos", icon: "◈" },
            { label: "WhatsApp", handle: "+54 9 000 000 0000", icon: "◉" },
            { label: "Email", handle: "hola@aura.com", icon: "◇" },
          ].map(({ label, handle, icon }) => (
            <div key={label}
              style={{ border: "1px solid #1a1a1a", padding: "2rem 2.5rem", minWidth: "200px", cursor: "pointer", transition: "all 0.3s ease", background: "#111" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#b89a6a"; (e.currentTarget as HTMLDivElement).style.background = "#131108"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#1a1a1a"; (e.currentTarget as HTMLDivElement).style.background = "#111"; }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#b89a6a", marginBottom: "0.8rem" }}>{icon}</p>
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#444", textTransform: "uppercase", marginBottom: "0.4rem" }}>{label}</p>
              <p style={{ fontSize: "0.85rem", color: "#888" }}>{handle}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "0.75rem", color: "#333", letterSpacing: "0.1em" }}>
          Respondemos consultas de lunes a viernes · Envíos a todo el país
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid #151515", padding: "2rem 5%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem", letterSpacing: "0.2em", color: "#2a2a2a" }}>AURA</span>
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "#2a2a2a", textTransform: "uppercase" }}>Hecho con amor · {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}