import React, { useCallback } from "react";

interface ICircleControlProps {
  radius: number;
  angle: number;
  onChange: (_newAngle: number) => void;
}

const CircleControl: React.FC<ICircleControlProps> = ({ radius, angle, onChange }) => {
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (angle / 100) * circumference;

  const calculateAngle = (event: React.MouseEvent<SVGCircleElement, MouseEvent>): number => {
    const circle = event.currentTarget;
    const bounds = circle.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    let newAngle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    newAngle = newAngle < 0 ? 360 + newAngle : newAngle;
    return ((newAngle + 90) / 360) * 100;
  };

  const handleMouseEvent = useCallback(
    (event: React.MouseEvent<SVGCircleElement, MouseEvent>) => {
        console.log(event);
        
      if (event.buttons === 1 || event.type === 'mousedown') {
        const newAngle = calculateAngle(event);
        console.log("🚀 ~ newAngle:", newAngle)
        onChange(newAngle);
      }
    },
    [onChange]
  );

  return (
    <svg width="300" height="300" viewBox="0 0 300 300">
      <circle
        cx="150"
        cy="150"
        r={radius}
        fill="none"
        stroke="#eee"
        strokeWidth="30"
      />
      <circle
        cx="150"
        cy="150"
        r={radius}
        fill="none"
        stroke="tomato"
        strokeWidth="30"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-90 150 150)"
        onMouseDown={handleMouseEvent}
        onMouseMove={handleMouseEvent}
      />
    </svg>
  );
};

export default CircleControl;
