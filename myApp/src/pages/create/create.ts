import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CallApiProvider } from '../../providers/call-api/call-api';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  newProduct : FormGroup
  constructor(public navCtrl: NavController, public navParams: NavParams,public fb: FormBuilder,public callApi: CallApiProvider) {
  this.newProduct=fb.group({
    'id':null,
    'name':null,
    'price':null,
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }
  
  create() {
    this.callApi.CreateProduct(this.newProduct.value).subscribe(data => {
      console.log("Created");
      this.navCtrl.pop();

    })
  }

}
