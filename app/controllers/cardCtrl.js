kanbanBit.factory( 'Cards', function() {
  var Cards = [
    {
      title: 'title1',
      text: 'hello my name is steve'
    },
    {
      title: 'The Great Gatsby',
      text: 'It was the best of tines, it was the worst of rhymes.'
    },
    {
      title: 'A Practical Guide to Precision Sugar Dispensers of the 19th Century',
      text: 'I want to go to there.'
    }
  ];

  return Cards;
});

kanbanBit.controller( 'CardCtrl', function( $scope, Cards ) {
  $scope.cards = Cards;
  $scope.test = 'test';
});

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


kanbanBit.directive( 'card', function() {
  return {
    restrict: 'C',
    template: '<div class="card-title">' +
                '{{ card.title }}' +
              '</div>' +
              '<div class="card-text">' +
               '{{ card.text }}' +
              '</div>'
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
