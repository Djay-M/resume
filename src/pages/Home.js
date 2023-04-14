const ConfigConstants = require("../config/constants");

const { backgroundImage, backgroundColor } =
  ConfigConstants.themesConfig["dark"];

const style = {
  backgroundColor: backgroundColor,
  backgroundImage: `url(${backgroundImage})`,
  minHeight: "100vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function Home() {
  return <div className="Home" style={style}></div>;
}

export default Home;
