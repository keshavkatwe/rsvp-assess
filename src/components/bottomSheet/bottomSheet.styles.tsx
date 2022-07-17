import styled from 'styled-components';
import { secondaryBackground } from '../../constants/colors';

export const BottomSheetMain = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const BottomSheetOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #000000de;
`;
export const BottomSheetContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 25px;
  background: ${secondaryBackground};
  border-radius: 30px 30px 0 0;
`;
