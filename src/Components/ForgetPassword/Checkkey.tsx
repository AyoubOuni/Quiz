import React, { useEffect, useState } from 'react';
import  './../../Assets/Css/checkkey.css'
import Navtop from "../Nav/Navtop";


const CheckKey: React.FC = () => {
  const [email, setEmail] = useState('');
  const [remainingTime, setRemainingTime] = useState<number | undefined>(0);
  const [error, setError] = useState('');

  useEffect(() => {
    // Get the countdown elements
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    // Set the countdown time (in minutes)
    const countdownTime = remainingTime || 2; // Default to 2 minutes, adjust this value as needed

    // Calculate the total duration in seconds
    let totalSeconds = countdownTime * 60;

    // Function to update the countdown timer
    function updateCountdown() {
      // Calculate the remaining minutes and seconds
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      // Add leading zeros if necessary
      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(seconds).padStart(2, '0');

      // Update the countdown elements
      if (minutesElement && secondsElement) {
        minutesElement.innerText = formattedMinutes;
        secondsElement.innerText = formattedSeconds;
      }

      // Decrement the totalSeconds value
      totalSeconds--;

      // Check if the countdown is finished
      if (totalSeconds < 0) {
        clearInterval(intervalId);
        // Redirect to the login page

        // Clear the stored countdown start time from local storage
        localStorage.removeItem('countdownStart');
      }
    }

    // Start the countdown initially
    updateCountdown();

    // Update the countdown every second
    const intervalId = setInterval(updateCountdown, 1000);

    return () => {
      // Cleanup: clear the interval when the component is unmounted
      clearInterval(intervalId);
    };
  }, [remainingTime]);

 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your logic here to handle form submission for checking the key.
  };

  return (
    <div className="template-login">
    <Navtop/>
    <div>
      <div className="d-flex justify-content-center times pt-5">
        <div>
          <div id="countdown" className="d-flex justify-content-start pe-4">
            <ul>
              <li className="card_time me-3">
                <span className="d-flex justify-content-center" id="minutes"></span>Minutes
              </li>
              <li className="card_time">
                <span className="d-flex justify-content-center" id="seconds"></span>Seconds
              </li>
            </ul>
          </div>

          <div className="d-flex justify-content-center me-2">
          </div>
          <div className="text-center mt-3">
            <p className="text-center little">Please put the key.</p>
            <form id="checkKeyForm" onSubmit={handleSubmit}>
              <input type="hidden" id="email" name="email" value={email} />
              <input type="hidden" id="remainingTime" value={remainingTime ?? ''} />

              <input
                id="key"
                name="key"
                placeholder="Key"
                className="form-control"
                type="text"
                required
              />
              {error && (
                <div className="d-flex justify-content-center">
                  <div className="text-danger fw-bold h6">{error}</div>
                </div>
              )}
              <div className="d-flex justify-content-end mt-3">
                <button className="btn-20 h6 me-2" >
                  Annuler
                </button>
                <button className="btn-99 h6 text-nowrap" type="submit">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CheckKey;
