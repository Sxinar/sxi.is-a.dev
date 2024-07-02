---
published: true
title: 'Kendi subdomaininizi edinin: "Karşınızda is-a.dev"'
description: Github sayfalarınız için kendi custom subdomaininizi edinin.
author: Sxinar
date: 2024-07-02
cover: /media/72358814.png
---
Arkadaşlar herkese merhabalar nasılsınız?  
Malum artık teknoloji çağındayız ve bence bu çağda tüm bireylerin bir blog sayfasi olmalı.

Yazmak bir kültürdür  
Bu konu için Yusuf İpek bir yayın yapmıştı kendisinin her adımını takip ederim :D [Konuklarımızla neden ve nasıl web sitesi sahibi olmalıyız?](https://www.youtube.com/live/ZVUIxt5lYaQ?si=HxpOzObMXb2LYuMh)  
İmkanlar da geliştiği için masraflı bir yöntem değil github+vercel veya direkt github pages kullanılarak blog sayfamızı elde edebiliyoruz.  
Yalan yok .github.io alan adına sahip bir site gerçekten gereksiz uzun gözüküyor.  
Benim gözümü kanatıyor en azından.  
Tam bu esnada imdadımıza “is-a.dev” yetişiyor.  
Yalan yok bu alan adının da .github.io alan adından üstün bir yanı yok ama daha kısa en azından.  
Ayrıca github dışında projeleriniz için de kullanabilirsiniz.  
Peki nasıl “is-a.dev” alan adına sahip olabilirim?

<p style="text-align: start">Basit yöntem:<br><a rel="noopener nofollow ugc" href="https://discord.gg/is-a-dev-830872854677422150">Discord sunucusuna</a> katılın , komutlar kanalına gidin ve çalıştırın <code>/register</code> . Bot size birkaç soru soracak ve ardından PR’nizi ve alan adınızı otomatik olarak oluşturacaktır. Bot ayrıca alan adının silinmesine ve düzenlenmesine de olanak tanır.</p>

1.  Öncelikle [İs-a.dev adresine gidiyoruz](https://is-a.dev/) (Meraklısına)
    
2.  Daha sonra [Github reposuna gidiyoruz.](https://github.com/is-a-dev/register)
    
3.  Daha sonra ise [Bu bağlantıya tıklayarak projeyi forkluyoruz.](https://github.com/is-a-dev/register/fork)
    
4.  Daha sonra forkladığımız proje sayfasına giriyoruz.
    
5.  Ben kendi adıma konuşuyorum /domains adresine gidiyoruz ve “kendi-adin.json” adlı bir dosya oluşturuyoruz.
    
6.  `{ "owner": { "username": "sxinar", "email": "ornek@sxinar.com.tr" }, "record": { "URL": "https://sxonar.com.tr" } }`  
    Dosyasını yapıştırıyoruz fakat siz düzenleme yapacaksınız daha sonra pull request atıyoruz ve alan adı kaydıni bekliyoruz.
    

<p style="text-align: start">Bilgilendirme: Bu makale ilk olarak kişisel blogum üzerinde paylaşılmış olup makale kendi dokümantasyondan yararlanılmıştır.<br>Dokümantasyon merak ediyorsanız:</p><p style="text-align: start">https://is-a.dev/docs</p>