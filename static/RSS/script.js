document.addEventListener("DOMContentLoaded", function() {
    const rssFeeds = ["https://yusufipek.me/rss", "https://sxinar.github.io/index.xml"];
    const rssContainer = document.getElementById("rss-feeds");
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modal-title");
    const modalContent = document.getElementById("modal-content");
    const closeModal = document.getElementsByClassName("close")[0];
    const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
    const menuToggle = document.getElementById("menu-toggle");
    const readItemsMenu = document.getElementById("read-items-menu");
    const readItemsList = document.getElementById("read-items-list");
    const allReadMessage = document.getElementById("all-read-message");
    const cookieConsent = document.getElementById("cookie-consent");
    const acceptCookiesBtn = document.getElementById("accept-cookies");

    let readItems = getCookie('readItems') ? JSON.parse(getCookie('readItems')) : [];

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

    menuToggle.onclick = function() {
        readItemsMenu.classList.toggle("open");
    }

    // Çerezler kabul edildi mi kontrol et
    if (!getCookie('cookiesAccepted')) {
        cookieConsent.style.display = 'block';
    }

    acceptCookiesBtn.onclick = function() {
        setCookie('cookiesAccepted', 'true', 365);
        cookieConsent.style.display = 'none';
    }

    function addToReadItems(item) {
        if (!readItems.includes(item.title)) {
            readItems.push(item.title);
            const listItem = document.createElement('li');
            listItem.textContent = item.title;
            const icon = document.createElement('i');
            icon.className = 'fas fa-eye read-item-icon';
            icon.onclick = function() {
                readItems = readItems.filter(title => title !== item.title);
                rssContainer.appendChild(createRssItem(item));
                listItem.remove();
                saveReadItems();
                checkAllRead();
            };
            listItem.appendChild(icon);
            readItemsList.appendChild(listItem);
            saveReadItems();
        }
    }

    function saveReadItems() {
        setCookie('readItems', JSON.stringify(readItems), 365);
    }

    function createRssItem(item) {
        const itemContainer = document.createElement('div');
        itemContainer.className = 'rss-item';

        const itemTitle = document.createElement('h3');
        const itemLink = document.createElement('a');
        itemLink.href = "#";
        itemLink.textContent = item.title;
        itemLink.onclick = function() {
            modalTitle.textContent = item.title;
            modalContent.innerHTML = item.content;
            modal.style.display = "block";

            const images = modalContent.getElementsByTagName('img');
            for (let img of images) {
                img.style.width = "25%";
                img.style.height = "auto";
            }

            addToReadItems(item);
            itemContainer.remove();
            checkAllRead();
        };
        itemTitle.appendChild(itemLink);
        itemContainer.appendChild(itemTitle);

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        itemContainer.appendChild(itemDescription);

        return itemContainer;
    }

    function checkAllRead() {
        if (rssContainer.childElementCount === 0) {
            allReadMessage.style.display = 'block';
        } else {
            allReadMessage.style.display = 'none';
        }
    }

    rssFeeds.forEach(feed => {
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feed}`)
            .then(response => response.json())
            .then(data => {
                const feedTitle = document.createElement('h2');
                feedTitle.textContent = data.feed.title;
                rssContainer.appendChild(feedTitle);

                data.items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

                data.items.forEach(item => {
                    if (!readItems.includes(item.title)) {
                        rssContainer.appendChild(createRssItem(item));
                    } else {
                        addToReadItems(item);
                    }
                });

                checkAllRead();
            })
            .catch(error => console.error('Error fetching the RSS feed:', error));
    });

    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const cname = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) === 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    }
});
