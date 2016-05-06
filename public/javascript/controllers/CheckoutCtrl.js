'use strict';

Stripe.setPublishableKey('pk_test_aj305u5jk2uN1hrDQWdH0eyl');

angular.module('app')
	.controller('CheckoutCtrl', function ($scope, totalAmount) {
		$scope.totalAmount = totalAmount;

		$scope.onSubmit = function () {
			$scope.processing = true;
		};

		$scope.stripeCallback = function (code, result) {
			$scope.processing = false;
			$scope.hideAlerts();
			if (result.error) {
				$scope.stripeError = result.error.message;
			} else {
				$scope.stripeToken = result.id;
			}
		};

		$scope.hideAlerts = function () {
			$scope.stripeError = null;
			$scope.stripeToken = null;
		};
	});
