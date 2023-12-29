import { useCookies } from "react-cookie";
import UnderLine from "../components/UnderLine";
const _ = require("lodash");
const {
  themesConfig,
  defaultTheme,
  paragrap,
  underLineColor,
} = require("../config/constants");

function Home() {
  let theme = defaultTheme;

  //eslint-disable-next-line
  const [cookies, setCookie] = useCookies([theme]);
  if (cookies.theme && _.includes(Object.keys(themesConfig), cookies.theme)) {
    theme = cookies.theme;
  }

  const { textColor } = themesConfig[theme];

  const style = {
    paragraphDiv: {
      color: textColor,
    },
    paragraphTitleDiv: {
      fontSize: "3rem",
      textTransform: "uppercase",
      letterSpacing: "3px",
      fontWeight: "800",
    },
    paragraphBodyDiv: {
      fontSize: "1rem",
      padding: "2px",
      whiteSpace: "pre-line",
    },
  };

  return (
    <div className="w-full h-screen bg-[#282c34]" id="home">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div style={style.paragraphDiv}>
          <p style={style.paragraphTitleDiv}>{paragrap.home.title}</p>
          <p className="text-4xl text-[#8892b0]">{paragrap.home.jobTitle}</p>
          <span style={style.paragraphBodyDiv}>{paragrap.home.body}</span>
        </div>
      </div>
      <UnderLine color={underLineColor} width={"100%"} />
    </div>
  );
}

export default Home;
