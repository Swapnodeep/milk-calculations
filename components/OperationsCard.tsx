"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type CardDetails = {
  title: string;
  imageUrl: string;
  width: number;
  height: number;
  path: string;
};

export default function OperationsCard({
  title,
  imageUrl,
  width,
  height,
  path,
}: CardDetails): JSX.Element {
  const router = useRouter();
  return (
    <div
      className="backdrop-blur-lg flex flex-col justify-between rounded-md w-96 h-80 font-primary space-y-5 p-4 bg-[#f5f6f8]/80 border-[3px] border-secondary/20 shadow-lg duration-300 cursor-pointer hover:scale-[0.97]"
      onClick={() => router.push(path)}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={width}
        height={height}
        className="rounded-[3px] border-[1px] border-slate-300"
      />
      <p className="text-lg font-semibold text-center">{title}</p>
    </div>
  );
}
