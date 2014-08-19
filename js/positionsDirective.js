(function(){
    angular.module('BMI-svg', [])
        .directive('x1Pos', function() {
            return {
                link: function(scope, element, attr) {
                    scope.attr = attr;
                }
            };
        })
        .directive('ngY1', function() {
            return {
                link : function(scope, element, attributes){
                    scope.$watch(scope.y1, function(value) {
                        element.attr('y1', value);
                    });
                }
            }
        })
        .directive('ngX2', function() {
            return {
                link : function(scope, element, attributes){
                    scope.$watch(scope.elem.x2, function(value) {
                        element.attr('x2', value);
                    });
                }
            }
        })
        .directive('ngY2', function() {
            return {
                link : function(scope, element, attributes){
                    scope.$watch(scope.elem.y2, function(value) {
                        element.attr('y2', value);
                    });
                }
            }
        })
})();