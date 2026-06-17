"use client";

import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
   <button onClick={(e) => {
     e.preventDefault();
    e.stopPropagation(); // Stops Next.js Link from triggering
    setLiked(!liked);
  }}>
    {liked ? "❤️ Liked" : "🤍 Like"}
  </button>
);
}