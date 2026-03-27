import { client } from '@/sanity/lib/client';
import { projectsQuery } from '@/sanity/lib/queries';
import ProjectsClient from './ProjectsClient';

export const revalidate = 3600; // revalidate every hour

export const metadata = {
  title: 'Projects — Studio',
  description: 'Projects that represent the way we design and build.',
};

export default async function ProjectsPage() {
  const projects = await client.fetch(projectsQuery);
  return <ProjectsClient sanityProjects={projects} />;
}
