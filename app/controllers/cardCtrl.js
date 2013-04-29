kanbanBit.factory( 'Data', function() {
  return {
    test: '1234'
  };
});

kanbanBit.filter( 'pop', function( Data ) {
  return function( text ) {
    return text.substring(1) + Data.test;
  };
});

kanbanBit.directive( 'board', function() {
  return {
    restrict: 'C',
    templateUrl: 'app/templates/board.html'
  };
});

kanbanBit.controller( 'CardCtrl', [ '$scope', function( $scope ) {
  console.log( $scope.card.text );
}]);

kanbanBit.directive( 'card', function() {
  return {
    restrict: 'C',
    templateUrl: 'app/templates/card.html',

    link: function( scope, element, attrs ) {
      element.bind( 'click', function() {
        console.log( 'card: ' + element.attr( 'card' ) + ', ' + element.attr( 'board' ) );
        console.log( scope.card.text );
      });
    }
  };
});

// Content editable code taken from http://docs.angularjs.org/api/ng.directive:ngModel.NgModelController.
kanbanBit.directive( 'editable', function() {
  return {
    require: '?ngModel',

    link: function( scope, element, attrs, ngModel ) {
      element.bind( 'click', function() {
        element.attr( 'contenteditable', 'true' );
      });

      // Do nothing if no ng-model exists.
      if ( !ngModel ) { return; }

      ngModel.$render = function() {
        element.html( ngModel.$viewValue || '' );
      };

      // Update on change.
      element.bind( 'blur keyup change', function() {
        scope.$apply( read );
      });

      // Initialize element to current value.
      element.html( ngModel.$viewValue );

      function read() {
        ngModel.$setViewValue( element.html() );
      }
    }
  };
});

kanbanBit.directive( 'enter', function() {
  return function( scope, element, attrs ) {
    element.bind( 'mouseenter', function() {
      element.addClass( attrs.enter );
      scope.$apply( attrs.execute );
    });
  };
});

kanbanBit.directive( 'leave', function() {
  return function( scope, element, attrs ) {
    element.bind( 'mouseleave', function() {
      element.removeClass( attrs.enter );
    });
  };
});

kanbanBit.directive( 'debug', function() {
  return function( scope, element, attrs ) {
    element.bind( 'click', function() {
      console.log( 'hello' );
      console.log( scope.boards[0].cards[ scope.boards[0].cards.length - 1 ].text );
    });
  };
});
