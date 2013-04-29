kanbanBit.controller( 'BoardCtrl', [ '$scope', function( $scope ) {
  $scope.addCard = function( index ) {
    console.log( 'addCard' + ', ' + index );
    console.log( $scope.board.cards.length );
    $scope.board.cards.push({
      title: 'TEST',
      text: 'TESTING'
    });
  };
}]);
