app.controller('teamController',  
  function TeamController($scope, $http, $interval, $filter, teamService) {

    var loadData = function() {
      teamService.getAllTeamMembers().then(
        function onResponse(response) {
          $scope.team = response.data;
          console.log("getAllTeamMembers response[0]:" + response.data[0]);
        },
        function onError(reason){
          console.log("getAllTeamMembers error:" + error);
        }
      );
    }
    
    var init = function() {      
      $scope.message = "Dude Where's My Team?";
      $scope.tools = ["work", "home", "offwork", "course"];
      $scope.currentToolIndex = 0;
      $scope.active = false;
      $scope.date = Date.now();
      $scope.workdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
      $scope.jsonUrl = "";
      $scope.refresh = false;
      
      loadData();
    }();

    $interval(function () {
      if ($scope.refresh) {
        $scope.date = Date.now();
        loadData();
      }
    }, 10000, 0, false)

    $scope.activateTool = function () {
      $scope.active = true;
    };

    $scope.deactivateTool = function () {
      $scope.active = false;
    };

    $scope.applyTool = function (member, block) {
      if ($scope.active) {
        block.location = $scope.tools[$scope.currentToolIndex];
        teamService.saveTeamMember(member);
      }
    };

    $scope.selectTool = function (toolIndex) {
      $scope.currentToolIndex = toolIndex;
    }
  }
);