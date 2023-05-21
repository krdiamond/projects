<template>
  <div class="container position--absolute top--0 bg--white">
    <button @click="$emit('toggle-portfolio')" class="position--fixed right--30 padding--20 bg--none border--none">        
        <img src="../assets/x.svg"  title="Close Portfolio" width="30">
    </button>
    <div  v-for="project in projects"  :key="project.brand" class="">
        <h1><a target="_blank" :href="project.brandURL"  class="underline-animation">{{project.brand}}</a></h1>
        <!-- <h4>{{project.position}}</h4>
        <p>{{project.details}}</p>
        <h5 v-if="project.agencyURL"> While @ <a target="_blank" :href="project.agencyURL" class="underline-animation">{{project.agency}}</a>, {{project.launchDate}}</h5> 
        <h5 v-else >While @ {{project.agency}}, {{project.launchDate}}</h5> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
      return {
        projects: [
          {
            brand: 'sleepme',
            brandURL: 'https://sleep.me/',
            position: 'Front End Development',
            details: 'Shopify+, Vue, Headless, ReCharge, Shopify Scripts, Extend & Affirm',
            agency: 'Sleepme',
            agencyURL: 'https://sleep.me/',
            launchDate: 'Launch Sept 2022 & Ongoing'
          },
          {
            brand: 'Chilisleep',
            brandURL: 'https://chilisleep.com.au/',
            position: 'Front End Development',
            details: 'Shopify+, Vue, Shopify Scripts, Clyde & Affirm',
            agency: 'Sleepme',
            agencyURL: 'https://sleep.me/',
            launchDate: 'Launch Sept 2022 & Ongoing'
          },
          {
            brand: 'Plant People',
            brandURL: 'https://www.plantpeople.co/',
            position: 'Front End Development',
            details: 'Shopify+, ReCharge, Shopify Scripts',
            agency: 'owOw studio',
            launchDate: 'Launch June 2020 & Ongoing'
          },
          {
            brand: 'Rosetta Getty',
            brandURL: 'https://rosettagetty.com/',
            position: 'Front End Development',
            details: 'Shopify',
            agency: 'owOw studio',
            launchDate: '2021 & Ongoing'
          },
          {
            brand: 'Woosh Beauty',
            brandURL: 'https://wooshbeauty.com/',
            position: 'Front End Development',
            details: 'Shopify',
            agency: 'owOw studio',
            launchDate: 'Launch 2018 & Ongoing'
          },
          {
            brand: 'Griffin',
            brandURL: 'https://www.griffingam.com/',
            position: 'Front End Development',
            details: 'Webflow',
            agency: 'owOw studio',
            launchDate: 'Launch 2020 & Ongoing'
          },
          {
            brand: 'Pat Mcgrath Labs',
            brandURL: 'https://www.patmcgrath.com',
            position: 'Front End Development',
            details: 'Shopify+',
            agency: 'Verbal + Visual',
            agencyURL: 'https://verbalplusvisual.com/',
            launchDate: 'Launch 2020'
          },
          {
            brand: 'MahZeDahr',
            brandURL: 'https://mahzedahrbakery.com/',
            position: 'Front End Development',
            details: 'Shopify+, ReCharge',
            agency: 'Sweden Unlimited',
            agencyURL: 'https://swedenunlimited.com/',
            launchDate: 'Launch 2021'
          },
          {
            brand: 'Beauty Blender',
            brandURL: 'https://beautyblender.com/',
            position: 'Front End Development',
            details: 'Shopify+',
            agency: 'Sweden Unlimited',
            agencyURL: 'https://swedenunlimited.com/',
            launchDate: '2021'
          },
          {
            brand: 'Monrow',
            brandURL: 'https://www.monrow.com/',
            position: 'Front End Development',
            details: 'Shopify+',
            agency: 'Sweden Unlimited',
            agencyURL: 'https://swedenunlimited.com/',
            launchDate: '2021'
          },
          {
            brand: 'Bala Bangles',
            brandURL: 'https://www.shopbala.com/',
            position: 'Technical Director',
            details: 'Shopify+',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: 'Launch 2019 & 2020'
          },
          {
            brand: 'Radswan',
            brandURL: 'https://radswan.com/',
            position: 'Technical Director',
            details: 'Shopify+',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: 'Launch 2020'
          },
          {
            brand: 'Aavrani',
            brandURL: 'https://aavrani.com/',
            position: 'Technical Director',
            details: 'Shopify',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: 'Launch 2020'
          },
          {
            brand: 'HeTime',
            brandURL: 'https://hetime.com/',
            position: 'Technical Director',
            details: 'Shopify ReCharge',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: 'Launch 2020'
          },
          {
            brand: 'Ohza',
            brandURL: 'https://drinkohza.com/',
            position: 'Technical Director',
            details: 'Shopify+',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: 'Launch 2020'
          },
          {
            brand: 'Olo',
            brandURL: 'https://oloband.com/',
            position: 'Technical Director',
            details: 'Shopify',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: 'Launch 2020'
          },
          {
            brand: 'Vanessa Lundborg',
            brandURL: 'https://www.vanessalundborg.com/',
            position: 'Technical Director',
            details: 'Webflow',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: 'Launch 2020'
          },
          {
            brand: 'Rachel Lynn x Corri Lynn',
            brandURL: 'https://www.rlbycl.com/',
            position: 'Front End Development',
            details: 'Shopify, Large Inventory Organization with Excel',
            agency: 'owOw',
            launchDate: '2020'
          },
          {
            brand: 'Linnea',
            brandURL: 'https://linneaslights.com/',
            position: 'Technical Director',
            details: 'Shopify',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: 'Launch 2020'
          },
          {
            brand: 'Grabanzos',
            brandURL: 'https://grabanzos.com/',
            position: 'Technical Director',
            details: 'Shopify',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: 'Launch 2020'
          },
          {
            brand: 'Kolsvart',
            brandURL: 'https://www.kolsvart.com/',
            position: 'Technical Director',
            details: 'Shopify+',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: 'Launch 2020'
          },
          {
            brand: 'Popup Mob',
            brandURL: 'https://www.popupmob.com/',
            position: 'Technical Director',
            details: 'Webflow',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: 'Launch 2020'
          },
          {
            brand: 'Oral7',
            brandURL: 'https://oral7us.com/',
            position: 'Front End Developer',
            details: 'Shopify, Yotpo',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: 'Launch 2020'
          },
          {
            brand: 'Vive Sana',
            brandURL: 'https://vivesana.com/',
            position: 'Front End Developer',
            details: 'Shopify',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: 'Launch 2020'
          },
          {
            brand: 'Come Tees',
            brandURL: 'https://shop-cometees.biz/',
            position: 'Front End Development',
            details: 'Shopify',
            agency: 'oWow Studio',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: '2019'
          },
          {
            brand: 'DumbGood',
            brandURL: 'https://dumbgood.com/',
            position: 'Front End Development',
            details: 'Shopify+',
            agency: 'Verbal + Visual',
            agencyURL: 'https://verbalplusvisual.com/',
            launchDate: '2019'
          },
          {
            brand: 'Greats',
            brandURL: 'https://www.greats.com/',
            position: 'Front End Development',
            details: 'Shopify+',
            agency: 'Verbal + Visual',
            agencyURL: 'https://verbalplusvisual.com/',
            launchDate: '2018'
          },
          {
            brand: 'The Sak',
            brandURL: 'https://www.thesak.com/',
            position: 'Front End Development',
            details: 'Shopify+, Excel large inventory organization',
            agency: 'Verbal + Visual',
            agencyURL: 'https://verbalplusvisual.com/',
            launchDate: '2018'
          },
          {
            brand: 'Paul Evans',
            brandURL: 'https://www.paulevansny.com/',
            position: 'Front End Development',
            details: 'Shopify+',
            agency: 'Verbal + Visual',
            agencyURL: 'https://verbalplusvisual.com/',
            launchDate: '2018'
          },
          {
            brand: 'Carhartt WIP',
            brandURL: 'https://us.carhartt-wip.com/',
            position: 'Front End Development',
            details: 'Shopify+',
            agency: 'Verbal + Visual',
            agencyURL: 'https://verbalplusvisual.com/',
            launchDate: '2018'
          },
          {
            brand: 'Irving Farm',
            brandURL: 'https://irvingfarm.com/',
            position: 'Front End Development',
            details: 'Shopify+',
            agency: 'Verbal + Visual',
            agencyURL: 'https://verbalplusvisual.com/',
            launchDate: '2018'
          }
          
        ]        
      }
  }
}
</script>