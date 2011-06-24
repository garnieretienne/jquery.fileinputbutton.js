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
      'width'            : settings.width,
      'height'           : settings.height,
      'cursor'           : 'pointer'
    });
    $this.wrap(wrapper);

    // input position
    $this.css({
      'position'       : 'fixed',
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
      $this.parent().css('overflow', 'hidden');
    } else {
      $this.parent().css('background-color', 'grey');
    };

    // find the area
    var offset = $this.parent().offset();
    var areaXMin = offset.left;
    var areaYMin = offset.top;
    var areaXMax = areaXMin+$this.parent().width();
    var areaYMax = areaYMin+$this.parent().height();

    // move input button under mouse when in a fileinputbutton area
    $this.parent().mousemove(function(e) {
      var ajustTop = 10;
      var ajustLeft = 30;
      if ( areaXMin < e.pageX && areaXMax > e.pageX && areaYMin < e.pageY && areaYMax > e.pageY) {
        $this.css({
          'z-index' : '100',
          'top' :  e.pageY-ajustTop+'px',
          'left': (e.pageX-$this.width())+ajustLeft+'px'
        });
      } else {
        $this.css({
          'z-index' : '-100',
        });
      };
    });

  });

  };
})( jQuery );
