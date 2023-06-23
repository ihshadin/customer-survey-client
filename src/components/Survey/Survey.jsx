import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Survey = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(null));
    const navigate = useNavigate();

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleAnswer = (event) => {
        const element = event.target;
        const elementName = event.target.name;

        if (elementName === 'feedback') {
            const answer = event.target.value;
            const updatedAnswers = [...answers];
            updatedAnswers[currentQuestion] = answer;
            setAnswers(updatedAnswers);
        } else {
            const answer = event.target.innerText;
            const selectedOption = parseInt(answer);
            const updatedAnswers = [...answers];
            updatedAnswers[currentQuestion] = selectedOption;
            setAnswers(updatedAnswers);

            const updatedSelectedOptions = [...selectedOptions];
            updatedSelectedOptions[currentQuestion] = answer;
            setSelectedOptions(updatedSelectedOptions);
        }
    };

    const handleSubmitSurvey = () => {
        localStorage.setItem('surveyAnswers', JSON.stringify(answers));

        navigate('/survey/thank-you');
    }

    // Questions Data
    useEffect(() => {
        fetch('questions.json')
            .then(res => res.json())
            .then(result => {
                setQuestions(result)
            })
    }, [])

    useEffect(() => {
        const savedAnswers = localStorage.getItem('surveyAnswers');
        if (savedAnswers) {
            setAnswers(JSON.parse(savedAnswers));
            setSelectedOptions(JSON.parse(savedAnswers));
        } else {
            setAnswers(new Array(questions.length).fill(''));
        }
    }, [questions]);

    if (!questions[currentQuestion]) {
        return <span className="loading loading-ring loading-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
    }

    return (
        <section className='container mx-auto py-16'>
            <h2 className='text-center text-4xl font-bold mb-5'>Customer Survey</h2>
            <p>Question {currentQuestion + 1} of {questions.length}</p>
            <div className='mt-10 text-center mx-auto'>
                <h2 className='text-lg'>{questions[currentQuestion].quesText}</h2>
                <div className='my-5 flex justify-center gap-4'>
                    {
                        Array.isArray(questions[currentQuestion].quesOptions) ? (
                            questions[currentQuestion].quesOptions.map((option, i) => (
                                <span key={i}
                                    className={`options_btn ${parseInt(selectedOptions[currentQuestion]) === option ? 'active' : ''}`}
                                    onClick={handleAnswer}
                                >{option}</span>
                            ))
                        ) : (
                            <input
                                defaultValue={selectedOptions[currentQuestion]}
                                className='border-2 rounded-full py-2 px-8'
                                type="text"
                                name="feedback"
                                id="feedback"
                                placeholder='Input your feedback!'
                                onBlur={handleAnswer}
                            />
                        )
                    }
                </div>
                <div className='flex justify-center gap-52 items-center pt-5'>
                    <button
                        className="btn min-h-0 h-auto px-8 py-3 rounded-none bg-teal-500 text-white hover:bg-teal-500"
                        disabled={currentQuestion == 0}
                        onClick={handlePrev}
                    >
                        Prev
                    </button>
                    {
                        currentQuestion < questions.length - 1 ? (
                            <button
                                className="btn min-h-0 h-auto px-8 py-3 rounded-none bg-teal-500 text-white hover:bg-teal-500"
                                disabled={currentQuestion === (questions.length - 1)}
                                onClick={handleNext}
                            >
                                Next
                            </button>
                        ) : (
                            <>
                                <button
                                    className="btn min-h-0 h-auto px-8 py-3 rounded-none bg-teal-500 text-white hover:bg-teal-500"
                                    disabled={currentQuestion !== (questions.length - 1)}
                                    onClick={() => window.my_modal_3.showModal()}
                                >
                                    Next
                                </button>
                                <dialog id="my_modal_3" className="modal">
                                    <form method="dialog" className="modal-box">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        <h3 className="font-bold text-2xl mb-5">Are you sure!</h3>
                                        <p className="mb-5">Do you want submit the survey?</p>
                                        <Link
                                            className="btn min-h-0 h-auto px-8 py-3 rounded-none bg-teal-500 text-white hover:bg-teal-500"
                                            onClick={handleSubmitSurvey}
                                        >Submit</Link>
                                    </form>
                                </dialog>
                            </>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Survey;