import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallApiProvider } from '../../providers/call-api/call-api';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  products: any = []
  name: any = []
  price: any = []
  number: any = []
  sum: any = 0
  totalnumber: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public callApi: CallApiProvider) {
    this.name = navParams.get('name')
    this.price = navParams.get('price')
    this.number = navParams.get('sum')
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad CartPage');
    this.get();
  }

  get() {

    this.callApi.GetAllProduct().subscribe(data => {
      this.products = data;
      console.log(this.products);
      this.sumTotalnumber();
    });
  }

  sumTotalnumber() {
    for (let index = 0; index < this.price.length; index++) {
      this.sum = Number(this.sum) + (Number(this.price[index]) * Number(this.number[index]))
    }
    console.log(this.totalnumber);
  }

}
