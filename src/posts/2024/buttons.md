---
title: buttons 
layout: base.njk
date: "2024-03-13"
tags: 
- projects
headImg: https://files.catbox.moe/aq6rvf.png
headHeight: 200px
---
<div class="header" style="background-image: url({{ headImg }}); height: {{ headHeight }};"></div>

# navlink style widget but with buttons!!!

i was really inspired by dimdens navlink ads and really wanted to do something similar, so i instead of user created ads, i created a non profit ad-like system that cycles through 88x31 buttons!! the buttons of every site i visit (if they offer a button) will be added to a megalist. 

feel free to add the widget to your site, too!!!

if you see your button here and would like it removed, or if you don’t see your button here and would like to be added, please contact me using the chat box below.
all button images will be uploaded to imgur first. please notify me if any links or images are dead, thank you.


        <iframe height="31" width="88" style="border:none" scrolling="no" src="https://char42.neocities.org/pages/neoplug.html"></iframe>

<textarea rows="5" cols="33">
        <iframe height="31" width="88" style="border:none" scrolling="no" src="https://char42.neocities.org/pages/neoplug.html"></iframe>
</textarea>

---

## button index:
<span>sorted by most recently added</span> 
<ul id="userList"></ul>

<script>
function loadHTML(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            } else {
                console.error('Error loading HTML file: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}

function extractAdImages(html) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    var scripts = tempDiv.getElementsByTagName('script');
    var adImagesScript;
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].innerHTML.includes('var adImages')) {
            adImagesScript = scripts[i].innerHTML;
            break;
        }
    }

    if (adImagesScript) {
        eval(adImagesScript);
        var userList = document.getElementById('userList');
        adImages.reverse();
        adImages.forEach(function(ad) {
            var listItem = document.createElement('span');
            listItem.innerHTML = '<a href="' + ad.link + '"><img src="' + ad.src + '" alt="Advertisement"></a>';
            userList.appendChild(listItem);
        });
    } else {
        console.error('adImages array not found in HTML content.');
    }
}

loadHTML('/pages/neoplug.html', extractAdImages);
</script>
---

<iframe src="https://www5.cbox.ws/box/?boxid=949860&boxtag=RAGGlU" width="100%" height="250" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>	