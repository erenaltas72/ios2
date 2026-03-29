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

---

## 2. Hafta (30 Mart 2026)

**Yapılanlar:** Kullanıcı arayüzü (UI/UX) tasarımı; Giriş, Kayıt ve Profil ekranlarının kodlanması. 

Hocam merhaba, proje ön raporumdaki 2. hafta hedeflerimi başarıyla tamamladım. Bu hafta uygulamanın ön yüz (Frontend) inşasına odaklandım ve Figma tasarımımda belirttiğim "Hesap Oluşturun" (Kayıt) arayüzünü React Native kullanarak geliştirdim. 

**Bu Hafta Gerçekleştirilen Teknik Adımlar:**
* **UI/UX Kodlaması:** Figma tasarımına milimetrik olarak sadık kalarak, sayfa mizanpajını Flexbox mimarisiyle farklı ekran boyutlarına duyarlı (responsive) hale getirdim.
* **Asset Yönetimi:** Proje dizininde `src/assets/images` klasör yapısını kurarak, uygulama logosunu projeye yerel (native) olarak entegre ettim.
* **Kullanıcı Deneyimi (UX) Optimizasyonları:** E-mail giriş alanında (TextInput), kullanıcıların klavyesinde otomatik olarak "@" ve ".com" tuşlarının çıkmasını sağlayan `keyboardType="email-address"` gibi native klavye optimizasyonlarını uyguladım.
* **Navigasyon Entegrasyonu:** Geçen hafta kurduğum React Navigation altyapısını `App.js` dosyası üzerinde yapılandırarak ilk sayfa yönlendirme katmanımı (`Stack.Navigator`) aktif hale getirdim.
* **Emülatör Testleri:** Son olarak Android Studio üzerinden x86_64 mimarili ve API 33 (Tiramisu) tabanlı bir sanal cihaz kurarak projemi başarıyla derledim ve arayüzümün sorunsuz çalıştığını canlı olarak test ettim.

Planıma uygun olarak, 3. hafta hedeflerim doğrultusunda Backend entegrasyonu (Firebase/Node.js) ve güvenli kullanıcı kimlik doğrulama sisteminin inşasına başlayacağım. Tasarımımın kodlanmış halini ve emülatör üzerindeki canlı çalışma performansını aşağıdaki videomda anlattım.

**Haftalık Video Linkim:** [[21290571-ZiyaErenAltaş-IOS2 Dersi-23032026-V2](https://drive.google.com/drive/folders/1KwROinH3mUwPuiAGjCszuYGekQGyHQ_w?usp=sharing)]
