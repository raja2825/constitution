import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
        <br />
        <br />
      <div className="grid-container">
        <div className="profile-section card">
          <div className="profile-picture"></div>
          <button className="customize-btn">Change Profile</button>
        </div>

        <div className="points-section card">
          <h2>Your Points</h2>
          <p className="info-text">How to earn more points?</p>
          <div className="points">3456</div>
          <div className="transactions">
          
          </div>
        </div>

        <div className="level-section card">
          <h2>My Level</h2>
          <div className="level-display">80</div>
          <p>2030 to next level</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '74%' }}></div>
          </div>
        </div>

        <div className="trophies-section card">
          <h2>Trophies</h2>
          <div className="trophy-display">🏆</div>
          <p></p>
        </div>

        <div className="daily-reward-section card">
          <h2>Daily Reward</h2>
          <div className="reward-display"> 20 🏆 </div>
          <button className="collect-btn">Collect</button>
        </div>

        <div className="quests-section card">
          <h2>Next Quests</h2>
          <ul>
            <li>Complete a task <span className="points-change">+20</span></li>
            <li>Complete a subtask <span className="points-change">+5</span></li>
            <li>Create a task <span className="points-change">+10</span></li>
            <li>Give kudo <span className="points-change">+1</span></li>
          </ul>
        </div>

        <div className="global-stats-section card">
          <h2>Global Stats</h2>
          <div className="stats-display">345 tasks completed</div>
        </div>

        <div className="tokens-energy-section card">
          <div className="tokens"></div>
          <div className="energy"></div>
        </div>

        {/* <div className="recent-endorsements-section card">
          <h2>Recent Endorsements</h2>
          <div className="endorsement-display">
            <p>345 <span className="endorsement-change">+4 Performance</span></p>
            <p>452 <span className="endorsement-change">+2 Teamwork</span></p>
            <p>212 <span className="endorsement-change">+1 Leadership</span></p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainContent;
