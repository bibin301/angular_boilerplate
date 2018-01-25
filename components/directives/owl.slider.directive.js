;(function() {
  

  'use strict';


  /**
   * Owl slider directive
   *
   * Usage:
   * <div myslider>
   *   <ul class="slider">
   *     ...
   *   </ul>
   * </div>
   *
   * or
   *
   * <myslider>
   *   <ul class="slider">
   *     ...
   *   </ul>
   * </myslider>
   *
   * @url http://owlgraphic.com/owlcarousel/index.html#customizing
   * 
   */
  angular
    .module('OES')
    .directive('myslider', slider);

  function slider() {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'AE',
      link: function(scope, element, attrs) {

        // keyboard navigation
        $(document).keyup(function(i) {
          if (i.keyCode == 37) {
            $('.gallery').trigger('prev.owl.carousel');
          } else if (i.keyCode == 39) {
            $('.gallery').trigger('next.owl.carousel');
          }
        });

      }
    };

    return directiveDefinitionObject;
  }

})();