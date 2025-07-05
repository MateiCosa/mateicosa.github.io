// Sidebar Loader
document.addEventListener('DOMContentLoaded', function() {
    // Find the sidebar placeholder
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    
    if (sidebarPlaceholder) {
        // Determine the correct path for sidebar based on current page location
        const isInPages = window.location.pathname.includes('/pages/');
        const sidebarPath = isInPages ? '../components/sidebar.html' : 'components/sidebar.html';
        
        // Load the sidebar content
        fetch(sidebarPath)
            .then(response => response.text())
            .then(html => {
                // Adjust links based on current page location
                if (isInPages) {
                    html = html.replace('href="../index.html"', 'href="../index.html"');
                    html = html.replace('href="projects.html"', 'href="projects.html"');
                } else {
                    html = html.replace('href="../index.html"', 'href="index.html"');
                    html = html.replace('href="projects.html"', 'href="pages/projects.html"');
                }
                
                sidebarPlaceholder.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading sidebar:', error);
                // Fallback: show a simple sidebar if loading fails
                const homeLink = isInPages ? '../index.html' : 'index.html';
                const projectsLink = isInPages ? 'projects.html' : 'pages/projects.html';
                
                sidebarPlaceholder.innerHTML = `
                    <div id="sidebar">
                        <div class="inner">
                            <nav id="menu">
                                <header class="major">
                                    <h2>Menu</h2>
                                </header>
                                <ul>
                                    <li><a href="${homeLink}">Home</a></li>
                                    <li><a href="${projectsLink}">Projects</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                `;
            });
    }
}); 