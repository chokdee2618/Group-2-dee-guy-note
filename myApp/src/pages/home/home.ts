import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallApiProvider } from '../../providers/call-api/call-api';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products:any=[]
  constructor(public navCtrl: NavController,public callApi: CallApiProvider,public fb:FormBuilder) {
   
  }
  ionViewDidEnter() {
    this.get();
  }
  get() {

    this.callApi.GetAllProduct().subscribe(data => {
      this.products = data;
      console.log(this.products);

    });
  }

  goCreate(){
    this.navCtrl.push("CreatePage")
  }
  goTotalPage(id: string) {
    this.navCtrl.push("TotalPage", { id: id });
    
  }

}
