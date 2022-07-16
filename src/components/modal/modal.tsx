import { ReactNode } from 'react';
import { ModalOverlay } from './modal.styles';

interface IModalProps {
  children: ReactNode;
  isShow: boolean;
}
function Modal({ children, isShow }: IModalProps) {
  if (isShow) {
    return <ModalOverlay>{children}</ModalOverlay>;
  }
  return null;
}
export default Modal;
