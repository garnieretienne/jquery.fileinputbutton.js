(function( $ ){

  $.fn.fileinputbutton = function( options ) { 

  // default options
  var settings = {
    'image'  : '',
    'width'  : '100px',
    'height' : '20px',
    'debug'  : false
  }

  return this.each(function() {

    // merge given options with default
    if ( options ) { 
      $.extend( settings, options );
    }

    var $this = $(this);

    // define button
    wrapper = $('<div class="fileinputbutton">').css({
      'background'       : 'url("'+settings.image+'") no-repeat center center',
      'position'         : 'relative',
      'overflow'         : 'hidden',
      'width'            : settings.width,
      'height'           : settings.height,
      'cursor'           : 'pointer',
    });
    $this.wrap(wrapper);

    // input position
    $this.css({
      'position'       : 'absolute',
      'cursor'         : 'pointer',
      'top'            : '0px',
      'right'          : '0px',
    });

    // hide input if debug = false
    if (!settings.debug) {
      $this.css({
        'opacity'        : '0', // transparency
        'filter'         : 'alpha(opacity=0)' // transparency for ie < 9
      });
    } else {
      $this.parent().css('background-color', 'grey');
    };

    // move input button under mouse when in a fileinputbutton area
    $this.parent().mousemove(function(e) {
      var parentWidth = $this.parent().width();
      var top = this.offsetTop;
      var left = this.offsetLeft;
      var ajustTop = -10; // ajust to mouve input browse button under mouse
      var ajustRight = -20; // ajust to mouve input browse button under mouse
      var parentPosition = $this.parent().position();
      $this.css({
        'top' :  e.pageY - parentPosition.top + ajustTop +'px',
        'right': parentWidth - (e.pageX - parentPosition.left) + ajustRight +'px'
      });
    });

  });

  };
})( jQuery );
