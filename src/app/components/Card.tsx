export default function Card() {
  return (
    <div className="relative m-6 w-full sm:w-96">
      
      <div className="absolute inset-0 translate-y-2 bg-purple-300 mt-20 rounded-2xl "></div>

   
      <div className="relative bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl mt-20 shadow-2xl. w-full overflow-visible">
        <div className="flex h-30 relative">
          
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Discover</p>
              <h2 className="text-[1.44rem] sm:text-[1.35rem] font-bold text-black mt-1">
                Best lunch of the day
              </h2>
            </div>
            <div className="mt-2 ml-2 text-black text-xl">&rarr;</div>
          </div>

          <img
            src="/j.png"
            alt="Card Image"
            className="absolute -top-5 -right-8 w-40 h-45 rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
