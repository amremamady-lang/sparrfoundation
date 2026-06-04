/* ============================================================
   SPARR FOUNDATION, shared components
   ============================================================ */
const { useState, useEffect, useRef } = React;

/* ---------- Icons (simple, stroke-based) ---------- */
const I = {
  arrow: (p) => <svg viewBox="0 0 24 24" width="18" height="18" className="arrow" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  cart: (p) => <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2.5 3h2l2.2 12.2a1.6 1.6 0 0 0 1.6 1.3h8.2a1.6 1.6 0 0 0 1.6-1.3L21 7H6"/></svg>,
  heart: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 20.5S3.5 14.7 3.5 8.9A4.4 4.4 0 0 1 12 7a4.4 4.4 0 0 1 8.5 1.9c0 5.8-8.5 11.6-8.5 11.6Z"/></svg>,
  menu: (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" {...p}><path d="M4 7h16M4 12h16M4 17h16"/></svg>,
  close: (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" {...p}><path d="M6 6l12 12M18 6 6 18"/></svg>,
  check: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 6 9 17l-5-5"/></svg>,
  plus: (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}><path d="M12 5v14M5 12h14"/></svg>,
  minus: (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}><path d="M5 12h14"/></svg>,
  star: (p) => <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" {...p}><path d="M12 2.5l2.7 5.9 6.3.7-4.7 4.3 1.3 6.2L12 16.9 6.1 19.6l1.3-6.2L2.7 9.1l6.3-.7z"/></svg>,
  pin: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></svg>,
  phone: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 16.9v2.6a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.8 2 2 0 0 1 4.1 1.6h2.6a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9a16 16 0 0 0 6 6l.8-1a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>,
  clock: (p) => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/></svg>,
  mail: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>,
  shield: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 2.5 4 6v6c0 5 3.4 8 8 9.5 4.6-1.5 8-4.5 8-9.5V6l-8-3.5Z"/><path d="m9 12 2 2 4-4"/></svg>,
  lock: (p) => <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="4" y="10" width="16" height="11" rx="2.2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>,
};
window.I = I;

/* ---------- Placeholder image ---------- */
function Ph({ kind = "", label, style, ratio, className = "" }) {
  const s = { ...(ratio ? { aspectRatio: ratio } : null), ...style };
  return (
    <div className={`ph ${kind} ${className}`} style={s} role="img" aria-label={label}>
      {label ? <span className="ph-label">{label}</span> : null}
    </div>
  );
}
window.Ph = Ph;

/* ---------- Media: real <img> if src given, else placeholder ---------- */
function Media({ src, kind, label, ratio, style = {}, pos = "center" }) {
  if (!src) return <Ph kind={kind} ratio={ratio} label={label} style={style} />;
  const wrap = { overflow: "hidden", ...(ratio ? { aspectRatio: ratio } : null), ...style };
  return (
    <div style={wrap}>
      <img src={src} alt={label || ""} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: pos, display: "block" }} />
    </div>
  );
}
window.Media = Media;

/* ---------- Utility bar (real contact, slim) ---------- */
function UtilityBar() {
  return (
    <div className="ubar">
      <div className="wrap ubar-inner">
        <span className="ubar-motto"><span className="ubar-dot" /> Love &amp; Humanity · Niagara Falls, ON</span>
        <div className="ubar-right">
          <span className="ubar-item"><I.clock /> Mon–Sat 11:00–24:00 · Sun 9:30–24:00</span>
          <a className="ubar-item ubar-link" href="tel:+14168885935"><I.phone width="14" height="14" /> +1 416 888 5935</a>
        </div>
      </div>
    </div>
  );
}
window.UtilityBar = UtilityBar;

/* ---------- Progress bar ---------- */
function Progress({ value, goal, accent = "clay" }) {
  const pct = Math.min(100, Math.round((value / goal) * 100));
  const colors = { clay: "var(--clay)", forest: "var(--forest)", ink: "var(--ink)" };
  return (
    <div>
      <div style={{ height: 9, borderRadius: 100, background: "rgba(30,39,64,.08)", overflow: "hidden" }}>
        <div style={{ width: pct + "%", height: "100%", borderRadius: 100, background: colors[accent], transition: "width .8s cubic-bezier(.2,.7,.2,1)" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 9, fontSize: 13.5 }}>
        <b style={{ color: "var(--ink)" }}>${value.toLocaleString()} raised</b>
        <span style={{ color: "var(--ink-3)" }}>of ${goal.toLocaleString()}</span>
      </div>
    </div>
  );
}
window.Progress = Progress;

/* ---------- Reveal on scroll ---------- */
function Reveal({ children, delay = 0, as = "div", className = "", style }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    // safety: never leave content hidden if IO doesn't fire (e.g. background/hidden render)
    const t = setTimeout(() => setShown(true), 1400);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={className}
      style={{ ...style, opacity: shown ? 1 : 0, transform: shown ? "none" : "translateY(22px)", transition: `opacity .7s ease ${delay}ms, transform .7s cubic-bezier(.2,.7,.2,1) ${delay}ms` }}>
      {children}
    </Tag>
  );
}
window.Reveal = Reveal;

/* ---------- Nav ---------- */
function Nav({ route, go, cartCount }) {
  const [open, setOpen] = useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "programs", label: "Programs" },
    { id: "shop", label: "Shop" },
    { id: "events", label: "Wine & Dine" },
  ];
  const navTo = (id) => { setOpen(false); go(id); };
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <div className="brand" onClick={() => navTo("home")}>
          <div className="mark"><img src="assets/sparr-mark.png" alt="Sparr Foundation logo" /></div>
          <div className="bt"><b>Sparr</b><span>Foundation</span></div>
        </div>
        <nav className="nav-links">
          {links.map(l => (
            <a key={l.id} className={route === l.id ? "active" : ""} onClick={() => navTo(l.id)}>{l.label}</a>
          ))}
        </nav>
        <div className="nav-right">
          <button className="cart-btn" onClick={() => go("cart")} aria-label="Cart">
            <I.cart />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <button className="btn" onClick={() => go("donate")} style={{ padding: "11px 20px" }}><I.heart width="16" height="16" /> Donate</button>
          <button className="cart-btn nav-burger" onClick={() => setOpen(o => !o)} aria-label="Menu">{open ? <I.close /> : <I.menu />}</button>
        </div>
      </div>
      {open && (
        <div className="wrap" style={{ paddingBottom: 18 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 6 }}>
            {links.map(l => (
              <a key={l.id} onClick={() => navTo(l.id)} style={{ padding: "12px 4px", fontSize: 17, fontWeight: 500, borderBottom: "1px solid var(--line-2)" }}>{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
window.Nav = Nav;

/* ---------- Footer ---------- */
function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="brand" style={{ marginBottom: 16 }}>
              <div className="mark"><img src="assets/sparr-mark.png" alt="Sparr Foundation logo" /></div>
              <div className="bt"><b style={{ color: "#fff" }}>Sparr</b><span>Foundation</span></div>
            </div>
            <p style={{ maxWidth: 290, color: "#A8AEC2", fontSize: 14.5, lineHeight: 1.65 }}>
              United we stand. A non-profit foundation in Niagara Falls, helping those without provisions and families affected by war, with Love &amp; Humanity.
            </p>
            <button className="btn btn--light" style={{ marginTop: 20 }} onClick={() => go("donate")}><I.heart width="16" height="16" /> Donate today</button>
          </div>
          <div>
            <div className="foot-h">Explore</div>
            <div className="foot-list">
              <a onClick={() => go("about")}>About us</a>
              <a onClick={() => go("programs")}>Our programs</a>
              <a onClick={() => go("shop")}>The Sparr Shop</a>
              <a onClick={() => go("events")}>Wine & Dine gala</a>
            </div>
          </div>
          <div>
            <div className="foot-h">Get involved</div>
            <div className="foot-list">
              <a onClick={() => go("donate")}>Make a gift</a>
              <a onClick={() => go("programs")}>Jamaica Relief</a>
              <a onClick={() => go("about")}>Volunteer</a>
              <a onClick={() => go("events")}>Attend an event</a>
            </div>
          </div>
          <div>
            <div className="foot-h">Reach us</div>
            <div className="foot-list" style={{ gap: 14 }}>
              <span style={{ display: "flex", gap: 9, alignItems: "flex-start" }}><I.pin style={{ marginTop: 1, flex: "0 0 auto", color: "#7E869E" }} /> Niagara Falls, Ontario, Canada</span>
              <a href="tel:+14168885935" style={{ display: "flex", gap: 9, alignItems: "center" }}><I.phone style={{ color: "#7E869E" }} /> +1 416 888 5935</a>
              <a href="mailto:mail@sparrtours.com" style={{ display: "flex", gap: 9, alignItems: "center" }}><I.mail style={{ color: "#7E869E" }} /> mail@sparrtours.com</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2011 Sparr Foundation · Niagara Falls, Ontario</span>
          <span style={{ display: "flex", gap: 18 }}>
            <a>Privacy</a><a>Terms</a><a>Financials</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;

/* ---------- Toast ---------- */
function Toast({ msg, onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 2600); return () => clearTimeout(t); }, [msg]);
  return (
    <div style={{ position: "fixed", bottom: 26, left: "50%", transform: "translateX(-50%)", zIndex: 200,
      background: "var(--ink)", color: "#fff", padding: "13px 20px", borderRadius: 100, boxShadow: "var(--shadow-lg)",
      display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, fontWeight: 500, animation: "fadeUp .35s ease" }}>
      <span style={{ display: "grid", placeItems: "center", width: 20, height: 20, borderRadius: 50, background: "var(--forest)" }}><I.check width="13" height="13" /></span>
      {msg}
    </div>
  );
}
window.Toast = Toast;

