import { useState, useEffect } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);
    const [initialTime, setInitialTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const formatTime = (seconds: number) => {
        const hh = String(Math.floor(seconds / 3600)).padStart(2, "0");
        const mm = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
        const ss = String(seconds % 60).padStart(2, "0");
        return `${hh}:${mm}:${ss}`;
    };

    const handleStartPause = () => {
        if (time > 0) {
            setIsRunning(prev => !prev);
        }
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(initialTime);
    };

    const handleSetTime = (hours: number, minutes: number, seconds: number) => {
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        setTime(totalSeconds);
        setInitialTime(totalSeconds);
        setShowModal(false);
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime(prev => prev - 1);
            }, 1000);
        } else if (time === 0) {
            setIsRunning(false);
        }
        return () => clearInterval(timer);
    }, [isRunning, time]);

    return (
        <div className="text-center">
            <h1 className="text-white my-4" id="timer-title">Clocks <strong>Timer</strong></h1>
            <h2
                className="text-white my-4"
                style={{ cursor: "pointer" }}
                onClick={() => setShowModal(true)}
                title="Click to set time"
                id="clock"
            >
                {formatTime(time)}
            </h2>
            <div>
                <button
                    className={`btn ${isRunning ? "btn-danger" : "btn-success"} mx-2`}
                    onClick={handleStartPause}
                >
                    {isRunning ? "Pause" : "Start"}
                </button>
                <button className="btn btn-secondary mx-2" onClick={handleReset}>
                    Reset
                </button>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal d-block" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Set Timer</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const form = e.target as HTMLFormElement;
                                        const hours = Math.max(0, Number(form.hours.value) || 0);
                                        const minutes = Math.max(0, Number(form.minutes.value) || 0);
                                        const seconds = Math.max(0, Number(form.seconds.value) || 0);
                                        handleSetTime(hours, minutes, seconds);
                                    }}
                                >
                                    <div className="mb-3">
                                        <label htmlFor="hours" className="form-label">
                                            Hours
                                        </label>
                                        <input type="number" id="hours" name="hours" className="form-control" min="0" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="minutes" className="form-label">
                                            Minutes
                                        </label>
                                        <input type="number" id="minutes" name="minutes" className="form-control" min="0" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="seconds" className="form-label">
                                            Seconds
                                        </label>
                                        <input type="number" id="seconds" name="seconds" className="form-control" min="0" />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">
                                        Set Timer
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Timer;