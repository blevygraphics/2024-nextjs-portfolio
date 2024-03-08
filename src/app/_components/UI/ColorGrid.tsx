interface ColorGridProps {
  bgColor: string[];
  textColor: string[];
}

export default function ColorGrid({ bgColor, textColor }: ColorGridProps) {

  return (
    <>
      <div className="col-span-10 col-start-2 shadow-2xl ">
        <div className="grid grid-cols-6 grid-rows-6 min-h-screen w-full">
          <div className={`flex items-end p-9 col-span-4 row-span-4 ${textColor[0]} ${bgColor[0]}`}>Primary</div>
          <div className={`flex items-end p-9 col-span-2 row-span-2 col-start-1 row-start-5 ${textColor[1]} ${bgColor[1]}`}>Dark</div>
          <div className={`flex items-end p-9 col-span-2 row-span-2 col-start-3 row-start-5 ${textColor[2]} ${bgColor[2]}`}>Light</div>
          <div className={`flex items-end p-9 col-span-2 row-span-6 col-start-5 row-start-1 ${textColor[3]} ${bgColor[3]}`}>Secondary</div>
        </div>
      </div>
    </>
  );
}