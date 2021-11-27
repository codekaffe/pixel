import React from 'react';

const SubmitButton: React.FC<{ submit: (...args: any[]) => any }> = ({ submit }) => {
  return (
    <>
      <style jsx>{`
        .submit button {
          margin: 1rem;
          padding: 0.25rem 3rem;
          background-color: #0099db;
          border: 3px solid #a0293d;
          border-radius: 0.25rem;
          color: white;
          text-transform: uppercase;
          font-family: 'Patrick Hand', impact, cursive;
          font-size: 2rem;
        }
        .submit button:hover {
          background-color: #a0293d;
          cursor: pointer;
        }
        .submit button:active {
          transform: scale(0.95);
        }
      `}</style>
      <div className='submit'>
        <button onClick={submit}>Done!</button>
      </div>
    </>
  );
};

export default SubmitButton;
