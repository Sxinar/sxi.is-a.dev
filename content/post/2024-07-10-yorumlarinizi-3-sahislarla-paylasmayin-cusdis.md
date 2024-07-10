---
published: true
title: 'Yorumlarınızı 3. Şahıslarla paylaşmayın: "Karşınızda Cusdis"'
description: Yorumlarınızı 3. Şahıslarla paylaşmak zorunda değilsiniz açık
  kaynaklı yorum sistemi olan Cusdis ile tanışın
author: Sxinar
date: 2024-07-10
---
![](/images/images-1.png)

Günümüzde neredeyse bütün bilinçli tüketicilerin kendine ait web siteleri var.

Eğer sizde Disqus gibi şirketleri kullanarak yorumlarınızı 3. Taraf şahıslarla paylaşmak istemiyorsanız Cusdis ile tanışın.

# Cusdis nedir ?

Disqus'a açık kaynaklı, hafif (~5kb sıkıştırılmış), gizlilik dostu alternatif aynı zamanda yorumlarınızı kendi database tabanınızda saklama imkanı veren bir yorum sistemidir.

# Özellikler:

*   Yorum aldığınızda e-mail aracılığıyla bildirim alabilme
    
*   Webhook ekleyerek telegram botu ile mesaj gelince tetikleyebirsiniz.
    
*   Ücretsiz hesap ile ayda 100 adet yoruma kadar destekli.
    
*   Self host yapılabilir yani kendi yorum sisteminizi kendi veritabanımızda saklayabilirsiniz.
    
*   Evrensel yerleştirme kodu
    
*   Hızlı kurulum
    
*   Birden çok dil desteği
    
*   Yorumlara karşılık verme seçeneği (alt alta yorum)
    
*   Cusdis'i her web sitesine yerleştirebilirsiniz.
    
*   Hafif sdk
    
    *   Sitenize eklediğiniz SDK sadece 5kb'dir (gzip'lenmiştir). Disqus'a kıyasla (24kb'dir) oldukça hafiftir.
        
*   Eposta bildirimi
    
*   Disqus'tan tek tıklamayla veri aktarımı
    
*   Moderasyon panosu
    
    *   Yorum yapmak için kullanıcı girişi gerektirmediğimizden, moderatör onaylayana kadar tüm yorumlar varsayılan olarak GÖRÜNTÜLENMEZ. Bunun için bir moderasyon panosu sağlıyoruz.
        

# Disqus’a kıyasla

![](/images/images%20(1).png)

Şimdi buraya kadar okudusanız neden Disqus gibi sürekli güncellenen bir yorum sistemi varken daha şirket bile olmayan cusdis kullanayım diyebilirsiniz.

Cusdis, Disqus’a TAMAMEN bir alternatif olarak tasarlanmamıştır; küçük siteler (örneğin statik blogunuz) için minimal bir gömülü yorum aracı uygulamayı amaçlamaktadır.

## Cusdis’in artıları ve eksileri şunlardır:

![](/images/cusdis.jpg)

## **Artıları**

*   Cusdis açık kaynaklı ve kendi kendini barındırabilen bir uygulamadır, verileriniz size aittir.
    
*   SDK hafiftir (~5kb sıkıştırılmış)
    
*   Cusdis yorumcunun oturum açmasını gerektirmez. Hiçbir şekilde çerez kullanmıyoruz.
    

### Eksileri

*   Cusdis erken geliştirme aşamasındadır
    
*   Spam filtremiz olmadığı için varsayılan olarak onaylayana kadar görüntülenmeyen yorumları manuel olarak denetlemeniz gerekir.
    
*   Disqus bir şirket, biz değiliz
    

# Uygulamadan görüntüler

![](/images/landing.png)![](/images/Screenshot_2024-07-10-10-35-33-295_com.android.chrome.png)![](/images/Screenshot_2024-07-10-10-35-56-570_com.android.chrome.png)![](/images/Screenshot_2024-07-10-10-36-08-057_com.android.chrome.png)![](/images/Screenshot_2024-07-10-10-36-35-621_com.android.chrome.png)

# Web sitenize entegre etme

## HUGO

[Cusdis.com](http://Cusdis.com)['da](http://cusdis.com/) bir hesap oluşturun[.](http://cusdis.com/)

<p style="text-align: start"><code>data-app-id</code>Jetonunuzu alın ve aşağıdaki alanda kullanın</p><p style="text-align: start">Bu kodu altbilginize ekleyin. Benim için, şuydu:<code>layouts/_default/single.html</code></p>

```
      <!-- Comments by Cusdis -->
      <h4>Comments:</h4>
      <div id="cusdis_thread" data-host="https://cusdis.com"
        data-app-id="See your dashbord on Cusdis"
        data-page-id="{{ .File.UniqueID }}" data-page-url="{{ .Permalink }}"
        data-page-title="{{ .Title }}"></div>
      <script async defer src="https://cusdis.com/js/cusdis.es.js"></script>
```

<p style="text-align: start">(Hatırlatma: <code>data-app-id</code> Düzenlemeniz gerekiyor)</p>

## Ghost

*   [Cusdis.com](http://Cusdis.com) üzerinde hesap açın.
    

![](/images/image-52.png)

*   Öncelikle yeni bir site kaydet butonuna tıklayınız.  
    ![](/images/image-53.png)
    
*   Daha sonra embeeded kodu yani yerleştirme kodunu kaydedin.
    

![](/images/image-54.png)

`data-app-id` kodunuzu kopyalayın.

![](/images/image-55.png)

*   Daha sonra ghost üzerinde setting -> tasarım kısmında "Yorum sisteminizi seçiyorsunuz" ve en son id yazarak tamamlıyoruz.
    

Bu kadar adımlarımız ile sitemize entegre ettik.

İleri zamanlarda jeekly next.js gibi static web generator cusdis entegre etme adımlarını ekleyeceğim.