import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Step1Mobile from "../assets/step1-mobile.webp";
import Step2Mobile from "../assets/step2-mobile.webp";
import Step3Mobile from "../assets/step3-mobile.webp";
import Step4Mobile from "../assets/step4-mobile.webp";
import Step5Mobile from "../assets/step5-mobile.webp";
import Step1Desktop from "../assets/step1-desktop.webp";
import Step2Desktop from "../assets/step2-desktop.webp";
import Step3Desktop from "../assets/step3-desktop.webp";
import Step4Desktop from "../assets/step4-desktop.webp";
import Step5Desktop from "../assets/step5-desktop.webp";

const mobileSteps = [
  {
    id: 1,
    title: "Step 1",
    description: "Open the latest version of Spotify on your phone.",
    image: Step1Mobile,
  },
  {
    id: 2,
    title: "Step 2",
    description: "Start playing something on Spotify.",
    image: Step2Mobile,
  },
  {
    id: 3,
    title: "Step 3",
    description:
      "Tap the Icon like in the picture, and a menu of device options will appear.",
    image: Step3Mobile,
  },
  {
    id: 4,
    title: "Step 4",
    description: "Select the device you'd like to listen from.",
    image: Step4Mobile,
  },
  {
    id: 5,
    title: "Step 5",
    description: "Enjoy your music on the connected device!",
    image: Step5Mobile,
  },
];

const desktopSteps = [
  {
    id: 1,
    title: "Step 1",
    description: "Open the latest version of Spotify on your computer.",
    image: Step1Desktop,
  },
  {
    id: 2,
    title: "Step 2",
    description: "Start playing something on Spotify.",
    image: Step2Desktop,
  },
  {
    id: 3,
    title: "Step 3",
    description:
      "Tap the speaker icon like in the picture, and a small menu will appear.",
    image: Step3Desktop,
  },
  {
    id: 4,
    title: "Step 4",
    description: "Select the device you'd like to listen from.",
    image: Step4Desktop,
  },
  {
    id: 5,
    title: "Step 5",
    description: "Enjoy your music on the connected device!",
    image: Step5Desktop,
  },
];

function ConnectCarousel() {
  const [currentMobileStep, setCurrentMobileStep] = useState(0);
  const [currentDesktopStep, setCurrentDesktopStep] = useState(0);
  const [deviceType, setDeviceType] = useState("mobile");
  const [isAnimating, setIsAnimating] = useState(false);

  const currentStep =
    deviceType === "mobile" ? currentMobileStep : currentDesktopStep;
  const steps = deviceType === "mobile" ? mobileSteps : desktopSteps;

  const goToNextStep = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    if (deviceType === "mobile") {
      setCurrentMobileStep((prev) =>
        prev === mobileSteps.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentDesktopStep((prev) =>
        prev === desktopSteps.length - 1 ? 0 : prev + 1
      );
    }

    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToPrevStep = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    if (deviceType === "mobile") {
      setCurrentMobileStep((prev) =>
        prev === 0 ? mobileSteps.length - 1 : prev - 1
      );
    } else {
      setCurrentDesktopStep((prev) =>
        prev === 0 ? desktopSteps.length - 1 : prev - 1
      );
    }

    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToStep = (index) => {
    if (isAnimating) return;

    setIsAnimating(true);
    if (deviceType === "mobile") {
      setCurrentMobileStep(index);
    } else {
      setCurrentDesktopStep(index);
    }

    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleDeviceToggle = () => {
    setDeviceType((prev) => (prev === "mobile" ? "desktop" : "mobile"));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-SpotifyMix">
            How to Connect
          </h2>
          <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed">
            Need a help? We've got you.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-12 mt-10">
        <span
          className={`text-lg font-medium ${
            deviceType === "mobile" ? "text-black" : "text-zinc-400"
          }`}
        >
          Mobile
        </span>
        <button
          onClick={handleDeviceToggle}
          className="w-12 h-6 bg-black rounded-full relative"
          aria-label="Toggle device type"
        >
          <span
            className={`absolute top-1 left-1 w-4 h-4 bg-green-500 rounded-full transition-transform ${
              deviceType === "desktop" ? "translate-x-6" : ""
            }`}
          />
        </button>
        <span
          className={`text-lg font-medium ${
            deviceType === "desktop" ? "text-black" : "text-zinc-400"
          }`}
        >
          Desktop
        </span>
      </div>

      <div className="relative w-full max-w-5xl">
        <div className="flex items-center justify-between">
          <button
            onClick={goToPrevStep}
            className="absolute left-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50"
            aria-label="Previous step"
            disabled={isAnimating}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="flex flex-col sm:flex-row w-full items-center justify-between sm:px-16 px-4 text-center sm:text-left">
            <div className="flex-1 flex justify-center">
              <div
                className={`transition-all duration-300 ease-in-out transform ${
                  isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                <img
                  src={steps[currentStep].image}
                  alt={`Step ${steps[currentStep].id}`}
                  width={deviceType === "mobile" ? 400 : 400}
                  height={deviceType === "mobile" ? 400 : 400}
                  className="object-contain mx-auto"
                />
              </div>
            </div>

            <div className="flex-1 sm:pl-8 mt-6 sm:mt-0">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4 font-SpotifyMix">
                {steps[currentStep].title}
              </h2>
              <p className="text-base sm:text-xl">
                {steps[currentStep].description}
              </p>
            </div>
          </div>

          <button
            onClick={goToNextStep}
            className="absolute right-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50"
            aria-label="Next step"
            disabled={isAnimating}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => goToStep(index)}
              className={`h-2 rounded-full transition-all ${
                currentStep === index
                  ? "w-8 bg-black"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to step ${step.id}`}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ConnectCarousel;
