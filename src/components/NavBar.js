import { defaultTheme, themesConfig } from "../config/constants";

function NavBar(props) {
  let theme = props.theme ? props.theme : defaultTheme;
  const textColor = themesConfig[theme].textColor;
  const style = {
    outerDiv: {
      position: "fixed",
      display: "flex",
      minHeight: "5vh",
      minWidth: "100%",
      maxWidht: "100%",
      backgroundColor: themesConfig[theme].backgroundColor,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    leftDiv: {
      minWidth: "20%",
      marginLeft: "10%",
    },
    leftDivButtons: {
      color: textColor,
    },
    midDiv: {
      width: "50%",
    },
    rightDiv: {
      width: "30%",
      marginRight: "5%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    rightDivButtons: {
      color: textColor,
    },
  };

  return (
    <div className="NavBar" style={style.outerDiv}>
      <div className="leftDiv" style={style.leftDiv}>
        <p style={style.leftDivButtons}>Dhananajaya M</p>
      </div>
      <div style={style.midDiv}></div>
      <div className="rightDiv" style={style.rightDiv}>
        <p style={style.rightDivButtons}>Home</p>
        <p style={style.rightDivButtons}>Projects</p>
        <p style={style.rightDivButtons}>About</p>
        <p style={style.rightDivButtons}>Contact</p>
      </div>
    </div>
  );
}

export default NavBar;
