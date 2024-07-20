document.addEventListener("DOMContentLoaded", function() {
    const rssFeeds = ["https://yusufipek.me/rss", "https://sxinar.github.io/index.xml"];
    const rssContainer = document.getElementById("rss-feeds");
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modal-title");
    const modalContent = document.getElementById("modal-content");
    const closeModal = document.getElementsByClassName("close")[0];
    const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    toggleDarkModeBtn.onclick = function() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            toggleDarkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            toggleDarkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    rssFeeds.forEach(feed => {
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feed}`)
            .then(response => response.json())
            .then(data => {
                const feedTitle = document.createElement('h2');
                feedTitle.textContent = data.feed.title;
                rssContainer.appendChild(feedTitle);

                data.items.forEach(item => {
                    const itemContainer = document.createElement('div');
                    itemContainer.className = 'rss-item';

                    const itemTitle = document.createElement('h3');
                    const itemLink = document.createElement('a');
                    itemLink.href = "#";
                    itemLink.textContent = item.title;
                    itemLink.onclick = function() {
                        modalTitle.textContent = item.title;
                        modalContent.innerHTML = item.content; // Tam içerik burada gösteriliyor
                        modal.style.display = "block";
                        // Resimlerin boyutunu küçült
                        const images = modalContent.getElementsByTagName('img');
                        for (let img of images) {
                            img.style.width = "25%"; // Genişliği %25 yaparak resim boyutunu 1/4 oranında küçültür
                            img.style.height = "auto";
                        }
                    }
                    itemTitle.appendChild(itemLink);
                    itemContainer.appendChild(itemTitle);

                    const itemDescription = document.createElement('p');
                    itemDescription.textContent = item.description;
                    itemContainer.appendChild(itemDescription);

                    rssContainer.appendChild(itemContainer);
                });
            })
            .catch(error => console.error('Error fetching the RSS feed:', error));
    });
});
