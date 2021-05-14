const descriptionData = [
  {
    id: 1,
    title: 'Mod',
    step: [
      {
        title: 'Adim 1',
        color: '$blue-timeline-color',
        text: 'Bir veri kümesi içinde en sık görülen değerdir',
        position: 'left'
      },
      {
        title: 'Adim 2',
        color: '$blue-timeline-color',
        text: 'gözlemi kapsayan bir örneklem alınsın x1 x2 x2 x2 x2 x2 x3 x3 x4 x4',
        position: 'right'
      },
      {
        title: 'Adim 3',
        color: '$red-timeline-color',
        text: 'Bu veri serisinde tekrarlar bulunmakta ve çokluk sayımı veri değeri ve frekansa bakılarak yapılmaktadır.',
        position: 'left'
      },
      {
        title: 'Adim 4',
        color: '$red-timeline-color',
        text: 'Uygulanan yöntemleregöre veri dizisinin modu x2 dir; çünkü bu değer en çok tekrar edilmektedir.',
        position: 'right'
      }
    ]
  },
  {
    id: 2,
    title: 'Standart sapma',
    step: [
      {
        title: 'Adim 1',
        color: '$dark-gray-color',
        text: 'Herhangi bir konuyla alakalı olarak, serinin, değişkeni ile ortalama değer arasında bulunan fark olarak tanımlanmaktadır',
        position: 'left'
      },
      {
        title: 'Adim 2',
        color: '$dark-gray-color',
        text: 'Her xi değeri için xi le ortalama değer olan xj arasında olan farklar xi - xj olarak bulunur.',
        position: 'right'
      },
      {
        title: 'Adim 3',
        color: '$dark-red-color',
        text: 'Bu farkların kareleri hesaplanır.',
        position: 'left'
      },
      {
        title: 'Adim 4',
        color: '$dark-red-color',
        text: 'Bu farkların karelerinin ortalaması bulunur. Bu değer varyans, yani σ2, olur.',
        position: 'right'
      },
      {
        title: 'Adim 5',
        color: '$dark-red-color',
        text: 'Bu varyans değerinin kare kökü alınır.',
        position: 'left'
      }
    ]
  },
  {
    id: 3,
    title: 'Medyan',
    step: [
      {
        title: 'Adim 1',
        color: '$dark-gray-color',
        text: 'Örneklem veri serisini küçükten büyüğe doğru sıraladığımızda, seriyi ortadan ikiye ayıran değere denir.',
        position: 'left'
      },
      {
        title: 'Adim 2',
        color: '$dark-gray-color',
        text: 'Veri sayıları küçükten büyüğe doğru sıralanır.',
        position: 'right'
      },
      {
        title: 'Adim 3',
        color: '$dark-red-color',
        text: 'n gözlem sayısı olmak üzere, medyan değerinin bu seri içindeki sıra numarası bulunur (n+1)/2 ',
        position: 'left'
      },
      {
        title: 'Adim 4',
        color: '$dark-red-color',
        text: 'Eğer gözlem sayısı tek ise medyanın sıra numarası bir tam sayı olacaktır, ve doğrudan medyan bulunur.',
        position: 'right'
      },
      {
        title: 'Adim 5',
        color: '$dark-red-color',
        text: 'Eğer gözlem sayısı çift ise medyanın sıra numarası 1/2 li bir sayı çıkar. Bu durumda bu sayının etrafındaki iki değerin aritmetik ortalaması medyandır.',
        position: 'left'
      }
    ]
  },
  {
    id: 4,
    title: 'Varyans',
    step: [
      {
        title: 'Adim 1',
        color: '$dark-gray-color',
        text: 'Örneklem için istatistiksel yayılımın, mümkün bütün değerlerin beklenen değer veya ortalamadan uzaklıklarının karelerinin ortalaması şeklinde bulunan bir ölçüdür.',
        position: 'left'
      },
      {
        title: 'Adim 2',
        color: '$dark-gray-color',
        text: 'Eğer beklenen değer varsa, bir olasılık dağılımı için varyans dağılımın kendi ortalamasından sapmasının karesinin beklenen değeridir. Varyans kavramı dağılıma ait her bir değerin dağılımın ortalamasından ne kadar uzak olduğuyla ilgilidir. Varyans söz konusu sapmaların ortalama değerini ölçmektedir.',
        position: 'right'
      },
      {
        title: 'Adim 3',
        color: '$dark-red-color',
        text: 'Matematik notasyon kullanılarak bir rassal değişken Var(X) olur.’, step3: ‘Bu tanımlama, eğer beklenen değer varsa, hem ayrık rassal değişkenler hem sürekli rassal değişkenler hem de karışık değişkenler için genel olarak doğrudur. Bu tanımdan ve beklenen değerlerin doğrusal olma niteliğinden varyans karelerin ortalaması eksi ortalamanın karesine eşittir.',
        position: 'left'
      },
      {
        title: 'Adim 4',
        color: '$dark-red-color',
        text: 'Bir X ayrık rassal değişkeni için, x değerleri olasılığa eşit olan olasılık kütle fonksiyonu bulunur.',
        position: 'right'
      },
      {
        title: 'Adim 5',
        color: '$dark-red-color',
        text: 'Buna göre varyans X in kendi ortalamasından sapma karesinin beklenen değeri olur.',
        position: 'left'
      }
    ]
  },
  {
    id: 5,
    title: 'Ortalama Mutlak Sapma',
    step: [
      {
        title: 'Adim 1',
        color: '$dark-gray-color',
        text: 'Bir veri setinin ortamlama mutlak sapması, her veri noktasıyla ortalama arasındaki ortalama uzaklıktır.',
        position: 'left'
      },
      {
        title: 'Adim 2',
        color: '$dark-gray-color',
        text: 'Ortalama hesaplanır.',
        position: 'right'
      },
      {
        title: 'Adim 3',
        color: '$dark-red-color',
        text: 'Pozitif uzaklıkları kullanarak, her veri noktasının ortalamasından ne kadar uzakta olduğu hesaplanır.Bunlar, mutlak sapmalar olarak adlandırılır.',
        position: 'left'
      },
      {
        title: 'Adim 4',
        color: '$dark-red-color',
        text: 'sapmalar toplanır.',
        position: 'right'
      },
      {
        title: 'Adim 5',
        color: '$dark-red-color',
        text: 'toplamı veri noktası sayısına bölünür. => OMS = Sigma|xi - x|/n',
        position: 'left'
      }
    ]
  },
  {
    id: 6,
    title: 'Degisim Katsayisi',
    step: [
      {
        title: 'Adim 1',
        color: '$dark-gray-color',
        text: 'Bir serinin standart sapmasının Aritmetik ortamlamasına bölünüp 100 ile çarpılması sonucu elde edilen değere değişim katsayısı adı verilir.',
        position: 'left'
      },
      {
        title: 'Adim 2',
        color: '$dark-gray-color',
        text: 'Değişim katsayısı farklı serilerin değişkenlerini kıyaslamada iyi bir ölçü olacağından, Basit, sınıflanmış ve gruplanmış seriler için uygun olan bu ölçü, seriler arasındaki cins ve büyüklük farklılığını ortadan kaldırır.',
        position: 'right'
      },
      {
        title: 'Adim 3',
        color: '$dark-red-color',
        text: 'Değişim katsayısı küçük olan serilerin diğerlerine göre daha az değişken olduğu söylenir. Bunun anlamı ise seri terimlerinin Aritmetik ortalama etrafında daha homojen olarak dağıldığıdır.',
        position: 'left'
      },
      {
        title: 'Adim 4',
        color: '$dark-red-color',
        text: 'DK = s/x . 100',
        position: 'right'
      }
    ]
  },
  {
    id: 7,
    title: 'Harmonik Ortalama',
    step: [
      {
        title: 'Adim 1',
        color: '$dark-gray-color',
        text: 'H = n / 1/x1 + 1/x2 + ... + 1/xn',
        position: 'left'
      },
      {
        title: 'Adim 2',
        color: '$dark-gray-color',
        text: 'Harmonik ortamlama, gözlem sonuçlarının (birim değerilerinin) terslerinin Aritmetik ortamlamasının tersidir.',
        position: 'right'
      },
      {
        title: 'Adim 3',
        color: '$dark-red-color',
        text: 'Birim değerleri x1,x2,...,xn gibi gösterilir ise;',
        position: 'left'
      },
      {
        title: 'Adim 4',
        color: '$dark-red-color',
        text: 'Harmonik ortamlama şu şekilde yazılır: H = n / 1/x1 + 1/x2 + ... + 1/xn',
        position: 'right'
      }
    ]
  },
  {
    id: 8,
    title: 'Aritmetik Ortalama',
    step: [
      {
        title: 'Adim 1',
        color: '$dark-gray-color',
        text: 'Aritmetik ortamlama matematiksel biçimde anakütle için μ ve örneklem için (x) olarak ifade edilir.',
        position: 'left'
      },
      {
        title: 'Adim 2',
        color: '$dark-gray-color',
        text: 'Aritmetik ortamlama, bir sayı dizisindeki elemanların toplamının eleman sayısına bölünmesi ile elde edilir. İstatistik bilim dalında hem betimsel İstatistik alanında hemde çıkarımsal İstatistik alanında en çok kullanılan merkezi eğilim ölçüsüdür.',
        position: 'right'
      },
      {
        title: 'Adim 3',
        color: '$dark-red-color',
        text: 'Aritmetik ortamlama hesaplanması için kullanılan formüller, anakütle büyüklüğü N ve örneklem büyüklüğü n kabul edersek.',
        position: 'left'
      },
      {
        title: 'Adim 4',
        color: '$dark-red-color',
        text: 'Anakütle Aritmetik ortamlaması: μ = 1/N Sigma i=1 => N xi = 1/N(x1,x2,...,xN)',
        position: 'right'
      },
      {
        title: 'Adim 5',
        color: '$dark-red-color',
        text: 'Örneklem Aritmetik ortamlaması: x = 1/n Sigma i=1 => n xi = 1/n(x1,x2,...,xn)',
        position: 'left'
      }
    ]
  },
  {
    id: 9,
    title: 'Geometrik Ortalama',
    step: [
      {
        title: 'Adim 1',
        color: '$dark-gray-color',
        text: 'G = Kök^n(x1.x2….x3)',
        position: 'left'
      },
      {
        title: 'Adim 2',
        color: '$dark-gray-color',
        text: 'Geometrik ortamlama, birim değerilerinin (gözlem sonuçlarının) birbiriyle çarpımlarının, n birim sayısı olmak üzere, n’inci dereceden köküne denir. Geometrik Ortalama kısaca G harfi ile gösterilir.',
        position: 'right'
      },
      {
        title: 'Adim 3',
        color: '$dark-red-color',
        text: 'Birim değerleri x1,x2,…,xn gibi gösterilir;’, step3: ‘Birim değerlerin belilenmesinden sonra geometrik orlama şu şekilde gösterilir; G = Kök^n(x1.x2….x3)',
        position: 'left'
      }
    ]
  }
]

export default descriptionData
