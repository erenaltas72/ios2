# SecureChat - Şifreli Mesajlaşma Uygulaması
**Öğrenci:** Ziya Eren Altaş - 21290571
**Ders:** BLM4538 - IOS ile Mobil Uygulama Geliştirme II

---

## 1. Hafta (23 Mart 2026)
**Yapılanlar:** React Native ortamının hazırlanması ve temel bileşenlerin (Navigation, Redux) kurulması.

Hocam merhaba, 
Size verdiğim proje ön raporundaki 1. hafta maddesini bitirdim. Bu hafta tamamen uygulamanın altyapısını ve geliştirme ortamını kurmaya odaklandım.

* İlk olarak `npx react-native init` komutuyla projenin ana iskeletini CLI (Bare workflow) kullanarak ayağa kaldırdım. 
* İlerleyen haftalarda uygulamanın sayfaları arasında (Giriş, Kayıt, Mesajlaşma vb.) geçiş yapabilmek için **React Navigation** kütüphanelerinin kurulumunu tamamladım.
* Beşinci haftada planladığım Uçtan Uca Şifreleme (E2EE) süreçlerini ve kullanıcı verilerini güvenli bir şekilde yönetebilmek adına proje genelinde State (Durum) yönetimi yapmam gerekiyordu. Bunun için de **Redux Toolkit** paketlerini projeye dahil ettim.
* Kodlarımın düzenli ilerlemesi için ana dizinde `src` klasörü oluşturdum ve mimariyi kurmak adına içlerine şimdilik boş olan `navigation`, `screens` ve `store` klasörlerimi açtım.

Ön raporumdaki planıma sadık kalarak, kullanıcı arayüzü tasarımlarına ve emülatör üzerinde testlere 2. hafta başlayacağım. Yaptığım bu kurulumların `package.json` ve klasör yapısı üzerindeki kanıtını aşağıdaki videomda anlattım. 

**Haftalık Video Linkim:** [[21290571-ZiyaErenAltaş-IOS2 Dersi-23032026-V1](https://drive.google.com/drive/folders/1KwROinH3mUwPuiAGjCszuYGekQGyHQ_w?usp=sharing)]
