import { renderHook, act } from '@testing-library/react';
import useAudioPlayer from './useAudioPlayer';
import { logMeditation } from "../services/database/dataBaseManager";

jest.mock("../services/database/dataBaseManager", () => ({
  logMeditation: jest.fn(),
}));

describe('useAudioPlayer hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should log the correct duration when audio ends', () => {
    const mockAudio = {
      addEventListener: jest.fn((event, callback) => {
        if (event === 'ended') {
          callback();
        }
      }),
      removeEventListener: jest.fn(),
      play: jest.fn(),
      pause: jest.fn(),
      duration: 300, // Mock duration in seconds
    };
    window.Audio = jest.fn().mockImplementation(() => mockAudio);

    const { result } = renderHook(() => useAudioPlayer());

    act(() => {
      result.current.setSrc('mock-src');
    });

    expect(logMeditation).toHaveBeenCalledWith(300); // Check if correct duration is logged
  });
});
