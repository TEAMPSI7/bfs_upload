import React from "react";
import NextImage from "next/image";
import twemoji from "twemoji";
import Image from "next/image";

const U200D = String.fromCharCode(0x200d);
const UFE0Fg = /\uFE0F/g;

function Twemoji({
  emoji,
  ext = "svg",
  width = 24,
  height = 24,
}: {
  emoji: string;
  ext?: "svg" | "png";
  width?: number;
  height?: number;
}) {
  const HEXCodePoint = twemoji.convert.toCodePoint(
    emoji.indexOf(U200D) < 0 ? emoji.replace(UFE0Fg, "") : emoji,
  );

  return (
    <Image
      src={`https://twemoji.maxcdn.com/v/latest/${ext === "png" ? "72x72" : "svg"}/${HEXCodePoint}.${ext}`}
      width={width}
      height={height}
      alt={emoji}
      loading="lazy"
      draggable={false}
    />
  );
}

export default React.memo(Twemoji);
