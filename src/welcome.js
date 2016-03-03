//import {computedFrom} from 'aurelia-framework';

export class Welcome {
  baseProducts = [
    {id: 1,  name: "Bánh tráng me",                unit: "100gr/bịch", quantity: 1, price: 6000,  weight: 100},
    {id: 2,  name: "Bánh tráng muối",              unit: "100gr/bịch", quantity: 1, price: 6000,  weight: 100},
    {id: 3,  name: "Bánh tráng trộn tắc",          unit: "100gr/bịch", quantity: 1, price: 6000,  weight: 100},
    {id: 4,  name: "Bánh tráng sa tế tắc",         unit: "100gr/bịch", quantity: 1, price: 6000,  weight: 100},
    {id: 5,  name: "Bánh tráng bơ dẻo tôm",        unit: "120gr/bịch", quantity: 1, price: 10000, weight: 120},
    {id: 6,  name: "Bánh tráng dẻo cay",           unit: "350gr/xấp",  quantity: 1, price: 25000, weight: 350},
    {id: 7,  name: "Báng tráng dèo tôm",           unit: "500gr/xấp",  quantity: 1, price: 27000, weight: 500},
    {id: 8,  name: "Bánh tráng dẻo me",            unit: "35gr/xấp",   quantity: 1, price: 25000, weight: 35},
    {id: 9,  name: "Muối tôm loại 1",              unit: "500gr",      quantity: 1, price: 80000, weight: 500},
    {id: 10, name: "Muối chay loại 1",             unit: "500gr",      quantity: 1, price: 60000, weight: 500},
    {id: 11, name: "Bánh tráng làm bánh tráng me", unit: "500gr",      quantity: 1, price: 33000, weight: 500},
    {id: 12, name: "Bánh tráng chuối",             unit: "10 cái/xấp", quantity: 1, price: 15000, weight: 0},
    {id: 13, name: "Bánh tráng phơi sương mặn",    unit: "9 cái/xấp",  quantity: 1, price: 13000, weight: 0}
  ]; 

  products = []; 
  product = {
    id: 0,
    name: "", 
    unit: "",
    quantity: null,
    price: null,
    weight: null
  };


  productSelectChange(event) {
    let id = event.target.value;
    let selected = this.baseProducts.find(item => item.id == id);
    if (selected) {
      // Clone object
      this.product = JSON.parse(JSON.stringify(selected));
    }
  }

  addProduct() {
    this.products.push(this.product);
    this.clearProduct();
  }

  deleteProduct(product) {
    this.products = this.products.filter(item => {return item.id != product.id;});
  }

  clearProduct() {
    this.product = {
      id: 0,
      name: "", 
      unit: "",
      quantity: null,
      price: null,
      weight: null
    };
  }

  get totalPrice() {
    return this.products.reduce((prev, curr) => {
      return prev + (curr.price* curr.quantity)
    }, 0);
  }
}

export class MoneyToNumberValueConverter {
  toView(number) {
    if (isNaN(number) || number.length === 0 ) return "";
    
    // format by locale VN and replace comma by dot
    let money = parseInt(number).toLocaleString('vn').replace(/,/g, '.');
    return money;
  }

  fromView(money) {
    return money.replace(/[^\d]/gi, '');
  }
}

