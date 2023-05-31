import * as Styled from 'app/components/OpenForumButton/OpenForumButton.Styled';
import React, { useEffect, useState } from 'react';

function OpenForumButton() {
  return (
    <Styled.Button>
      <Styled.ButtonText>Answer it →</Styled.ButtonText>
    </Styled.Button>
  );
}

export default OpenForumButton;
