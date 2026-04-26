import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Experience from '@/components/home/Experience'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import Contact from '@/components/home/Contact'

export default function HomePage() {
  return (
    <main className="bg-bg">
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Contact />
    </main>
  )
}
