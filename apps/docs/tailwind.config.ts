import typography from "@tailwindcss/typography";
import { withMaterialColors } from "tailwind-material-colors";

export default withMaterialColors(
  {
    darkMode: "class",
    content: [
      "./stories/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/vdesign/src/**/*.{js,ts,jsx,tsx,mdx}",
      "./componetns/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [typography],
  },
  {
    primary: "#006a6a",
  },
  { extend: true }
);
