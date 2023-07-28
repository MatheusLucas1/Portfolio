import Image from 'next/image'
const ProjectImageSet = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {images.map((image, index) => (
                    <Image
                    key={index} 
                    src={Image} 
                    alt={image} 
                    width={800} 
                    height={500} 
                    className="rounded-md" // Optional: Add a class to style the image, such as rounded corners.
                  />
      ))}
    </div>
  );
};
export default ProjectImageSet;