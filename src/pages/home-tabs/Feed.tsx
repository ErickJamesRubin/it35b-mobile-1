import { IonList } from "@ionic/react";
import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';

const Feed:React.FC = () => {

    const games = [
    {name: 'Pokemon Yellow'},
    {name: 'Mega Man X'},
    {name: 'The Legend of Zelda'},
    {name: 'Pac-Man'},
    {name: 'Super Mario World'}
    ]
    return (
        <IonPage>
            <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Feed</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonList>
                    {games.map((item,index) => (
                <IonItem key={index}>
                    <IonLabel>{item.name}</IonLabel>
                </IonItem>

            ))}
            </IonList>
                
                <h1>Feed</h1>
            </IonContent>
        </IonPage>
    );
};

export default Feed;