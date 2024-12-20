import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  sitename: {
    display: "flex",
    justifyContent: "center", // Centers horizontally
    alignItems: "flex-start", // Aligns content at the top
    height: "100vh", // Makes the container fill the full viewport height
    textAlign: "center", // Centers text inside the button
    paddingTop: "20px", // Optional: Adds some space from the top
  },
});

export default useStyles;
