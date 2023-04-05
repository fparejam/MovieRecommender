import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap';

export const StyledModal = styled(Modal)`
  margin-top: -75px;
  opacity:1;
  .modal-content {
    background-color: rgba(31, 31, 31, 1);
    color: #fff;
    font-size: 14px;
    max-width: 600px;
    margin: 0 auto;
  }
  &.modal {
    z-index: 1051 !important;
  }
`;

export const StyledModalHeader = styled(Modal.Header)`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(31, 31, 31, 1);
  padding: 16px;
`;

export const StyledMovieTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

export const StyledModalBody = styled(Modal.Body)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 16px 16px;
`;

export const StyledMovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 16px;
`;

export const StyledMovieInfoItem = styled.p`
  margin: 0;
`;

export const StyledModalFooter = styled(Modal.Footer)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  padding: 16px;
`;


export const StyledButton = styled(Button)`
  margin-left: 16px;
  background-color: transparent;
  border-color: #ffeb3b;
  color: #ffeb3b;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background-color: #ffeb3b;
    color: #333;
    border-color: #ffeb3b;
  }
`;
