kanbanBit.factory( 'Boards', function() {
  var Boards = [
    {
      cards: [
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
      ]
    },
    {
      cards: [
        {
          title: 'Start of Board 2',
          text: 'Board 2 Card 1.'
        },
        {
          title: 'HELLO',
          text: 'Well this was a very unproductive day.'
        }
      ]
    },
    {
      cards: [
        {
          title: 'Board 3, here we go!',
          text: 'The Portrait of the Artist as a Jungian Man'
        },
        {
          title: 'Contemporary Science Fiction',
          text: 'Lasers! Pew! Pew! Pew!'
        }
      ]
    }
  ];

  return Boards;
});

kanbanBit.controller( 'BoardCtrl', [ '$scope', 'Boards', function( $scope, Boards ) {
  $scope.boards = Boards;
}]);
