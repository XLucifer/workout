function FitnessForm($scope) {
    $scope.invoice = {
        items: [{
            tipo:'',
            tempo:0,
            periodo:''
        }]
    };
     $scope.predicate = '-tempo';


    $scope.addItem = function() {
        $scope.invoice.items.push({
            tipo:'',
            tempo: '',
            periodo:''
        });
    },

    $scope.removeItem = function(index) {
        $scope.invoice.items.splice(index, 1);
    },

    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
            total += item.tempo;
        })

        return total;
    }
}