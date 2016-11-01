;(function () {
  angular.module('angularPlayground')

    .component('cartComponent', {
      controllerAs: 'component',
      controller: CartController,
      templateUrl: '/app/components/cart/cart.html'
    })

  function CartController () {
    this.cartStatus = 'Working'
    // The cart is an array of items that we are adding to from our view
    this.cart = []
    // The StoreData.js is the information we are using to populate our page
    this.store = {
      items: StoreData
    }
    // *** No Need to edit anything above this line ****

    this.name = 'My BɼokƏn Cart!'

    this.getCartCount = function () {
      // return the length of our cart
      return this.cart.length;
    }

    /*
    * Write a calculateCartTotal function
    * make it assesible to our view
    * this function should return the total cost
    * of each item that is in our cart
    */
    this.calculateCartTotal = function() {
      var total = 0;
      this.cart.forEach(function runningTotal(item) {
        total += item.price * item.quantity;
      })
      return total;
    }


      // Item gets passed in from our view when the user clicks the x button
    var alias = this;
    this.removeItemFromCart = function (unwantedItem) {
      // Item gets passed in from our view when the user clicks the x button
      console.log(unwantedItem);
      console.log(alias.cart);
      for (var i=0; i<alias.cart.length; i++) {
        var item = alias.cart[i];
        console.log(item);
        if (item.$$hashKey == unwantedItem.$$hashKey) {
          alias.cart.splice(i, 1);
          return;
        }
      }
      /*
      * This function should be able to remove the passed in item
      * from our cart. You will have to first identify where the passed
      * in item is in the array. Then you will need to use the correct
      * Array.method to remove 1 item ... hint: method(i, 1)
      */
    }

    this.addItemToCart = function (item) {
      // item gets passed in to this function from the view
  var newItem = {
        name: item.name,
        color: item.selectedColor,
        size: item.selectedSize,
        quantity: 1,
        price: item.price,
        $$hashKey: item.$$hashKey
      };

      console.log(newItem);

      this.cart.push(newItem);
      /*
      *Our cart demands that items being added to it must have the following properties
      *var newItem = {
      *  name:'',
      *  color:'',
      *  size: '',
      *  quantity: 1,
      *  price:'',
      *}
      *console.log the item being passed in from the view 
      *to figure out which properties from the item need to be 
      *re-maped to the newItem object. 
      *After building the newItem, add it to the cart. 
      */

    }
  }
}())
