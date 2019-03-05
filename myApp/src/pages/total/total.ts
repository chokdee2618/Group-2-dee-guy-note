import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CallApiProvider } from '../../providers/call-api/call-api';

/**
 * Generated class for the TotalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-total',
  templateUrl: 'total.html',
})
export class TotalPage {
  id: string;
  product :FormGroup
  constructor(public navCtrl: NavController, public navParams: NavParams,public callApi:CallApiProvider,public fb:FormBuilder) {
    this.product=fb.group({
      'id':null,
      'name':null,
      'price':null,
    })
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad TotalPage');
    this.id=this.navParams.get('id')
    this.get();
  }
  get(){
    this.callApi.GetProduct(this.id).subscribe(data =>{
       this.product.setValue(data);
       console.log(this.product.value)
     })
   }
}
