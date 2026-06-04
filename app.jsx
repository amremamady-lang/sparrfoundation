/* ============================================================
   SPARR FOUNDATION — app router + state
   ============================================================ */
function App() {
  const [route, setRoute] = useState(() => {
    try { return JSON.parse(localStorage.getItem("sf_route")) || { name: "home", params: {} }; }
    catch { return { name: "home", params: {} }; }
  });
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("sf_cart")) || []; } catch { return []; }
  });
  const [roundUp, setRoundUp] = useState(false);
  const [order, setOrder] = useState(null);
  const [toastMsg, setToastMsg] = useState(null);

  useEffect(() => { localStorage.setItem("sf_route", JSON.stringify(route)); }, [route]);
  useEffect(() => { localStorage.setItem("sf_cart", JSON.stringify(cart)); }, [cart]);

  const go = (name, params = {}) => { setRoute({ name, params }); window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" }); };
  const toast = (msg) => setToastMsg(msg);

  const addToCart = (id, qty = 1) => {
    setCart(c => {
      const ex = c.find(x => x.id === id);
      if (ex) return c.map(x => x.id === id ? { ...x, qty: x.qty + qty } : x);
      return [...c, { id, qty }];
    });
    const p = SF.products.find(x => x.id === id);
    toast(`${p ? p.name : "Item"} added to cart`);
  };
  const setQty = (id, qty) => setCart(c => c.map(x => x.id === id ? { ...x, qty: Math.max(1, qty) } : x));
  const removeItem = (id) => setCart(c => c.filter(x => x.id !== id));

  const cartCount = cart.reduce((s, x) => s + x.qty, 0);

  const completeOrder = () => {
    const lines = cart.map(c => ({ ...c, p: SF.products.find(x => x.id === c.id) })).filter(l => l.p);
    const subtotal = lines.reduce((s, l) => s + l.p.price * l.qty, 0);
    const donation = roundUp ? (Math.ceil(subtotal / 10) * 10 - subtotal || 0) : 0;
    const id = "SF" + Math.floor(100000 + Math.random() * 899999);
    setOrder({ id, lines, total: subtotal + donation });
    setCart([]); setRoundUp(false);
    go("confirmation");
  };

  let screen;
  switch (route.name) {
    case "about": screen = <About go={go} />; break;
    case "programs": screen = <Programs go={go} />; break;
    case "program": screen = <ProgramDetail params={route.params} go={go} />; break;
    case "shop": screen = <Shop go={go} addToCart={addToCart} />; break;
    case "product": screen = <ProductDetail params={route.params} go={go} addToCart={addToCart} />; break;
    case "cart": screen = <Cart cart={cart} setQty={setQty} removeItem={removeItem} go={go} roundUp={roundUp} setRoundUp={setRoundUp} />; break;
    case "checkout": screen = cart.length ? <Checkout cart={cart} roundUp={roundUp} go={go} onComplete={completeOrder} /> : <Cart cart={cart} setQty={setQty} removeItem={removeItem} go={go} roundUp={roundUp} setRoundUp={setRoundUp} />; break;
    case "confirmation": screen = <Confirmation order={order} go={go} />; break;
    case "donate": screen = <Donate params={route.params} go={go} toast={toast} />; break;
    case "events": screen = <Events go={go} toast={toast} />; break;
    default: screen = <Home go={go} addToCart={addToCart} />;
  }

  const navRoute = ["program"].includes(route.name) ? "programs" : route.name;

  return (
    <React.Fragment>
      <UtilityBar />
      <Nav route={navRoute} go={go} cartCount={cartCount} />
      <div key={route.name + JSON.stringify(route.params)}>{screen}</div>
      <Footer go={go} />
      {toastMsg && <Toast msg={toastMsg} onDone={() => setToastMsg(null)} />}
      <ThemeSwitcher />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
