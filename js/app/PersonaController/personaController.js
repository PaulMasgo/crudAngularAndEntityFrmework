var api = 'http://localhost:4498/Api/Persona';
angular.module('persona')
    .controller('personaController', function($scope, $http, $routeParams) {

        $scope.txtBuscar = '';
        $scope.listarPersonas = [];
        $scope.Selec = $routeParams.id;
        $scope.Buscar = function() {

            $http.get(api + '?nombre=' + $scope.txtBuscar).then(function(response) {
                $scope.listarPersonas = response.data;
                //console.log($scope.listarPersonas);
            });
        }

        $scope.Todos;
        $scope.listar = () => {
            $http.get(api).then(
                result => $scope.Todos = result.data
            )
        }

        $scope.unaPersona = function(person) {
            console.log(person);
        };

        $scope.eliminar = (id) => {
            id = Number(id);
            $http.delete(`${api}/${id}`)
                .then(response => console.log(response.data));
            let eliminado = $scope.Todos.indexOf((item) => {
                return item.IDPersona === id;
            });
            $scope.Todos.splice(eliminado);
        };


        $scope.guardarPersona;
        $scope.Guardar = function() {
            $http.post(api, $scope.guardarPersona).then(
                function(response) {
                    $scope.guardarPersona = response;
                    console.log($scope.guardarPersona);
                }
            );
            $scope.Todos.push($scope.guardarPersona)
        };

        $scope.Actualizar;
        $scope.ActualizarPersona = (id) => {
            $scope.Actualizar.IDPersona = id;
            $http.put(api, $scope.Actualizar).then(
                function(response) {
                    $scope.Actualizar = response;
                    console.log($scope.Actualizar);
                    alert("Persona Actualizada");
                    document.location.href = "#!persona"
                })
        }
    });