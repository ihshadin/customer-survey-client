import React from 'react';

const QuestionCard = ({ ques }) => {
    const { id, serialNo, quesText, quesOptions } = ques;
    return (
        <>
            <h2 className='text-lg'>{serialNo + '. ' + quesText}</h2>
            <div className='my-5 flex justify-center gap-4'>
                {
                    quesOptions.map((option, i) => <span key={i} className='options_btn'>{option}</span>)
                }
            </div>
            {/* <h2 className='text-lg'>2. How fair are the prices compared to similar retailers?</h2>
            <div className='my-5 flex justify-center gap-4'>
                <span className='options_btn'>1</span>
                <span className='options_btn'>2</span>
                <span className='options_btn'>3</span>
                <span className='options_btn'>4</span>
                <span className='options_btn'>5</span>
            </div>
            <h2 className='text-lg'>3. How satisfied are you with the value for money of your purchase?</h2>
            <div className='my-5 flex justify-center gap-4'>
                <span className='options_btn'>1</span>
                <span className='options_btn'>2</span>
                <span className='options_btn'>3</span>
                <span className='options_btn'>4</span>
                <span className='options_btn'>5</span>
            </div>
            <h2 className='text-lg'>4. HOn a scale of 1-10 how would you recommend us to your friends and family?</h2>
            <div className='my-5 flex justify-center gap-4'>
                <span className='options_btn'>1</span>
                <span className='options_btn'>2</span>
                <span className='options_btn'>3</span>
                <span className='options_btn'>4</span>
                <span className='options_btn'>5</span>
                <span className='options_btn'>6</span>
                <span className='options_btn'>7</span>
                <span className='options_btn'>8</span>
                <span className='options_btn'>9</span>
                <span className='options_btn'>10</span>
            </div>
            <h2 className='text-lg'>5. What could we do to improve our service?</h2>
            <div className='my-5 flex justify-center gap-4'>
                <input className='border-2 rounded-full py-2 px-8' type="text" name="" id="" placeholder='Input your feedback!' />
            </div> */}
        </>
    );
};

export default QuestionCard;