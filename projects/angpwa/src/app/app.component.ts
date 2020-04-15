import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent {
  title = 'angpwa';
  deferredPrompt: any = undefined;
  canInstallApp = false;

  @HostListener('window:beforeinstallprompt', ['$event'])
  beforeinstallprompt(event: any) {
    console.log("Valid manifest");
    event.preventDefault();
    this.deferredPrompt = event;
    this.canInstallApp = true
  }

  public installApp(){
    if(this.canInstallApp){
      console.log("Calling installation");
      this.deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice.then((choiceResult: { outcome: string; }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
      })
    }
  }
}
