import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
      <div className={styles.profileContainer}>
          <img src="https://github.com/rafarod21.png" alt="Rafael Rodrigues" />
          <div>
              <strong>Rafael Rodrigues</strong>
              <p>
                <img src="icons/level.svg" alt="Level"/>
                Level {level}
              </p>
          </div>
      </div>
  );
}

export default Profile;