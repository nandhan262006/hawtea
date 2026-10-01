import { useEffect, useRef, useState } from 'react'
import {
  Menu as MenuIcon,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Clock,
  Phone,
  Users,
  Instagram,
  MessageCircle,
  Star,
} from 'lucide-react'

const A = (p: string) => `/assets/${p}`

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-center px-5 pt-4">
      <div className="text-center">
        <img src={A('logo.png')} alt="HawTea" className="h-11 w-auto mx-auto" />
        <p className="font-hand text-[13px] leading-none text-[#4a3220] italic mt-0.5">
          The Taste of Nostalgia
        </p>
      </div>
      <button
        aria-label="Menu"
        className="absolute right-5 top-4 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#2e2318]"
      >
        <MenuIcon size={30} strokeWidth={2.2} />
      </button>
    </header>
  )
}

function Hero() {
  return (
    <section className="paper relative overflow-hidden pt-24 pb-10 torn-bottom">
      <img
        src={A('palm-left.png')}
        alt=""
        className="pointer-events-none absolute -top-2 -left-4 w-32 sway"
      />
      <img
        src={A('palm-right.png')}
        alt=""
        className="pointer-events-none absolute top-24 -right-6 w-28 sway"
      />
      <div className="relative px-7 pt-8">
        <h1 className="font-hand font-semibold text-[#2e2318] text-[44px] leading-[1.05] -rotate-2">
          Oka Tea...
          <br />
          Oka Gnapakam.
        </h1>
        <p className="font-hand italic text-[#4a3220] text-lg mt-2 ml-10 -rotate-2">
          The Taste of Nostalgia
        </p>
      </div>

      <div className="relative mt-6 px-2">
        <img
          src={A('hero-hut.jpg')}
          alt="HawTea hut at dusk"
          className="w-full object-cover shadow-lg"
          style={{ clipPath: 'polygon(0 4%, 5% 0, 96% 2%, 100% 6%, 99% 96%, 94% 100%, 4% 98%, 0 93%)' }}
        />
      </div>

      <div className="relative flex items-end gap-4 px-7 mt-2">
        <img src={A('tea-glass.png')} alt="" className="w-16 -mt-6" />
        <p className="font-hand italic text-[#4a3220] text-xl leading-tight -rotate-2 pb-2">
          Tea ki raavali...
          <br />
          Time ki kaadhu...
        </p>
      </div>

      <div className="px-7 mt-5">
        <a
          href="#visit"
          className="btn-brown font-hand text-xl px-8 py-3 inline-flex items-center gap-2"
        >
          Explore HawTea <ArrowRight size={20} />
        </a>
      </div>

      <div className="mt-7 flex flex-col items-center gap-1 text-[#4a3220]">
        <div className="w-6 h-10 rounded-full border-2 border-[#4a3220] flex justify-center pt-1.5">
          <div className="scroll-wheel w-1 h-2.5 rounded-full bg-[#4a3220]" />
        </div>
        <span className="font-type text-[10px] tracking-[0.3em]">SCROLL</span>
      </div>
    </section>
  )
}

function Ikkada() {
  return (
    <section className="paper relative overflow-hidden pt-14 pb-12 torn-bottom">
      <div className="px-7">
        <h2 className="font-hand font-semibold text-[#2e2318] text-[40px] leading-[1.05] -rotate-2">
          Ikkada
          <br />
          Time Slow ga
          <br />
          Nadusthundi...
        </h2>
        <p className="font-type text-[13px] leading-relaxed text-[#3d2c1a] mt-4 max-w-[260px]">
          A small escape from the busy world. Good tea, good people, and a 90's vibe that feels like
          home.
        </p>
      </div>
      <div className="relative mt-4 flex items-end justify-center gap-2 px-6">
        <img src={A('signpost.png')} alt="" className="w-28 -ml-2 shrink-0" />
        <img
          src={A('ooru-tea-angadi.png')}
          alt="The Tea Angadi"
          className="w-56 shrink-0 -ml-4"
        />
      </div>
    </section>
  )
}

const ooruSpots = [
  { img: 'ooru-tea-angadi.png', title: 'Tea Angadi', sub: 'Chai, Conversations' },
  { img: 'ooru-chettu-kindha.png', title: 'Chettu Kindha', sub: 'Sit. Relax. Rewind.' },
  { img: 'ooru-racha-banda.png', title: 'Racha Banda', sub: 'People. Stories.' },
  { img: 'ooru-huts.png', title: 'Huts & Seating', sub: 'Private & Peaceful.' },
]

function Ooru() {
  return (
    <section className="paper relative overflow-hidden pt-14 pb-12 torn-bottom">
      <img
        src={A('palm-left.png')}
        alt=""
        className="pointer-events-none absolute top-4 -left-8 w-24 opacity-80"
      />
      <div className="px-7">
        <h2 className="font-hand font-semibold text-[#2e2318] text-[38px] -rotate-2">
          Explore Our Ooru
        </h2>
        <p className="font-type text-[12px] text-[#3d2c1a] mt-1 ml-4">
          Tap to explore different spots at HawTea
        </p>
      </div>
      <ul className="mt-6 px-6 space-y-4">
        {ooruSpots.map((s) => (
          <li key={s.title}>
            <button className="w-full flex items-center gap-4 text-left min-h-[64px] group">
              <img
                src={A(s.img)}
                alt={s.title}
                className="w-20 h-14 object-cover rounded-md shadow border border-[#4a3220]/30"
              />
              <span className="flex-1">
                <span className="font-hand font-semibold text-[22px] text-[#2e2318] block leading-tight">
                  {s.title}
                </span>
                <span className="font-type text-[11px] text-[#5d4529]">{s.sub}</span>
              </span>
              <ArrowRight
                size={22}
                className="text-[#4a3220] transition-transform group-hover:translate-x-1"
              />
            </button>
          </li>
        ))}
      </ul>

      <div className="relative mt-10 px-2">
        <img
          src={A('pavilion.jpg')}
          alt="HawTea pavilion at night"
          className="w-full object-cover shadow-lg"
          style={{ clipPath: 'polygon(0 3%, 6% 0, 95% 2%, 100% 5%, 99% 95%, 93% 100%, 5% 98%, 0 94%)' }}
        />
        <p className="font-hand italic text-[#4a3220] text-xl text-right pr-8 mt-2 -rotate-2">
          Same Ooru...
          <br />
          New Memories...
        </p>
      </div>
    </section>
  )
}

const menuItems = [
  { icon: 'icon-irani-chai.png', name: 'Irani Chai', price: '₹20' },
  { icon: 'icon-masala-tea.png', name: 'Masala Tea', price: '₹25' },
  { icon: 'icon-lemon-tea.png', name: 'Lemon Tea', price: '₹20' },
  { icon: 'icon-filter-coffee.png', name: 'Filter Coffee', price: '₹30' },
  { icon: 'icon-rose-milk.png', name: 'Rose Milk', price: '₹40' },
]
const menuTabs = ['Tea', 'Snacks', 'Tiffins', 'Beverages']

function MenuSection() {
  const [tab, setTab] = useState('Tea')
  return (
    <section className="paper relative overflow-hidden pt-14 pb-14 torn-bottom torn-top torn-top-deep">
      <div className="px-7 text-center relative">
        <h2 className="font-hand font-semibold text-[#2e2318] text-[38px] -rotate-2 inline-block">
          Our Menu
          <svg viewBox="0 0 60 24" className="inline-block w-10 ml-1 -mt-2 text-[#4a3220]" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M6 18 Q 18 4 30 14 Q 42 24 54 8" />
            <path d="M30 14 q 2 -8 8 -10 M30 14 q -6 -4 -12 -2 M40 18 q 6 -2 10 2 M20 10 q -6 -2 -10 2" />
          </svg>
        </h2>
        <p className="font-type text-[11px] tracking-[0.18em] text-[#5d4529] mt-1">
          SIMPLE FOOD. STRONG MEMORIES.
        </p>
      </div>

      <div className="mt-5 px-6 flex gap-2 overflow-x-auto no-scrollbar">
        {menuTabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`min-h-[44px] px-5 rounded-full font-type text-[13px] transition-colors ${
              tab === t
                ? 'bg-[#4a3220] text-[#f6ecd7] shadow'
                : 'text-[#4a3220] border border-[#4a3220]/40'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="relative mx-5 mt-5 sketch-card px-5 pt-4 pb-6 rotate-[0.4deg]">
        <ul className="divide-y divide-[#4a3220]/20">
          {menuItems.map((m) => (
            <li key={m.name} className="flex items-center gap-4 py-3.5">
              <img src={A(m.icon)} alt="" className="w-12 h-12 object-contain" />
              <span className="font-hand font-semibold text-[22px] text-[#2e2318] flex-1">
                {m.name}
              </span>
              <span className="font-type text-[15px] text-[#2e2318]">{m.price}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex items-end justify-between">
          <button className="font-hand italic text-lg text-[#4a3220] underline-hand inline-flex items-center gap-2 min-h-[44px]">
            View Full Menu <ArrowRight size={18} />
          </button>
          <img src={A('kettle.png')} alt="" className="w-16" />
        </div>
      </div>
    </section>
  )
}

const nostalgiaItems = [
  { img: 'cassette.png', label: 'Cassette' },
  { img: 'tv.png', label: 'TV' },
  { img: 'cycle.png', label: 'Cycle' },
  { img: 'projector.png', label: 'Projector' },
]

function Nostalgia() {
  const [i, setI] = useState(0)
  const strip = useRef<HTMLDivElement>(null)
  const prev = () => setI((i + nostalgiaItems.length - 1) % nostalgiaItems.length)
  const next = () => setI((i + 1) % nostalgiaItems.length)
  useEffect(() => {
    strip.current
      ?.querySelector(`[data-idx="${i}"]`)
      ?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [i])
  return (
    <section className="paper relative overflow-hidden pt-14 pb-14 torn-bottom">
      <div className="px-7">
        <h2 className="font-hand font-semibold text-[#2e2318] text-[38px] -rotate-2">
          90's <span className="underline decoration-wavy decoration-[#b8692a] underline-offset-4">Nostalgia</span>
        </h2>
        <p className="font-hand italic text-lg text-[#4a3220] mt-2 ml-2">
          Before Playlists...
          <br />
          There was one Radio.
        </p>
      </div>
      <div className="relative mt-4 px-7">
        <img src={A('radio.png')} alt="Vintage radio" className="w-40 ml-auto" />
      </div>
      <div className="relative mt-2 flex items-center gap-3 px-4">
        <button
          onClick={prev}
          aria-label="Previous"
          className="shrink-0 min-w-[44px] min-h-[44px] rounded-full bg-[#4a3220] text-[#f6ecd7] flex items-center justify-center shadow"
        >
          <ArrowLeft size={18} />
        </button>
        <div ref={strip} className="flex flex-1 items-end gap-4 overflow-x-auto no-scrollbar py-1">
          {nostalgiaItems.map((n, idx) => (
            <button
              key={n.label}
              data-idx={idx}
              onClick={() => setI(idx)}
              aria-label={`Show ${n.label}`}
              aria-current={idx === i}
              className={`shrink-0 w-[86px] flex flex-col items-center gap-1 transition-opacity ${
                idx === i ? 'opacity-100' : 'opacity-60'
              }`}
            >
              <img
                src={A(n.img)}
                alt={n.label}
                className={`w-full object-contain ${idx === i ? 'h-24' : 'h-16'}`}
              />
              <span className="font-hand text-lg text-[#4a3220]">{n.label}</span>
            </button>
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next"
          className="shrink-0 min-w-[44px] min-h-[44px] rounded-full bg-[#4a3220] text-[#f6ecd7] flex items-center justify-center shadow"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  )
}

const realPhotos = [
  { img: 'real1.jpg', caption: 'Good Tea', rot: '-rotate-1' },
  { img: 'real2.png', caption: 'Better People.', rot: 'rotate-1' },
  { img: 'real3.png', caption: "Same 90's Vibe.", rot: '-rotate-2' },
]

function RealHawTea() {
  const [i, setI] = useState(0)
  const prev = () => setI((i + realPhotos.length - 1) % realPhotos.length)
  const next = () => setI((i + 1) % realPhotos.length)
  return (
    <section className="paper relative overflow-hidden pt-14 pb-14 torn-bottom">
      <div className="px-7 text-center">
        <h2 className="font-hand font-semibold text-[#2e2318] text-[38px] -rotate-2">Real HawTea</h2>
        <p className="font-type text-[11px] tracking-[0.14em] text-[#5d4529] mt-1">
          THE DOODLES ARE IMAGINARY.
          <br />
          THE PLACE ISN'T.
        </p>
      </div>

      <div className="relative mt-7 mx-6">
        <div className={`polaroid relative ${realPhotos[i].rot} transition-transform`}>
          <div className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-2" />
          <img
            src={A(realPhotos[i].img)}
            alt={realPhotos[i].caption}
            className="w-full h-56 object-cover"
          />
          <p className="font-hand italic text-xl text-[#4a3220] text-right mt-2 pr-3 -rotate-2">
            {realPhotos[i].caption}
          </p>
        </div>
        <button
          onClick={prev}
          aria-label="Previous photo"
          className="absolute -left-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-[#4a3220] text-[#f6ecd7] flex items-center justify-center shadow-lg"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Next photo"
          className="absolute -right-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-[#4a3220] text-[#f6ecd7] flex items-center justify-center shadow-lg"
        >
          <ArrowRight size={18} />
        </button>
      </div>
      <div className="mt-5 flex justify-center gap-2">
        {realPhotos.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === i ? 'bg-[#4a3220]' : 'bg-[#4a3220]/30'}`}
          />
        ))}
      </div>
    </section>
  )
}

const testimonials = [
  { text: 'School days gurthochayi bro... Chai superr', name: 'Viswanath' },
  { text: 'Peaceful place. Evening times ki asalu super vibe.', name: 'Sravani' },
  { text: 'Masala tea + sunset = perfect combo. Must visit!', name: 'Kiran' },
]

function PeopleSay() {
  const [i, setI] = useState(0)
  const prev = () => setI((i + testimonials.length - 1) % testimonials.length)
  const next = () => setI((i + 1) % testimonials.length)
  const t = testimonials[i]
  return (
    <section className="paper relative overflow-hidden pt-14 pb-10 torn-bottom">
      <h2 className="font-hand font-semibold text-[#2e2318] text-[38px] -rotate-2 px-7">
        What People Say
      </h2>
      <div className="relative mt-6 mx-8">
        <div className="sketch-card relative px-6 py-6 -rotate-1">
          <span className="font-hand text-[64px] leading-none text-[#4a3220] absolute -top-4 left-3">
            “
          </span>
          <p className="font-kalam text-[16px] text-[#3d2c1a] pt-6">
            {t.text} <span className="text-red-500">❤</span>
          </p>
          <div className="flex gap-0.5 mt-3 text-[#e8a13a]">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} size={16} fill="currentColor" />
            ))}
          </div>
          <p className="font-hand italic text-lg text-[#4a3220] mt-2">- {t.name}</p>
        </div>
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute -left-5 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-[#4a3220] text-[#f6ecd7] flex items-center justify-center shadow"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="absolute -right-5 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-[#4a3220] text-[#f6ecd7] flex items-center justify-center shadow"
        >
          <ArrowRight size={16} />
        </button>
      </div>
      <div className="px-7 mt-7">
        <button className="btn-brown font-hand text-lg px-7 py-2.5 inline-flex items-center gap-2">
          More Memories <ArrowRight size={18} />
        </button>
      </div>
      <img src={A('village.jpg')} alt="" className="w-full mt-8" />
    </section>
  )
}

function Visit() {
  return (
    <section id="visit" className="paper relative overflow-hidden pt-14 pb-14 torn-bottom torn-top torn-top-deep">
      <img
        src={A('palm-right.png')}
        alt=""
        className="pointer-events-none absolute top-8 -right-8 w-24 opacity-80"
      />
      <div className="px-7">
        <h2 className="font-hand font-semibold text-[#2e2318] text-[38px] -rotate-2">
          Plan Your Visit
        </h2>
        <p className="font-hand italic text-xl text-[#4a3220] ml-3 -rotate-2">
          Ooru ki ela raavali?
        </p>
      </div>

      <div className="relative mt-5 px-2">
        <img
          src={A('signboard.jpg')}
          alt="HawTea neon signboard at night"
          className="w-full object-cover shadow-lg"
          style={{ clipPath: 'polygon(0 4%, 6% 0, 94% 2%, 100% 5%, 99% 95%, 95% 100%, 4% 98%, 0 94%)' }}
        />
      </div>

      <div className="px-7 mt-5 flex gap-3">
        <MapPin size={26} className="text-[#4a3220] shrink-0 mt-1" />
        <div>
          <p className="font-hand font-semibold text-[22px] text-[#2e2318] leading-tight">
            Khanapur, Hyderabad
          </p>
          <p className="font-type text-[11px] text-[#5d4529]">(Exact location on Maps)</p>
          <button className="font-hand italic text-lg text-[#4a3220] underline-hand inline-flex items-center gap-2 mt-1 min-h-[44px]">
            Open in Maps <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="px-6 mt-2">
        <img src={A('map.jpg')} alt="Hand drawn map to HawTea" className="w-full rounded-lg" />
      </div>

      <div className="px-6 mt-5 space-y-4">
        <div className="sketch-card flex items-center gap-4 px-5 py-4">
          <Clock size={30} className="text-[#4a3220] shrink-0" />
          <div>
            <p className="font-hand font-semibold text-[22px] text-[#2e2318] leading-tight">Timings</p>
            <p className="font-type text-[13px] text-[#3d2c1a]">10:00 AM – 11:00 PM</p>
            <p className="font-type text-[11px] text-[#5d4529]">(Everyday)</p>
          </div>
        </div>
        <div className="sketch-card flex items-center gap-4 px-5 py-4">
          <Phone size={28} className="text-[#4a3220] shrink-0" />
          <div>
            <p className="font-hand font-semibold text-[22px] text-[#2e2318] leading-tight">Contact</p>
            <p className="font-type text-[13px] text-[#3d2c1a]">+91 98765 43210</p>
            <p className="font-type text-[11px] text-[#5d4529]">(For Enquiries)</p>
          </div>
        </div>
        <div className="sketch-card flex items-center gap-4 px-5 py-4">
          <Users size={30} className="text-[#4a3220] shrink-0" />
          <div>
            <p className="font-hand font-semibold text-[22px] text-[#2e2318] leading-tight">Come With</p>
            <p className="font-type text-[13px] text-[#3d2c1a]">Friends, Family</p>
            <p className="font-type text-[11px] text-[#5d4529]">or Just Your Thoughts.</p>
          </div>
        </div>
      </div>

      <div className="px-7 mt-6 text-center">
        <button className="btn-brown font-hand text-xl px-9 py-3 inline-flex items-center gap-2">
          Get Directions <ArrowRight size={20} />
        </button>
      </div>
    </section>
  )
}

const gallery: { img: string; wide: boolean; tall?: boolean }[] = [
  { img: 'g1.jpg', wide: true },
  { img: 'g2.jpg', wide: false },
  { img: 'g3.jpg', wide: false },
  { img: 'g4.jpg', wide: false },
  { img: 'g5.jpg', wide: false },
  { img: 'g6.jpg', wide: true, tall: true },
]

function Gallery() {
  return (
    <section className="paper relative overflow-hidden pt-14 pb-14 torn-bottom">
      <h2 className="font-hand font-semibold text-[#2e2318] text-[36px] -rotate-2 px-7">
        A Few More Glimpses
      </h2>
      <div className="px-5 mt-6 grid grid-cols-2 gap-3">
        {gallery.map((g) => (
          <img
            key={g.img}
            src={A(g.img)}
            alt="HawTea glimpse"
            className={`rounded-lg shadow-md border-4 border-[#fbf6e9] object-cover w-full ${
              g.tall ? 'col-span-2 h-64' : g.wide ? 'col-span-2 h-44' : 'h-32'
            }`}
          />
        ))}
      </div>
      <div className="px-7 mt-6 text-center">
        <button className="btn-brown font-hand text-xl px-8 py-3 inline-flex items-center gap-2">
          View Full Gallery <ArrowRight size={20} />
        </button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="relative">
        <img src={A('footer-scene.jpg')} alt="HawTea huts under a starry night" className="w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#120c06]" />
      </div>
      <div className="bg-[#120c06] px-7 pt-2 pb-6">
        <div className="flex justify-center gap-6 py-4 text-[#f6ecd7]">
          <a href="#" aria-label="Instagram" className="min-w-[44px] min-h-[44px] flex items-center justify-center">
            <Instagram size={24} />
          </a>
          <a href="#" aria-label="WhatsApp" className="min-w-[44px] min-h-[44px] flex items-center justify-center">
            <MessageCircle size={24} />
          </a>
          <a href="#visit" aria-label="Location" className="min-w-[44px] min-h-[44px] flex items-center justify-center">
            <MapPin size={24} />
          </a>
        </div>
        <nav className="flex justify-center gap-7 border-t border-[#f6ecd7]/15 pt-4">
          {['Home', 'Menu', 'Gallery', 'Visit Us'].map((l) => (
            <a
              key={l}
              href="#"
              className="font-type text-[13px] text-[#f6ecd7]/85 underline underline-offset-4 decoration-[#f6ecd7]/40 min-h-[44px] inline-flex items-center"
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a120a] flex justify-center">
      <main className="relative w-full max-w-[480px] shadow-[0_0_60px_rgba(0,0,0,0.6)]">
        <Header />
        <Hero />
        <Ikkada />
        <Ooru />
        <MenuSection />
        <Nostalgia />
        <RealHawTea />
        <PeopleSay />
        <Visit />
        <Gallery />
        <Footer />
      </main>
    </div>
  )
}
