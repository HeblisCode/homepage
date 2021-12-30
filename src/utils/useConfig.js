import { useEffect, useState } from "react/cjs/react.development";

export default function useConfig() {
  const EMPTY_TITLE = {
    isActive: true,
    string: "Test Title",
  };
  const savedConfig = JSON.parse(localStorage.getItem("homePageConfigJSON"));
  const [title, setTitle] = useState(savedConfig?.title || EMPTY_TITLE);
  const [links, setLinks] = useState(savedConfig?.links || []);
  const MAX_ID_SIZE = 1000000000;
  const GET_FAVICON_URL = "https://www.google.com/s2/favicons?domain="; //concatenate domain name to get the favicon url

  useEffect(() => {
    localStorage.setItem(
      "homePageConfigJSON",
      JSON.stringify({ title, links })
    );
  }, [title, links]);

  const getDomainFromURL = (url) => {
    const temp = url.split(".").reverse();
    return temp[1] + "." + temp[0];
  };

  const deleteLink = (id) => {
    const filteredLinks = links.filter((link) => link.id !== id);
    setLinks(filteredLinks);
  };

  const addLink = (name, url) => {
    const id = Math.floor(Math.random() * MAX_ID_SIZE);
    if (links && links.some((link) => link.id === id)) {
      this.addLink(name, url);
    } else {
      const domain = getDomainFromURL(url);
      const icon = GET_FAVICON_URL + domain;
      const newLink = {
        id: id,
        name: name,
        url: url,
        icon: icon,
      };

      setLinks([...links, newLink]);
    }
  };

  const updateLink = (id, name, url) => {
    let linkToUpdate = links.find((el) => el.id === id);

    if (name) {
      linkToUpdate = {
        ...linkToUpdate,
        name: name,
      };
    }

    if (url) {
      linkToUpdate = {
        ...linkToUpdate,
        url: url,
        icon: GET_FAVICON_URL + getDomainFromURL(url),
      };
    }

    const updatedLinks = links.map((link) => {
      return link.id === id ? linkToUpdate : link;
    });
    setLinks(updatedLinks);
  };

  const updateTitle = (string) => {
    setTitle({ ...title, string: string });
  };

  return [
    { title, updateTitle },
    { links, addLink, updateLink, deleteLink },
  ];
}
