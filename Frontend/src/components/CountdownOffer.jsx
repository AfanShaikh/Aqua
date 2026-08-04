import { useEffect, useState } from "react";
import FadeUp from "./FadeUp";

function CountdownOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate =
      new Date().getTime() + 3 * 24 * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: String(
          Math.floor(distance / (1000 * 60 * 60 * 24))
        ).padStart(2, "0"),

        hours: String(
          Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
              (1000 * 60 * 60)
          )
        ).padStart(2, "0"),

        minutes: String(
          Math.floor(
            (distance % (1000 * 60 * 60)) /
              (1000 * 60)
          )
        ).padStart(2, "0"),

        seconds: String(
          Math.floor(
            (distance % (1000 * 60)) / 1000
          )
        ).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="countdown-offer"
      className="section-padding"
    >
      <FadeUp>
        <div className="container countdown-container">
          <h2>
            Gold Fish Collection Up To{" "}
            <span className="highlight">
              50% Off!
            </span>
          </h2>

          <div className="timer">
            <div className="time-box">
              <span>{timeLeft.days}</span>
              <small>Days</small>
            </div>

            <div className="time-box">
              <span>{timeLeft.hours}</span>
              <small>Hrs</small>
            </div>

            <div className="time-box">
              <span>{timeLeft.minutes}</span>
              <small>Min</small>
            </div>

            <div className="time-box">
              <span>{timeLeft.seconds}</span>
              <small>Sec</small>
            </div>
          </div>

          <button className="btn btn-primary">
            Claim Offer
          </button>
        </div>
      </FadeUp>
    </section>
  );
}

export default CountdownOffer;