import { title } from "../../../nextjs-material-kit";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "left"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#3c4858"
  },
  descriptionBold: {
    color: "#3c4858",
    fontWeight: "700"
  },
  iban: {
    fontWeight: "700",
    fontSize: "1.125rem",
    color: "#3c4858"
  }
};

export default productStyle;
