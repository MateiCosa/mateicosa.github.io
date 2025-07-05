// Sidebar Loader
document.addEventListener('DOMContentLoaded', function() {
    // Find the sidebar placeholder
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    
    if (sidebarPlaceholder) {
        // Load the sidebar content
        fetch('/components/sidebar.html')
            .then(response => response.text())
            .then(html => {
                sidebarPlaceholder.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading sidebar:', error);
                // Fallback: show a simple sidebar if loading fails
                sidebarPlaceholder.innerHTML = `
                    <div id="sidebar">
                        <div class="inner">
                            <nav id="menu">
                                <header class="major">
                                    <h2>Menu</h2>
                                </header>
                                <ul>
                                    <li><a href="/index.html">Home</a></li>
                                    <li><a href="/pages/projects.html">Projects</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                `;
            });
    }
}); 