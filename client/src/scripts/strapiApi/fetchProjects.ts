import { getSecret } from "astro:env/server";

const baseUrl = getSecret("STRAPI_BASE_URL");

export default async function fetchProjects() {
  const res = await fetch(`${baseUrl}/api/projects?populate=coverImage`);
  const fetchedProjects = await res.json();

  const projects: Array<Project> = [];

  for (const data of fetchedProjects.data) {
    const project: Project = {
      title: data.title,
      slug: data.slug,
      description: data.description,
      liveDemoLink: data.liveDemoLink,
      content: data.content,
      showOnHomepage: data.showOnHomepage,
      coverImageLink: `${baseUrl}${data.coverImage.url}`,
    };

    projects.push(project);
  }

  return projects;
}
