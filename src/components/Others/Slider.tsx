import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://picsum.photos/id/1018/1000/600/" },
  { url: "https://picsum.photos/id/1015/1000/600/" },
  { url: "https://picsum.photos/id/1019/1000/600/" },
];

export const Slider = () => {
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
          autoPlayDelay={3.0}
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
