import SimpleImageSlider from "react-simple-image-slider";
import type { Image } from "../../utils/Images/ImageLinks";
import type { FavImage } from "../../utils/Images/FavImageLinks";

interface Props {
  images: Image[] | FavImage[];
}

export const Slider = (props: Props) => {
  const { images } = props;

  return (
    <div className="flex items-center justify-center ml-3 mr-3 mt-5 mb-3">
      <div className="visible lg:hidden">
        <SimpleImageSlider
          width={345}
          height={275}
          images={images}
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
          images={images}
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
