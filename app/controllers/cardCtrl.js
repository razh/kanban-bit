kanbanBit.controller( 'CardCtrl', [ '$scope', function( $scope ) {
  $scope.test = 'test';

  $scope.pop = function() {
    return $scope.test.message.splice( 0, 1 );
  };
}]);
