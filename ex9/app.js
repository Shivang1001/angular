angular.module('reusableApp', [])

// User Profile Directive
.directive('userProfile', function() {
  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    template: `
      <div class="user-profile">
        <h2>{{ user.name }}</h2>
        <p>Email: {{ user.email }}</p>
        <p>Age: {{ user.age }}</p>
      </div>
    `
  };
})

// Product Card Directive
.directive('productCard', function() {
  return {
    restrict: 'E',
    scope: {
      product: '='
    },
    template: `
      <div class="product-card">
        <h2>{{ product.name }}</h2>
        <p>Price: {{ product.price }}</p>
        <p>Rating: {{ product.rating }}/5</p>
      </div>
    `
  };
})

.controller('MainController', function($scope) {
  $scope.user1 = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
  };

  $scope.user2 = {
    name: 'Alice Smith',
    email: 'alice@example.com',
    age: 25
  };

  $scope.product1 = {
    name: 'Product A',
    price: 49.99,
    rating: 4.5
  };

  $scope.product2 = {
    name: 'Product B',
    price: 59.99,
    rating: 4.0
  };
});
