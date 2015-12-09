describe("probando id del usuario", function()
{
    beforeEach(module("app.controllers"));
 
    describe("usuarioCtrl", function()
    {
        var scope, ctrl;
 
        beforeEach(inject(function($rootScope, $controller)
        {
            scope = $rootScope.$new();
            ctrl = $controller("usuarioCtrl", {$scope:scope});
        }));
 
        it("debe estar definida una variable usuario", function()
        {
            expect(scope.usuario).toEqual("1936941186/CC");
        })
    })
})