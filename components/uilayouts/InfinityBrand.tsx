import { Stacks } from "@/data/Stack";

export default function InfinityBrand() {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)] bg-aboutme py-5">
      {/* ردیف اول */}
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
        {Stacks.map((stack, i) => (
          <li key={i}>
            <img
              src={stack.icon}
              alt={stack.name}
              className="max-w-none h-10 w-10 object-contain"
            />
          </li>
        ))}
      </ul>

      {/* ردیف دوم (کپی برای بی‌نهایت شدن) */}
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
        aria-hidden="true"
      >
        {Stacks.map((stack, i) => (
          <li key={i}>
            <img
              src={stack.icon}
              alt={stack.name}
              className="max-w-none h-10 w-10 object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
