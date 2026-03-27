import { client } from '@/sanity/lib/client';
import { homePageQuery, featuredProjectsQuery } from '@/sanity/lib/queries';
import HomeClient from './HomeClient';

export const revalidate = 3600;

export default async function HomePage() {
  const [sanityData, featuredProjects] = await Promise.all([
    client.fetch(homePageQuery).catch(() => null),
    client.fetch(featuredProjectsQuery).catch(() => []),
  ]);

  return <HomeClient sanityData={sanityData} featuredProjects={featuredProjects} />;
}
