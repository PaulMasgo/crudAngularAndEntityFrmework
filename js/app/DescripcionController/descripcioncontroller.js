let apidesc = 'http://localhost:4498/Api/Descripcion'

angular.module('persona')
    .controller('descripcioncontroller', function($scope, $http, $routeParams) {

        $scope.Selecdesc = $routeParams.id;
        $scope.guardaDescripcion;
        $scope.GuardarDesc = function() {
            $http.post(apidesc, $scope.guardaDescripcion).then(
                function(response) {
                    $scope.guardaDescripcion = response;
                    console.log($scope.guardaDescripcion);
                }
            );
        };

        $scope.TodosDesc;
        $scope.listardesc = () => {
            $http.get(apidesc).then(
                result => $scope.TodosDesc = result.data
            )
        };

        $scope.eliminardesc = (id) => {
            id = Number(id);
            $http.delete(`${apidesc}/${id}`)
                .then(response => console.log(response.data));
            let eliminado = $scope.TodosDesc.indexOf((item) => {
                return item.IDPersona === id;
            });
            $scope.TodosDesc.splice(eliminado);
        };

        $scope.Actualizardesc;
        $scope.ActualizarDescripcion = (id) => {
            $scope.Actualizardesc.IDDescripcion = id;
            $http.put(apidesc, $scope.Actualizardesc).then(
                function(response) {
                    $scope.Actualizardesc = response;
                    console.log($scope.Actualizardesc);
                    alert("Descripcion Actualizada");
                    document.location.href = "#!descripcion"
                })
        };
    })