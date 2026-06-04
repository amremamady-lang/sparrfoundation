/* ============================================================
   SPARR FOUNDATION, Shop, Product, Cart, Checkout
   ============================================================ */

/* ---------- Product card (shared) ---------- */
function ProductCard({ p, go, addToCart }) {
  return (
    <div className="card card--hover" style={{ overflow: "hidden", borderRadius: "var(--r-lg)", display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ position: "relative", cursor: "pointer" }} onClick={() => go("product", { id: p.id })}>
        <Ph kind={p.ph} ratio="1 / 1" label={"product: " + p.name.toLowerCase()} style={{ borderRadius: 0 }} />
      </div>
      <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ fontSize: 19, cursor: "pointer" }} onClick={() => go("product", { id: p.id })}>{p.name}</h3>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: 16 }}>
          <span style={{ fontWeight: 700, fontSize: 18 }}>{SF.money(p.price)}</span>
          <button className="btn" style={{ padding: "9px 16px", fontSize: 14 }} onClick={() => addToCart(p.id)}><I.plus /> Add</button>
        </div>
      </div>
    </div>
  );
}
window.ProductCard = ProductCard;

/* ---------- Shop ---------- */
function Shop({ go, addToCart }) {
  return (
    <main>
      <section className="section-sm band-2" style={{ paddingTop: "clamp(40px,6vw,72px)" }}>
        <div className="wrap">
          <div className="eyebrow-row"><span className="rule" /><span className="h-eyebrow">The Sparr Shop</span></div>
          <h1 className="display" style={{ fontSize: "clamp(38px,6vw,72px)" }}>The <em>Gallo</em><br/>collection.</h1>
          <p className="lead" style={{ maxWidth: 540, marginTop: 18 }}>
            The shop from the Sparr Foundation store. Prices in Canadian dollars.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="grid cols-4">
            {SF.products.map((p, i) => <Reveal key={p.id} delay={i * 50}><ProductCard p={p} go={go} addToCart={addToCart} /></Reveal>)}
          </div>
        </div>
      </section>
    </main>
  );
}
window.Shop = Shop;

/* ---------- Product detail ---------- */
function ProductDetail({ params, go, addToCart }) {
  const p = SF.products.find(x => x.id === params.id) || SF.products[0];
  const [qty, setQty] = useState(1);
  const rel = SF.products.filter(x => x.id !== p.id).slice(0, 4);
  return (
    <main>
      <section className="section">
        <div className="wrap">
          <button className="linkish" onClick={() => go("shop")} style={{ marginBottom: 26 }}><I.arrow style={{ transform: "rotate(180deg)" }} /> Back to shop</button>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(28px,5vw,64px)", alignItems: "start" }} className="hero-grid">
            <Ph kind={p.ph} ratio="1 / 1" label={"product: " + p.name.toLowerCase()} style={{ borderRadius: "var(--r-xl)", boxShadow: "var(--shadow)", position: "sticky", top: 96 }} />
            <div>
              <div style={{ fontSize: 12, fontFamily: "var(--mono)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-3)" }}>Gallo collection</div>
              <h1 style={{ fontSize: "clamp(32px,4vw,46px)", marginTop: 8 }}>{p.name}</h1>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 14 }}>
                <span style={{ fontWeight: 700, fontSize: 28 }}>{SF.money(p.price)}</span>
              </div>
              <p className="lead" style={{ marginTop: 20, fontSize: 18 }}>From the Sparr Foundation store in Niagara Falls. Add a real product photo and description here when you have them.</p>
              <div style={{ display: "flex", gap: 14, marginTop: 30, alignItems: "center", flexWrap: "wrap" }}>
                <Stepper qty={qty} setQty={setQty} />
                <button className="btn btn--lg" onClick={() => addToCart(p.id, qty)} style={{ flex: 1, minWidth: 200 }}><I.cart /> Add to cart · {SF.money(p.price * qty)}</button>
              </div>
              <div className="card" style={{ marginTop: 26, padding: "16px 18px", display: "flex", gap: 12, alignItems: "center" }}>
                <span style={{ color: "var(--accent)", flex: "0 0 auto" }}><I.heart /></span>
                <div style={{ fontSize: 14.5, color: "var(--ink-2)" }}>Your purchase supports the Sparr Foundation.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-sm band-2">
        <div className="wrap">
          <h2 style={{ fontSize: 28, marginBottom: 28 }}>More from the collection</h2>
          <div className="grid cols-4">
            {rel.map(rp => <ProductCard key={rp.id} p={rp} go={go} addToCart={addToCart} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
window.ProductDetail = ProductDetail;

function Stepper({ qty, setQty, small }) {
  const sz = small ? 30 : 46;
  return (
    <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--line)", borderRadius: 100, background: "var(--card)", overflow: "hidden" }}>
      <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: sz, height: sz, border: "none", background: "transparent", cursor: "pointer", display: "grid", placeItems: "center", color: "var(--ink)" }} aria-label="Decrease"><I.minus /></button>
      <span style={{ minWidth: small ? 24 : 34, textAlign: "center", fontWeight: 700, fontSize: small ? 14 : 16 }}>{qty}</span>
      <button onClick={() => setQty(qty + 1)} style={{ width: sz, height: sz, border: "none", background: "transparent", cursor: "pointer", display: "grid", placeItems: "center", color: "var(--ink)" }} aria-label="Increase"><I.plus /></button>
    </div>
  );
}

/* ---------- Cart ---------- */
function Cart({ cart, setQty, removeItem, go, roundUp, setRoundUp }) {
  const lines = cart.map(c => ({ ...c, p: SF.products.find(x => x.id === c.id) })).filter(l => l.p);
  const subtotal = lines.reduce((s, l) => s + l.p.price * l.qty, 0);
  const roundAmt = roundUp ? Math.ceil(subtotal / 10) * 10 - subtotal || 0 : 0;
  const donation = roundUp ? +(roundAmt.toFixed(2)) : 0;
  const total = subtotal + donation;

  if (lines.length === 0) {
    return (
      <main className="section">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 480, marginInline: "auto", paddingBlock: "clamp(40px,8vw,100px)" }}>
          <div style={{ width: 76, height: 76, borderRadius: "50%", background: "var(--clay-50)", color: "var(--clay)", display: "grid", placeItems: "center", margin: "0 auto 24px" }}><I.cart width="30" height="30" /></div>
          <h1 style={{ fontSize: 34 }}>Your cart is empty</h1>
          <p className="lead" style={{ marginTop: 12 }}>Every item in the Sparr Shop funds our work. Find something that does good.</p>
          <button className="btn btn--lg" onClick={() => go("shop")} style={{ marginTop: 26 }}>Browse the shop <I.arrow /></button>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="wrap">
        <h1 style={{ fontSize: "clamp(32px,4.5vw,52px)", marginBottom: 8 }}>Your cart</h1>
        <p className="lead" style={{ marginBottom: 36 }}>{lines.reduce((s, l) => s + l.qty, 0)} item{lines.reduce((s, l) => s + l.qty, 0) > 1 ? "s" : ""} · Sparr Foundation store</p>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr .9fr", gap: 36, alignItems: "start" }} className="cart-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {lines.map(l => (
              <div key={l.id} className="card cart-row" style={{ padding: 16, display: "flex", gap: 18, alignItems: "center", borderRadius: "var(--r)" }}>
                <Ph kind={l.p.ph} label="" style={{ width: 92, height: 92, borderRadius: 12, flex: "0 0 auto" }} />
                <div className="cart-row-main" style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 11, fontFamily: "var(--mono)", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--ink-3)" }}>Gallo collection</div>
                  <h3 style={{ fontSize: 19, marginTop: 3, cursor: "pointer" }} onClick={() => go("product", { id: l.id })}>{l.p.name}</h3>
                  <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 3 }}>{SF.money(l.p.price)} each</div>
                </div>
                <div className="cart-row-actions" style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <Stepper qty={l.qty} setQty={(n) => setQty(l.id, n)} small />
                  <div style={{ width: 88, textAlign: "right", fontWeight: 700, fontSize: 17 }}>{SF.money(l.p.price * l.qty)}</div>
                  <button onClick={() => removeItem(l.id)} aria-label="Remove" style={{ border: "none", background: "transparent", color: "var(--ink-3)", cursor: "pointer", padding: 6 }}><I.close width="18" height="18" /></button>
                </div>
              </div>
            ))}
            <button className="linkish" onClick={() => go("shop")} style={{ marginTop: 8 }}><I.arrow style={{ transform: "rotate(180deg)" }} /> Continue shopping</button>
          </div>

          <div className="card" style={{ padding: 26, borderRadius: "var(--r-lg)", position: "sticky", top: 96 }}>
            <h3 style={{ fontSize: 21, marginBottom: 18 }}>Order summary</h3>
            <Row k="Subtotal" v={SF.money(subtotal)} />
            <Row k="Shipping" v="Free" muted />
            <label style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 0", borderTop: "1px solid var(--line-2)", borderBottom: "1px solid var(--line-2)", margin: "12px 0", cursor: "pointer" }}>
              <input type="checkbox" checked={roundUp} onChange={e => setRoundUp(e.target.checked)} style={{ width: 18, height: 18, marginTop: 2, accentColor: "var(--accent)" }} />
              <span style={{ fontSize: 14.5 }}><b>Add a donation</b><br/><span style={{ color: "var(--ink-2)" }}>Round up by {SF.money(Math.ceil(subtotal / 10) * 10 - subtotal || 0)} as a gift to Sparr Foundation.</span></span>
            </label>
            <Row k="Total" v={SF.money(total)} big />
            <button className="btn btn--block btn--lg" style={{ marginTop: 20 }} onClick={() => go("checkout")}><I.lock /> Checkout securely</button>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 14, fontSize: 13, color: "var(--ink-3)" }}><I.shield width="15" height="15" /> Encrypted &amp; secure payment</div>
          </div>
        </div>
      </div>
    </main>
  );
}
window.Cart = Cart;

function Row({ k, v, muted, big }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: big ? "8px 0 0" : "7px 0" }}>
      <span style={{ color: muted ? "var(--accent)" : "var(--ink-2)", fontSize: big ? 17 : 15, fontWeight: big ? 700 : 400 }}>{k}</span>
      <span style={{ fontWeight: big ? 800 : 600, fontSize: big ? 24 : 15.5, color: "var(--ink)", fontFamily: big ? "var(--serif)" : undefined }}>{v}</span>
    </div>
  );
}
window.Row = Row;

/* ---------- Checkout ---------- */
function Checkout({ cart, roundUp, go, onComplete }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ email: "", first: "", last: "", address: "", city: "", postal: "", country: "Canada", card: "", exp: "", cvc: "", name: "" });
  const [errors, setErrors] = useState({});
  const lines = cart.map(c => ({ ...c, p: SF.products.find(x => x.id === c.id) })).filter(l => l.p);
  const subtotal = lines.reduce((s, l) => s + l.p.price * l.qty, 0);
  const donation = roundUp ? (Math.ceil(subtotal / 10) * 10 - subtotal || 0) : 0;
  const total = subtotal + donation;
  const steps = ["Details", "Payment", "Review"];
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const validate = (s) => {
    const e = {};
    if (s === 0) {
      if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
      if (!form.first.trim()) e.first = "Required";
      if (!form.last.trim()) e.last = "Required";
      if (!form.address.trim()) e.address = "Required";
      if (!form.city.trim()) e.city = "Required";
      if (!form.postal.trim()) e.postal = "Required";
    }
    if (s === 1) {
      if (form.card.replace(/\s/g, "").length < 15) e.card = "Enter a valid card number";
      if (!/^\d{2}\s*\/\s*\d{2}$/.test(form.exp)) e.exp = "MM / YY";
      if (form.cvc.length < 3) e.cvc = "3–4 digits";
      if (!form.name.trim()) e.name = "Name on card required";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const next = () => { if (validate(step)) setStep(s => s + 1); };

  return (
    <main className="section">
      <div className="wrap" style={{ maxWidth: 1080 }}>
        <button className="linkish" onClick={() => go("cart")} style={{ marginBottom: 22 }}><I.arrow style={{ transform: "rotate(180deg)" }} /> Back to cart</button>
        {/* steps */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 38, maxWidth: 520 }}>
          {steps.map((s, i) => (
            <React.Fragment key={s}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 30, height: 30, borderRadius: "50%", display: "grid", placeItems: "center", fontSize: 14, fontWeight: 700,
                  background: i < step ? "var(--forest)" : i === step ? "var(--clay)" : "var(--card)", color: i <= step ? "#fff" : "var(--ink-3)", border: i > step ? "1px solid var(--line)" : "none" }}>
                  {i < step ? <I.check width="15" height="15" /> : i + 1}
                </span>
                <span style={{ fontSize: 14.5, fontWeight: i === step ? 700 : 500, color: i <= step ? "var(--ink)" : "var(--ink-3)" }}>{s}</span>
              </div>
              {i < steps.length - 1 && <div style={{ flex: 1, height: 1.5, background: i < step ? "var(--forest)" : "var(--line)" }} />}
            </React.Fragment>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 40, alignItems: "start" }} className="cart-grid">
          <div>
            {step === 0 && (
              <div>
                <h2 style={{ fontSize: 26, marginBottom: 22 }}>Your details</h2>
                <Field label="Email" err={errors.email}><input className="inp" value={form.email} onChange={e => set("email", e.target.value)} placeholder="you@email.com" /></Field>
                <div className="grid cols-2" style={{ gap: 16 }}>
                  <Field label="First name" err={errors.first}><input className="inp" value={form.first} onChange={e => set("first", e.target.value)} /></Field>
                  <Field label="Last name" err={errors.last}><input className="inp" value={form.last} onChange={e => set("last", e.target.value)} /></Field>
                </div>
                <Field label="Address" err={errors.address}><input className="inp" value={form.address} onChange={e => set("address", e.target.value)} placeholder="Street and number" /></Field>
                <div className="grid cols-2" style={{ gap: 16 }}>
                  <Field label="City" err={errors.city}><input className="inp" value={form.city} onChange={e => set("city", e.target.value)} /></Field>
                  <Field label="Postal code" err={errors.postal}><input className="inp" value={form.postal} onChange={e => set("postal", e.target.value)} /></Field>
                </div>
                <Field label="Country"><select className="inp" value={form.country} onChange={e => set("country", e.target.value)}><option>Canada</option><option>United States</option><option>United Kingdom</option><option>Netherlands</option></select></Field>
                <button className="btn btn--block btn--lg" style={{ marginTop: 12 }} onClick={next}>Continue to payment <I.arrow /></button>
              </div>
            )}
            {step === 1 && (
              <div>
                <h2 style={{ fontSize: 26, marginBottom: 8 }}>Payment</h2>
                <p style={{ color: "var(--ink-2)", fontSize: 14.5, marginBottom: 22, display: "flex", alignItems: "center", gap: 8 }}><I.lock /> This is a demo, no real card is charged.</p>
                <Field label="Card number" err={errors.card}><input className="inp" value={form.card} onChange={e => set("card", fmtCard(e.target.value))} placeholder="4242 4242 4242 4242" inputMode="numeric" /></Field>
                <div className="grid cols-2" style={{ gap: 16 }}>
                  <Field label="Expiry" err={errors.exp}><input className="inp" value={form.exp} onChange={e => set("exp", fmtExp(e.target.value))} placeholder="MM / YY" inputMode="numeric" /></Field>
                  <Field label="CVC" err={errors.cvc}><input className="inp" value={form.cvc} onChange={e => set("cvc", e.target.value.replace(/\D/g, "").slice(0, 4))} placeholder="123" inputMode="numeric" /></Field>
                </div>
                <Field label="Name on card" err={errors.name}><input className="inp" value={form.name} onChange={e => set("name", e.target.value)} /></Field>
                <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                  <button className="btn btn--ghost btn--lg" onClick={() => setStep(0)}>Back</button>
                  <button className="btn btn--lg" style={{ flex: 1 }} onClick={next}>Review order <I.arrow /></button>
                </div>
              </div>
            )}
            {step === 2 && (
              <div>
                <h2 style={{ fontSize: 26, marginBottom: 22 }}>Review &amp; confirm</h2>
                <div className="card" style={{ padding: 22, borderRadius: "var(--r)", marginBottom: 16 }}>
                  <SummaryLine label="Contact" value={form.email} onEdit={() => setStep(0)} />
                  <SummaryLine label="Ship to" value={`${form.first} ${form.last}, ${form.address}, ${form.city} ${form.postal}`} onEdit={() => setStep(0)} />
                  <SummaryLine label="Pay with" value={"•••• " + (form.card.replace(/\s/g, "").slice(-4) || "····")} onEdit={() => setStep(1)} last />
                </div>
                <div className="card" style={{ padding: 22, borderRadius: "var(--r)" }}>
                  {lines.map(l => (
                    <div key={l.id} style={{ display: "flex", gap: 14, alignItems: "center", padding: "8px 0" }}>
                      <Ph kind={l.p.ph} label="" style={{ width: 50, height: 50, borderRadius: 9, flex: "0 0 auto" }} />
                      <div style={{ flex: 1 }}><div style={{ fontWeight: 600 }}>{l.p.name}</div><div style={{ fontSize: 13, color: "var(--ink-3)" }}>Qty {l.qty}</div></div>
                      <div style={{ fontWeight: 700 }}>{SF.money(l.p.price * l.qty)}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
                  <button className="btn btn--ghost btn--lg" onClick={() => setStep(1)}>Back</button>
                  <button className="btn btn--forest btn--lg" style={{ flex: 1 }} onClick={onComplete}><I.heart /> Place order · {SF.money(total)}</button>
                </div>
              </div>
            )}
          </div>

          {/* sticky summary */}
          <div className="card" style={{ padding: 24, borderRadius: "var(--r-lg)", position: "sticky", top: 96 }}>
            <h3 style={{ fontSize: 19, marginBottom: 16 }}>{lines.reduce((s, l) => s + l.qty, 0)} items</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, maxHeight: 220, overflow: "auto", marginBottom: 14 }}>
              {lines.map(l => (
                <div key={l.id} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <Ph kind={l.p.ph} label="" style={{ width: 44, height: 44, borderRadius: 8, flex: "0 0 auto" }} />
                  <div style={{ flex: 1, fontSize: 14 }}>{l.p.name} <span style={{ color: "var(--ink-3)" }}>×{l.qty}</span></div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{SF.money(l.p.price * l.qty)}</div>
                </div>
              ))}
            </div>
            <hr className="divider" />
            <div style={{ marginTop: 12 }}>
              <Row k="Subtotal" v={SF.money(subtotal)} />
              <Row k="Shipping" v="Free" muted />
              {donation > 0 && <Row k="Donation" v={SF.money(donation)} muted />}
              <Row k="Total" v={SF.money(total)} big />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
window.Checkout = Checkout;

function Field({ label, children, err }) {
  return (
    <label style={{ display: "block", marginBottom: 16 }}>
      <span style={{ display: "block", fontSize: 13.5, fontWeight: 600, marginBottom: 7, color: "var(--ink-2)" }}>{label}</span>
      {children}
      {err && <span style={{ display: "block", fontSize: 12.5, color: "var(--clay-700)", marginTop: 5 }}>{err}</span>}
    </label>
  );
}
function SummaryLine({ label, value, onEdit, last }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "flex-start", padding: "10px 0", borderBottom: last ? "none" : "1px solid var(--line-2)" }}>
      <div style={{ minWidth: 0 }}>
        <div className="h-eyebrow" style={{ marginBottom: 4 }}>{label}</div>
        <div style={{ fontSize: 14.5, color: "var(--ink)", wordBreak: "break-word" }}>{value}</div>
      </div>
      <button className="linkish" style={{ fontSize: 13.5, flex: "0 0 auto" }} onClick={onEdit}>Edit</button>
    </div>
  );
}
window.Field = Field;
window.Stepper = Stepper;
function fmtCard(v) { return v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim(); }
function fmtExp(v) { const d = v.replace(/\D/g, "").slice(0, 4); return d.length >= 3 ? d.slice(0, 2) + " / " + d.slice(2) : d; }

/* ---------- Order confirmation ---------- */
function Confirmation({ order, go }) {
  const lines = (order?.lines) || [];
  return (
    <main className="section">
      <div className="wrap" style={{ maxWidth: 640, marginInline: "auto", textAlign: "center", paddingBlock: "clamp(30px,5vw,60px)" }}>
        <div style={{ width: 84, height: 84, borderRadius: "50%", background: "var(--forest)", color: "#fff", display: "grid", placeItems: "center", margin: "0 auto 26px", boxShadow: "0 12px 30px rgba(62,107,83,.32)" }}><I.check width="38" height="38" /></div>
        <div className="h-eyebrow" style={{ color: "var(--forest)" }}>Order confirmed</div>
        <h1 style={{ fontSize: "clamp(32px,5vw,52px)", marginTop: 12 }}>Thank you, truly.</h1>
        <p className="lead" style={{ marginTop: 16 }}>
          Your order <b style={{ color: "var(--ink)" }}>#{order?.id}</b> is confirmed. A receipt is on its way to your inbox. Thank you for supporting the Sparr Foundation.
        </p>
        <div className="card" style={{ padding: 26, borderRadius: "var(--r-lg)", textAlign: "left", marginTop: 32 }}>
          {lines.map(l => (
            <div key={l.id} style={{ display: "flex", gap: 14, alignItems: "center", padding: "10px 0", borderBottom: "1px solid var(--line-2)" }}>
              <Ph kind={l.p.ph} label="" style={{ width: 50, height: 50, borderRadius: 9, flex: "0 0 auto" }} />
              <div style={{ flex: 1 }}><div style={{ fontWeight: 600 }}>{l.p.name}</div><div style={{ fontSize: 13, color: "var(--ink-3)" }}>{SF.money(l.p.price)} each</div></div>
              <div style={{ fontWeight: 700 }}>×{l.qty}</div>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 16, fontWeight: 700, fontSize: 18 }}>
            <span>Total</span><span style={{ color: "var(--accent)" }}>{SF.money(order?.total || 0)}</span>
          </div>
        </div>
        <div style={{ background: "var(--accent-50)", border: "1px solid var(--line-2)", borderRadius: "var(--r-lg)", padding: "22px 24px", marginTop: 20, display: "flex", gap: 14, alignItems: "center", textAlign: "left" }}>
          <span style={{ color: "var(--accent)", flex: "0 0 auto" }}><I.heart width="22" height="22" /></span>
          <div style={{ color: "var(--ink-2)", fontSize: 15 }}>With Love &amp; Humanity, thank you for standing with us.</div>
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
          <button className="btn btn--lg" onClick={() => go("shop")}>Keep shopping</button>
          <button className="btn btn--ghost btn--lg" onClick={() => go("home")}>Back to home</button>
        </div>
      </div>
    </main>
  );
}
window.Confirmation = Confirmation;
