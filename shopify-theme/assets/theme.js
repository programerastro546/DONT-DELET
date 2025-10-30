/**
 * PromptFolio Hub - Theme JavaScript
 * Optimized for Performance and Accessibility
 */

(function() {
  'use strict';

  // Lazy Load Images
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  // Add to Cart Functionality
  function initAddToCart() {
    document.querySelectorAll('.product-form').forEach(form => {
      form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const button = form.querySelector('button[type="submit"]');
        const originalText = button.textContent;

        button.disabled = true;
        button.textContent = 'Adding...';

        try {
          const response = await fetch(window.theme.routes.cart_add_url, {
            method: 'POST',
            body: formData
          });

          if (!response.ok) {
            throw new Error('Failed to add to cart');
          }

          const data = await response.json();

          // Update cart count
          updateCartCount();

          // Show success message
          showNotification('Added to cart!', 'success');

          button.textContent = originalText;
          button.disabled = false;
        } catch (error) {
          console.error('Error:', error);
          showNotification('Failed to add to cart', 'error');
          button.textContent = originalText;
          button.disabled = false;
        }
      });
    });
  }

  // Update Cart Count
  async function updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      const countElement = document.getElementById('cart-count');
      if (countElement) {
        countElement.textContent = cart.item_count;
      }
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  }

  // Show Notification
  function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg text-white shadow-lg transition-all duration-300 ${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
    notification.textContent = message;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
      notification.style.opacity = '1';
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(400px)';
      notification.style.opacity = '0';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Mobile Menu Toggle
  function initMobileMenu() {
    const button = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    if (button && menu) {
      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('hidden');
      });
    }
  }

  // Predictive Search
  function initPredictiveSearch() {
    const searchInput = document.querySelector('input[type="search"]');

    if (!searchInput) return;

    let timeout;

    searchInput.addEventListener('input', function() {
      clearTimeout(timeout);

      timeout = setTimeout(async () => {
        const query = this.value.trim();

        if (query.length < 2) return;

        try {
          const response = await fetch(`${window.theme.routes.predictive_search_url}?q=${encodeURIComponent(query)}&resources[type]=product&resources[limit]=5`);
          const data = await response.json();

          // Display search results
          displaySearchResults(data.resources.results.products);
        } catch (error) {
          console.error('Search error:', error);
        }
      }, 300);
    });
  }

  // Display Search Results
  function displaySearchResults(products) {
    // Implementation would depend on your search UI
    console.log('Search results:', products);
  }

  // Accessibility: Keyboard Navigation
  function initKeyboardNavigation() {
    // Trap focus in modals
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        const modal = document.querySelector('.modal:not(.hidden)');
        if (modal) {
          modal.classList.add('hidden');
        }
      }
    });
  }

  // Performance: Debounce Function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Performance: Throttle Function
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Initialize all functions when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initLazyLoading();
    initAddToCart();
    initMobileMenu();
    initPredictiveSearch();
    initKeyboardNavigation();
    updateCartCount();
  }

  // Expose utility functions
  window.PromptFolioTheme = {
    showNotification,
    updateCartCount,
    debounce,
    throttle
  };
})();
