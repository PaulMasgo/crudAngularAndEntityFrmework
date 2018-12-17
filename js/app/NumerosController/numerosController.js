let apinum = 'http://localhost:4498/Api/Numeros';
angular.module('persona')
    .controller('Numeroscontroller', function($scope, $http, $routeParams) {
        $scope.TodosNum;
        $scope.listarNum = () => {
            $http.get(`${apinum}/${$routeParams.id}`).then(
                result => $scope.TodosNum = result.data
            )
        }
    })