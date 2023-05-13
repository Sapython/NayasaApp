import { Component, OnInit } from '@angular/core';

import SwiperCore, { EffectFade, Swiper } from 'swiper';
SwiperCore.use([EffectFade]);
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  coverFlowEffectOptions = {
    stretch: 0,
  };
  constructor() { }
  hiddenPrice: boolean = false;
  showPrice() {
    this.hiddenPrice = !this.hiddenPrice;
  }


  ngOnInit() {
  }
  price: number = 14325;
  date: string = '14th Jul';
  quantity: number = 1;
  liked: boolean = false;
  product: any = {

    name: 'Royal Pink Diamond Ring',
    price: 14325,
    description: 'Diamond Ring In 18Kt Gold (5.68 gram) with Diamonds (0.4130 Ct)',
    metalPurityTypes: [
      {
        purity: '18K',
      },
      {
        purity: '22K',
      },
      {
        purity: '24K',
      },
    ],
    metalTypes: [
      {
        type: '18KT White Gold',
      },
      {
        type: '18KT Yellow Gold',
      },
      {
        type: '18KT Rose Gold',
      },
      {
        type: '15KT Rose Gold',
      },
      {
        type: '14KT Rose Gold',
      }
    ],
    diamondTypes: [
      {
        name: '22 C',
      },
      {
        name: '24 C',
      },
      {
        name: '26 C',
      },
    ],
    sizeTypes: [
      {
        size: '18',
      },
      {
        size: '20',
      },
      {
        size: '22',
      },
    ],
    images: [
      'assets/topBarImages/earings/ear (1).png',
      'assets/topBarImages/earings/ear (6).png',
      'assets/topBarImages/earings/ear (3).png',
      'assets/topBarImages/earings/ear (4).png',
      'assets/topBarImages/earings/ear (5).png',
    ],
    certifications: [
      {
        name: 'bis',
        image: 'assets/badges/badge (1).png'
      },
      {
        name: 'bis',
        image: 'assets/badges/badge (2).png'
      },
      {
        name: 'bis',
        image: 'assets/badges/badge (3).png'
      },
    ]
  }
  stockproduct = [
    {
      availableProduct: "18 (57.8 mm) - in Stock!",
    },
    {
      availableProduct: "18 (57.8 mm) - in Stock!",
    },
    {
      availableProduct: "18 (57.8 mm) - in Stock!",
    },
    {
      availableProduct: "18 (57.8 mm) - in Stock!",
    }

  ]

}
