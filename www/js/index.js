function redirect_handler(event){	
	jQuery(event.currentTarget.getAttribute('href')+' [data-role=listview] li[reference="'+event.currentTarget.getAttribute('point-to')+'"]').show();
	jQuery(event.currentTarget.getAttribute('href')+' [data-role=listview] li[reference!="'+event.currentTarget.getAttribute('point-to')+'"]').hide()
}

$('[href=#level-category]').bind('click',redirect_handler);
$('[href=#level-sub-category]').bind('click',redirect_handler);
$('[href=#level-video]').bind('click',redirect_handler);


//var app = {
//    initialize: function() {
//        this.bind();
//    },
//    bind: function() {
//        document.addEventListener('deviceready', this.deviceready, false);
//    },
//    deviceready: function() {
//       $('[href=#level-category]').bind('click',redirect_handler);
//    },
//    redirect_handler: function(event){
//    	alert(event.target);
//    }
//};
