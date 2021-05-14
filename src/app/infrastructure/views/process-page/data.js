const descriptionData = [
  {
    id: 1,
    title: 'Mod',
    description: 'Bir veri kümesi içinde en sık görülen değerdir',
    step1: 'gözlemi kapsayan bir örneklem alınsın x1 x2 x2 x2 x2 x2 x3 x3 x4 x4',
    step2:
      'Bu veri serisinde tekrarlar bulunmakta ve çokluk sayımı veri değeri ve frekansa bakılarak yapılmaktadır.',
    step3:
      'Uygulanan yöntemleregöre veri dizisinin modu x2 dir; çünkü bu değer en çok tekrar edilmektedir.'
  },
  {
    id: 2,
    title: 'Standart sapma',
    description:
      'Herhangi bir konuyla alakalı olarak, serinin, değişkeni ile ortalama değer arasında bulunan fark olarak tanımlanmaktadır',
    step1:
      'Her xi değeri için xi le ortalama değer olan xj arasında olan farklar xi - xj olarak bulunur.',
    step2: 'Bu farkların kareleri hesaplanır.',
    step3: 'Bu farkların karelerinin ortalaması bulunur. Bu değer varyans, yani σ2, olur.',
    Step4: 'Bu varyans değerinin kare kökü alınır.'
  },
  {
    id: 3,
    title: 'Medyan',
    description:
      'Örneklem veri serisini küçükten büyüğe doğru sıraladığımızda, seriyi ortadan ikiye ayıran değere denir.',
    step1: 'Veri sayıları küçükten büyüğe doğru sıralanır.',
    step2:
      'n gözlem sayısı olmak üzere, medyan değerinin bu seri içindeki sıra numarası bulunur (n+1)/2 ',
    step3:
      'Eğer gözlem sayısı tek ise medyanın sıra numarası bir tam sayı olacaktır, ve doğrudan medyan bulunur.',
    Step4:
      'Eğer gözlem sayısı çift ise medyanın sıra numarası 1/2 li bir sayı çıkar. Bu durumda bu sayının etrafındaki iki değerin aritmetik ortalaması medyandır.'
  },
  {
    id: 4,
    title: 'Varyans',
    description:
      'Örneklem için istatistiksel yayılımın, mümkün bütün değerlerin beklenen değer veya ortalamadan uzaklıklarının karelerinin ortalaması şeklinde bulunan bir ölçüdür.',
    step1:
      'Eğer beklenen değer varsa, bir olasılık dağılımı için varyans dağılımın kendi ortalamasından sapmasının karesinin beklenen değeridir. Varyans kavramı dağılıma ait her bir değerin dağılımın ortalamasından ne kadar uzak olduğuyla ilgilidir. Varyans söz konusu sapmaların ortalama değerini ölçmektedir.',
    step2:
      'Matematik notasyon kullanılarak bir rassal değişken Var(X) olur.’, step3: ‘Bu tanımlama, eğer beklenen değer varsa, hem ayrık rassal değişkenler hem sürekli rassal değişkenler hem de karışık değişkenler için genel olarak doğrudur. Bu tanımdan ve beklenen değerlerin doğrusal olma niteliğinden varyans karelerin ortalaması eksi ortalamanın karesine eşittir.',
    step4:
      'Bir X ayrık rassal değişkeni için, x değerleri olasılığa eşit olan olasılık kütle fonksiyonu bulunur.',
    step5: 'Buna göre varyans X in kendi ortalamasından sapma karesinin beklenen değeri olur.'
  },
  {
    id: 5,
    title: 'Ortalama Mutlak Sapma',
    description:
      'Bir veri setinin ortamlama mutlak sapması, her veri noktasıyla ortalama arasındaki ortalama uzaklıktır.',
    step1: 'Ortalama hesaplanır.',
    step2:
      'Pozitif uzaklıkları kullanarak, her veri noktasının ortalamasından ne kadar uzakta olduğu hesaplanır.Bunlar, mutlak sapmalar olarak adlandırılır.',
    step3: 'sapmalar toplanır.',
    step4: 'toplamı veri noktası sayısına bölünür. => OMS = Sigma|xi - x|/n'
  },
  {
    id: 6,
    title: 'Degisim Katsayisi',
    description:
      'Bir serinin standart sapmasının Aritmetik ortamlamasına bölünüp 100 ile çarpılması sonucu elde edilen değere değişim katsayısı adı verilir.',
    step1:
      'Değişim katsayısı farklı serilerin değişkenlerini kıyaslamada iyi bir ölçü olacağından, Basit, sınıflanmış ve gruplanmış seriler için uygun olan bu ölçü, seriler arasındaki cins ve büyüklük farklılığını ortadan kaldırır.',
    step2:
      'Değişim katsayısı küçük olan serilerin diğerlerine göre daha az değişken olduğu söylenir. Bunun anlamı ise seri terimlerinin Aritmetik ortalama etrafında daha homojen olarak dağıldığıdır.',
    step3: 'DK = s/x . 100'
  },
  {
    id: 7,
    title: 'Harmonik Ortalama',
    description: 'H = n / 1/x1 + 1/x2 + ... + 1/xn',
    step1:
      'Harmonik ortamlama, gözlem sonuçlarının (birim değerilerinin) terslerinin Aritmetik ortamlamasının tersidir.',
    step2: 'Birim değerleri x1,x2,...,xn gibi gösterilir ise;',
    step3: 'Harmonik ortamlama şu şekilde yazılır: H = n / 1/x1 + 1/x2 + ... + 1/xn'
  },
  {
    id: 8,
    title: 'Aritmetik Ortalama',
    description:
      'Aritmetik ortamlama matematiksel biçimde anakütle için μ ve örneklem için (x) olarak ifade edilir.',
    step1:
      'Aritmetik ortamlama, bir sayı dizisindeki elemanların toplamının eleman sayısına bölünmesi ile elde edilir. İstatistik bilim dalında hem betimsel İstatistik alanında hemde çıkarımsal İstatistik alanında en çok kullanılan merkezi eğilim ölçüsüdür.',
    step2:
      'Aritmetik ortamlama hesaplanması için kullanılan formüller, anakütle büyüklüğü N ve örneklem büyüklüğü n kabul edersek.',
    step3: 'Anakütle Aritmetik ortamlaması: μ = 1/N Sigma i=1 => N xi = 1/N(x1,x2,...,xN)',
    step4: 'Örneklem Aritmetik ortamlaması: x = 1/n Sigma i=1 => n xi = 1/n(x1,x2,...,xn)'
  },
  {
    id: 9,
    title: 'Geometrik Ortalama',
    description: 'G = Kök^n(x1.x2….x3)',
    step1:
      'Geometrik ortamlama, birim değerilerinin (gözlem sonuçlarının) birbiriyle çarpımlarının, n birim sayısı olmak üzere, n’inci dereceden köküne denir. Geometrik Ortalama kısaca G harfi ile gösterilir.',
    step2:
      'Birim değerleri x1,x2,…,xn gibi gösterilir;’, step3: ‘Birim değerlerin belilenmesinden sonra geometrik orlama şu şekilde gösterilir; G = Kök^n(x1.x2….x3)'
  }
]

export default descriptionData
