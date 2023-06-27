import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Peer } from 'peerjs';
import { AppModule } from './app/app.module';
export const MODES = {
    Development: "Development",
    Production: "Production"
};
export const CurrentMode = MODES.Production;
let SignallingServerURL = "";
if (CurrentMode == MODES.Production) {
    SignallingServerURL = "https://handcricketreborn.azurewebsites.net";
}
else {
    SignallingServerURL = "https://localhost:5000";
}
//#region SIGNALR CONNECTIONs
import * as signalR from '@microsoft/signalr';
export const gameconnection = new signalR.HubConnectionBuilder()
    .withUrl(`${SignallingServerURL}/gamehub`)
    .build();
//#endregion
let userId = null;
// peer js
const myPeer = new Peer();
myPeer.on('open', (id) => {
    const startSignalR = async () => {
        userId = id;
        // userId = Math.random().toString();
        await gameconnection.start();
        // await chatconnection.invoke('NewConnection', userId);
        await gameconnection.invoke('JoinRoom', userId);
    };
    startSignalR();
});
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
//# sourceMappingURL=main.js.map