import { ResumeDetails } from "@/utils/types";
export default function ResumeCard({ items }: { items: ResumeDetails }) {
  const Duration = (start: number, end: number) => {
    const record = `${start}-${end}`;
    return record;
  };
  return (
    <div className=" py-1 px-0 ">
      <div className="flex items-center justify-between mx-0 px-2">
        <div className="flex items-center justify-between">
          <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold">
            {items.title}
          </h3>
        </div>
        <div className="bg-resume-4 px-1 py-1 rounded-md">
          {Duration(items.start, items.end)}
        </div>
      </div>
      <div className="px-2">
        <h4 className="text-[16px] md:text-[20px]">{items.title2}</h4>
      </div>
      <div className="px-2">
        <h4 className="text-[12px] md:text-[14px]">{items.description}</h4>
      </div>
      
    </div>
  );
}
