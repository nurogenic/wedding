angular.module('instagramTwitterImagesDirective', [])
    .factory('instagramResource', function(){
        var instagramClientID = "0f2af2b440684e2bb56c705c3cd8d867";

        return {
            getImages: function(url){ 
                return $.ajax(url+ "?client_id="+instagramClientID,{
                    method: "GET",
                    dataType: "jsonp",
                    jsonp : "callback"
                });  
            }
        };

    })
    .directive('instagramTwitterImages', ['instagramResource', 'initPhotoSwipeFromDOM', function(instagramResource,initPhotoSwipeFromDOM){
        function getUrl(tag){
            if(tag){
                return "https://api.instagram.com/v1/tags/"+tag+"/media/recent";
            }
            return false;
        }

        return {
            restrict: 'EA',
            scope: {
                tag: '@'
            },
            templateUrl: '_/templates/instagramTwitterImages.html',
            link: function(scope, element, attrs){
                scope.images = [];
                scope.randomClass = "random-classs-"+Math.ceil(Math.random()*2000);
                var tagUrl = getUrl(attrs.tag);

                if(tagUrl){
                    instagramResource.getImages(tagUrl).then(function(response){
                        if(attrs.cached){
                            for(var i =0, arr = attrs.cached.split(','), len=arr.length; i<len; i++ ){
                                scope.images.push({
                                    images: {
                                        standard_resolution:{
                                            url: '_/img/intagram/'+arr[i]+'.jpg'
                                        },
                                        thumbnail: {
                                            url: '_/img/intagram/'+arr[i]+'_thumb.jpg'
                                        }
                                    }
                                })
                            }
                        }
			if(response.data)
	                  scope.images = scope.images.concat(response.data);
                        initPhotoSwipeFromDOM('.'+scope.randomClass);
                        
                    }); 
                }
            
            }
        }
    }]);
