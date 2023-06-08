import React, { useRef, useState } from 'react';
import * as Styled from 'app/components/Atoms/UploadButton/UploadButton.Styled';

function UploadButton() {
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const { files } = event.target;
    setSelectedFiles(Array.from(files));
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleSendClick = () => {
    // To upload the files...
    setSelectedFiles([]);
  };

  return (
    <Styled.Container>
      <Styled.UploadButtonWrapper>
        <Styled.UploadButtonLabel>
          Files to be processed by the AnswerBot
        </Styled.UploadButtonLabel>
        <Styled.UploadButtonContainer onClick={handleClick}>
          <Styled.UploadButtonIcon size={20} />
          <Styled.UploadButtonText> Choose Files To Upload </Styled.UploadButtonText>
        </Styled.UploadButtonContainer>
        <input
          style={{ display: 'none' }}
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          accept=".pdf,.doc,.docx"
          multiple
        />
        {selectedFiles.length > 0 && (
          <>
            <Styled.FileList>
              <li>
                <Styled.FileCount>
                  {selectedFiles.length}
                  &nbsp;File(s) Selected
                </Styled.FileCount>
              </li>
              {selectedFiles.map((file) => (
                <Styled.FileName key={file.id}>{file.name}</Styled.FileName>
              ))}
            </Styled.FileList>
            <Styled.SendButton visible={selectedFiles.length > 0} onClick={handleSendClick}>
              Save File(s)
            </Styled.SendButton>
          </>
        )}
      </Styled.UploadButtonWrapper>
    </Styled.Container>
  );
}

export default UploadButton;
