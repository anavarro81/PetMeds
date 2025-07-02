import { IoMdClose } from "react-icons/io";


const ImageFull = ({image, setshowImageModal}) => {
  return (
    
    
    <div id="image-viewer" className='h-screen fixed top-0 left-0 w-full flex justify-center items-center bg-black/80'>
        <IoMdClose 
          className="text-white absolute top-[20px] right-[35px] text-4xl font-bold cursor-pointer"
          onClick={() => setshowImageModal(false)}
        /> 


        <div className="flex justify-center items-center"> 
          <img src={image} className="max-w-[80%] max-h-[80%] md:max-w-[50%]" alt="Medicamento Previcox" />
        </div>
        
    </div>
  )
}

export default ImageFull


