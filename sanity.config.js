import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./app/(admin)/studio/[[...index]]/theme";
import { Navbar } from "./app/(admin)/studio/components/Navbar";
import { Logo } from "./app/(admin)/studio/components/Logo";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: "/studio",
  name: "Tech_Blog",
  title: "Tech Blog",

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      navbar: Navbar,
      logo: Logo,
    },
  },

  theme: myTheme,
});
