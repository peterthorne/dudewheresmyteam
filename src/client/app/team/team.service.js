app.service('teamService', function($http, $location){
    this.getTeamMember = function(memberId) {        
        var param = 'http://'+$location.host()+':3000/teammembers/'+memberId;         
        return $http.get(param);
    },
    this.getAllTeamMembers = function(){        
        console.log();
        var param = 'http://'+$location.host()+':3000/teammembers/';         
        return $http.get(param);
    },
    this.saveTeamMember = function(member) {
        var param = 'http://'+$location.host()+':3000/teammembers/'+member.id;         
        return $http.put(param, member);
    }
});