import { useState, useCallback } from "react";

type ThrottleCallback = (...args: any[]) => void;

const useThrottle = (callback: ThrottleCallback, delay: number): ThrottleCallback => {
    const [lastCall, setLastCall] = useState<number>(0);

    return useCallback(
        (...args: any[]) => {
            const now = new Date().getTime();
            if (now - lastCall < delay) {
                return;
            }
            setLastCall(now);
            callback(...args);
        },
        [callback, delay, lastCall]
    );
};

export default useThrottle;
