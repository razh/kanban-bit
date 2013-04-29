var kanbanBit = angular.module( 'kanbanBit', [] );

kanbanBit.config(function ( $routeProvider ) {
  $routeProvider
    .when( '/',
    {
      template: 'Hello world, how are you doing today?'
    });
});
