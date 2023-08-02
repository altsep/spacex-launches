import { fireEvent, renderHook } from '@testing-library/react';
import { useScroll } from './useScroll';

describe('useScroll', () => {
  const callbackMock = jest.fn();
  let isFetchingMock = false;

  afterEach(() => {
    window.scrollY = 0;
    window.innerHeight = 0;
    isFetchingMock = false;
  });

  it('renders', () => {
    renderHook(() => useScroll(callbackMock, isFetchingMock));
  });

  it('returns expected default result', () => {
    const { result } = renderHook(() => useScroll(callbackMock, isFetchingMock));
    expect(result.current).toBe(false);
    expect(callbackMock).not.toHaveBeenCalled();
  });

  it('runs callback on specified conditions', () => {
    window.scrollY = 9999;
    window.innerHeight = -1;

    const { result } = renderHook(() => useScroll(callbackMock, isFetchingMock));

    fireEvent.scroll(document);

    expect(result.current).toBe(true);
    expect(callbackMock).toHaveBeenCalled();
  });

  it("doesn't run callback if isFetching equals true", () => {
    window.scrollY = 9999;
    window.innerHeight = -1;
    isFetchingMock = true;

    const { result } = renderHook(() => useScroll(callbackMock, isFetchingMock));

    fireEvent.scroll(document);

    expect(result.current).toBe(true);
    expect(callbackMock).not.toHaveBeenCalled();
  });
});
