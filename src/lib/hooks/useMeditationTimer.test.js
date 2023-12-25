import { renderHook, waitFor,act } from "@testing-library/react";
import useMeditationTimer from "./useMeditationTimer";

test("should decrement timer", async () => {
  const { result } = renderHook(() => useMeditationTimer());

  await act(async ()=>{
    await result.current.toggleTimer()
  })
  await waitFor(() => expect(result.current.duration).toBe(5));

});

