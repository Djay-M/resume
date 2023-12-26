import { useCookies } from "react-cookie";
const _ = require("lodash");
const { themesConfig, defaultTheme, paragrap } = require("../config/constants");

function Home() {
  let theme = defaultTheme;

  //eslint-disable-next-line
  const [cookies, setCookie] = useCookies([theme]);
  if (cookies.theme && _.includes(Object.keys(themesConfig), cookies.theme)) {
    theme = cookies.theme;
  }

  const { backgroundImage, backgroundColor, textColor } = themesConfig[theme];

  const style = {
    outerDiv: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: backgroundColor,
    },
    homeDiv: {
      backgroundImage: `url(${backgroundImage})`,
      height: "95vh",
      width: "100vw",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    paragraphDiv: {
      textAlign: "center",
      marginTop: "20%",
      color: textColor,
    },
    paragraphTitleDiv: {
      fontSize: "3rem",
      textTransform: "uppercase",
      letterSpacing: "3px",
      textAlign: "center",
      fontWeight: "800",
    },
    paragraphBodyDiv: {
      fontSize: "20px",
      textAlign: "center",
      padding: "2px",
      whiteSpace: "pre-line",
    },
  };

  return (
    <div className="Home" id="home">
      <div className="outerDiv" style={style.outerDiv}>
        <div className="Home" style={style.homeDiv}>
          <div style={style.paragraphDiv}>
            <p style={style.paragraphTitleDiv}>{paragrap.home.title}</p>
            <span style={style.paragraphBodyDiv}>{paragrap.home.body}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
