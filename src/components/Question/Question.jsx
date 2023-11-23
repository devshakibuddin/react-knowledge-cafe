import React from 'react';

const Question = () => {
    return (
        <>
            <div className="row mt-3">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Different with props and State ?</h5>
                            <p className="card-text">Props are used to pass data from a parent component to a child component, while state is used to manage data within a component.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">How to work useState ?</h5>
                            <p className="card-text">The useState() hook works by handling and managing state in your applications.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">useState What else can work?</h5>
                            <p className="card-text">The useState() hook can conveniently hold strings, arrays, numbers, objects and much more. In this article, we are going to learn about the useState() hook and demonstrate its use with three different examples: a button with conditional rendering, form handling, and the famous counter.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">How does react work?</h5>
                            <p className="card-text">Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM. React only changes what needs to be changed! React finds out what changes have been made, and changes only what needs to be changed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Question;