import { useEffect, useState } from 'react'
import { CheckCircle2, Quote, Star, Building2, Calendar, Mail, Phone, User, School, Briefcase, Mic, BookOpen, Settings } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

function GradientSection({ children }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(1200px_600px_at_50%_-10%,#93c5fd,transparent),radial-gradient(800px_400px_at_80%_10%,#c4b5fd,transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">{children}</div>
    </section>
  )
}

export function HomePage() {
  const [services, setServices] = useState([])
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    fetch(`${API_BASE}/api/services`).then(r => r.json()).then(setServices).catch(() => {})
    fetch(`${API_BASE}/api/testimonials`).then(r => r.json()).then(setTestimonials).catch(() => {})
  }, [])

  return (
    <div>
      <GradientSection>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">Professional Training, Workshops & Motivational Programs</h1>
            <p className="mt-4 text-gray-600">Edufuser partners with institutions and organizations to deliver impactful learning experiences that spark growth.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">Book a Trainer</a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">Request a Contract</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 border border-gray-200" />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow p-4 border border-gray-100 text-sm">Trusted by institutions</div>
          </div>
        </div>
      </GradientSection>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-6">
        {services.slice(0,4).map((s, i) => (
          <div key={i} className="rounded-xl border border-gray-200 p-5 hover:shadow-sm transition">
            <div className="h-10 w-10 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              {s.icon === 'Briefcase' && <Briefcase className="h-5 w-5"/>}
              {s.icon === 'Mic' && <Mic className="h-5 w-5"/>}
              {s.icon === 'BookOpen' && <BookOpen className="h-5 w-5"/>}
              {s.icon === 'Settings' && <Settings className="h-5 w-5"/>}
              {!['Briefcase','Mic','BookOpen','Settings'].includes(s.icon) && <CheckCircle2 className="h-5 w-5"/>}
            </div>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{s.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-bold mb-6">Institutions we’ve served</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center">
            {Array.from({length: 12}).map((_, i) => (
              <div key={i} className="h-10 bg-white border border-gray-200 rounded-md flex items-center justify-center text-gray-400 text-sm">Logo</div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-bold mb-6">What our partners say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
              <div className="flex items-center gap-1 text-yellow-500 mb-3">
                {Array.from({length: t.rating}).map((_, j) => <Star key={j} className="h-4 w-4 fill-yellow-400" />)}
              </div>
              <p className="text-gray-700">“{t.quote}”</p>
              <div className="mt-4 text-sm text-gray-600">— {t.author}{t.role ? `, ${t.role}` : ''}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div>
        <h1 className="text-3xl font-bold">About Edufuser</h1>
        <p className="mt-3 text-gray-600">We fuse education with energy. Our mission is to deliver practical, high-impact training that unlocks potential for students, professionals, and teams.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold">Mission</h3>
          <p className="text-sm text-gray-600 mt-1">Empower learners through engaging, real-world training experiences.</p>
        </div>
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold">Vision</h3>
          <p className="text-sm text-gray-600 mt-1">Be the most trusted partner for institutions seeking transformative learning.</p>
        </div>
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold">Our Story</h3>
          <p className="text-sm text-gray-600 mt-1">Founded by passionate educators, Edufuser bridges the gap between theory and practice.</p>
        </div>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-gray-50 h-56" />
    </div>
  )
}

export function ServicesPage() {
  const [services, setServices] = useState([])
  useEffect(() => { fetch(`${API_BASE}/api/services`).then(r=>r.json()).then(setServices).catch(()=>{}) }, [])
  const iconMap = { Briefcase: <Briefcase className="h-5 w-5"/>, Mic: <Mic className="h-5 w-5"/>, BookOpen: <BookOpen className="h-5 w-5"/>, Settings: <Settings className="h-5 w-5"/> }
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="rounded-xl border p-6">
            <div className="h-10 w-10 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center mb-3">{iconMap[s.icon] || <CheckCircle2 className="h-5 w-5"/>}</div>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PricingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold">Time-based</h3>
          <p className="text-sm text-gray-600">Hourly or daily engagements.</p>
          <ul className="mt-3 text-sm text-gray-700 space-y-2">
            <li>Hourly: from $120</li>
            <li>Half-day: from $450</li>
            <li>Full-day: from $800</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold">Per-participant</h3>
          <p className="text-sm text-gray-600">Pay based on attendees.</p>
          <ul className="mt-3 text-sm text-gray-700 space-y-2">
            <li>Workshops: from $50/person</li>
            <li>Bootcamps: from $200/person</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold">Contract-based</h3>
          <p className="text-sm text-gray-600">Institutional agreements.</p>
          <ul className="mt-3 text-sm text-gray-700 space-y-2">
            <li>Retainers</li>
            <li>Semester programs</li>
            <li>Custom solutions</li>
          </ul>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-sm font-semibold">Plan</th>
              <th className="p-3 text-sm font-semibold">Best for</th>
              <th className="p-3 text-sm font-semibold">Includes</th>
              <th className="p-3 text-sm font-semibold">Pricing</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">Hourly/Daily</td>
              <td className="p-3">Talks, short sessions</td>
              <td className="p-3">Trainer time, materials</td>
              <td className="p-3">$120–$800</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">Per-participant</td>
              <td className="p-3">Workshops</td>
              <td className="p-3">Curriculum + support</td>
              <td className="p-3">$50–$200 per person</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">Contract</td>
              <td className="p-3">Institutions</td>
              <td className="p-3">Tailored scope</td>
              <td className="p-3">Custom</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function TrainersPage() {
  const [trainers, setTrainers] = useState([])
  useEffect(() => { fetch(`${API_BASE}/api/trainers`).then(r=>r.json()).then(setTrainers).catch(()=>{}) }, [])
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Our Trainers</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.map((t, i) => (
          <div key={i} className="rounded-2xl border overflow-hidden">
            <div className="h-48 bg-gray-100">{t.photo_url && <img src={t.photo_url} alt={t.name} className="w-full h-full object-cover"/>}</div>
            <div className="p-5">
              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{t.bio}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {t.expertise?.map((e,j)=>(<span key={j} className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">{e}</span>))}
              </div>
              <a href="/contact" className="inline-flex mt-4 items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700">Book</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([])
  useEffect(() => { fetch(`${API_BASE}/api/testimonials`).then(r=>r.json()).then(setTestimonials).catch(()=>{}) }, [])
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Testimonials</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-xl border p-6 bg-white shadow-sm">
            <div className="flex items-center gap-1 text-yellow-500 mb-3">
              {Array.from({length: t.rating}).map((_, j) => <Star key={j} className="h-4 w-4 fill-yellow-400" />)}
            </div>
            <p className="text-gray-700">“{t.quote}”</p>
            <div className="mt-4 text-sm text-gray-600">— {t.author}{t.role ? `, ${t.role}` : ''}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ContactPage() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = Object.fromEntries(new FormData(e.currentTarget).entries())
    setLoading(true)
    fetch(`${API_BASE}/api/contract-request`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      .then(r => r.json()).then((res) => { setStatus('Thanks! We\'ll be in touch shortly.'); e.currentTarget.reset() })
      .catch(() => setStatus('Something went wrong. Please try again.'))
      .finally(() => setLoading(false))
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact / Contract Request</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-1">
          <label className="text-sm text-gray-700">Name</label>
          <input name="name" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="sm:col-span-1">
          <label className="text-sm text-gray-700">Institution</label>
          <input name="institution" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>
        <div className="sm:col-span-1">
          <label className="text-sm text-gray-700">Email</label>
          <input name="email" type="email" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>
        <div className="sm:col-span-1">
          <label className="text-sm text-gray-700">Phone</label>
          <input name="phone" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>
        <div className="sm:col-span-1">
          <label className="text-sm text-gray-700">Training type</label>
          <input name="training_type" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>
        <div className="sm:col-span-1">
          <label className="text-sm text-gray-700">Preferred dates</label>
          <input name="preferred_dates" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm text-gray-700">Message</label>
          <textarea name="message" rows="4" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>
        <div className="sm:col-span-2 flex items-center justify-between">
          <button disabled={loading} className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-60">{loading ? 'Sending...' : 'Submit Request'}</button>
          {status && <div className="text-sm text-gray-600">{status}</div>}
        </div>
      </form>
    </div>
  )
}
