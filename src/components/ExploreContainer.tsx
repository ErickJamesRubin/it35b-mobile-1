import React from 'react';
import { IonAlert, IonButton } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
       <>
        <IonButton id="present-alert">Click Me</IonButton>
        <IonAlert
          trigger="present-alert"
          header="A Short Title Is Best"
          subHeader="A Sub Header Is Optional"
          message="A message should be a short, complete sentence."
          buttons={['Action']}
        ></IonAlert>
      </>
    );
  }
export default ExploreContainer;
