"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const onScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (!navbar) return;
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-transparent bg-black/40 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <a className="navbar-brand" href="#">
              <strong className="h4 text-[var(--gold-accent)]">8AM Cafe</strong>
            </a>
          </div>
        </nav>

        <div className="relative" id="hero">
          <div className="relative">
            <Image
              src="/img/bg11.jpg"
              alt="Hero image"
              width={1920}
              height={1080}
              priority
              className="w-full h-[85vh] object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="mb-3 text-4xl">Welcome to</h1>
                <h2 className="mb-4 text-5xl">8AM Cafe</h2>
                <a
                  className="inline-block border border-[var(--gold-accent)] text-[var(--gold-accent)] px-6 py-3 rounded hover:bg-[var(--gold-accent)] hover:text-[var(--dark-bg)] transition"
                  href="#menu"
                >
                  LOOK MENU
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Menu Controls */}
        <section id="menu" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-8 text-3xl">Our Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
              <div className="md:col-span-4">
                <label htmlFor="menu-search" className="block mb-1">
                  Search
                </label>
                <input
                  type="text"
                  id="menu-search"
                  className="w-full rounded bg-transparent border border-zinc-700 px-3 py-2"
                  placeholder="Search menu..."
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="price-min" className="block mb-1">
                  Min Price
                </label>
                <input
                  type="number"
                  id="price-min"
                  className="w-full rounded bg-transparent border border-zinc-700 px-3 py-2"
                  min={0}
                  step={1}
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="price-max" className="block mb-1">
                  Max Price
                </label>
                <input
                  type="number"
                  id="price-max"
                  className="w-full rounded bg-transparent border border-zinc-700 px-3 py-2"
                  min={0}
                  step={1}
                />
              </div>
              <div className="md:col-span-3">
                <label htmlFor="menu-sort" className="block mb-1">
                  Sort by
                </label>
                <select
                  id="menu-sort"
                  className="w-full rounded bg-transparent border border-zinc-700 px-3 py-2"
                >
                  <option value="">Default</option>
                  <option value="name-asc">Name A-Z</option>
                  <option value="name-desc">Name Z-A</option>
                  <option value="price-asc">Price Low-High</option>
                  <option value="price-desc">Price High-Low</option>
                </select>
              </div>
              <div className="md:col-span-1 flex items-end">
                <button id="menu-reset" className="w-full border border-[var(--gold-accent)] text-[var(--gold-accent)] rounded px-3 py-2 hover:bg-[var(--gold-accent)] hover:text-[var(--dark-bg)]">
                  Reset
                </button>
              </div>
            </div>
            <ul className="flex border-b border-zinc-700 mb-6">
              <li className="mr-2">
                <a
                  className="inline-block p-3 border rounded-t text-[var(--gold-accent)] border-zinc-700"
                  id="ex2-tab-1"
                  href="#ex2-tabs-1"
                  data-mdb-tab-init
                >
                  Cold Drinks
                </a>
              </li>
              <li className="mr-2">
                <a
                  className="inline-block p-3 border rounded-t border-zinc-700"
                  id="ex2-tab-2"
                  href="#ex2-tabs-2"
                  data-mdb-tab-init
                >
                  Hot Drinks
                </a>
              </li>
              <li className="mr-2">
                <a
                  className="inline-block p-3 border rounded-t border-zinc-700"
                  id="ex2-tab-3"
                  href="#ex2-tabs-3"
                  data-mdb-tab-init
                >
                  Food
                </a>
              </li>
            </ul>
            <div className="tab-content" id="ex2-content">
              <div className="tab-pane show" id="ex2-tabs-1">
                <div className="container my-5 menu-section">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="cold-drinks-container"></div>
                </div>
              </div>
              <div className="tab-pane" id="ex2-tabs-2">
                <div className="container my-5 menu-section">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="hot-drinks-container"></div>
                </div>
              </div>
              <div className="tab-pane" id="ex2-tabs-3">
                <div className="container my-5 menu-section">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="food-container"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="featured" className="py-20 bg-[var(--dark-secondary)]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl">Our Featured Items</h2>
            <p className="mb-10 text-lg">
              Discover our most loved dishes and drinks, carefully crafted to
              perfection.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { src: "/img/f (1).jpg", title: "Iced Caramel Macchiato", text: "A perfect blend of espresso, milk, vanilla syrup, and a caramel drizzle." },
                { src: "/img/f (3).jpg", title: "Beef Burger", text: "Our signature juicy beef patty, fresh vegetables, and a special sauce in a toasted bun." },
                { src: "/img/f (2).jpg", title: "Molten Cake", text: "Indulge in our decadent chocolate molten cake with a warm, gooey center." },
              ].map((item) => (
                <div key={item.title} className="bg-[var(--dark-secondary)] rounded shadow">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-[250px] object-cover rounded-t"
                  />
                  <div className="p-4">
                    <h5 className="text-[var(--gold-accent)] text-xl mb-2">{item.title}</h5>
                    <p className="text-sm text-zinc-300">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-8 text-3xl">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="w-full h-[250px] overflow-hidden rounded">
                  <Image
                    src={`/img/gallery (${n}).jpg`}
                    alt={`Gallery ${n}`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-[var(--dark-secondary)]">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-8 text-3xl">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  At Cafe 8AM, we believe that great coffee is more than just a
                  drink—it's a moment of peace, a spark of creativity, and a
                  reason to connect. Our journey began with a simple idea: to
                  create a cozy space where the aroma of freshly brewed coffee
                  fills the air, and every visit feels like coming home. We
                  source the finest beans and use our passion for perfection to
                  craft each cup.
                </p>
                <p>
                  Whether you're starting your day with a rich espresso or
                  unwinding with a cool smoothie, we're here to make your
                  moment special. Welcome to our home, welcome to Cafe 8AM.
                </p>
              </div>
              <div>
                <Image
                  src="/img/gallery (7).jpg"
                  alt="About Us"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-8 text-3xl">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">
                    Your Name
                  </label>
                  <input id="name" type="text" className="w-full rounded bg-transparent border border-zinc-700 px-3 py-2" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email address
                  </label>
                  <input id="email" type="email" className="w-full rounded bg-transparent border border-zinc-700 px-3 py-2" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">
                    Message
                  </label>
                  <textarea id="message" rows={4} className="w-full rounded bg-transparent border border-zinc-700 px-3 py-2" />
                </div>
                <button className="bg-[var(--gold-accent)] text-black font-semibold px-4 py-2 rounded hover:opacity-90">
                  Send Message
                </button>
              </form>
              <div>
                <h5 className="text-xl mb-4">Find Us</h5>
                <div className="aspect-[4/3] mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.64969246104!2d31.2236!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa9b7f5c531%3A0x13c72b2c9b4e7a83!2sTahrir%20Square!5e0!3m2!1sen!2seg!4v1625920000000!5m2!1sen!2seg"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
                <p>123 Main Street, Downtown, Cairo</p>
                <p>Email: info@cafe8am.com</p>
                <p>Phone: +20 123 456 7890</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center p-6 bg-[var(--dark-secondary)] text-white">
        <p>© 2025 Cafe 8AM. All rights reserved.</p>
      </footer>
    </div>
  );
}
