import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Peer } from 'peerjs';
import { AppModule } from './app/app.module';
const SignallingServerURL_Production = "https://hc220230626063443.azurewebsites.net/";
const SignallingServerURL_Development = "https://localhost:44383";
//#region SIGNALR CONNECTIONs
import * as signalR from '@microsoft/signalr';
export const gameconnection = new signalR.HubConnectionBuilder()
    .withUrl(`${SignallingServerURL_Production}/gamehub`)
    .build();
export const chatconnection = new signalR.HubConnectionBuilder()
    .withUrl(`${SignallingServerURL_Production}/chathub`)
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
        await chatconnection.start();
        // await chatconnection.invoke('NewConnection', userId);
        await chatconnection.invoke('JoinRoom', 'FIRST_LOBBY', userId);
    };
    startSignalR();
});
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
//# sourceMappingURL=main.js.map