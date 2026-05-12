import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { supabase } from '../lib/supabaseClient';
import { logoGoogle, options } from 'ionicons/icons';

const Login:React.FC = () => {
    const navigation = useIonRouter();
    const doLogin = () => {
        navigation.push('/app','forward','replace');
    }

    const signInWithGoogle = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: '${window.location.origin}/app'
            }
        });
    };

    return (
        <IonPage>
            <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">Login
                            
                        </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonButton expand="full" onClick={signInWithGoogle} fill="outline" shape="round">
                    <IonIcon icon={logoGoogle}/>
                    Continue Via Google
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Login;