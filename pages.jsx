/* ============================================================
   SPARR FOUNDATION, About, Programs, Donate, Events
   ============================================================ */

/* ---------- About ---------- */
function About({ go }) {
  return (
    <main>
      <section className="section-sm" style={{ paddingTop: "clamp(40px,6vw,80px)" }}>
        <div className="wrap">
          <div className="eyebrow-row"><span className="rule" /><span className="h-eyebrow">Our story</span></div>
          <h1 className="display" style={{ fontSize: "clamp(40px,6.5vw,84px)", maxWidth: 900 }}>A new generation of <em>philanthropy.</em></h1>
          <p className="lead" style={{ maxWidth: 620, marginTop: 22 }}>
            Sparr Foundation opened in Niagara Falls in 2011. Our goal is to help those who are economically deprived and living without provisions, and individuals who have lost their children or family to war. United we stand, with Love &amp; Humanity.
          </p>
        </div>
      </section>

      <section className="wrap" style={{ marginBottom: "clamp(20px,4vw,40px)" }}>
        <Ph kind="ph--clay" ratio="21 / 9" label="photo: the team and the communities we serve" style={{ borderRadius: "var(--r-xl)", boxShadow: "var(--shadow)" }} />
      </section>

      {/* mission narrative */}
      <section className="section">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "clamp(24px,5vw,72px)", alignItems: "start" }}>
          <div style={{ position: "sticky", top: 96 }}>
            <div className="eyebrow-row"><span className="rule" /><span className="h-eyebrow">Who we are</span></div>
            <h2 style={{ fontSize: "clamp(28px,3.4vw,44px)" }}>United we <em style={{ color: "var(--accent)" }}>stand.</em></h2>
          </div>
          <div style={{ maxWidth: 620 }}>
            <p className="lead" style={{ fontSize: 20 }}>
              We are a non-profit foundation. Our goal is to help those who are economically deprived in the world, people living without the provisions they need, and individuals who have lost their children or family to war.
            </p>
            <p style={{ color: "var(--ink-2)", fontSize: 17, marginTop: 20 }}>
              Each year we host our Wine &amp; Dine fundraiser: an evening of dinner and entertainment in support of the cause. And when disaster strikes, like Storm Melissa in Jamaica, we step in with relief.
            </p>
            <p className="serif-quote" style={{ fontSize: 24, color: "var(--ink)", marginTop: 26 }}>“Home is always where the heart is.”</p>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="section band-dark">
        <div className="wrap">
          <SectionHead eyebrow="What we stand for" title={<><span style={{ color: "#fff" }}>Three commitments,</span> <em>never broken.</em></>} />
          <div className="grid cols-3" style={{ marginTop: 46 }}>
            {[
              { n: "01", t: "Love & Humanity", d: "It's our motto and our method. We meet people with warmth, and we treat everyone with dignity." },
              { n: "02", t: "United we stand", d: "We're stronger together, volunteers, donors, and the communities we serve, side by side." },
              { n: "03", t: "Bringing poverty to a halt", d: "From everyday provisions to emergency relief, our work is aimed squarely at need." },
            ].map((v, i) => (
              <div key={i} style={{ padding: "26px 0", borderTop: "2px solid rgba(255,255,255,.18)" }}>
                <div style={{ fontFamily: "var(--mono)", color: "var(--clay-300)", fontSize: 14, letterSpacing: ".1em" }}>{v.n}</div>
                <h3 style={{ color: "#fff", fontSize: 25, marginTop: 14 }}>{v.t}</h3>
                <p style={{ color: "#B9BFD0", marginTop: 10, fontSize: 15.5 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* team */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="The people" title={<>Warm, hands-on, <em>relentless.</em></>} />
          {SF.team.map((m, i) => (
            <div key={i} className="card" style={{ overflow: "hidden", borderRadius: "var(--r-xl)", marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1.3fr" }}>
              <Ph kind={m.ph} label={"portrait: " + m.name} style={{ borderRadius: 0, minHeight: 300, height: "100%" }} />
              <div style={{ padding: "clamp(28px,3.5vw,48px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3 style={{ fontSize: "clamp(26px,3vw,34px)" }}>{m.name}</h3>
                <div className="h-eyebrow" style={{ marginTop: 7 }}>{m.role}</div>
                <p className="lead" style={{ fontSize: 18, marginTop: 16 }}>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA go={go} />
    </main>
  );
}
window.About = About;

/* ---------- Programs list ---------- */
function Programs({ go }) {
  return (
    <main>
      <section className="section-sm" style={{ paddingTop: "clamp(40px,6vw,80px)" }}>
        <div className="wrap">
          <div className="eyebrow-row"><span className="rule" /><span className="h-eyebrow">Our programs</span></div>
          <h1 className="display" style={{ fontSize: "clamp(38px,6vw,76px)" }}>Where your gift <em>goes to work.</em></h1>
          <p className="lead" style={{ maxWidth: 560, marginTop: 20 }}>Our mission, and the relief work it drives, standing with families in their hardest moments. With Love &amp; Humanity.</p>
        </div>
      </section>
      <section className="section-sm">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          {SF.programs.map((p, i) => (
            <Reveal key={p.id} delay={i * 70} className="card card--hover" style={{ overflow: "hidden", borderRadius: "var(--r-xl)", display: "grid", gridTemplateColumns: i % 2 ? "1fr 1.1fr" : "1.1fr 1fr" }}>
              <div style={{ order: i % 2 ? 2 : 1 }}>
                <Media src={p.img} kind={p.ph} label={p.phLabel} style={{ borderRadius: 0, height: "100%", minHeight: 300 }} />
              </div>
              <div style={{ order: i % 2 ? 1 : 2, padding: "clamp(26px,3.5vw,46px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span className={`pill ${p.accent === "clay" ? "pill--clay" : ""}`} style={{ alignSelf: "flex-start" }}><span className="dot" /> {p.tag}</span>
                <h2 style={{ fontSize: "clamp(26px,3vw,38px)", marginTop: 16 }}>{p.name}</h2>
                <p className="lead" style={{ marginTop: 12, fontSize: 17 }}>{p.blurb}</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
                  <button className="btn" onClick={() => go("donate", { program: p.id })}><I.heart width="16" height="16" /> Give now</button>
                  <button className="btn btn--ghost" onClick={() => go("program", { id: p.id })}>Learn more <I.arrow /></button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCTA go={go} />
    </main>
  );
}
window.Programs = Programs;

/* ---------- Program detail ---------- */
function ProgramDetail({ params, go }) {
  const p = SF.programs.find(x => x.id === params.id) || SF.programs[0];
  return (
    <main>
      <section className="section-sm" style={{ paddingTop: "clamp(32px,5vw,64px)" }}>
        <div className="wrap">
          <button className="linkish" onClick={() => go("programs")} style={{ marginBottom: 22 }}><I.arrow style={{ transform: "rotate(180deg)" }} /> All programs</button>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "clamp(28px,5vw,56px)", alignItems: "center" }} className="hero-grid">
            <div>
              <span className={`pill ${p.accent === "clay" ? "pill--clay" : ""}`}><span className="dot" /> {p.tag}</span>
              <h1 style={{ fontSize: "clamp(34px,5vw,64px)", marginTop: 16 }}>{p.name}</h1>
              <p className="lead" style={{ marginTop: 16 }}>{p.blurb}</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 26 }}>
                <button className="btn btn--lg" onClick={() => go("donate", { program: p.id })}><I.heart /> Donate to this</button>
                <button className="btn btn--ghost btn--lg" onClick={() => go("programs")}>All our work <I.arrow /></button>
              </div>
            </div>
            <Media src={p.img} kind={p.ph} ratio="4 / 5" label={p.phLabel} style={{ borderRadius: "var(--r-xl)", boxShadow: "var(--shadow-lg)" }} />
          </div>
        </div>
      </section>

      <section className="section-sm band-2">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(28px,5vw,64px)", alignItems: "center" }}>
          <div>
            <SectionHead eyebrow="Stand with us" title={<>Love &amp; <em>Humanity.</em></>} />
            <p className="lead" style={{ marginTop: 18 }}>
              {p.id === "jamaica"
                ? "Storm Melissa left many families homeless. Watch the video and make a one-time contribution to help us reach them."
                : "Your gift helps us meet people where they are, with the provisions and support they need."}
            </p>
            {p.id === "jamaica" && (
              <a className="linkish" href={SF.contact.youtube} target="_blank" rel="noopener" style={{ marginTop: 18 }}>Watch the video <I.arrow /></a>
            )}
          </div>
          <div className="card" style={{ padding: "clamp(26px,3.5vw,42px)", borderRadius: "var(--r-xl)" }}>
            <h3 style={{ fontSize: 26 }}>Make a contribution</h3>
            <p style={{ color: "var(--ink-2)", marginTop: 10 }}>Donate securely through the Sparr Foundation. Every gift counts.</p>
            <button className="btn btn--block btn--lg" style={{ marginTop: 22 }} onClick={() => go("donate", { program: p.id })}><I.heart /> Donate now</button>
          </div>
        </div>
      </section>
      <FinalCTA go={go} />
    </main>
  );
}
window.ProgramDetail = ProgramDetail;

/* ---------- Donate ---------- */
function Donate({ params, go, toast }) {
  const [freq, setFreq] = useState("once");
  const [amt, setAmt] = useState(50);
  const [custom, setCustom] = useState("");
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ email: "", name: "", card: "" });
  const program = SF.programs.find(p => p.id === params.program);
  const value = custom ? Math.max(0, parseInt(custom) || 0) : amt;
  const amounts = [25, 50, 100, 250];

  if (done) {
    return (
      <main className="section">
        <div className="wrap" style={{ maxWidth: 600, marginInline: "auto", textAlign: "center", paddingBlock: "clamp(30px,5vw,60px)" }}>
          <div style={{ width: 84, height: 84, borderRadius: "50%", background: "var(--accent)", color: "#fff", display: "grid", placeItems: "center", margin: "0 auto 26px", boxShadow: "var(--shadow)" }}><I.heart width="38" height="38" /></div>
          <div className="h-eyebrow">Gift received</div>
          <h1 style={{ fontSize: "clamp(32px,5vw,52px)", marginTop: 12 }}>Thank you for your<br/><em style={{ fontStyle: "italic", color: "var(--accent)" }}>${value} {freq === "monthly" ? "monthly " : ""}gift.</em></h1>
          <p className="lead" style={{ marginTop: 16 }}>
            {program ? `Your gift supports ${program.name}. ` : ""}A receipt is on its way to your inbox. With Love &amp; Humanity, thank you for standing with us.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 30, flexWrap: "wrap" }}>
            <button className="btn btn--lg" onClick={() => go("home")}>Back to home</button>
            <button className="btn btn--ghost btn--lg" onClick={() => go("shop")}>Visit the shop</button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="wrap" style={{ maxWidth: 1040 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: "clamp(28px,5vw,60px)", alignItems: "start" }} className="cart-grid">
          {/* left: context */}
          <div>
            <div className="eyebrow-row"><span className="rule" /><span className="h-eyebrow">{program ? program.name : "Make a gift"}</span></div>
            <h1 className="display" style={{ fontSize: "clamp(36px,5.5vw,64px)" }}>Your gift, <em>their tomorrow.</em></h1>
            <p className="lead" style={{ marginTop: 18, maxWidth: 440 }}>
              {program ? program.blurb : "Stand with those who are economically deprived and living without provisions, and with those who have lost family to war. United we stand, with Love & Humanity."}
            </p>
            <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 12, maxWidth: 420 }}>
              {["Help families living without provisions", "Support those who have lost family to war", "Respond to emergencies like Jamaica Relief"].map((t, i) => (
                <div key={i} style={{ display: "flex", gap: 11, alignItems: "center", color: "var(--ink-2)", fontSize: 15.5 }}>
                  <span style={{ color: "var(--accent)", display: "grid", placeItems: "center", flex: "0 0 auto" }}><I.check width="17" height="17" /></span>
                  {t}
                </div>
              ))}
            </div>
            <a className="card" href={SF.donateUrl} target="_blank" rel="noopener" style={{ marginTop: 28, padding: "16px 18px", display: "flex", gap: 12, alignItems: "center", textDecoration: "none" }}>
              <span style={{ color: "var(--accent)" }}><I.shield /></span>
              <span style={{ fontSize: 13.5, color: "var(--ink-2)" }}>Prefer to give now? Donate securely on Square →</span>
            </a>
          </div>

          {/* right: donate card */}
          <div className="card" style={{ padding: "clamp(24px,3vw,34px)", borderRadius: "var(--r-xl)", boxShadow: "var(--shadow)", position: "sticky", top: 96 }}>
            {/* frequency */}
            <div style={{ display: "flex", gap: 6, padding: 5, background: "var(--bg-2)", borderRadius: 100, marginBottom: 22 }}>
              {[["once", "One-time"], ["monthly", "Monthly"]].map(([k, label]) => (
                <button key={k} onClick={() => setFreq(k)} style={{ flex: 1, padding: "11px", borderRadius: 100, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 14.5,
                  background: freq === k ? "var(--card)" : "transparent", color: freq === k ? "var(--ink)" : "var(--ink-2)", boxShadow: freq === k ? "var(--shadow-sm)" : "none", transition: "all .16s" }}>
                  {label}
                </button>
              ))}
            </div>
            <div className="grid cols-2" style={{ gap: 10 }}>
              {amounts.map(a => (
                <button key={a} onClick={() => { setAmt(a); setCustom(""); }}
                  style={{ padding: "16px 10px", borderRadius: "var(--r)", cursor: "pointer", textAlign: "center",
                    border: "1.5px solid " + (a === value && !custom ? "var(--accent)" : "var(--line)"),
                    background: a === value && !custom ? "var(--accent-50)" : "var(--card)", transition: "all .14s" }}>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 26, color: a === value && !custom ? "var(--accent-700)" : "var(--ink)" }}>${a}</div>
                </button>
              ))}
            </div>
            <div style={{ position: "relative", marginTop: 12 }}>
              <span style={{ position: "absolute", left: 15, top: "50%", transform: "translateY(-50%)", fontSize: 17, color: "var(--ink-3)", fontWeight: 600 }}>$</span>
              <input className="inp" value={custom} onChange={e => setCustom(e.target.value.replace(/\D/g, "").slice(0, 6))} placeholder="Other amount" style={{ paddingLeft: 30, fontSize: 17, fontWeight: 600 }} inputMode="numeric" />
            </div>

            {step === 0 ? (
              <button className="btn btn--block btn--lg" style={{ marginTop: 18 }} disabled={!value} onClick={() => setStep(1)}>
                <I.heart /> {freq === "monthly" ? `Give $${value}/mo` : `Donate $${value}`}
              </button>
            ) : (
              <div style={{ marginTop: 18, animation: "fadeUp .35s ease" }}>
                <hr className="divider" style={{ marginBottom: 18 }} />
                <Field label="Email"><input className="inp" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" /></Field>
                <Field label="Full name"><input className="inp" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></Field>
                <Field label="Card number"><input className="inp" value={form.card} onChange={e => setForm({ ...form, card: e.target.value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim() })} placeholder="4242 4242 4242 4242" inputMode="numeric" /></Field>
                <p style={{ fontSize: 12.5, color: "var(--ink-3)", display: "flex", alignItems: "center", gap: 7, margin: "2px 0 14px" }}><I.lock /> Demo only, no real charge is made.</p>
                <button className="btn btn--block btn--lg" disabled={!form.email || !form.name || form.card.replace(/\s/g, "").length < 15} onClick={() => { setDone(true); window.scrollTo(0, 0); }}>
                  <I.heart /> Complete ${value} gift
                </button>
                <button className="linkish" style={{ display: "block", margin: "14px auto 0", fontSize: 13.5 }} onClick={() => setStep(0)}>← Change amount</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
window.Donate = Donate;

/* ---------- Events / Wine & Dine ---------- */
function Events({ go, toast }) {
  const [rsvp, setRsvp] = useState({ name: "", email: "", guests: "2" });
  const [sent, setSent] = useState(false);
  return (
    <main>
      <section className="band-forest section-sm" style={{ paddingTop: "clamp(40px,6vw,80px)" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "clamp(28px,5vw,64px)", alignItems: "center" }} className="hero-grid">
          <div>
            <div className="eyebrow-row"><span className="rule" style={{ background: "#fff", opacity: .6 }} /><span className="h-eyebrow" style={{ color: "#D9E6DC" }}>Annual fundraiser</span></div>
            <h1 className="display" style={{ fontSize: "clamp(40px,6.5vw,86px)", color: "#fff" }}>Wine &amp;<br/><em style={{ color: "#F4D9C4" }}>Dine.</em></h1>
            <p style={{ fontSize: 19, color: "#E2EDE4", marginTop: 18, maxWidth: 440, lineHeight: 1.6 }}>
              Our annual fundraising event, an evening of dinner and entertainment, held yearly in support of the Foundation. Join us for the cause that brings us together.
            </p>
            <div style={{ display: "flex", gap: 30, marginTop: 28, flexWrap: "wrap" }}>
              <KV k="When" v="Aug 28, 2026" light /><KV k="What" v="Dinner & entertainment" light /><KV k="Where" v="Niagara Falls, ON" light />
            </div>
          </div>
          <div style={{ aspectRatio: "4 / 5", borderRadius: "var(--r-xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
            <img src="assets/hero-gala.png" alt="Sparr Foundation Wine &amp; Dine gala, candlelit tables overlooking Niagara Falls" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(28px,5vw,64px)", alignItems: "center" }}>
          <div>
            <SectionHead eyebrow="Register your interest" title={<>Save me a <em>seat.</em></>} />
            <p className="lead" style={{ marginTop: 16 }}>Let us know you'd like to come and we'll be in touch with the details. Tickets and contributions are handled directly by the Foundation.</p>
            <a className="linkish" href={SF.contact.phoneHref} style={{ marginTop: 18 }}><I.phone width="16" height="16" /> Or call us: {SF.contact.phone}</a>
          </div>
          <div className="card" style={{ padding: "clamp(26px,3.5vw,40px)", borderRadius: "var(--r-xl)" }}>
            {sent ? (
              <div style={{ textAlign: "center", paddingBlock: 16 }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--accent)", color: "#fff", display: "grid", placeItems: "center", margin: "0 auto 18px" }}><I.check width="28" height="28" /></div>
                <h3 style={{ fontSize: 24 }}>You're on the list!</h3>
                <p style={{ color: "var(--ink-2)", marginTop: 10 }}>Thanks, {rsvp.name || "friend"}, we'll email {rsvp.email || "you"} with the details soon.</p>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: 24, marginBottom: 18 }}>Reserve your place</h3>
                <Field label="Full name"><input className="inp" value={rsvp.name} onChange={e => setRsvp({ ...rsvp, name: e.target.value })} /></Field>
                <Field label="Email"><input className="inp" value={rsvp.email} onChange={e => setRsvp({ ...rsvp, email: e.target.value })} placeholder="you@email.com" /></Field>
                <Field label="Guests"><select className="inp" value={rsvp.guests} onChange={e => setRsvp({ ...rsvp, guests: e.target.value })}><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></select></Field>
                <button className="btn btn--block btn--lg" style={{ marginTop: 8 }} disabled={!rsvp.name.trim() || !/^\S+@\S+\.\S+$/.test(rsvp.email)} onClick={() => { setSent(true); toast("Thanks! We'll be in touch about Wine & Dine."); }}>Register interest <I.arrow /></button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-sm band-2">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 620, marginInline: "auto" }}>
          <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)" }}>Can't make it? You can still help.</h2>
          <p className="lead" style={{ marginTop: 14 }}>A gift goes just as far whether you're in the room or not.</p>
          <button className="btn btn--lg" style={{ marginTop: 24 }} onClick={() => go("donate")}><I.heart /> Make a gift instead</button>
        </div>
      </section>
    </main>
  );
}
window.Events = Events;
