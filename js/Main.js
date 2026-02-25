// Navbar active


// Loader animation
setTimeout(function() {
    document.body.classList.add("loaded");
}, 500); // 3000 milliseconds (3 seconds)

//  JavaScript to Stop Video on Close
    var videoModal = document.getElementById('videoModal');
    videoModal.addEventListener('hidden.bs.modal', function () {
        var iframe = document.getElementById('youtubeVideo');
        iframe.src = iframe.src;
    });


////////////////////////////

 document.addEventListener("DOMContentLoaded", () => {
            const counters = document.querySelectorAll(".stat-number");
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const counter = entry.target;
                        const target = +counter.getAttribute("data-target");
                        let start = 0;
                        const speed = Math.floor(2000 / target);
                        
                        const updateCount = () => {
                            if (start < target) {
                                start += 1;
                                counter.innerText = start;
                                setTimeout(updateCount, speed);
                            } else {
                                counter.innerText = target;
                            }
                        };
                        updateCount();
                        observer.unobserve(counter);
                    }
                });
            }, { threshold: 0.5 });
            
            counters.forEach(counter => observer.observe(counter));
        });
    