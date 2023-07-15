import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#D808D2",
      secondary: "#034D98",
      
      title: "#02274C",
      description: "#034D98",

    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: [
          "Inter var, sans-serif",
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32',
          },
        ],
      },
    },
  },
  plugins: [],
});
