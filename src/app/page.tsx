import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen">
      <main className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section className="py-20 border-t border-zinc-200 dark:border-zinc-800">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
                I am a dedicated Project Manager with a robust background in steering digital transformation projects for state enterprises.
                My expertise lies in optimizing asset management and operational workflows through modern digital solutions.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-300">
                Currently based in Chiang Mai, I co-founded ZWAPMONEY and lead initiatives at Lucas Strategy, helping organizations navigate the complexities of the digital age.
              </p>
            </div>
            <div className="rounded-2xl bg-zinc-100 dark:bg-zinc-900 p-8">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Core Competencies</h3>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>Digital Transformation Strategy</li>
                <li>Project Management (Agile/Waterfall)</li>
                <li>State Enterprise Solutions</li>
                <li>Product Development</li>
                <li>Fintech Innovation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 border-t border-zinc-200 dark:border-zinc-800">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-12">Featured Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="State Railway of Thailand (SRTA)"
              role="Digital Asset Management"
              description="Led digital transformation initiatives to optimize asset management and operational efficiency for the national railway authority."
              link="https://www.railway.co.th"
            />
            <ProjectCard
              title="Miss Grand App"
              role="Product Manager"
              description="Managed the development and launch of a comprehensive integrated livestreaming application, enhancing direct fan engagement."
            />
            <ProjectCard
              title="ZWAPMONEY"
              role="Co-Founder"
              description="Driving innovation in the fintech sector, focusing on accessible financial solutions and digital lending platforms."
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <p className="text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Lucas Strategy. All rights reserved.
          </p>
          <p className="text-sm text-zinc-400 dark:text-zinc-600 mt-2">
            Designed by Antigravity
          </p>
        </footer>

      </main>
    </div>
  );
}
