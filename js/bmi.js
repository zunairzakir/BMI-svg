angular.module('BMI-svg',[])
    .controller('bmiCtrl',function($scope){
        $scope.heightInMeter = [];
        $scope.weightInKilogram = [];

        for(var i=1;i<=300;i++){
            $scope.heightInMeter.push(i+"cm");
            $scope.weightInKilogram.push(i+"kg");
        }
        console.log($scope.heightInMeter)
        console.log($scope.weightInKilogram)

        $scope.heightMeterDistance = function (distance){
            $scope.heightMeter10_5_1 =[];
//            $scope.heightMeter5 =[]; $scope.heightMeter1 =[];
            var distanceIncrease = 80;
            /*var distanceIncrease = 80;
            var Lx1Initial = 134.366; var Lx2Initial = Lx1Initial;
            var Mx1Initial = 181.123; var Mx2Initial = Mx1Initial;
            var Sx1Initial = 125.015; var Sx2Initial = Sx1Initial;
            var Lx1 = 93.514; var Lx2 = Lx1;var Ly1 = 747.207;var Ly2 = 706.879;
            var Mx1 = 93.513;var Mx2 = Mx1;var My1 = 747.207;var My2 = 716.273;
            var Sx1 = 9.352;var Sx2 = Sx1;var Sx1after5 = 18.703;var Sx2after5 = Sx1after5;var Sy1 = 747.207;var Sy2 = 725.668;

            $scope.heightMeter10.push({x1:Lx1Initial,x2:Lx2Initial,y1:Ly1,y2:Ly2});
            $scope.heightMeter5.push({x1:Mx1Initial,x2:Mx1Initial,y1:My1,y2:My2});
            $scope.heightMeter1.push({x1:Sx1Initial,x2:Sx1Initial,y1:Sy1,y2:Sy2});*/

            for(i=0; i<distanceIncrease;i++){
                if(i%10 == 0){
                    $scope.heightMeter10_5_1.push({fontSize: 40});
                   /* Lx1Initial += Lx1;
                    Lx2Initial += Lx1;*/
                }
                if(i%5 == 0){
                    $scope.heightMeter10_5_1.push({fontSize: 30});

                }
                $scope.heightMeter10_5_1.push({fontSize: 20});

            }
        }
        $scope.weightMeterDistance = function (distance){
            $scope.weightMeter10 =[]; $scope.weightMeter5 =[]; $scope.weightMeter1 =[];
            var distanceIncrease = 80;
            var Lx1Initial = 134.366; var Lx2Initial = Lx1Initial;
            var Mx1Initial = 181.123; var Mx2Initial = Mx1Initial;
            var Sx1Initial = 125.015; var Sx2Initial = Sx1Initial;
            var Lx1 = 93.514; var Lx2 = Lx1;var Ly1 = 912.945;var Ly2 = 872.617;
            var Mx1 = 93.513;var Mx2 = Mx1;var My1 = 912.945;var My2 = 882.012;
            var Sx1 = 9.352;var Sx2 = Sx1;var Sx1after5 = 18.703;var Sx2after5 = Sx1after5;var Sy1 = 912.945;var Sy2 = 891.406;

            $scope.weightMeter10.push({x1:Lx1Initial,x2:Lx2Initial,y1:Ly1,y2:Ly2});
            $scope.weightMeter5.push({x1:Mx1Initial,x2:Mx1Initial,y1:My1,y2:My2});
            $scope.weightMeter1.push({x1:Sx1Initial,x2:Sx1Initial,y1:Sy1,y2:Sy2});

            for(i=0; i<distanceIncrease;i++){
                if(i%10 == 0){
                    $scope.weightMeter10.push({x1:(Lx1Initial+Lx1),x2:(Lx2Initial+Lx1),y1:Ly1,y2:Ly2});
                    Lx1Initial += Lx1;
                    Lx2Initial += Lx1;
                }
                if(i%5 == 0){
                    $scope.weightMeter5.push({x1:(Mx1Initial+Mx1),x2:(Mx1Initial+Mx1),y1:My1,y2:My2});
                    Mx1Initial += Mx1;
                    Mx2Initial += Mx1;
                }
                $scope.weightMeter1.push({x1:(Sx1Initial+Sx1),x2:(Sx1Initial+Sx1),y1:Sy1,y2:Sy2});
                Sx1Initial += Sx1;
                Sx2Initial += Sx1;
            }
        }
        $scope.heightMeterDistance(5);
//        $scope.weightMeterDistance(5);

    })
    .directive('setValues', function() {

        return {
            restrict : 'A',
            scope : {
                'obj' : '='
            },
            link: function(scope, element, attr) {
                element.attr('x1', scope.obj.x1);
                element.attr('y1', scope.obj.y1);
                element.attr('x2', scope.obj.x2);
                element.attr('y2', scope.obj.y2);
             }
        }
        /*link: function(scope, element, attr) {

         }*/
    });
