angular.module('myApp')
.controller('mainCtrl', function($scope, service) {

  $scope.getQuotes = function () {
    $scope.quotes = service.getQuotes();
  }
  $scope.getQuotes();

  $scope.Remove = function (quote) {
    service.RemoveQuote(quote);
  }


  $scope.Add = function (theQuote, theAuthor) {
      service.AddQuote(theQuote, theAuthor);

  }
})
