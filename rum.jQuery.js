(function($){
  $.fn.populateRum = function(){
          return this.each(function(){
        new populaterumIcon(this).init();
      });
  }


  var defaults={
    fail : "epicons-fail",
    fill: null,
  },populaterumIcon,setting;
  var rum = ['epicons']

  populaterumIcon = function(element){
    return{
      init: function(){
        var fn = this;
        fn._getSetting();
        fn._invalidIcon();
        //fn._changerumIcon(setting.rumIcon);

        //fn._createEvent();
        //fn._bindEvents();
      },
      _invalidIcon: function(){
        rumIcon = element.childNodes[0].getAttribute('xlink:href').substring(1);
        if(!$('#'+rumIcon).length){
          console.log("No rumIcon found. Check data-id");
          element.childNodes[0].setAttribute('xlink:href', '#'+ setting.fail);
        }
      },
      _getSetting: function(){
        setting = $.extend({}, defaults);


      },
      _changerumIcon: function(rumIcon){  
        element.childNodes[0].setAttribute('xlink:href', '#'+rumIcon);
      },
      _bindEvents: function(){
        var fn = this;
        $(element).on('changerumIcon',function(e){
          var newrumIcon = $(element).attr('data-id');
          if(e.oldrumIcon != newrumIcon ){
            setting.rumIcon = newrumIcon;
            if(!$('#'+newrumIcon).length){
              setting.rumIcon = 'epicons-fail';
              console.log("No rumIcon found. Check data-id");
            }
            fn._changerumIcon(setting.rumIcon);
          }
        })
      },
      _createEvent: function(){
        var observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            if(mutation.attributeName=='data-id')
              $(mutation.target).trigger({type:'changerumIcon', oldrumIcon: mutation.oldValue});
          });    
        });
        var config = { attributes: true, attributeFilter: ['data-id'], attributeOldValue: true };
        observer.observe(element, config);
      }
    }
  }
    // $.ajax({
    //   type: "GET",
    //   url: "icons.xml#icons",
    //   dataType: "xml",
    //   success: function(data){
    //     //$('#icons').prepend($(data).find('#icons').html());
    //   },
    // }).done(function(){
    // });
        $('.rum').populateRum();
})(jQuery)