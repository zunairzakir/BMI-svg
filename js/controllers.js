angular.module('starter.controllers', [])

    .controller('DashCtrl',function($scope,$ionicScrollDelegate){
        $scope.heightInMeter = [];
        $scope.weightInKilogram = [];
        $scope.changeHeightScaleCM = true;
        $scope.changeWeightScaleKG = true;
        $scope.changeHeightScaleCMFill='#00BAFF';
        $scope.changeHeightScaleKGFill='#FF7400';
        $scope.changeHeightScaleFTFill='grey';
        $scope.changeHeightScaleLBFill='grey';
        $scope.tranform = -80+"deg";
        $scope.BMI="0"+0;
        $scope.flag=false;
        $scope.clickFill1 = "url(#SVGID_10_)";
        $scope.clickFill = "url(#SVGID_12_)";


        $scope.changeHeightScale = function(heightIndexValue){
            $scope.clickFill1 = "lightgrey";
            setTimeout(function(){
                $scope.clickFill1 = "url(#SVGID_10_)";
                if($scope.changeHeightScaleCMFill=='grey'){
                    $scope.changeHeightScaleCM = true;
                    $scope.changeHeightScaleFT = false;
                    $scope.changeHeightScaleCMFill='#00BAFF';
                    $scope.changeHeightScaleFTFill='grey';
                    $scope.heightUnit='cm';
                    $scope.heightMeterDistance();


                }
                else if($scope.changeHeightScaleCMFill=='#00BAFF'){
                    $scope.changeHeightScaleCM = false;
                    $scope.changeHeightScaleFT = true;
                    $scope.changeHeightScaleCMFill='grey';
                    $scope.changeHeightScaleFTFill='#00BAFF';
                    $scope.heightUnit='Ft in';
                    $scope.heightMeterDistance();
                }
                $scope.$digest();
            },1000);

        };

        $scope.changeWeightScale = function(weightIndexValue){
            $scope.clickFill = "lightgrey";
            setTimeout(function(){
                $scope.clickFill = "url(#SVGID_12_)";
                if($scope.changeHeightScaleKGFill=='grey'){
                    $scope.changeWeightScaleKG = true;
                    $scope.changeWeightScaleLB = false;
                    $scope.changeHeightScaleKGFill='#FF7400';
                    $scope.changeHeightScaleLBFill='grey';
                    $scope.weightUnit='kg';
                    $scope.weightMeterDistance();
                }
                else if($scope.changeHeightScaleKGFill=='#FF7400'){
                    $scope.changeWeightScaleKG = false;
                    $scope.changeWeightScaleLB = true;
                    $scope.changeHeightScaleKGFill='grey';
                    $scope.changeHeightScaleLBFill='#FF7400';
                    $scope.weightUnit = 'lb';
                    $scope.weightMeterDistance();
                }
                $scope.$digest();
            },1000)

        };
        $scope.convertFeet = function(input){
            return ((Math.floor(input/12))+"'"+(input % 12))
        };
        $scope.convertFeet(0);
        setTimeout(function(){
            var scrollid= document.getElementById('scrollId').offsetHeight;
            var scrollid3= document.getElementById('scrollId3').offsetHeight;
            var gTop= document.getElementById('gelement').getBoundingClientRect().top;
            var gHeight= document.getElementById('gelement').getBoundingClientRect().height;
            var gLeft= document.getElementById('gelement').getBoundingClientRect().left;
            var gTotal= gTop + gHeight - scrollid;
            var gTotal3= gTop + gHeight - scrollid3;

            scrollId.style.top=(gTotal) +"px";
            scrollId.style.position="fixed";
            scrollId.style.left=gLeft+"px";
            scrollId.style.right=gLeft+"px";

            scrollId3.style.top=(gTotal) +"px";
            scrollId3.style.position="fixed";
            scrollId3.style.left=gLeft+"px";
            scrollId3.style.right=gLeft+"px";

            var scrollid2= document.getElementById('scrollId2').offsetHeight;
            var scrollid4= document.getElementById('scrollId4').offsetHeight;
            var gTop2= document.getElementById('gelement2').getBoundingClientRect().top;
            var gHeight2= document.getElementById('gelement2').getBoundingClientRect().height;
            var gLeft2= document.getElementById('gelement2').getBoundingClientRect().left;
            var gTotal2= gTop2 + gHeight2 - scrollid2;
            var gTotal4= gTop2 + gHeight2 - scrollid4;

            scrollId2.style.top=gTotal2+"px";
            scrollId2.style.position="fixed";
            scrollId2.style.left=gLeft2+"px";
            scrollId2.style.right=gLeft2+"px";

            scrollId4.style.top=gTotal2+"px";
            scrollId4.style.position="fixed";
            scrollId4.style.left=gLeft2+"px";
            scrollId4.style.right=gLeft2+"px";

            hideSplash();

        }, 2000);

        var hideSplash = function(){
          document.getElementById('splashScreen').style.opacity=0;
        };


        for(var i=1;i<=300;i++){
            $scope.heightInMeter.push(i+"cm");
            $scope.weightInKilogram.push(i+"kg");
        } 
        $scope.heightMeterDistance = function (){
            $scope.heightMeter10_5_1 =[];var heightNumber = 0;
            if($scope.changeHeightScaleCM == true){
                var distanceIncrease = 240;
                for(i=0; i<distanceIncrease;i++){
                    if(i%8 == 0){
                        $scope.heightMeter10_5_1.push({fontSize: 20,heightNum : heightNumber});
                        heightNumber += 10;
                    }
                    if(i%4 == 0 && i%8 != 0){
                        $scope.heightMeter10_5_1.push({fontSize: 15});

                    }

                    $scope.heightMeter10_5_1.push({fontSize: 10});

                }
            }
            if($scope.changeHeightScaleFT == true){
                var heightNumber = 0;
                var distanceIncrease = 169;
                for(i=0; i<distanceIncrease;i++){
                    if(i%10 == 0){
                        $scope.heightMeter10_5_1.push({fontSize: 20,heightNum : heightNumber});
                        heightNumber += 10;
                    }
                    if(i%5 == 0 && i%10 != 0){
                        $scope.heightMeter10_5_1.push({fontSize: 15});

                    }

                    $scope.heightMeter10_5_1.push({fontSize: 10});

                }
            }
        }
        $scope.weightMeterDistance = function (){
            $scope.weightMeter10_5_1 =[];
            var weightNumber = 0;
            if($scope.changeWeightScaleKG == true){
                var distanceIncrease = 320;
                for(i=0; i<distanceIncrease;i++){
                    if(i%8 == 0){
                        $scope.weightMeter10_5_1.push({fontSize: 20,weightNum : weightNumber});
                        weightNumber += 10;
                    }
                    if(i%4 == 0 && i%8 != 0){
                        $scope.weightMeter10_5_1.push({fontSize: 15});

                    }
                    $scope.weightMeter10_5_1.push({fontSize: 10});

                }
            }
            if($scope.changeWeightScaleLB == true){
                var weightNumber = 0;
                var distanceIncrease = 300;
                for(i=0; i<distanceIncrease;i++){
                    if(i%8 == 0){
                        $scope.weightMeter10_5_1.push({fontSize: 20,weightNum : weightNumber});
                        weightNumber += 10;
                    }
                    if(i%4 == 0 && i%8 != 0){
                        $scope.weightMeter10_5_1.push({fontSize: 15});

                    }
                    $scope.weightMeter10_5_1.push({fontSize: 10});

                }
            }
        };

        $scope.heightMeterDistance();
        $scope.weightMeterDistance();

        $scope.getScrollPosition = function(Scale){

            var element = null;
            var bodyWidth = document.body.offsetWidth / 2;
            [].forEach.call(document.getElementsByClassName(Scale), function(val, key){
                if(!element && val.getBoundingClientRect().left >= bodyWidth){
                    element = val
                }
            });
            $scope.tranformDegree = -80;
            if($scope.heightIndex && $scope.weightIndex){

                if($scope.BMI >40){
                    $scope.tranformDegree = 80;
                    $scope.tranform = $scope.tranformDegree+"deg";
                }
                else if($scope.BMI <= 0){
                    $scope.tranformDegree = -80;
                    $scope.tranform = $scope.tranformDegree+"deg";
                }

                if($scope.BMI >0 && $scope.BMI <=40){
                    $scope.tranformDegree += $scope.BMI*4;
                    $scope.tranform = $scope.tranformDegree+"deg";
                }

            }


            if($scope.changeHeightScaleFT == true){
                if(Scale == "heightClassFt"){
                    $scope.heightUnit = "Ft in";
                    if(!element){
                        return;
                    }
                    $scope.heightIndex = angular.element(element).scope().$index -1;
                    $scope.$digest();
                }
            }
            if($scope.changeWeightScaleLB == true){
                    debugger;
                    if(Scale == "weightClassLb"){
                        $scope.weightUnit = "Lb";
                        if(!element){
                            return;
                        }
                        $scope.weightIndex = angular.element(element).scope().$index -1;
                        $scope.$digest();
                    }
                }

            if($scope.changeWeightScaleKG == true){
                if(Scale == "weightClass"){
                    $scope.weightUnit = "kg";
                    if(!element){
                        return;
                    }
                    $scope.weightIndex = angular.element(element).scope().$index -1;
                    $scope.$digest();
                }
            }
            if($scope.changeHeightScaleCM == true){
                    if(!element){
                        return;
                    }
                    if(Scale == "heightClass"){
                        $scope.heightUnit = "cm";
                        if(!element){
                            return;
                        }
                        $scope.heightIndex = angular.element(element).scope().$index -1;
                        $scope.$digest();
                    }
                }

            if(($scope.changeHeightScaleFT == true || $scope.changeWeightScaleLB == true ) && ($scope.heightIndex && $scope.weightIndex)){
                if($scope.changeWeightScaleKG == true ){
                    var heightIndexArray = $scope.convertFeet($scope.heightIndex).split("'");
                    var heightIndexFeet = heightIndexArray[0]*30.48;
                    var heightIndexInch = heightIndexArray[1]*2.54;
                    var heightIndex = (heightIndexFeet+heightIndexInch)/100;
                    $scope.BMI =Math.round(($scope.weightIndex)/(heightIndex * heightIndex));
                }
                else if($scope.changeWeightScaleLB == true){
                    var heightIndexArray = $scope.convertFeet($scope.weightIndex).split("'");
                    var heightIndexFeet = heightIndexArray[0]*30.48;
                    var heightIndexInch = heightIndexArray[1]*2.54;
                    var heightIndex = (heightIndexFeet+heightIndexInch)/100;
                    $scope.BMI =Math.round(($scope.weightIndex*2.20462)/(heightIndex * heightIndex));
                }
            }
            if(($scope.changeHeightScaleCM == true || $scope.changeWeightScaleKG == true ) && ($scope.heightIndex && $scope.weightIndex)){
                if($scope.changeWeightScaleFT == true){
                    var heightIndex = $scope.heightIndex*0.0328084/100;
                    $scope.BMI =Math.round($scope.weightIndex/(heightIndex * heightIndex));
                }
                if($scope.changeHeightScaleCM == true ){
                    var heightIndex = $scope.heightIndex/100;
                    $scope.BMI =Math.round($scope.weightIndex/(heightIndex * heightIndex));
                }
            }
            if($scope.BMI > 40){
                $scope.BMI = 40;
            }
            if($scope.BMI < 1 || $scope.BMI < 0){
                $scope.BMI = 00;
            }
            if($scope.BMI < 10){
                $scope.BMI = "0" + $scope.BMI;
            }
            if($scope.BMI < 18.5){
                $scope.BMIinfo = "Underweight";
                $scope.BMIinfoAlert = "#FBCF40";
            }
            if($scope.BMI >= 18.5 && $scope.BMI < 24.9){
                $scope.BMIinfo = "Normal weight";
                $scope.BMIinfoAlert = "green";
            }
            if($scope.BMI >=25 && $scope.BMI < 29.9){
                $scope.BMIinfo = "Overweight";
                $scope.BMIinfoAlert = "#FF7400";
            }
            if($scope.BMI >=30){
                $scope.BMIinfo = "Obesity";
                $scope.BMIinfoAlert = "red";
            }


        }

    }).directive('setValues', function() {

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
