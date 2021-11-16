import styled from '@emotion/styled';
import React, {
  forwardRef,
  useEffect,
  useRef,
  MutableRefObject,
  Ref,
} from 'react';

const Input = styled.input({});
type Props = { indeterminate?: boolean };
const useCombinedRefs = (...refs): MutableRefObject<any> => {
  const targetRef = useRef();
  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);
  return targetRef;
};
const CheckBox = forwardRef<HTMLInputElement, Props>(
  ({ indeterminate, ...rest }, ref: Ref<HTMLInputElement>) => {
    const defaultRef = useRef(null);
    const resolvedRef = useCombinedRefs(ref, defaultRef);
    useEffect(() => {
      if (resolvedRef?.current) {
        resolvedRef.current.indeterminate = indeterminate;
      }
    }, [resolvedRef, indeterminate]);
    return <Input type='checkbox' ref={resolvedRef} {...rest} />;
  }
);
CheckBox.displayName = 'Checkbox';
export default CheckBox;
