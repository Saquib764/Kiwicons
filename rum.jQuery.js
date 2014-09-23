(function($){
  $.fn.populateRum = function(){
          return this.each(function(){
        new populaterumIcon(this).init();
      });
  }


  var defaults={
    rumIcon: "epicons-fail",
    fill: null,
  },populaterumIcon,setting;
  var rum = ['epicons']

  populaterumIcon = function(element){
    return{
      init: function(){
        var fn = this;
        fn._getSetting();
        fn._changerumIcon(setting.rumIcon);

        fn._createEvent();
        fn._bindEvents();
      },
      _getSetting: function(){
        setting = $.extend({}, defaults);

        rumIcon = $(element).data('id');

        if($('#'+rumIcon).length)
          setting.rumIcon = rumIcon;
        else
          console.log("No rumIcon found. Check data-id");
      },
      _changerumIcon: function(rumIcon){
        html = '<use xlink:href="#'+rumIcon+'" />';
        $(element).html(html);
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