import { mount, route } from "navi";

export default mount({
  "/": route({
    title: "Dinah Raphaelle",
    getView: () => import("./LandingPage.js")
  }),

  "/about": route({
    title: "About",
    getView: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));

      return import("./About.js");
    }
  }),

  "/hair": route({
    title: "Hair Styling",
    getView: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));

      return import("./Hair.js");
    }
  })
});
