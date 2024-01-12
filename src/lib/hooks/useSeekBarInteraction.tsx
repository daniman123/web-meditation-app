import { useCallback, useState } from "react";

/**
 * Custom hook for handling seek bar interaction in an audio player.
 *
 * @param handleSeek - Callback function to handle seek actions.
 * @param initialAngle - Initial angle for the seek bar.
 */
const useSeekBarInteraction = (
  handleSeek: (_angle: number) => void,
  initialAngle: number = 0
) => {
  const [angle, setAngle] = useState(initialAngle);

  // Optimized function to calculate the angle based on mouse position
  const calculateAngle = useCallback(
    (clientX: number, clientY: number, bounds: DOMRect) => {
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const x = clientX - centerX;
      const y = clientY - centerY;

      let angle = Math.atan2(y, x) * (180 / Math.PI);
      angle = angle < 0 ? 360 + angle : angle;
      return (((angle + 90) % 360) / 360) * 100;
    },
    []
  );

  // Handles mouse events for the seek bar
  const handleMouseEvent = useCallback(
    (event: React.MouseEvent<SVGCircleElement, MouseEvent>) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      const newAngle = calculateAngle(event.clientX, event.clientY, bounds);
      setAngle(newAngle);
      handleSeek(newAngle);
    },
    [calculateAngle, handleSeek]
  );

  return { angle, setAngle, handleMouseEvent };
};

export default useSeekBarInteraction;
