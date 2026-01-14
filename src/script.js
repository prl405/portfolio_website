$(document).ready(function() {
    // Navigation link click handler
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        
        // Get the section to display
        const section = $(this).data('section');
        
        // Remove active class from all links
        $('.nav-link').removeClass('active');
        
        // Add active class to clicked link
        $(this).addClass('active');
        
        // Hide all sections
        $('.content-section').removeClass('active');
        
        // Show the selected section with fade animation
        $('#' + section).addClass('active');
    });

    // Handle form submission
    $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = $(this).find('input[type="text"]').val();
        const email = $(this).find('input[type="email"]').val();
        const message = $(this).find('textarea').val();
        
        // Simple validation
        if (name && email && message) {
            // Show success message (in a real app, send to server)
            alert('Thank you for your message! I\'ll get back to you soon.');
            
            // Reset form
            $(this)[0].reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Add smooth scroll behavior
    $(window).on('scroll', function() {
        const scrollPosition = $(this).scrollTop();
        
        // Optional: Add parallax effect to background
        $('.main-content').css({
            'background-position': '0 ' + (scrollPosition * 0.5) + 'px'
        });
    });

    // Handle CTA button click
    $('.cta-button').on('click', function() {
        // Scroll to projects section
        $('.nav-link[data-section="projects"]').click();
        
        // Smooth scroll to top of main content
        $('.main-content').animate({ scrollTop: 0 }, 500);
    });

    // Initialize: Set home as active on page load
    $('.nav-link[data-section="home"]').addClass('active');
    $('#home').addClass('active');
});
