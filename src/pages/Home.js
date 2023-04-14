import { useCookies } from "react-cookie";
const _ = require("lodash");
const { themesConfig, defaultTheme } = require("../config/constants");

function Home() {
  let theme = defaultTheme;
  const [cookies, setCookie] = useCookies([theme]);
  if (cookies.theme && _.includes(Object.keys(themesConfig), cookies.theme)) {
    theme = cookies.theme;
  }

  const { backgroundImage, backgroundColor } = themesConfig[theme];

  const style = {
    backgroundColor: backgroundColor,
    backgroundImage: `url(${backgroundImage})`,
    minHeight: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return <div className="Home" style={style}></div>;
}

export default Home;
