import * as Styled from 'app/components/FAQs/FAQs.Styled';
import PropTypes from 'prop-types';

function FAQs({questionsFAQ}) {
 
    return (
      <Styled.FAQContainer>
        
          <Styled.FAQHeader>FAQ's</Styled.FAQHeader>

            {questionsFAQ.map((faq, index) => (
                <Styled.FAQList>
                    <Styled.Question href={`http://localhost:3000/questions/${faq.question_id}`} key={index} title={faq.question}> {faq.question} </Styled.Question>
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