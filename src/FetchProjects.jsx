import { createClient } from "contentful";
import { useState, useEffect } from "react";
import { projects } from "./data";

export const client = createClient({
  space: "i8pfln62aqt1",
  environment: "master",
  accessToken: "XlsyiWDzUoOvTJxlpFQeMRC0U2YqxUGRq0qju_d_oc0",
});

// const data = client
//   .getEntries({ content_type: "projects" })
//   .then((response) => {
//     const projects = response.items.map((item) => {
//       const { image, title, url } = item.fields;
//       const img = image?.fields?.file?.url;
//       const id = item.sys.id;

//       return { id, title, url, img };
//     });
//     console.log(projects);
//   });

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { image, title, url } = item.fields;
        const img = image.fields.file.url;
        const id = item.sys.id;
        return { id, title, url, img };
      });
      setProjects(projects);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { isLoading, projects };
};
