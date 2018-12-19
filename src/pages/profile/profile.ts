import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AddItPage } from '../add-it/add-it';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  data: any;
  username: any;
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public loading: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  run(){
   this.navCtrl.push(AddItPage);
  }
  ngOnInit() {
    this.username = this.navParams.get('username');

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });

    let data = {
      username: this.username

    };

    let loader = this.loading.create({
      content: 'Processing please wait...',
      
    });

    loader.present().then(() => {
     // loader.dismiss();
     loader.onDidDismiss(() => {
      console.log('Dismissed loading');
    });
      this.http.post('http://192.168.0.5:8080/project/fetch_data.php', data, options)
        .map(res => res.json())
        .subscribe(res => {

          loader.dismiss()
          this.items = res.server_response;

          console.log(this.items);
        });
    });
  }
}
