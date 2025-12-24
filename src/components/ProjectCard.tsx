
interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  link?: string;
}

export function ProjectCard({ title, role, description, link }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{title}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Visit &rarr;
          </a>
        )}
      </div>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        {role}
      </p>
      <p className="text-zinc-600 dark:text-zinc-300">{description}</p>
    </div>
  );
}
