import TrendingRecipies from "./TrendingRecipies";
import heroImage from "./images/hero-image.jpg";

function Body() {
  return (
    <div className="projectBody">
      <div className="projectBody__loginCta">
        <div>
          <div>
            <p className="projectBody__loginCta--title">
              Your Daily Dish A Food Journey
            </p>
            <p className="projectBody__loginCta--description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
          <div className="projectBody__loginCta--cta">
            <button className="btn button-default">Log in</button>
            <button className="btn button-highlight">Sign up</button>
          </div>
        </div>
        <div className="projectBody__loginCta--image"></div>
      </div>

      <div className="projectBody__create">
        <div className="projectBody__create--image">
          <img src={heroImage} alt="" />
        </div>
        <div className="projectBody__create--button">
          <p>Share Your Recipes</p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis
          </p>
          <button>Create New Recipe</button>
        </div>
      </div>
      <TrendingRecipies />
    </div>
  );
}

export default Body;
