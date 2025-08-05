(function($, Drupal) {
  'use strict';

  Drupal.behaviors.secondChanceTheme = {
    attach: function(context, settings) {
      // Platform switching functionality
      $('.platform-btn', context).once('platform-switch').on('click', function(e) {
        e.preventDefault();
        
        const platform = $(this).data('platform');
        const platformName = platform === 'nextjs' ? 'Next.js' : 
                           platform === 'wordpress' ? 'WordPress' : 'Drupal';
        
        // Update active state
        $('.platform-btn').removeClass('active');
        $(this).addClass('active');
        
        // Update platform indicators
        $('.platform-indicator').text('Platform: ' + platformName);
        $('.footer-platform').text('Demo Platform: ' + platformName);
        
        // Update widget note
        $('.widget-note').text('This widget can be embedded on any ' + platformName + ' site');
        
        // Show notification
        if (typeof Drupal.announce !== 'undefined') {
          Drupal.announce('Switched to ' + platformName + ' demo view');
        } else {
          alert('Switching to ' + platformName + ' demo view!');
        }
      });

      // Smooth scrolling for anchor links
      $('a[href^="#"]', context).once('smooth-scroll').on('click', function(e) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
          e.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 100
          }, 800);
        }
      });

      // Add scroll animation to feature items
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });

        $('.feature-item', context).once('scroll-animation').each(function() {
          this.style.opacity = '0';
          this.style.transform = 'translateY(30px)';
          this.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.observe(this);
        });
      }

      // Widget demo interaction
      $('.widget-content button', context).once('widget-demo').on('click', function(e) {
        e.preventDefault();
        
        // Simple demo interaction
        const $button = $(this);
        const originalText = $button.text();
        
        $button.text('Processing...').prop('disabled', true);
        
        setTimeout(function() {
          $button.text('Thank you!').css('background', '#10b981');
          
          setTimeout(function() {
            $button.text(originalText).prop('disabled', false).css('background', '');
          }, 2000);
        }, 1500);
      });
    }
  };

})(jQuery, Drupal);