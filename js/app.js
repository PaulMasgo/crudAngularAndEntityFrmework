angular.module("persona", ["ngRoute"]);

angular.module("persona").config(function($routeProvider) {
    $routeProvider.when(
        "/persona", {
            templateUrl: "/js/app/PersonaController/CrudPersona.html",
            controller: "personaController"
        }
    ).when(
        "/persona/:id", {
            templateUrl: "/js/app/PersonaController/UpdatePersona.html",
            controller: "personaController"
        }
    ).when(
        "/descripcion", {
            templateUrl: "/js/app/DescripcionController/crudDescripcion.html",
            controller: "descripcioncontroller"
        }
    ).when(
        "/descripcion/:id", {
            templateUrl: "/js/app/DescripcionController/updateDescripcion.html",
            controller: "descripcioncontroller"
        }
    ).when(
        "/numeros/:id", {
            templateUrl: "/js/app/NumerosController/crudNumeros.html",
            controller: "Numeroscontroller"
        }
    ).otherwise({
        redirectTo: "/persona"
    });
});