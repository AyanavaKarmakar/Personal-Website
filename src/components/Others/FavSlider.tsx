import SimpleImageSlider from "react-simple-image-slider";
import { favImages } from "../../utils/Images/FavImageLinks";

export const FavSlider = () => {
  return (
    <div className="flex items-center justify-center ml-3 mr-3 mt-5 mb-3">
      <div className="visible lg:hidden">
        <SimpleImageSlider
          width={345}
          height={275}
          images={favImages}
          showBullets={true}
          showNavs={true}
          navStyle={3}
          navSize={50}
          navMargin={5}
          loop={true}
          autoPlay={true}
          autoPlayDelay={5.0}
        />
      </div>
      <div className="hidden lg:inline">
        <SimpleImageSlider
          width={800}
          height={500}
          images={favImages}
          showBullets={true}
          showNavs={true}
          navStyle={3}
          navSize={50}
          navMargin={5}
          loop={true}
          autoPlay={true}
          autoPlayDelay={3.0}
        />
      </div>
    </div>
  );
};
