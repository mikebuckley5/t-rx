app.controller('fillQueueViewCtrl', function ($scope, $state, $modal, $stateParams, orderSrvc) {
    var id = $stateParams.id;
    //Get the specific order that will be filled
    (function () {
        orderSrvc.getOrderById(id).then(function (response) {
            $scope.order = response;
            $scope.order.filled_by = "";
            //Check to see if patient needs snap cap & alert
            var snapCap = response.patient.snap_cap;
            if (snapCap === 'yes') {
                $scope.showSnapCap = true;
            } else {
                $scope.showSnapCap = false;
            }
            //NDC verification fields & testing
            $scope.verifyField = true;
            $scope.verify = function (typedNdc) {
                if (response.drug.ndc === typedNdc) {
                    $scope.verifiedTrue = true;
                    $scope.verifyField = false;
                    $scope.verifiedFalse = false;
                } else if (response.drug.ndc !== typedNdc) {
                    $scope.verifiedFalse = true;
                }
            };
            //Initials field
            $scope.viewInitials = true;
            $scope.initialed = function (initials) {
                if (initials.length > 1) {
                    $scope.initialsTyped = true;
                    $scope.viewInitials = false;
                } else {
                    $scope.initialWarning = true;
                }
            };
        });
    }());
    //Update order info in database once verified
    $scope.updateOrder = function (order) {
        order.filled_at = new Date();
        order.filled = true;
        orderSrvc.updateOrder(id, order).then(function (response) {
            $state.reload('fillqueue');
            return response;
        });
    };
    ////////////////////////
    /////////MODAL/////////
    //////////////////////

    $scope.editOrder = function () {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: '../templates/editOrderTmpl.html',
            controller: 'editOrderCtrl',
            size: 'lg'
        });
    };
 });