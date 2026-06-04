/* ============================================================
   SPARR FOUNDATION, Home screen
   ============================================================ */
function Home({ go, addToCart }) {
  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div className="wrap" style={{ paddingBlock: "clamp(48px,7vw,96px) clamp(56px,7vw,104px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.05fr) minmax(0,.95fr)", gap: "clamp(28px,5vw,72px)", alignItems: "center" }} className="hero-grid">
            <div className="fade-up">
              <div className="eyebrow-row">
                <span className="rule" /><span className="h-eyebrow">Niagara Falls · Est. 2011</span>
              </div>
              <h1 className="display" style={{ lineHeight: 1.04 }}>Empowering<br/>communities,<br/><em>changing lives.</em></h1>
              <p className="lead" style={{ maxWidth: 480, marginTop: 36 }}>
                United we stand. Our goal is to help those who are economically deprived and living without provisions, and individuals who have lost their children or family to war. With Love &amp; Humanity.
              </p>
              <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
                <button className="btn btn--lg" onClick={() => go("donate")}><I.heart /> Donate today</button>
                <button className="btn btn--ghost btn--lg" onClick={() => go("programs")}>See our work <I.arrow /></button>
              </div>
              <div style={{ display: "flex", gap: 26, marginTop: 38, flexWrap: "wrap", alignItems: "center" }}>
                <Trust icon={<I.pin />} text={<>Niagara Falls,<br/>Ontario</>} />
                <span style={{ width: 1, height: 34, background: "var(--line)" }} />
                <Trust icon={<I.check />} text={<>Non-profit<br/>since 2011</>} />
                <span style={{ width: 1, height: 34, background: "var(--line)" }} />
                <Trust icon={<I.heart />} text={<>Love &amp;<br/>Humanity</>} />
              </div>
            </div>

            <div className="fade-up" style={{ position: "relative", animationDelay: ".1s" }}>
              <div style={{ aspectRatio: "4 / 5", borderRadius: "var(--r-xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)", background: "var(--ph-neutral)" }}>
                <img src="assets/hero.png" alt="A volunteer handing a crate of fresh food to a community member on a Niagara Falls street" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
              </div>
              {/* floating event card (real: annual fundraiser date) */}
              <div className="card" style={{ position: "absolute", left: -18, bottom: 26, padding: "16px 18px", width: 232, boxShadow: "var(--shadow-lg)" }}>
                <div className="h-eyebrow" style={{ marginBottom: 8 }}>Annual fundraiser</div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--ink)" }}>Wine &amp; Dine</div>
                <div style={{ fontSize: 13.5, color: "var(--ink-2)", marginTop: 4 }}>August 28, 2026 · Niagara Falls</div>
              </div>
              {/* floating tag */}
              <div className="pill pill--clay" style={{ position: "absolute", right: 16, top: 18, boxShadow: "var(--shadow)" }}>
                <span className="dot" /> Niagara Falls, Ontario
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MOTTO MOMENT ---------- */}
      <section className="band-dark" style={{ paddingBlock: "clamp(56px,8vw,110px)", overflow: "hidden" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="h-eyebrow" style={{ color: "var(--accent-300)" }}>Our promise, since 2011</div>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 400, color: "#FBF8F1", fontSize: "clamp(46px,9vw,128px)", lineHeight: 0.95, letterSpacing: "-0.02em", marginTop: 22 }}>
            Love &amp; <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Humanity.</em>
          </h2>
          <p className="serif-quote" style={{ fontSize: "clamp(18px,2.2vw,24px)", color: "#C9CCD6", maxWidth: 640, margin: "26px auto 0", lineHeight: 1.5 }}>
            “Home is always where the heart is.” We meet people where they are, united we stand.
          </p>
        </div>
      </section>

      {/* ---------- PROGRAMS ---------- */}
      <section className="section band-2">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <SectionHead eyebrow="Our work" title={<>Where your gift <em>goes.</em></>} />
            <button className="btn btn--ghost" onClick={() => go("programs")}>All our work <I.arrow /></button>
          </div>
          <div className="grid cols-3" style={{ marginTop: 46 }}>
            {SF.programs.map((p, i) => (
              <Reveal key={p.id} delay={i * 90} className="card card--hover" style={{ overflow: "hidden", borderRadius: "var(--r-lg)", display: "flex", flexDirection: "column", cursor: "pointer" }}>
                <div onClick={() => go("program", { id: p.id })} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <Media src={p.img} kind={p.ph} ratio="16 / 10" label={p.phLabel} style={{ borderRadius: 0 }} />
                  <div style={{ padding: "22px 24px 26px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <span className={`pill ${p.accent === "clay" ? "pill--clay" : ""}`} style={{ alignSelf: "flex-start" }}><span className="dot" /> {p.tag}</span>
                    <h3 style={{ fontSize: 25, marginTop: 14 }}>{p.name}</h3>
                    <p style={{ color: "var(--ink-2)", fontSize: 15, marginTop: 8, flex: 1 }}>{p.blurb}</p>
                    <span className="linkish" style={{ marginTop: 18, fontSize: 14.5 }}>Learn more <I.arrow /></span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- JAMAICA RELIEF FEATURE ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="card" style={{ overflow: "hidden", borderRadius: "var(--r-xl)", display: "grid", gridTemplateColumns: "1.1fr 1fr", boxShadow: "var(--shadow)" }}>
            <div style={{ position: "relative" }}>
              <Media src="assets/jamaica.png" kind="ph--clay" label="Families receiving relief after Storm Melissa" style={{ borderRadius: 0, height: "100%", minHeight: 320 }} />
              <button onClick={() => go("program", { id: "jamaica" })} aria-label="Play"
                style={{ position: "absolute", inset: 0, margin: "auto", width: 76, height: 76, borderRadius: "50%", border: "none", cursor: "pointer",
                  background: "rgba(252,250,245,.92)", color: "var(--clay)", display: "grid", placeItems: "center", boxShadow: "var(--shadow-lg)" }}>
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
              </button>
            </div>
            <div style={{ padding: "clamp(28px,4vw,52px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div className="eyebrow-row"><span className="rule" /><span className="h-eyebrow">Active appeal</span></div>
              <h2 style={{ fontSize: "clamp(28px,3.4vw,42px)" }}>Jamaica Relief</h2>
              <p className="lead" style={{ marginTop: 16, fontSize: 18 }}>
                Storm Melissa devastated many families, leaving many homeless. Build a strong foundation with us for Love &amp; Humanity, watch the video and make a one-time contribution.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 26 }}>
                <button className="btn" onClick={() => go("donate", { program: "jamaica" })}>Give to Jamaica Relief</button>
                <button className="btn btn--ghost" onClick={() => go("program", { id: "jamaica" })}>Read the story <I.arrow /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WINE & DINE ---------- */}
      <section className="section band-forest">
        <div className="wrap hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(28px,5vw,72px)", alignItems: "center" }}>
          <div>
            <div className="eyebrow-row"><span className="rule" style={{ background: "#fff", opacity: .6 }} /><span className="h-eyebrow" style={{ color: "#D9E6DC" }}>Annual fundraiser</span></div>
            <h2 style={{ fontSize: "clamp(30px,4vw,52px)", color: "#fff" }}>Wine &amp; Dine</h2>
            <p style={{ fontSize: 19, lineHeight: 1.6, color: "#E2EDE4", marginTop: 16, maxWidth: 460 }}>
              Our annual fundraising event, an evening of dinner and entertainment, held yearly. Join us for the cause that brings us together.
            </p>
            <div style={{ display: "flex", gap: 28, marginTop: 28, flexWrap: "wrap" }}>
              <KV k="When" v="August 28, 2026" light />
              <KV k="Where" v="Niagara Falls, ON" light />
              <KV k="What" v="Dinner & entertainment" light />
            </div>
            <button className="btn btn--light" style={{ marginTop: 30 }} onClick={() => go("events")}>Reserve a seat <I.arrow /></button>
          </div>
          <div style={{ aspectRatio: "4 / 3", borderRadius: "var(--r-xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
            <img src="assets/hero-gala.png" alt="Sparr Foundation Wine &amp; Dine gala overlooking Niagara Falls" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </section>

      {/* ---------- SHOP PREVIEW ---------- */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <SectionHead eyebrow="The Sparr Shop" title={<>The <em>Gallo</em> collection.</>}
              sub="Browse the shop from the Sparr Foundation store." />
            <button className="btn btn--ghost" onClick={() => go("shop")}>Visit the shop <I.arrow /></button>
          </div>
          <div className="grid cols-4" style={{ marginTop: 44 }}>
            {SF.products.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} delay={i * 70}>
                <ProductCard p={p} go={go} addToCart={addToCart} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="section band-2">
        <div className="wrap">
          <SectionHead eyebrow="In their words" title={<>The people behind <em>the work.</em></>} center />
          <div className="grid cols-3" style={{ marginTop: 48 }}>
            {SF.testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 90} className="card" style={{ padding: "30px 28px", borderRadius: "var(--r-lg)", display: "flex", flexDirection: "column" }}>
                <p className="serif-quote" style={{ fontSize: 20, lineHeight: 1.5, color: "var(--ink)", flex: 1 }}>“{t.q}”</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 22 }}>
                  <Ph kind={t.ph} style={{ width: 46, height: 46, borderRadius: "50%", flex: "0 0 auto" }} />
                  <div><div style={{ fontWeight: 600 }}>{t.name}</div><div style={{ fontSize: 13.5, color: "var(--ink-3)" }}>{t.role}</div></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <FinalCTA go={go} />
    </main>
  );
}

/* ---------- small helpers ---------- */
function Trust({ icon, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ display: "grid", placeItems: "center", width: 34, height: 34, borderRadius: 9, background: "var(--clay-50)", color: "var(--clay-700)", flex: "0 0 auto" }}>{icon}</span>
      <span style={{ fontSize: 13.5, fontWeight: 500, lineHeight: 1.3, color: "var(--ink-2)" }}>{text}</span>
    </div>
  );
}
function KV({ k, v, light }) {
  return (
    <div>
      <div className="h-eyebrow" style={{ color: light ? "#BFD3C4" : undefined }}>{k}</div>
      <div style={{ fontFamily: "var(--serif)", fontSize: 20, marginTop: 5, color: light ? "#fff" : "var(--ink)" }}>{v}</div>
    </div>
  );
}
function SectionHead({ eyebrow, title, sub, center }) {
  return (
    <div style={{ maxWidth: 620, ...(center ? { marginInline: "auto", textAlign: "center" } : null) }}>
      <div className="eyebrow-row" style={center ? { justifyContent: "center" } : null}><span className="rule" /><span className="h-eyebrow">{eyebrow}</span></div>
      <h2 style={{ fontSize: "clamp(30px,4vw,50px)" }} className="display-sub">{title}</h2>
      {sub && <p className="lead" style={{ marginTop: 16 }}>{sub}</p>}
    </div>
  );
}
window.SectionHead = SectionHead;
window.KV = KV;

function FinalCTA({ go }) {
  return (
    <section className="section">
      <div className="wrap">
        <div style={{ position: "relative", overflow: "hidden", borderRadius: "var(--r-xl)", background: "var(--dark)", color: "#fff", padding: "clamp(40px,6vw,80px)", textAlign: "center", boxShadow: "var(--shadow)" }}>
          <div style={{ position: "relative" }}>
            <div className="h-eyebrow" style={{ color: "var(--accent-300)" }}>United we stand</div>
            <h2 style={{ color: "#fff", fontSize: "clamp(32px,5vw,62px)", marginTop: 14, maxWidth: 760, marginInline: "auto" }}>Bringing poverty to a halt.</h2>
            <p style={{ fontSize: 19, color: "rgba(255,255,255,.9)", marginTop: 18, maxWidth: 540, marginInline: "auto" }}>
              Stand with us, and donate today. With Love &amp; Humanity.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
              <button className="btn btn--light btn--lg" onClick={() => go("donate")}><I.heart /> Donate now</button>
              <button className="btn btn--lg" onClick={() => go("events")} style={{ background: "rgba(255,255,255,.14)", boxShadow: "none", border: "1px solid rgba(255,255,255,.4)" }}>Attend Wine &amp; Dine</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.FinalCTA = FinalCTA;
window.Home = Home;
