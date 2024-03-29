import { useCookies } from "react-cookie";
const _ = require("lodash");
const { themesConfig, defaultTheme } = require("../config/constants");

function NotFound() {
  let theme = defaultTheme;
  const [cookies, setCookie] = useCookies([theme]);
  if (cookies.theme && _.includes(Object.keys(themesConfig), cookies.theme)) {
    theme = cookies.theme;
  }

  const { backGroundNotFound, backgroundColor, textColor } =
    themesConfig[theme];

  const style = {
    outerDiv: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
      backgroundColor: backgroundColor,
    },
    homeDiv: {
      minHeight: "100vh",
      minWidth: "100vw",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    paragraphDiv: {
      fontSize: "5rem",
      textAlign: "center",
      marginTop: "20%",
      color: textColor,
    },
  };

  return (
    <div className="NotFound" id="notFound">
      <div className="outerDiv" style={style.outerDiv}>
        <div style={style.homeDiv}>
          <div style={style.paragraphDiv}>
            <p style={style.paragraphTitleDiv}>404 Page Not Found</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
