/**
 * Second Chance Developer Sponsorship Widget
 * Embeddable widget for all platforms (Next.js, WordPress, Drupal)
 */

(function() {
  'use strict';

  // Widget configuration
  const WIDGET_CONFIG = {
    apiUrl: 'https://api.example.com/sponsorship',
    defaultAmount: 50,
    defaultCurrency: '$',
    defaultFrequency: 'month',
    theme: 'default',
    showDescription: true
  };

  // Widget HTML template
  const WIDGET_TEMPLATE = `
    <div class="sc-widget-container" data-sc-widget="sponsorship">
      <div class="sc-widget-content">
        <div class="sc-widget-header">
          <h4 class="sc-widget-title">Sponsor a Second Chance Developer</h4>
        </div>
        <div class="sc-widget-body">
          <p class="sc-widget-description">Help someone rebuild their life through code</p>
          <div class="sc-widget-amount-selector">
            <label for="sc-amount">Monthly sponsorship amount:</label>
            <select id="sc-amount" class="sc-widget-select">
              <option value="25">$25/month</option>
              <option value="50" selected>$50/month</option>
              <option value="100">$100/month</option>
              <option value="custom">Custom amount</option>
            </select>
            <input type="number" id="sc-custom-amount" class="sc-widget-input" placeholder="Enter amount" style="display: none;">
          </div>
          <div class="sc-widget-actions">
            <button class="sc-widget-btn sc-widget-btn-primary" id="sc-sponsor-btn">
              Sponsor Now
            </button>
            <button class="sc-widget-btn sc-widget-btn-secondary" id="sc-learn-more-btn">
              Learn More
            </button>
          </div>
        </div>
        <div class="sc-widget-footer">
          <p class="sc-widget-note">Secure payments • Cancel anytime • Tax deductible</p>
        </div>
      </div>
    </div>
  `;

  // Widget CSS styles
  const WIDGET_STYLES = `
    .sc-widget-container {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      max-width: 400px;
      margin: 20px auto;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
      overflow: hidden;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      position: relative;
    }
    
    .sc-widget-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.05"><circle cx="30" cy="30" r="4"/></g></g></svg>');
      pointer-events: none;
    }
    
    .sc-widget-content {
      padding: 24px;
      position: relative;
      z-index: 1;
    }
    
    .sc-widget-header {
      margin-bottom: 16px;
    }
    
    .sc-widget-title {
      margin: 0;
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .sc-widget-body {
      margin-bottom: 20px;
    }
    
    .sc-widget-description {
      margin: 0 0 20px 0;
      text-align: center;
      font-size: 16px;
      opacity: 0.95;
      line-height: 1.5;
    }
    
    .sc-widget-amount-selector {
      margin-bottom: 20px;
    }
    
    .sc-widget-amount-selector label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      font-size: 14px;
    }
    
    .sc-widget-select,
    .sc-widget-input {
      width: 100%;
      padding: 12px;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      font-size: 16px;
      backdrop-filter: blur(10px);
    }
    
    .sc-widget-select:focus,
    .sc-widget-input:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.5);
      background: rgba(255, 255, 255, 0.15);
    }
    
    .sc-widget-select option {
      background: #333;
      color: white;
    }
    
    .sc-widget-input::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
    
    .sc-widget-actions {
      display: flex;
      gap: 12px;
      flex-direction: column;
    }
    
    .sc-widget-btn {
      padding: 14px 20px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: center;
      text-decoration: none;
      display: inline-block;
    }
    
    .sc-widget-btn-primary {
      background: rgba(255, 255, 255, 0.95);
      color: #667eea;
      box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
    }
    
    .sc-widget-btn-primary:hover {
      background: white;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
    }
    
    .sc-widget-btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.3);
    }
    
    .sc-widget-btn-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.5);
    }
    
    .sc-widget-footer {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .sc-widget-note {
      margin: 0;
      font-size: 12px;
      text-align: center;
      opacity: 0.8;
      line-height: 1.4;
    }
    
    @media (max-width: 480px) {
      .sc-widget-container {
        margin: 10px;
        max-width: none;
      }
      
      .sc-widget-content {
        padding: 20px;
      }
      
      .sc-widget-title {
        font-size: 18px;
      }
      
      .sc-widget-actions {
        gap: 10px;
      }
    }
  `;

  // Widget functionality
  class SponsorshipWidget {
    constructor(container, options = {}) {
      this.container = container;
      this.options = { ...WIDGET_CONFIG, ...options };
      this.init();
    }

    init() {
      this.injectStyles();
      this.render();
      this.bindEvents();
    }

    injectStyles() {
      if (!document.getElementById('sc-widget-styles')) {
        const style = document.createElement('style');
        style.id = 'sc-widget-styles';
        style.textContent = WIDGET_STYLES;
        document.head.appendChild(style);
      }
    }

    render() {
      this.container.innerHTML = WIDGET_TEMPLATE;
    }

    bindEvents() {
      const amountSelect = this.container.querySelector('#sc-amount');
      const customAmountInput = this.container.querySelector('#sc-custom-amount');
      const sponsorBtn = this.container.querySelector('#sc-sponsor-btn');
      const learnMoreBtn = this.container.querySelector('#sc-learn-more-btn');

      // Handle amount selection
      amountSelect.addEventListener('change', (e) => {
        if (e.target.value === 'custom') {
          customAmountInput.style.display = 'block';
          customAmountInput.focus();
        } else {
          customAmountInput.style.display = 'none';
        }
      });

      // Handle sponsor button click
      sponsorBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleSponsor();
      });

      // Handle learn more button click
      learnMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleLearnMore();
      });
    }

    handleSponsor() {
      const amountSelect = this.container.querySelector('#sc-amount');
      const customAmountInput = this.container.querySelector('#sc-custom-amount');
      const sponsorBtn = this.container.querySelector('#sc-sponsor-btn');
      
      let amount = amountSelect.value;
      if (amount === 'custom') {
        amount = customAmountInput.value || '50';
      }

      // Simulate processing
      const originalText = sponsorBtn.textContent;
      sponsorBtn.textContent = 'Processing...';
      sponsorBtn.disabled = true;

      setTimeout(() => {
        // In a real implementation, this would integrate with a payment processor
        alert(`Thank you for sponsoring $${amount}/month! This would redirect to a secure payment page.`);
        
        sponsorBtn.textContent = originalText;
        sponsorBtn.disabled = false;
      }, 2000);
    }

    handleLearnMore() {
      // In a real implementation, this could open a modal or redirect
      window.open('https://example.com/learn-more', '_blank');
    }
  }

  // Auto-initialization
  function initWidgets() {
    const containers = document.querySelectorAll('[data-sc-widget="sponsorship"]');
    containers.forEach(container => {
      if (!container.dataset.scInitialized) {
        const options = {
          amount: container.dataset.amount || WIDGET_CONFIG.defaultAmount,
          currency: container.dataset.currency || WIDGET_CONFIG.defaultCurrency,
          frequency: container.dataset.frequency || WIDGET_CONFIG.defaultFrequency,
          theme: container.dataset.theme || WIDGET_CONFIG.theme
        };
        
        new SponsorshipWidget(container, options);
        container.dataset.scInitialized = 'true';
      }
    });
  }

  // Manual initialization function
  window.SponsorshipWidget = SponsorshipWidget;
  window.initSponsorshipWidgets = initWidgets;

  // Auto-init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidgets);
  } else {
    initWidgets();
  }

  // Re-init on dynamic content changes
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        setTimeout(initWidgets, 100);
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

})();