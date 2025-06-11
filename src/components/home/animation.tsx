"use client";

import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../../public/Animation.json";

export default function Animation() {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <Lottie loop animationData={lottieJson} play style={{ opacity: 0.9 }} />
    </div>
  );
}
