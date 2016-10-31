;(function () {
  angular.module('angularPlayground')
    .component('controllersComponent', {
      controller: ControllersController,
      templateUrl: '/app/components/controllers/controllers.html'
    })

  function ControllersController () {
    var happy = this
    this.controllersStatus = 'Working'
    this.friends = ['Joey', 'Chandler', 'Monica', 'Phebes', 'Ross & Rachel']
    this.addFriends = function(thatGuy){
      happy.friends.push(thatGuy)
    }
  }
}())
