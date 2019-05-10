import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonItem,
  IonList,
  IonLabel,
  IonItemSliding,
  IonItemOption,
  IonItemOptions
} from '@ionic/react';

class App extends Component {
  render() {
    return (
      <IonApp>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Welcome to Ionic</IonCardSubtitle>
              <IonCardTitle>Running on React</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonList>
            <IonItem>
              <IonLabel>Hello World</IonLabel>
            </IonItem>

            <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => {console.log("SAH DU")}}>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>


          </IonList>
        </IonContent>
        <IonContent>

        </IonContent>
      </IonApp>
    );
  }
}

export default App;
