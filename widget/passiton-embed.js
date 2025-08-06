(function() {
  function createDonationWidget(config) {
    const {
      targetElementId = 'passiton-donate-widget',
      organizationId = '',
      defaultAmount = 25,
      color = '#3b82f6',
      buttonText = 'Donate',
      position = 'bottom-left'
    } = config || {};

    const container = document.getElementById(targetElementId) || document.body;
    
    const widgetHTML = `
      <div id="passiton-widget-container" style="
        position: ${container === document.body ? 'fixed' : 'relative'};
        ${position.includes('bottom') ? 'bottom: 20px;' : 'top: 20px;'}
        ${position.includes('left') ? 'left: 20px;' : 'right: 20px;'}
        z-index: 9999;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      ">
        <button id="passiton-donate-btn" style="
          background: linear-gradient(135deg, ${color}, #8b5cf6);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
          font-size: 16px;
        " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
          ${buttonText}
        </button>
        
        <div id="passiton-modal" style="
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          z-index: 10000;
        ">
          <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 95%;
            max-width: 600px;
            height: 95%;
            max-height: 800px;
            min-height: 600px;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          ">
            <iframe id="passiton-iframe" src="" style="
              width: 100%;
              height: 100%;
              border: none;
            "></iframe>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = widgetHTML;

    const donateBtn = document.getElementById('passiton-donate-btn');
    const modal = document.getElementById('passiton-modal');
    const iframe = document.getElementById('passiton-iframe');

    const widgetDomain = 'donation-one-phi.vercel.app';

    donateBtn.addEventListener('click', function() {
      const donationUrl = `https://${widgetDomain}/donation?amount=${defaultAmount}&org=${organizationId}`;
      iframe.src = donationUrl;
      modal.style.display = 'block';
    });

    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    window.addEventListener('message', function(event) {
      if (event.origin !== `https://${widgetDomain}`) return;

      if (event.data.type === 'donation_complete') {
        modal.style.display = 'none';
        alert('Thank you for your donation!');
      } else if (event.data.type === 'close_modal') {
        modal.style.display = 'none';
      }
    });
  }

  const PassItOnWidget = {
    init: createDonationWidget
  };

  if (typeof window !== 'undefined') {
    window.PassItOnWidget = PassItOnWidget;

    if (window.PassItOnConfig) {
      createDonationWidget(window.PassItOnConfig);
    } else {
      createDonationWidget();
    }
  }

  console.log('PassItOn Widget loaded');
})();