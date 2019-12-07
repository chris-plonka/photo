$(document).ready(function() {



(function(){
      var groupsArr = [];
      $('[rel^="ilightbox["]').each(function () {
        var group = this.getAttribute("rel");
        $.inArray(group, groupsArr) === -1 && groupsArr.push(group);
      });
      $.each(groupsArr, function (i, groupName) {
        $('[rel="' + groupName + '"]').iLightBox({  });
      });
    })();
  

  'use strict';

  
  
  
  
  
  // ========================
  // For Fade-in effect
  // ========================

  $('html').removeClass('fade-out');

  // =================
  // Responsive videos
  // =================

  $('.post-content').fitVids({
    'customSelector': ['iframe[src*="ted.com"]']
  });

  // ===============
  // Off Canvas menu
  // ===============

  $('.off-canvas-toggle').click(function(e) {
    e.preventDefault();
    $('.off-canvas-container').toggleClass('is-active');
  });

});