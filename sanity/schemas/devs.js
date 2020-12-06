import { BsPersonLinesFill as icon } from "react-icons/bs";

export default {
  name: "dev",
  title: "Developer",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Developer Name",
      type: "string",
      description: "Name of the developer",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 200 },
      validation: (Rule) => Rule.required(),
      description: "Slugify that dev yo!",
    },
    {
      name: "image",
      title: "Developer image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "devHomepageUrl",
      title: "Dev homepage URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
      description: "Add the full URL including https or http",
    },
    {
      name: "description",
      title: "Description",
      type: "markdown",
      description: "Tell us about this dev",
    },
  ],
};
