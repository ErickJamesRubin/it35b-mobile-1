import { IonList } from "@ionic/react";
import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar, Ion-list } from '@ionic/react';

const Feed:React.FC = () => {

    const games = [
    {name: 'Pokemon Yellow'},
    {name: 'P<ega Man X'},
    {name: 'Pokemon Yellow'},
    {name: 'Pokemon Yellow'},
    {name: 'Pokemon Yellow'}
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

            <IonContent fullscreen>
                <IonList>
            <IonItem>
                <IonLabel>Pokémon Yellow</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>Mega Man X</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>The Legend of Zelda</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>Pac-Man</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>Super Mario World</IonLabel>
            </IonItem>
            </IonList>
                {games.map((item,index) => (
                <IonItem key={index}>
                    <IonLabel>{item.name}</IonLabel>
                </IonItem>

            ))}
                <h1>Feed</h1>
            </IonContent>
        </IonPage>
    );
};

export default Feed;