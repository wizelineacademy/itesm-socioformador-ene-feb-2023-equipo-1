import styled from 'styled-components';
import { FiUpload } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 15px;
`;

export const UploadButtonWrapper = styled.div`
  background-color: #fff;
  border-radius: 25px;
  border: 1px solid #d3d3d4;
  text-align: center;
  width: 30vw;
  min-height: 115px;
  margin: 5vh auto;
`;

export const UploadButtonLabel = styled.div`
  font-size: 17px;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const UploadButtonContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #213246;
  color: #fff;
  border: 1px solid #213246;
  border-radius: 4px;
  width: 20vw;
  height: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 0 auto;

  &:hover {
    background-color: #fff;
    color: #213246;
  }
`;

export const UploadButtonIcon = styled(FiUpload)`
  margin-right: 8px;
`;

export const UploadButtonText = styled.div`
  font-size: 14px;
`;

export const FileList = styled.ul`
  list-style-type: none;
  margin-top: 10px;
  padding: 0;
`;

export const FileCount = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: bold;
`;

export const FileName = styled.li`
  font-size: 12px;
  background-color: #f4f7f9;
  width: 20vw;
  margin: 0 auto;
  margin-bottom: 1em;
  padding: 1.1em 1em;
  border-radius: 0.3em;
`;

export const SendButton = styled.button`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #213246;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #213246;
  border-radius: 4px;
  width: 20vw;
  height: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 40px;
  margin-bottom: 1em;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: #fff;
    color: #213246;
  }
`;
