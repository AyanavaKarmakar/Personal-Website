import SimpleImageSlider from "react-simple-image-slider/dist/ImageSlider";

const images = [
  { url: "https://picsum.photos/id/1018/1000/600/" },
  { url: "https://picsum.photos/id/1015/1000/600/" },
  { url: "https://picsum.photos/id/1019/1000/600/" },
];

export const Slider = () => {
  return (
    <>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </>
  );
};
