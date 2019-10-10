import React from 'react';
import './Services.scss';

class Services extends React.Component {
  componentDidMount() {
    function positionTheDot() {
      const scrollPercentage
        = (document.documentElement.scrollTop + document.body.scrollTop)
        / (document.documentElement.scrollHeight
          - document.documentElement.clientHeight);
      const path = document.getElementById('theMotionPath');
      const pathLen = path.getTotalLength();
      const pt = path.getPointAtLength(scrollPercentage * pathLen);
      const dots = document.getElementsByClassName('dot-services');
      for (let i = 0; i < dots.length; i++) {
        dots[i].setAttribute('transform', `translate(${pt.x},${pt.y})`);
      }
    }
    window.addEventListener('scroll', positionTheDot);
    positionTheDot();
  }

  render() {
    return (
      <>
        <section className="services" id="services">
          <svg
            width="664"
            height="1216"
            viewBox="0 0 664 1216"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="services__path"
          >
            <path
              d="M22.9998 1C22.9998 1 649.558 119 663 589.542C655.833 1135 1 1215 1 1215"
              stroke="#29A0EC"
              className="services__path"
              id="theMotionPath"
            />
            <circle
              cx="0"
              cy="0"
              r="12.5"
              fill="#C5E3F7"
              className="dot-services"
            />
            <circle
              cx="0"
              cy="0"
              r="6"
              fill="#29A0EC"
              className="dot-services"
            />
          </svg>
          <div className="services__element first-service">
            <div className="phone-group first-phone-group">
              <div className="services__phone first-phone" />
              <div className="services__phone-background first-background" />
            </div>
            <div className="services__info first-services-info">
              <h2 className="services__title">Track every trip you make </h2>
              <p className="services__describe">
                Every one of your trips is captured immediately and is never
                forgotten.
              </p>
              <div className="services__checked-block">
                <div className="services__checked" />
                <span>No signal dropout</span>
              </div>
              <div className="services__checked-block">
                <div className="services__checked" />
                <span>No missed trips</span>
              </div>
              <button className="services__button">
                lean more
                <svg
                  width="25"
                  height="6"
                  viewBox="0 0 25 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="if_260_462624">
                    <path
                      id="Shape"
                      d="M22 5L24 3.03571L22.0357 1"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Shape_2"
                      d="M23 3H13"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Shape_3"
                      d="M6 3H9"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Shape_4"
                      d="M1 3H2"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="services__element second-service">
            <div className="services__info second-services-info">
              <h2 className="services__title">Classify with a single swipe </h2>
              <p className="services__describe">
                Swipe right for business. Swipe left for personal. It’s as easy
                as that.
              </p>
              <div className="services__checked-block">
                <div className="services__checked" />
                <span>Review trips on the go</span>
              </div>
              <div className="services__checked-block">
                <div className="services__checked" />
                <span>Classify journeys in seconds</span>
              </div>
              <button className="services__button">
                lean more
                <svg
                  width="25"
                  height="6"
                  viewBox="0 0 25 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="if_260_462624">
                    <path
                      id="Shape"
                      d="M22 5L24 3.03571L22.0357 1"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Shape_2"
                      d="M23 3H13"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Shape_3"
                      d="M6 3H9"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Shape_4"
                      d="M1 3H2"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <div className="phone-group second-phone-group">
              <div className="services__phone second-phone" />
              <div className="services__phone-background second-background" />
            </div>
          </div>
          <div className="services__element third-service">
            <div className="phone-group third-phone-group">
              <div className="services__phone third-phone" />
              <div className="services__phone-background third-background" />
            </div>
            <div className="services__info third-services-info">
              <h2 className="services__title">
                Claim your money back with ease
                {' '}
              </h2>
              <p className="services__describe">
                Claiming mileage has never been so easy, with all calculations
                done for you.
              </p>
              <div className="services__checked-block">
                <div className="services__checked" />
                <span>100% HMRC compliance</span>
              </div>
              <div className="services__checked-block">
                <div className="services__checked" />
                <span>All logs in one place</span>
              </div>
              <button className="services__button">
                lean more
                <svg
                  width="25"
                  height="6"
                  viewBox="0 0 25 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="if_260_462624">
                    <path
                      id="Shape"
                      d="M22 5L24 3.03571L22.0357 1"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Shape_2"
                      d="M23 3H13"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Shape_3"
                      d="M6 3H9"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Shape_4"
                      d="M1 3H2"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Services;
