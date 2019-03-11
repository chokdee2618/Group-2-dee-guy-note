import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CallApiProvider } from '../../providers/call-api/call-api';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {
  totalNumberProduct: FormGroup
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public callApi: CallApiProvider) {
    this.totalNumberProduct = fb.group({
      'id': null,
      'name': null,
      'price': null,
      'number': null
    })
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad UpdatePage');
    let oldProduct = this.navParams.get('product');
    this.totalNumberProduct.setValue(oldProduct);
    console.log(this.totalNumberProduct.value);
  }

  update() {
    this.callApi.UpdateStudent(this.totalNumberProduct.value).subscribe(data => {
      console.log("Update");
      this.navCtrl.pop();
      
    })
  }

}
