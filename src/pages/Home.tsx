import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import FabButton from '../components/FabButton';

const Home: React.FC = () => {
  return (

          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <FabButton/>
        
      </IonContent>
    </IonPage>
  );

  export default Home;