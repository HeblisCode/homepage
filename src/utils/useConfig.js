import { useEffect, useState } from "react/cjs/react.development";

export default function useConfig() {
  const EMPTY_TITLE = {
    title: {
      isActive: true,
      string: "Test Title",
    },
    links: [],
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

// class ConfigManager {
//   configJSON = {};
//   MAX_ID_SIZE = 1000000000;
//   GET_FAVICON_URL = "https://www.google.com/s2/favicons?domain="; //concatenate domain name to get the favicon url

//   constructor() {
//     const savedConfigJSON = localStorage.getItem("homePageConfigJSON");
//     if (savedConfigJSON) {
//       this.configJSON = JSON.parse(savedConfigJSON);
//     } else {
//       this.configJSON = {
//         title: "",
//         links: [],
//       };
//     }
//   }

//   getConfig() {
//     return this.configJSON;
//   }

//   getDomainFromURL(url) {
//     const temp = url.split(".").reverse();
//     return temp[1] + "." + temp[0];
//   }

//   deleteLinkById(id) {
//     const filteredLinks = this.configJSON.links.filter(
//       (link) => link.id !== id
//     );
//     this.configJSON.links = filteredLinks;
//   }

//   addLink(name, url) {
//     const id = Math.floor(Math.random() * this.MAX_ID_SIZE);
//     if (
//       this.configJSON.links &&
//       this.configJSON.links.some((link) => link.id === id)
//     ) {
//       this.addLink(name, url);
//     } else {
//       const domain = this.getDomainFromURL(url);
//       const icon = this.GET_FAVICON_URL + domain;
//       const newLink = {
//         id: id,
//         name: name,
//         url: url,
//         icon: icon,
//       };

//       this.configJSON.links.push(newLink);
//     }
//   }

//   updateLink(id, name, url) {
//     const updateIndex = this.configJSON.links.findIndex((el) => el.id === id);
//     let linkToUpdate = this.configJSON.links[updateIndex];

//     if (name) {
//       linkToUpdate = {
//         ...linkToUpdate,
//         name: name,
//       };
//     }

//     if (url) {
//       linkToUpdate = {
//         ...linkToUpdate,
//         url: url,
//       };
//     }

//     this.configJSON.links[updateIndex] = linkToUpdate;
//   }

//   updateTitle(title) {
//     this.configJSON.title = title;
//   }
// }
