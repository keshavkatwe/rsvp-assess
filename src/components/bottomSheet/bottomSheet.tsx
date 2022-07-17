import { ReactNode } from 'react';
import {
  BottomSheetContainer,
  BottomSheetMain,
  BottomSheetOverlay,
} from './bottomSheet.styles';

interface IModalProps {
  children: ReactNode;
  isShow: boolean;
  onClose?: () => void;
}
function BottomSheet({ children, isShow, onClose }: IModalProps) {
  if (isShow) {
    return (
      <BottomSheetMain>
        <BottomSheetOverlay onClick={onClose} />
        <BottomSheetContainer>{children}</BottomSheetContainer>
      </BottomSheetMain>
    );
  }
  return null;
}
export default BottomSheet;
