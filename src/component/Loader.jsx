import React from "react";

// Stylish minimalist loader inspired by the Nordic Rose blog platform design
const Loader = () => (
    <div className="loader-bg">
        <div className="loader-content">
            {/* Loader Icon: a stack of white cards and a bold yellow background with a diagonal black line, inspired by the hero graphic */}
            <div className="loader-graphic">
                <div className="loader-yellow-bg">
                    <div className="loader-cards">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="loader-card"
                                style={{
                                    left: `${i * 12}px`,
                                    zIndex: 5 - i,
                                }}
                            />
                        ))}
                    </div>
                    <div className="loader-diagonal" />
                    <div className="loader-rect" />
                </div>
            </div>
            <span className="loader-text">Loading Nordic Rose...</span>
        </div>
        <style>{`
      .loader-bg {
        min-height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        z-index: 9999;
        position: fixed;
        top: 0;
        left: 0;
      }
      .loader-content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .loader-graphic {
        position: relative;
        width: 160px;
        height: 110px;
        margin-bottom: 2rem;
      }
      .loader-yellow-bg {
        background: #ffe600;
        width: 160px;
        height: 110px;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      }
      .loader-cards {
        position: absolute;
        bottom: 35px;
        left: 18px;
        height: 44px;
        width: 90px;
      }
      .loader-card {
        background: #fff;
        width: 52px;
        height: 44px;
        border-radius: 3px;
        position: absolute;
        box-shadow: 0 2px 5px rgba(0,0,0,0.03);
        border: 1.5px solid #dedede;
        animation: card-bounce 1s infinite alternate;
      }
      .loader-card:nth-child(1) { animation-delay: 0s; }
      .loader-card:nth-child(2) { animation-delay: 0.1s; }
      .loader-card:nth-child(3) { animation-delay: 0.2s; }
      .loader-card:nth-child(4) { animation-delay: 0.3s; }
      .loader-card:nth-child(5) { animation-delay: 0.4s; }
      @keyframes card-bounce {
        to { transform: translateY(-10px) scale(1.04); }
      }
      .loader-diagonal {
        position: absolute;
        top: 30px;
        left: 0;
        width: 160px;
        height: 12px;
        background: #111;
        transform: skewY(-20deg);
      }
      .loader-rect {
        position: absolute;
        bottom: 8px;
        right: 18px;
        width: 34px;
        height: 26px;
        background: #fff;
        border-radius: 2px;
        border: 1.5px solid #dedede;
        box-shadow: 0 2px 4px rgba(0,0,0,0.03);
      }
      .loader-text {
        color: #222;
        font-family: 'Georgia', 'Times New Roman', Times, serif;
        font-size: 1.25rem;
        letter-spacing: 0.02em;
        margin-top: 0.5rem;
      }
      @media (max-width: 500px) {
        .loader-graphic, .loader-yellow-bg { width: 100px; height: 70px; }
        .loader-cards { left: 8px; bottom: 18px; width: 56px; height: 24px; }
        .loader-card { width: 32px; height: 24px; }
        .loader-diagonal { top: 18px; width: 100px; height: 7px; }
        .loader-rect { width: 22px; height: 14px; bottom: 4px; right: 6px; }
      }
    `}</style>
    </div>
);

export default Loader;
