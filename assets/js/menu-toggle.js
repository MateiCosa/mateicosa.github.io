// Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const body = document.body;
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    body.appendChild(overlay);
    
    // Function to initialize menu toggle after sidebar is loaded
    function initializeMenuToggle() {
        const sidebar = document.getElementById('sidebar');
        
        if (!sidebar) {
            // If sidebar is not loaded yet, wait a bit and try again
            setTimeout(initializeMenuToggle, 100);
            return;
        }
        
        // Remove the original toggle button that main.js creates
        const originalToggle = sidebar.querySelector('.toggle');
        if (originalToggle) {
            originalToggle.remove();
        }
        
        // Ensure overlay is hidden initially
        overlay.classList.remove('active');
        
        // Toggle menu using the existing 'inactive' class
        function toggleMenu() {
            const isMobile = window.innerWidth <= 980;
            
            sidebar.classList.toggle('inactive');
            
            // Only show overlay on mobile when sidebar is open
            if (isMobile) {
                if (!sidebar.classList.contains('inactive')) {
                    overlay.classList.add('active');
                } else {
                    overlay.classList.remove('active');
                }
            } else {
                // Always hide overlay on desktop
                overlay.classList.remove('active');
            }
            
            // Update button text
            if (!sidebar.classList.contains('inactive')) {
                menuToggle.textContent = '✕';
            } else {
                menuToggle.textContent = '☰';
            }
        }
        
        // Event listeners
        menuToggle.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !sidebar.classList.contains('inactive')) {
                toggleMenu();
            }
        });
        
        // Close menu on window resize (if going to desktop)
        window.addEventListener('resize', function() {
            const isMobile = window.innerWidth <= 980;
            
            if (!isMobile) {
                // Hide overlay and close sidebar when going to desktop
                overlay.classList.remove('active');
                if (!sidebar.classList.contains('inactive')) {
                    sidebar.classList.add('inactive');
                    menuToggle.textContent = '☰';
                }
            }
        });
    }
    
    // Start trying to initialize the menu toggle
    initializeMenuToggle();
}); 