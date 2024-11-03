interface WorkshopCardProps {
    image: string;
    title: string;
    description: string;
    duration: string;
    materials: string;
    price: string;
  }
  
  export default function WorkshopCard({ title, image, description, duration, materials, price }: WorkshopCardProps) {
    return (
      <div className="bg-white shadow-md flex flex-col h-full">
        <img src={image} alt={title} className="mt-4 w-full h-64 object-cover" />
        <div className="p-6 flex flex-col flex-grow justify-between">
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-2 text-gray-600">{description}</p>
            <p className="mt-2 text-gray-600"><span className="font-bold">Duration:</span> {duration}</p>
            <p className="mt-2 text-gray-600"><span className="font-bold">Materials Provided:</span> {materials}</p>
            <p className="mt-2 text-gray-600"><span className="font-bold">Price:</span> {price}</p>
          </div>
          <button className="mt-4 px-6 py-2 bg-[#42563b] text-white rounded hover:bg-[#5a7853] transition">
            Learn More
          </button> 
          </div>
      </div>
    );
  }