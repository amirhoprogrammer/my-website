"use client";

import { useEffect, useRef, useState } from "react";

/**
 * FrontEndMindMap
 * یه دیاگرام hub-and-spoke (یه نود مرکزی با چند شاخه) با انیمیشن ورود.
 * وقتی کامپوننت وارد دید کاربر بشه (با IntersectionObserver)، خط‌ها به صورت
 * "کشیده‌شدن" (SVG stroke-dashoffset) و نودها با fade+scale ظاهر می‌شن.
 *
 * استفاده در Next.js (App Router):
 *   1. این فایل رو در components/FrontEndMindMap.tsx بذارید.
 *   2. در صفحه‌تون: import FrontEndMindMap from "@/components/FrontEndMindMap";
 *   3. <FrontEndMindMap /> رو جایی که می‌خواید رندر کنید.
 *
 * وابستگی خارجی نداره (فقط React + CSS ساده)، پس نیازی به نصب پکیج اضافه نیست.
 */

type Node = {
  id: string;
  label: string;
  // موقعیت نسبت به مرکز (درصد از عرض/ارتفاع کانتینر)
  x: number; // 0 = چپ, 100 = راست
  y: number; // 0 = بالا, 100 = پایین
};

const CENTER: Node = { id: "center", label: "front end", x: 100, y: 50 };

const BRANCHES: Node[] = [
  { id: "responsive", label: "responsive", x: 100, y: 10 },
  { id: "css", label: "css", x: 60, y: 50 },
  { id: "html", label: "html", x: 140, y: 50 },
  { id: "react", label: "react", x: 100, y: 90 },
];

export default function FrontEndMindMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mindmap-wrapper"
      style={{
        width: "100%",
        maxWidth: 560,
        aspectRatio: "1.5 / 1",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <svg
        viewBox="0 0 100 66.67"
        width="100%"
        height="100%"
        style={{ overflow: "visible" }}
      >
        {BRANCHES.map((node, i) => (
          <line
            key={node.id}
            x1={CENTER.x}
            y1={CENTER.y * 0.6667}
            x2={node.x}
            y2={node.y * 0.6667}
            stroke="#333"
            strokeWidth={0.4}
            className={visible ? "mm-line mm-line-in" : "mm-line"}
            style={{ transitionDelay: `${i * 120}ms` }}
          />
        ))}
      </svg>

      {/* نود مرکزی */}
      <div
        className={
          visible ? "mm-node mm-center mm-node-in" : "mm-node mm-center"
        }
        style={{ left: `${CENTER.x}%`, top: `${CENTER.y}%` }}
      >
        {CENTER.label}
      </div>

      {/* نودهای اطراف */}
      {BRANCHES.map((node, i) => (
        <div
          key={node.id}
          className={visible ? "mm-node mm-node-in" : "mm-node"}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transitionDelay: `${150 + i * 120}ms`,
          }}
        >
          {node.label}
        </div>
      ))}

      <style jsx>{`
        .mm-node {
          position: absolute;
          transform: translate(-50%, -50%) scale(0.85);
          background: #e5e5e5;
          padding: 6px 14px;
          border-radius: 6px;
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 14px;
          color: #1a1a1a;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .mm-node-in {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        .mm-center {
          font-weight: 600;
          background: #d9d9d9;
        }
        .mm-line {
          stroke-dasharray: 60;
          stroke-dashoffset: 60;
          transition: stroke-dashoffset 0.6s ease;
        }
        .mm-line-in {
          stroke-dashoffset: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .mm-node,
          .mm-line {
            transition: none !important;
            opacity: 1 !important;
            transform: translate(-50%, -50%) scale(1) !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
