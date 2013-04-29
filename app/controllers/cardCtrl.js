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

kanbanBit.directive( 'card', function() {
  return {
    restrict: 'C',
    templateUrl: 'app/templates/card.html',

    link: function( scope, element, attrs ) {
      element.bind( 'click', function() {
        console.log( 'card: ' + element.attr( 'card' ) + ', ' + element.attr( 'board' ) );
      });
    }
  };
});

kanbanBit.directive( 'click', function() {
  return function( scope, element ) {
    element.bind( 'click', function() {
      element.attr( 'contenteditable', 'true' );
    });
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
