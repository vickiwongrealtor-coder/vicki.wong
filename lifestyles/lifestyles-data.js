// Lifestyles content. Each {en, zh} leaf is English / Traditional Chinese; Simplified is derived via VW_toHans.
(function () {
  var PRICE = { en: 'Typical price range: [to confirm with current MLS data]', zh: '一般價格範圍：[待以最新 MLS 數據確認]' };

  window.VW_LS = {
    sellerUrl: './contact.html',
    luxuryUrl: 'https://vickiwong.garrickyan.com/luxurylisting',
    // Free-license photos from Pexels (pexels.com/license — commercial use allowed, no attribution required).
    photos: {
      'equestrian': { id: 213813, alt: 'Horses grazing in a green pasture beside a barn' },
      'golf': { id: 919335, alt: 'Golf course fairway at sunset' },
      'metropolitan': { id: 14945989, alt: 'Victorian houses with the downtown San Francisco skyline behind them' },
      'wine-vineyard': { id: 11566340, alt: 'Rows of grapevines in autumn color across rolling California hills' }
    },
    morePhotos: [
      { id: 7174110, alt: 'Cottage with a meadow and mature trees' },
      { id: 7031600, alt: 'Contemporary house beside a forest' },
      { id: 8134821, alt: 'Two-story contemporary home with a paved driveway' }
    ],    luxuryListings: [
          {
                "url": "https://vickiwong.garrickyan.com/listing-detail/1189201047/7-Blue-Ridge-Lane-Woodside-CA",
                "addr": "7 Blue Ridge Lane",
                "city": "Woodside, CA 94062",
                "price": "$65,000,000",
                "bd": 5,
                "ba": 6,
                "sqft": "7,500",
                "by": "Steve Lessard of Compass",
                "isNew": false
          },
          {
                "url": "https://vickiwong.garrickyan.com/listing-detail/1176774339/349-Walsh-Road-Atherton-CA",
                "addr": "349 Walsh Road",
                "city": "Atherton, CA 94027",
                "price": "$49,680,000",
                "bd": 5,
                "ba": 8,
                "sqft": "11,968",
                "by": "Compass",
                "isNew": false
          },
          {
                "url": "https://vickiwong.garrickyan.com/listing-detail/1182048029/15-Hidden-Valley-Lane-Woodside-CA",
                "addr": "15 Hidden Valley Lane",
                "city": "Woodside, CA 94062",
                "price": "$35,000,000",
                "bd": 6,
                "ba": 9,
                "sqft": "9,224",
                "by": "Compass",
                "isNew": false
          },
          {
                "url": "https://vickiwong.garrickyan.com/listing-detail/1190643873/267-Atherton-Avenue-Atherton-CA",
                "addr": "267 Atherton Avenue",
                "city": "Atherton, CA 94027",
                "price": "$35,000,000",
                "bd": 6,
                "ba": 11,
                "sqft": "12,520",
                "by": "Compass",
                "isNew": false
          },
          {
                "url": "https://vickiwong.garrickyan.com/listing-detail/1191033611/276-Atherton-Avenue-Atherton-CA",
                "addr": "276 Atherton Avenue",
                "city": "Atherton, CA 94027",
                "price": "$29,988,000",
                "bd": 5,
                "ba": 8,
                "sqft": "9,365",
                "by": "Deleon Realty",
                "isNew": true
          },
          {
                "url": "https://vickiwong.garrickyan.com/listing-detail/1190356740/2-Carolina-Lane-Atherton-CA",
                "addr": "2 Carolina Lane",
                "city": "Atherton, CA 94027",
                "price": "$29,800,000",
                "bd": 7,
                "ba": 9,
                "sqft": "11,300",
                "by": "Compass",
                "isNew": false
          },
          {
                "url": "https://vickiwong.garrickyan.com/listing-detail/1189622567/99-Tallwood-Court-Atherton-CA",
                "addr": "99 Tallwood Court",
                "city": "Atherton, CA 94027",
                "price": "$23,000,000",
                "bd": 4,
                "ba": 4,
                "sqft": "3,970",
                "by": "Xin Jiang of Compass",
                "isNew": false
          },
          {
                "url": "https://vickiwong.garrickyan.com/listing-detail/1189073149/51-Valley-RD-Atherton-CA",
                "addr": "51 Valley Road",
                "city": "Atherton, CA 94027",
                "price": "$22,000,000",
                "bd": 6,
                "ba": 8,
                "sqft": "7,905",
                "by": "Silvia Zeng of Vantage Realty",
                "isNew": false
          },
          {
                "url": "https://vickiwong.garrickyan.com/listing-detail/1187350172/180-Farm-Road-Woodside-CA",
                "addr": "180 Farm Road",
                "city": "Woodside, CA 94062",
                "price": "$21,995,000",
                "bd": 4,
                "ba": 5,
                "sqft": "5,740",
                "by": "Hugh Cornish of Coldwell Banker Realty",
                "isNew": false
          },
          {
                "url": "https://vickiwong.garrickyan.com/listing-detail/1189280068/79-Deodora-Drive-Atherton-CA",
                "addr": "79 Deodora Drive",
                "city": "Atherton, CA 94027",
                "price": "$21,800,000",
                "bd": 7,
                "ba": 12,
                "sqft": "10,666",
                "by": "Aspire Homes",
                "isNew": false
          }
    ],
    featured: ['equestrian', 'golf', 'metropolitan', 'wine-vineyard'],

    more: [
      { en: 'Country Living', zh: '鄉郊生活', examples: 'Sunol · Morgan Hill · Half Moon Bay' }, { en: 'Mountain', zh: '山居生活', examples: 'Los Gatos Mountains · Saratoga Hills · Woodside' }, { en: 'Commuter-Friendly', zh: '科技通勤', examples: 'Mountain View · Sunnyvale · Fremont' }
    ],

    ui: {
      navAbout: { en: 'About', zh: '關於' }, navServices: { en: 'Services', zh: '服務' }, navAreas: { en: 'Areas', zh: '服務地區' },
      navListings: { en: 'Listings', zh: '樓盤' }, navReviews: { en: 'Reviews', zh: '客戶評價' },
      lifestyles: { en: 'Lifestyles', zh: '生活方式' }, viewAll: { en: 'View all lifestyles →', zh: '查看全部生活方式 →' },
      sellWithUs: { en: 'Sell With Us', zh: '與我們出售' },
      hubKicker: { en: 'Lifestyles · For Sellers', zh: '生活方式 · 賣家' },
      hubTitle: { en: 'Your Home Has a Buyer. We Know Where to Find Them.', zh: '您的房屋自有買家。我們知道去哪裡找。' },
      hubSub: { en: 'Buyers search by how they want to live. From equestrian estates in Woodside to downtown condos in Palo Alto, each lifestyle has its own buyers, and its own way to reach them.', zh: '買家按生活方式搜尋。由 Woodside 的馬術莊園到 Palo Alto 的市中心公寓，每種生活方式都有各自的買家，也有各自觸及他們的方法。' },
      ctaPrivate: { en: 'Arrange a Private Consultation', zh: '安排私人諮詢' },
      featuredKicker: { en: 'Browse by lifestyle', zh: '按生活方式瀏覽' },
      moreKicker: { en: 'More lifestyles', zh: '更多生活方式' },
      moreNote: { en: 'Own one of these? Tell me about your home.', zh: '擁有以下類型的物業？歡迎告訴我您的房屋。' },
      explore: { en: 'Request an introduction →', zh: '預約私人引介 →' }, ask: { en: 'Request an introduction →', zh: '預約私人引介 →' },
      bandTitle: { en: 'Not sure where your home fits?', zh: '不確定您的房屋屬於哪一類？' },
      bandBody: { en: "I'll prepare a private valuation and marketing plan in English, Cantonese, or Mandarin.", zh: '我會以英語、廣東話或普通話，為您準備一份私人估價及推廣計劃。' },
      contact: { en: 'Contact Vicki', zh: '聯絡 Vicki' },
      pageKicker: { en: 'Lifestyle', zh: '生活方式' },
      looksKicker: { en: 'What buyers pay for', zh: '買家願意為甚麼付出' },
      marketKicker: { en: 'How I market these homes', zh: '我如何推廣這類物業' },
      whereKicker: { en: 'Where buyers are looking', zh: '買家在哪裡尋找' },
      cityGuide: { en: 'City guide →', zh: '城市指南 →' }, askVicki: { en: 'Request an introduction →', zh: '預約私人引介 →' },
      districtSite: { en: 'Official district site →', zh: '學區官方網站 →' },
      knowKicker: { en: 'Before you list', zh: '上市前準備' },
      faqKicker: { en: 'Questions sellers ask', zh: '賣家常見問題' },
      advisorKicker: { en: 'Your listing advisor', zh: '您的出售顧問' },
      advisorBio: { en: 'REALTOR® with eXp Realty of California and the Garrick Yan Group. Twenty years in the Bay Area. Advising sellers in English, Cantonese and Mandarin.', zh: 'eXp Realty of California 及 Garrick Yan Group 的 REALTOR®。在灣區生活二十年。以英語、廣東話及普通話為賣家提供顧問服務。' },
      proof: { en: 'In a buyer\u2019s market, a San Leandro listing reached out-of-area buyers and drew two solid offers.', zh: '在買方市場中，一個 San Leandro 房源觸及外地買家，並取得兩份實質出價。' },
      relatedKicker: { en: 'Related lifestyles', zh: '相關生活方式' },
      eho: { en: 'Equal Housing Opportunity', zh: '平等住房機會' },
      menu: { en: 'Menu', zh: '選單' },
      llKicker: { en: 'Currently offered', zh: '現正放售' },
      llTitle: { en: 'Silicon Valley and San Francisco Estates on the Market', zh: '矽谷及三藩市現售豪宅' },
      llSub: { en: 'Ten residences currently offered in Woodside and Atherton, from Vicki Wong\u2019s luxury listings search.', zh: '現時於 Woodside 及 Atherton 放售的十個物業，資料來自 Vicki Wong 的豪宅房源搜尋。' },
      llBeds: { en: 'bd', zh: '房' }, llBaths: { en: 'ba', zh: '浴' }, llSqft: { en: 'sq ft', zh: '平方呎' },
      llBy: { en: 'Listed by', zh: '放盤：' }, llView: { en: 'View residence ↗', zh: '查看物業 ↗' }, llNew: { en: 'New', zh: '新上市' },
      llAll: { en: 'View all luxury listings ↗', zh: '查看全部豪宅房源 ↗' },
      llNote: { en: 'Listing information as of October 19, 2026, provided through MLS data and subject to change. Listings are offered by the brokerages shown.', zh: '房源資料截至 2026 年 10 月 19 日，來自 MLS 數據，或有變更。房源由所示經紀公司放售。' },
      cKicker: { en: 'Private Seller Inquiry', zh: '私人賣家諮詢' },
      cTitle: { en: 'Share the Details of Your Residence', zh: '與我分享您物業的細節' },
      cSub: { en: 'Distinctive homes deserve a considered introduction to the market. Tell me what sets your residence apart, and I will respond within one business day with a private, tailored strategy.', zh: '獨特的物業，值得以審慎的方式呈現於市場。請告訴我您的物業有何與眾不同，我會在一個工作天內回覆一份私人、度身訂造的策略。' },
      fName: { en: 'Full name', zh: '全名' }, fPhone: { en: 'Phone', zh: '電話' }, fEmail: { en: 'Email', zh: '電郵' },
      fAddress: { en: 'Residence address', zh: '物業地址' }, fAddressPh: { en: 'Street, city, ZIP', zh: '街道、城市、郵編' },
      fLifestyle: { en: 'Which best describes your property?', zh: '哪一項最能描述您的物業？' }, fLifestyleNone: { en: 'Select one…', zh: '請選擇…' },
      fFeatures: { en: 'Signature features', zh: '標誌性特色' },
      fUnique: { en: 'What sets your residence apart?', zh: '您的物業有何與眾不同之處？' },
      fUniquePh: { en: 'Architectural provenance, panoramic views, recent restoration, landscaped grounds, notable history…', zh: '建築淵源、全景視野、近期修復、園林景觀、值得一提的歷史……' },
      fTimeline: { en: 'Anticipated timing', zh: '預計時間' },
      fLang: { en: 'Preferred language', zh: '偏好語言' },
      fSend: { en: 'Request a Private Consultation', zh: '預約私人諮詢' },
      fNote: { en: 'Your inquiry is held in confidence and shared only with Vicki Wong, REALTOR®.', zh: '您的查詢將予以保密，只會交予 Vicki Wong, REALTOR®。' },
      fSending: { en: 'Sending…', zh: '發送中…' },
      fSentTitle: { en: 'Thank you. Your inquiry has been received.', zh: '謝謝。您的查詢已收到。' },
      fSentBody: { en: 'I will be in touch personally within one business day.', zh: '我會在一個工作天內親自與您聯絡。' },
      fError: { en: 'Your inquiry could not be sent. Please email vickiwongrealtor@gmail.com or call (650) 394-5303.', zh: '查詢未能發送。請電郵 vickiwongrealtor@gmail.com 或致電 (650) 394-5303。' },
      cDirect: { en: 'Prefer a private conversation?', zh: '希望私下傾談？' },
      featureOptions: [
        { en: 'Panoramic views', zh: '全景視野' }, { en: 'Resort-style pool', zh: '度假式泳池' }, { en: 'Estate acreage', zh: '莊園級土地' }, { en: 'Equestrian facilities', zh: '馬術設施' },
        { en: 'Private vineyard', zh: '私人葡萄園' }, { en: 'Golf course frontage', zh: '球道景觀' }, { en: 'Guest residence or ADU', zh: '賓客住所或 ADU' },
        { en: 'Solar and battery storage', zh: '太陽能及儲能' }, { en: 'Recent restoration', zh: '近期修復' }, { en: 'Architect-designed', zh: '建築師設計' },
        { en: 'Climate-controlled wine cellar', zh: '恆溫酒窖' }, { en: 'Gated and private', zh: '閘門私隱' }
      ],
      timelineOptions: [
        { en: 'Within 3 months', zh: '3 個月內' }, { en: '3–6 months', zh: '3–6 個月' }, { en: '6–12 months', zh: '6–12 個月' }, { en: 'Exploring my options', zh: '先了解選擇' }
      ],
      luxury: { en: 'Browse Bay Area luxury listings ↗', zh: '瀏覽灣區豪宅房源 ↗' }
    },

    items: {
      'equestrian': {
        name: { en: 'Equestrian', zh: '馬術莊園' },
        short: { en: 'Acreage with barns, arenas and trail access, a small and specific buyer pool.', zh: '附設馬廄、馬場及騎馬徑的大片土地，買家群小而明確。' },
        examples: 'Woodside · Portola Valley · Los Altos Hills',
        intro: { en: 'Equestrian buyers are few and they search far. Selling well means reaching them wherever they are and proving the property supports horses.', zh: '馬術買家為數不多，而且搜尋範圍很廣。要賣得好，就要觸及身處各地的買家，並證明物業適合養馬。' },
        features: [
          { title: { en: 'Confirmed horse-keeping rights', zh: '已確認的養馬權利' }, body: { en: 'The zoning allowance is often the first question buyers ask.', zh: '分區許可的養馬數量，往往是買家的第一個問題。' } },
          { title: { en: 'Usable facilities', zh: '可用的設施' }, body: { en: 'Barns, arenas and paddocks in working order.', zh: '狀況良好的馬廄、馬場及圍場。' } },
          { title: { en: 'Trail connections', zh: '騎馬徑連接' }, body: { en: 'Direct trail access is a premium feature.', zh: '直接連接騎馬徑是高價值條件。' } }
        ],
        marketing: [
          { en: 'Aerial and ground video that shows the acreage, facilities and trail access.', zh: '以航拍及地面影片展示土地、設施及騎馬徑。' },
          { en: 'Outreach through the Garrick Yan Group network and regional broker tours.', zh: '透過 Garrick Yan Group 網絡及區域經紀品鑒會推廣。' },
          { en: 'Ads targeted beyond the Bay Area to buyers searching for horse properties.', zh: '向灣區以外搜尋馬術物業的買家投放廣告。' }
        ],
        areas: [
          { name: 'Woodside', city: null, note: { en: 'A town trail system and a long equestrian history.', zh: '鎮內騎馬徑系統，馬術歷史悠久。' } },
          { name: 'Portola Valley', city: null, note: { en: 'Low-density hillside parcels near open space preserves.', zh: '低密度山坡地段，鄰近開放空間保護區。' } },
          { name: 'Los Altos Hills', city: 'los-altos-hills', note: { en: 'One-acre minimum lots and a town pathway system.', zh: '最小一英畝地段及鎮內步道系統。' } }
        ],
        know: [
          { title: { en: 'Confirm the allowance', zh: '確認養馬許可' }, body: { en: 'I confirm the horse-keeping allowance with the town and put it in the listing.', zh: '我會向市鎮確認養馬許可，並寫入房源資料。' } },
          { title: { en: 'Pre-inspect well and septic', zh: '預先檢查水井及化糞系統' }, body: { en: 'Inspecting before listing avoids surprises in escrow.', zh: '上市前檢查可避免過戶期間出現意外。' } },
          { title: { en: 'Prepare the facilities', zh: '整理設施' }, body: { en: 'Clean stalls, mended fencing and groomed footing photograph and show well.', zh: '整潔的馬房、修好的圍欄及平整的場地，拍照及睇樓效果都更好。' } }
        ],
        faq: [
          { q: { en: 'How long do equestrian properties take to sell?', zh: '馬術物業需要多久才能售出？' }, a: { en: 'Often longer than a typical home, because the buyer pool is smaller. Wide marketing shortens the search.', zh: '通常比一般住宅長，因為買家群較小。廣泛推廣能縮短時間。' } },
          { q: { en: 'Do I need to keep horses on site while it is listed?', zh: '上市期間需要把馬留在物業嗎？' }, a: { en: 'No. Clean, ready facilities matter more than animals on site.', zh: '不需要。整潔、可用的設施比現場有馬更重要。' } },
          { q: { en: 'How do you price a property with few comparable sales?', zh: '可比成交很少的物業如何定價？' }, a: { en: 'I combine land value, facility value and the few relevant sales, and explain each step.', zh: '我會結合土地價值、設施價值及少數相關成交，並逐步解釋。' } },
          { q: { en: 'What will my property sell for?', zh: '我的物業可以賣多少？' }, a: { en: 'I prepare a private valuation for equestrian properties. There is no cost or obligation.', zh: '我會為馬術物業準備私人估價。不收費，亦無任何責任。' } }
        ],
        related: ['wine-vineyard', 'golf', 'metropolitan'],
        seo: { title: 'Selling an Equestrian Property in Woodside & Portola Valley | Vicki Wong, REALTOR®', desc: 'Sell an equestrian property in Woodside, Portola Valley or Los Altos Hills. Horse-keeping verification, aerial video and buyer outreach beyond the Bay Area from Vicki Wong, REALTOR®.' }
      },

      'golf': {
        name: { en: 'Golf', zh: '高爾夫生活' },
        short: { en: 'Homes in or near private country club communities, where view and access set price.', zh: '位於私人鄉村俱樂部社區內或附近的住宅，景觀及會籍決定價格。' },
        examples: 'Sharon Heights · Los Altos G&CC · Silver Creek · Blackhawk',
        intro: { en: 'Golf community buyers compare one fairway lot against another. The listing has to show the view, explain the club and answer the HOA questions before they are asked.', zh: '高爾夫社區的買家會逐一比較球道旁地段。房源資料必須展示景觀、說明俱樂部，並預先回答業主協會的問題。' },
        features: [
          { title: { en: 'The view', zh: '景觀' }, body: { en: 'Fairway and green views are the single biggest price factor in these communities.', zh: '球道及果嶺景觀是這些社區最大的價格因素。' } },
          { title: { en: 'Club access', zh: '俱樂部會籍' }, body: { en: 'Clear membership terms remove a major buyer question.', zh: '清晰的會籍條款可解答買家的一大疑問。' } },
          { title: { en: 'Outdoor living', zh: '戶外生活' }, body: { en: 'Terraces and rear yards that face the course.', zh: '面向球場的露台及後園。' } }
        ],
        marketing: [
          { en: 'Twilight photography and drone video of the course frontage.', zh: '黃昏攝影及球場景觀航拍影片。' },
          { en: 'A clear summary of club membership, HOA dues and community rules.', zh: '清晰整理俱樂部會籍、業主協會費用及社區規定。' },
          { en: 'Broker tours to agents who work the club communities.', zh: '為熟悉俱樂部社區的經紀舉辦品鑒會。' }
        ],
        areas: [
          { name: 'Sharon Heights, Menlo Park', city: 'menlo-park', note: 'Sharon Heights Golf & Country Club' },
          { name: 'Los Altos', city: null, note: 'Los Altos Golf & Country Club' },
          { name: 'Silver Creek, San Jose', city: 'san-jose', note: { en: 'Silver Creek Valley Country Club, a gated community.', zh: 'Silver Creek Valley Country Club，封閉式社區。' } },
          { name: 'Blackhawk, Danville', city: null, note: { en: 'Blackhawk Country Club, a gated community.', zh: 'Blackhawk Country Club，封閉式社區。' } }
        ],
        know: [
          { title: { en: 'Request HOA documents early', zh: '及早索取業主協會文件' }, body: { en: 'Ordering the resale package before listing keeps escrow on schedule.', zh: '上市前訂購轉售文件包，可確保過戶如期進行。' } },
          { title: { en: 'Clarify membership transfer', zh: '確認會籍轉讓' }, body: { en: 'I confirm with the club whether membership can transfer and how.', zh: '我會向俱樂部確認會籍能否轉讓及轉讓方式。' } },
          { title: { en: 'Present the rear of the home', zh: '呈現房屋後方' }, body: { en: 'Buyers judge golf homes from the course side. Landscaping there matters most.', zh: '買家從球場一側評價高爾夫住宅，那一側的園藝最重要。' } }
        ],
        faq: [
          { q: { en: 'Can my club membership transfer to the buyer?', zh: '我的會籍可以轉讓給買家嗎？' }, a: { en: 'It depends on the club. I confirm the rules before listing so we can market it accurately.', zh: '視乎俱樂部而定。我會在上市前確認規則，以便準確推廣。' } },
          { q: { en: 'How much does the course view add?', zh: '球場景觀能增值多少？' }, a: { en: 'It varies by community and orientation. I compare recent sales on and off the course in yours.', zh: '因社區及朝向而異。我會比較您社區內球道旁及非球道旁的近期成交。' } },
          { q: { en: 'What HOA documents will buyers need?', zh: '買家需要哪些業主協會文件？' }, a: { en: 'Typically the CC&Rs, budget, reserve study and recent minutes. I order them early.', zh: '一般包括 CC&R、預算、儲備研究及近期會議紀錄。我會及早訂購。' } },
          { q: { en: 'What will my home sell for?', zh: '我的房屋可以賣多少？' }, a: { en: 'I prepare a private valuation based on your view, lot and recent community sales. There is no cost or obligation.', zh: '我會根據您的景觀、地段及社區近期成交，準備一份私人估價。不收費，亦無任何責任。' } }
        ],
        related: ['equestrian', 'wine-vineyard', 'metropolitan'],
        seo: { title: 'Selling a Golf Course Home in Sharon Heights, Silver Creek & Blackhawk | Vicki Wong, REALTOR®', desc: 'Sell a home near Sharon Heights, Los Altos, Silver Creek Valley or Blackhawk country clubs. View-based pricing, club membership and HOA preparation from Vicki Wong, REALTOR®.' }
      },

      'metropolitan': {
        name: { en: 'Metropolitan', zh: '都會生活' },
        short: { en: 'Downtown condominiums and townhomes, where the building matters as much as the unit.', zh: '市中心公寓及城市屋，大廈本身與單位同樣重要。' },
        examples: 'Downtown San Jose · Santana Row · Downtown Palo Alto',
        intro: { en: 'Downtown buyers compare units in the same building and buildings across the block. Clear HOA information and a strong view story separate one listing from the next.', zh: '市中心買家會比較同一大廈內的單位，以及同一街區的不同大廈。清晰的業主協會資料及出色的景觀，能令房源脫穎而出。' },
        features: [
          { title: { en: 'View and light', zh: '景觀及採光' }, body: { en: 'Floor height and outlook drive price within a building.', zh: '在同一大廈內，樓層高度及景觀決定價格。' } },
          { title: { en: 'Parking and storage', zh: '停車位及儲物' }, body: { en: 'Deeded parking and storage are scarce downtown.', zh: '契約停車位及儲物空間在市中心十分稀缺。' } },
          { title: { en: 'A healthy HOA', zh: '財務健全的業主協會' }, body: { en: 'Strong reserves and no pending assessments reassure buyers and lenders.', zh: '充足的儲備及沒有待定評估費，令買家及貸款機構安心。' } }
        ],
        marketing: [
          { en: 'Twilight photography from the unit\u2019s windows and terraces.', zh: '從單位窗戶及露台拍攝黃昏景色。' },
          { en: 'A building summary: dues, reserves, amenities and rules on one page.', zh: '一頁大廈摘要：月費、儲備、設施及規定。' },
          { en: 'Digital ads targeted to buyers searching for downtown and transit-close homes.', zh: '向搜尋市中心及鄰近交通住宅的買家投放數碼廣告。' }
        ],
        areas: [
          { name: 'Downtown San Jose', city: 'san-jose', note: { en: 'High-rise condos near Diridon Station and SAP Center.', zh: '鄰近 Diridon 站及 SAP Center 的高層公寓。' } },
          { name: 'Santana Row, San Jose', city: 'san-jose', note: { en: 'Residences above shops and restaurants.', zh: '位於商店及餐廳之上的住宅。' } },
          { name: 'Downtown Palo Alto', city: 'palo-alto', note: { en: 'Townhomes and condos near University Avenue and Caltrain.', zh: '鄰近 University Avenue 及 Caltrain 的城市屋及公寓。' } }
        ],
        know: [
          { title: { en: 'Order HOA documents', zh: '訂購業主協會文件' }, body: { en: 'Buyers review the budget, reserves and minutes closely. Having them ready speeds offers.', zh: '買家會仔細審閱預算、儲備及會議紀錄。預先準備可加快出價。' } },
          { title: { en: 'Check lender approval', zh: '查核貸款批准' }, body: { en: 'I confirm whether the building is approved for common loan programs.', zh: '我會確認大廈是否符合常見貸款計劃的要求。' } },
          { title: { en: 'Simplify the space', zh: '簡化空間' }, body: { en: 'Fewer pieces of furniture make a condo read larger in photos.', zh: '減少傢具，令公寓在相片中顯得更寬敞。' } }
        ],
        faq: [
          { q: { en: 'How do you price a condo against others in my building?', zh: '如何與同一大廈的其他單位比較定價？' }, a: { en: 'By floor, view, layout and parking. I show you every recent sale in the building.', zh: '按樓層、景觀、格局及停車位比較。我會列出大廈內所有近期成交。' } },
          { q: { en: 'Will a special assessment hurt my sale?', zh: '特別評估費會影響出售嗎？' }, a: { en: 'It can. We decide together whether to pay it before closing or credit the buyer.', zh: '可能會。我們會一同決定在成交前繳付，還是給予買家讓步。' } },
          { q: { en: 'Can I sell while tenants live there?', zh: '有租客居住時可以出售嗎？' }, a: { en: 'Yes, with proper notice. Vacant units usually show better, so we weigh the timing.', zh: '可以，但須給予適當通知。空置單位通常睇樓效果更好，我們會權衡時機。' } },
          { q: { en: 'What will my condo sell for?', zh: '我的公寓可以賣多少？' }, a: { en: 'I prepare a private valuation from recent sales in your building and nearby. There is no cost or obligation.', zh: '我會根據您大廈及附近的近期成交，準備一份私人估價。不收費，亦無任何責任。' } }
        ],
        related: ['golf', 'wine-vineyard', 'equestrian'],
        seo: { title: 'Selling a Downtown Condo in San Jose, Santana Row & Palo Alto | Vicki Wong, REALTOR®', desc: 'Sell a condominium or townhome in downtown San Jose, Santana Row or downtown Palo Alto. Building-level pricing, HOA preparation and targeted marketing from Vicki Wong, REALTOR®.' }
      },

      'wine-vineyard': {
        name: { en: 'Wine & Vineyard', zh: '酒莊葡萄園' },
        short: { en: 'Properties in established wine regions, some with planted vines.', zh: '位於成熟葡萄酒產區的物業，部分種有葡萄樹。' },
        examples: 'Livermore Valley · Santa Cruz Mountains · Saratoga',
        intro: { en: 'Vineyard buyers are buying a setting and sometimes a small business. The listing should show the land at its best and document the vines, water and zoning in detail.', zh: '葡萄園買家購買的是一個環境，有時亦是一門小生意。房源資料應展示土地最好的一面，並詳細記錄葡萄樹、水源及分區。' },
        features: [
          { title: { en: 'Producing vines', zh: '有收成的葡萄樹' }, body: { en: 'Established vines with a grape contract add value buyers can verify.', zh: '附有葡萄供應合約的成熟葡萄樹，為買家帶來可核實的價值。' } },
          { title: { en: 'Reliable water', zh: '穩定的水源' }, body: { en: 'Documented well output or district allocation is essential.', zh: '有紀錄的水井出水量或水區配額不可或缺。' } },
          { title: { en: 'The setting', zh: '環境' }, body: { en: 'Views across the valley or hills, and outdoor living to match.', zh: '俯瞰山谷或山丘的景觀，以及相配的戶外生活空間。' } }
        ],
        marketing: [
          { en: 'Seasonal aerial video timed to when the vines look their best.', zh: '在葡萄樹最美的季節拍攝航拍影片。' },
          { en: 'A property file with vine age, varietals, water and any grape contracts.', zh: '整理物業檔案，包括樹齡、品種、水源及葡萄供應合約。' },
          { en: 'Outreach beyond the Bay Area to buyers searching for wine-country property.', zh: '向灣區以外搜尋酒鄉物業的買家推廣。' }
        ],
        areas: [
          { name: 'Livermore Valley', city: null, note: { en: 'One of California\u2019s oldest wine regions, in the Tri-Valley.', zh: '加州歷史最悠久的葡萄酒產區之一，位於三谷地區。' } },
          { name: 'Santa Cruz Mountains', city: null, note: { en: 'Mountain vineyards above Cupertino and Saratoga.', zh: 'Cupertino 及 Saratoga 上方的山地葡萄園。' } },
          { name: 'Saratoga', city: null, note: { en: 'Hillside estates near historic wineries.', zh: '鄰近歷史酒莊的山坡莊園。' } }
        ],
        know: [
          { title: { en: 'Document the vineyard', zh: '記錄葡萄園資料' }, body: { en: 'Vine age, varietals, yields and any contracts. Buyers will ask for all of it.', zh: '樹齡、品種、產量及任何合約，買家都會要求。' } },
          { title: { en: 'Confirm water and zoning', zh: '確認水源及分區' }, body: { en: 'Well reports, water rights and any Williamson Act contract should be ready before listing.', zh: '水井報告、水權及任何 Williamson Act 合約，應在上市前準備好。' } },
          { title: { en: 'List in the right season', zh: '在合適季節上市' }, body: { en: 'Late spring through harvest shows the land at its best.', zh: '由晚春至收成期，最能展示土地之美。' } }
        ],
        faq: [
          { q: { en: 'Does a grape contract transfer with the sale?', zh: '葡萄供應合約會隨出售轉讓嗎？' }, a: { en: 'Often it can, depending on its terms. I review it with you before listing.', zh: '視乎條款，通常可以。我會在上市前與您一同審閱。' } },
          { q: { en: 'When is the best time to list a vineyard property?', zh: '葡萄園物業甚麼時候上市最好？' }, a: { en: 'When the vines are green and the land photographs well, usually late spring to early fall.', zh: '當葡萄樹翠綠、土地上鏡時，通常是晚春至初秋。' } },
          { q: { en: 'How does a Williamson Act contract affect my sale?', zh: 'Williamson Act 合約如何影響出售？' }, a: { en: 'It transfers with the land and lowers taxes but limits use. Some buyers value it; I explain it clearly.', zh: '合約隨土地轉移，可降低稅項但限制用途。部分買家重視這一點，我會清楚說明。' } },
          { q: { en: 'What will my property sell for?', zh: '我的物業可以賣多少？' }, a: { en: 'I prepare a private valuation that accounts for land, home and vineyard. There is no cost or obligation.', zh: '我會準備一份兼顧土地、房屋及葡萄園的私人估價。不收費，亦無任何責任。' } }
        ],
        related: ['equestrian', 'golf', 'metropolitan'],
        seo: { title: 'Selling a Vineyard Property in Livermore Valley, Santa Cruz Mountains & Saratoga | Vicki Wong, REALTOR®', desc: 'Sell a vineyard or wine-country property in Livermore Valley, the Santa Cruz Mountains or Saratoga. Vineyard documentation, seasonal video and buyer outreach from Vicki Wong, REALTOR®.' }
      }
    }
  };

  window.VW_photoUrl = function (slug, w) {
    var p = window.VW_LS.photos[slug];
    return p ? 'https://images.pexels.com/photos/' + p.id + '/pexels-photo-' + p.id + '.jpeg?auto=compress&cs=tinysrgb&w=' + (w || 1600) : null;
  };
  window.VW_pick = function pick(v, lang) {
    if (Array.isArray(v)) return v.map(function (x) { return pick(x, lang); });
    if (v && typeof v === 'object') {
      var keys = Object.keys(v);
      if ('en' in v && 'zh' in v && keys.every(function (k) { return k === 'en' || k === 'zh' || k === 'examples'; })) {
        if (lang === 'en') return v.en;
        return lang === 'hans' && window.VW_toHans ? window.VW_toHans(v.zh) : v.zh;
      }
      var o = {}; for (var k in v) o[k] = pick(v[k], lang); return o;
    }
    return v;
  };

  window.VW_initLang = function () {
    try {
      var p = new URLSearchParams(location.search).get('lang');
      if (p === 'en') return 'en';
      if (p === 'zh-Hant') return 'zh';
      if (p === 'zh-Hans') return 'hans';
      var s = localStorage.getItem('vw-lang');
      if (s === 'en' || s === 'zh' || s === 'hans') return s;
    } catch (e) {}
    return 'en';
  };
  window.VW_saveLang = function (l) {
    try { localStorage.setItem('vw-lang', l); } catch (e) {}
    try { document.documentElement.lang = l === 'en' ? 'en' : l === 'hans' ? 'zh-Hans' : 'zh-Hant'; } catch (e) {}
  };
})();
