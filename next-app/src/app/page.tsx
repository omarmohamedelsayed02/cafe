"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const onScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (!navbar) return;
      if (window.scrollY > 50) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] text-[var(--light-text)]">
      {/* Navbar */}
      <nav className="navbar navbar-transparent fixed top-0 z-50 w-full">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="#" className="font-serif text-2xl font-bold navbar-brand-strong">
            8AM Cafe
          </Link>
          <ul className="hidden gap-6 md:flex">
            {[
              ["HOME", "#"],
              ["MENU", "#menu"],
              ["FEATURED", "#featured"],
              ["RESERVATION", "#reservation"],
              ["GALLERY", "#gallery"],
              ["TESTIMONIALS", "#testimonials"],
              ["ABOUT", "#about"],
              ["CONTACT", "#contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="hover:text-[var(--gold-accent)]">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Carousel (static slides for now) */}
      <header className="pt-16">
        <div className="relative">
          <div className="relative h-[70vh] w-full overflow-hidden">
            <Image
              src="/img/bg11.jpg"
              alt="Hero slide"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h1 className="mb-3 text-3xl">Welcome to</h1>
                <h2 className="mb-6 font-serif text-5xl text-[var(--gold-accent)]">8AM Cafe</h2>
                <a href="#menu" className="btn-outline-light rounded border px-6 py-3">
                  LOOK MENU
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Menu */}
        <section id="menu" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-center font-serif text-3xl text-[var(--gold-accent)]">Our Menu</h2>

            {/* Controls */}
            <div className="mb-6 grid grid-cols-1 items-end gap-3 md:grid-cols-5">
              <div className="md:col-span-2">
                <label htmlFor="menu-search" className="mb-1 block text-sm">
                  Search
                </label>
                <input id="menu-search" type="text" placeholder="Search menu..." className="w-full rounded border border-zinc-700 bg-transparent px-3 py-2" />
              </div>
              <div>
                <label htmlFor="price-min" className="mb-1 block text-sm">
                  Min Price
                </label>
                <input id="price-min" type="number" min={0} step={1} className="w-full rounded border border-zinc-700 bg-transparent px-3 py-2" />
              </div>
              <div>
                <label htmlFor="price-max" className="mb-1 block text-sm">
                  Max Price
                </label>
                <input id="price-max" type="number" min={0} step={1} className="w-full rounded border border-zinc-700 bg-transparent px-3 py-2" />
              </div>
              <div>
                <label htmlFor="menu-sort" className="mb-1 block text-sm">
                  Sort by
                </label>
                <select id="menu-sort" className="w-full rounded border border-zinc-700 bg-transparent px-3 py-2">
                  <option value="">Default</option>
                  <option value="name-asc">Name A-Z</option>
                  <option value="name-desc">Name Z-A</option>
                  <option value="price-asc">Price Low-High</option>
                  <option value="price-desc">Price High-Low</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm">&nbsp;</label>
                <button id="menu-reset" className="btn-outline-light w-full rounded border px-3 py-2">
                  Reset
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-4 border-b border-white/10">
              <ul className="flex flex-wrap gap-2">
                <li>
                  <a data-tab href="#ex2-tabs-1" className="nav-link active">
                    Cold Drinks
                  </a>
                </li>
                <li>
                  <a data-tab href="#ex2-tabs-2" className="nav-link">
                    Hot Drinks
                  </a>
                </li>
                <li>
                  <a data-tab href="#ex2-tabs-3" className="nav-link">
                    Food
                  </a>
                </li>
              </ul>
            </div>

            <div id="ex2-content">
              <div id="ex2-tabs-1" className="menu-section">
                <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2" id="cold-drinks-container"></div>
              </div>
              <div id="ex2-tabs-2" className="hidden menu-section">
                <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2" id="hot-drinks-container"></div>
              </div>
              <div id="ex2-tabs-3" className="hidden menu-section">
                <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2" id="food-container"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured */}
        <section id="featured" className="bg-[var(--dark-secondary)] py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 font-serif text-3xl text-[var(--gold-accent)]">Our Featured Items</h2>
            <p className="mx-auto mb-10 max-w-3xl text-zinc-300">
              Discover our most loved dishes and drinks, carefully crafted to perfection.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { src: "/img/f (1).jpg", title: "Iced Caramel Macchiato", text: "A perfect blend of espresso, milk, vanilla syrup, and a caramel drizzle." },
                { src: "/img/f (3).jpg", title: "Beef Burger", text: "Our signature juicy beef patty, fresh vegetables, and a special sauce in a toasted bun." },
                { src: "/img/f (2).jpg", title: "Molten Cake", text: "Indulge in our decadent chocolate molten cake with a warm, gooey center." },
              ].map((c) => (
                <div key={c.title} className="card-dark h-full rounded shadow">
                  <div className="relative h-64 w-full">
                    <Image src={c.src} alt={c.title} fill className="rounded-t object-cover" />
                  </div>
                  <div className="p-4">
                    <h5 className="card-title-gold mb-2 text-xl">{c.title}</h5>
                    <p className="text-sm text-zinc-300">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reservation */}
        <section id="reservation" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 font-serif text-3xl text-[var(--gold-accent)]">Book a Table</h2>
            <p className="mb-8 text-lg text-zinc-300">
              Planning to visit? Reserve your table now and enjoy a seamless experience at Cafe 8AM.
            </p>
            <a href="#" className="btn-primary inline-block rounded px-6 py-3 font-medium">
              Reserve Now
            </a>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="bg-[var(--dark-secondary)] py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-center font-serif text-3xl text-[var(--gold-accent)]">Gallery</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="gallery-item-container">
                  <Image
                    src={`/img/gallery (${n}).jpg`}
                    alt={`Gallery ${n}`}
                    width={800}
                    height={600}
                    className="h-full w-full rounded object-cover shadow"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 text-center font-serif text-3xl text-[var(--gold-accent)]">
              What Our Customers Say
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  text:
                    '"The best coffee in town! A cozy atmosphere and friendly staff. I highly recommend the iced caramel macchiato."',
                  name: "Ahmed Hassan",
                  role: "Regular Customer",
                },
                {
                  text:
                    '"Their pancakes are absolutely delicious! Cafe 8AM has become my go-to spot for breakfast."',
                  name: "Sara Ali",
                  role: "Food Blogger",
                },
                {
                  text:
                    '"The perfect place to work or relax. Great music, strong Wi-Fi, and amazing hot chocolate."',
                  name: "Omar Tarek",
                  role: "Freelancer",
                },
              ].map((t) => (
                <div key={t.name} className="card-dark h-full rounded p-6 shadow">
                  <p className="italic">{t.text}</p>
                  <div className="mt-3">
                    <h5 className="mb-0 text-lg">{t.name}</h5>
                    <small className="text-zinc-400">{t.role}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-[var(--dark-secondary)] py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center font-serif text-3xl text-[var(--gold-accent)]">Our Story</h2>
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <p className="mb-4">
                  At Cafe 8AM, we believe that great coffee is more than just a drink—it's a moment of peace, a spark of creativity, and a reason to connect. Our journey began with a simple idea: to create a cozy space where the aroma of freshly brewed coffee fills the air, and every visit feels like coming home. We source the finest beans and use our passion for perfection to craft each cup.
                </p>
                <p>
                  Whether you're starting your day with a rich espresso or unwinding with a cool smoothie, we're here to make your moment special. Welcome to our home, welcome to Cafe 8AM.
                </p>
              </div>
              <div className="relative h-80 w-full">
                <Image src="/img/gallery (7).jpg" alt="About us" fill className="rounded object-cover shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center font-serif text-3xl text-[var(--gold-accent)]">Contact Us</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm">
                    Your Name
                  </label>
                  <input id="name" type="text" className="w-full rounded border border-zinc-700 bg-transparent px-3 py-2" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm">
                    Email address
                  </label>
                  <input id="email" type="email" className="w-full rounded border border-zinc-700 bg-transparent px-3 py-2" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm">
                    Message
                  </label>
                  <textarea id="message" rows={4} className="w-full rounded border border-zinc-700 bg-transparent px-3 py-2" />
                </div>
                <button type="submit" className="btn-primary rounded px-6 py-2">
                  Send Message
                </button>
              </form>
              <div>
                <h5 className="mb-3 text-lg">Find Us</h5>
                <div className="mb-4 aspect-[4/3] w-full overflow-hidden rounded">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.64969246104!2d31.2236!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa9b7f5c531%3A0x13c72b2c9b4e7a83!2sTahrir%20Square!5e0!3m2!1sen!2seg!4v1625920000000!5m2!1sen!2seg"
                    className="h-full w-full"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <p>123 Main Street, Downtown, Cairo</p>
                <p>Email: info@cafe8am.com</p>
                <p>Phone: +20 123 456 7890</p>
                <div className="mt-2 flex gap-4 text-2xl">
                  <a href="#" aria-label="Facebook">📘</a>
                  <a href="#" aria-label="Instagram">📸</a>
                  <a href="#" aria-label="Twitter">🐦</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--dark-secondary)] p-6 text-center">
        <p>© 2025 Cafe 8AM. All rights reserved.</p>
      </footer>
    </div>
  );
}
