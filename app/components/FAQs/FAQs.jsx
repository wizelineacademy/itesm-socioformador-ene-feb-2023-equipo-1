import * as Styled from 'app/components/FAQs/FAQs.Styled';
import PropTypes from 'prop-types';
import React from 'react';

function FAQs({ questionsFAQ }) {
  return (
    <Styled.FAQContainer>

      <Styled.FAQHeader>FAQ&apos;s</Styled.FAQHeader>

      {questionsFAQ.map((faq) => (
        <Styled.FAQList>
          <Styled.Question href={`/questions/${faq.question_id}`} key={faq.id} title={faq.question}>
            {faq.question}
          </Styled.Question>
        </Styled.FAQList>
      ))}

    </Styled.FAQContainer>
  );
}

FAQs.propTypes = {
  questionsFAQ: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
};

FAQs.defaultProps = {
  questionsFAQ: [],
};

export default FAQs;
