import { useEffect, useRef } from 'react';
import { STATUSES } from 'store/common';

type Status = (typeof STATUSES)[keyof typeof STATUSES];

export const useApiStatusChangeEffect = (
  status: Status,
  callback: () => void,
  fromStatus: Status = STATUSES.LOADING,
  toStatus: Status = STATUSES.IDLE
) => {
  const prevStatus = useRef(status);

  useEffect(() => {
    if (prevStatus.current === fromStatus && status === toStatus) {
      callback();
    }
    prevStatus.current = status;
  }, [status, fromStatus, toStatus, callback]);
};
