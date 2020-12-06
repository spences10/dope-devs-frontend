import { BsLaptop as icon } from "react-icons/bs";

export default {
  name: "technology",
  title: "Technologies",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Technology Name",
      type: "string",
      description: "Name of the tech",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 200 },
      validation: (Rule) => Rule.required(),
      description: "Slugify that yo!",
    },
    {
      name: "image",
      title: "Technology image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
