"use client";
import { useEffect, useRef, useState } from "react";
import "../app/globals.css";
type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
};

const CENTER: Node = { id: "center", label: "front end", x: 50, y: 50 };

const BRANCHES: Node[] = [
  { id: "responsive", label: "responsive", x: 30, y: 10 },
  { id: "css", label: "css", x: 10, y: 70 },
  { id: "html", label: "html", x: 90, y: 70 },
  { id: "react", label: "react", x: 30, y: 90 },
  { id: "tailwindcss", label: "tailwindcss", x: 10, y: 30 },
  { id: "bootstrap", label: "bootstrap", x: 90, y: 30 },
  { id: "shadcnUI", label: "shadcnUI", x: 70, y: 90 },
  { id: "other framework", label: "other framework", x: 70, y: 10 },
];
const Center: Node = { id: "center", label: "full stack", x: 50, y: 50 };
const Branch: Node[] = [
  { id: "nextjs", label: "nextjs", x: 50, y: 10 },
  { id: "typescript", label: "typescript", x: 80, y: 50 },
  { id: "javascript", label: "javascript", x: 20, y: 50 },
  { id: "asp.net", label: "asp.net", x: 50, y: 90 },
];

const Centers: Node = { id: "center", label: "other", x: 50, y: 50 };
const Branches: Node[] = [
  { id: "nodejs", label: "nodejs", x: 50, y: 10 },
  { id: "api", label: "postman & axios & restapi", x: 80, y: 50 },
  { id: "git", label: "git & Docker & github", x: 20, y: 50 },
  { id: "php", label: "Wordpress & php", x: 50, y: 90 },
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
    <div className="flex frontEndMap my-5">
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

        <div
          className={
            visible ? "mm-node mm-center mm-node-in" : "mm-node mm-center"
          }
          style={{ left: `${CENTER.x}%`, top: `${CENTER.y}%` }}
        >
          {CENTER.label}
        </div>

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
          {Branch.map((node, i) => (
            <line
              key={node.id}
              x1={Center.x}
              y1={Center.y * 0.6667}
              x2={node.x}
              y2={node.y * 0.6667}
              stroke="#333"
              strokeWidth={0.4}
              className={visible ? "mm-line1 mm-line-in" : "mm-line1"}
              style={{ transitionDelay: `${i * 120}ms` }}
            />
          ))}
        </svg>

        <div
          className={
            visible ? "mm-node1 mm-center mm-node-in" : "mm-node1 mm-center"
          }
          style={{ left: `${Center.x}%`, top: `${Center.y}%` }}
        >
          {Center.label}
        </div>

        {Branch.map((node, i) => (
          <div
            key={node.id}
            className={visible ? "mm-node1 mm-node-in" : "mm-node1"}
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
          .mm-node1 {
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
            transition: opacity 1s ease, transform 1s ease;
          }
          .mm-node-in {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          .mm-center {
            font-weight: 600;
            background: #d9d9d9;
          }
          .mm-line1 {
            stroke-dasharray: 60;
            stroke-dashoffset: 60;
            transition: stroke-dashoffset 1.1s ease;
          }
          .mm-line-in {
            stroke-dashoffset: 0;
          }
          @media (prefers-reduced-motion: reduce) {
            .mm-node1,
            .mm-line1 {
              transition: none !important;
              opacity: 1 !important;
              transform: translate(-50%, -50%) scale(1) !important;
              stroke-dashoffset: 0 !important;
            }
          }
        `}</style>
      </div>
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
          {Branches.map((node, i) => (
            <line
              key={node.id}
              x1={Centers.x}
              y1={Centers.y * 0.6667}
              x2={node.x}
              y2={node.y * 0.6667}
              stroke="#333"
              strokeWidth={0.4}
              className={visible ? "mm-line2 mm-line-in" : "mm-line2"}
              style={{ transitionDelay: `${i * 120}ms` }}
            />
          ))}
        </svg>

        <div
          className={
            visible ? "mm-node2 mm-center mm-node-in" : "mm-node2 mm-center"
          }
          style={{ left: `${Centers.x}%`, top: `${Centers.y}%` }}
        >
          {Centers.label}
        </div>

        {/* نودهای اطراف */}
        {Branches.map((node, i) => (
          <div
            key={node.id}
            className={visible ? "mm-node2 mm-node-in" : "mm-node2"}
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
          .mm-node2 {
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
            transition: opacity 1.5s ease, transform 1.5s ease;
          }
          .mm-node-in {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          .mm-center {
            font-weight: 600;
            background: #d9d9d9;
          }
          .mm-line2 {
            stroke-dasharray: 60;
            stroke-dashoffset: 60;
            transition: stroke-dashoffset 1.6s ease;
          }
          .mm-line-in {
            stroke-dashoffset: 0;
          }
          @media (prefers-reduced-motion: reduce) {
            .mm-node2,
            .mm-line2 {
              transition: none !important;
              opacity: 1 !important;
              transform: translate(-50%, -50%) scale(1) !important;
              stroke-dashoffset: 0 !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
