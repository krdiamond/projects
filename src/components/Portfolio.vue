<template> 
  <div class="portfolio container position--absolute z-index--1 text-align--left top--0 bg--white padding--20 flex overflow--hidden justify--between"> 
      <div class="overflow--x">
          <div  v-for="project in projects"  :key="project.brand" class="padding-bottom--30 min-width--200">
              <h2 v-if="project.brandURL" ><a target="_blank" :href="project.brandURL"  class="underline-animation">{{project.brand}}</a></h2>
              <h2 v-else >{{project.brand}}</h2>
              <h3>{{project.position}}</h3>
              <p>{{project.details}}</p>
              <h5> 
                <span v-if="project.agency">While @ <a v-if="project.agencyURL" target="_blank" :href="project.agencyURL" class="mini-underline-animation">{{project.agency}}</a>,</span> 
                <span v-if="project.launchDate">{{project.launchDate}}</span>
              </h5>
          </div> 
      </div>
      <div class="padding-left--10">
          <button type="button" @click="$emit('close-portfolio')" class="close bg--none border--none" aria-label="Close Portfolio">        
              <img src="../assets/x.svg"  title="Close Portfolio" alt="Close Portfolio">
          </button>
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
            brand: 'Chomps',
            brandURL: 'https://chomps.com/',
            position: 'Front End Developer',
            details: 'Shopify+, Recharge, Shopify Scripts', 
            launchDate: '2023'
          },  
          {
            brand: 'OSSA New York',
            brandURL: 'https://www.ossanewyork.com/',
            position: 'Front End Developer',
            details: 'Shopify',
            launchDate: '2023'
          },
          {
            brand: 'Plant People',
            brandURL: 'https://www.plantpeople.co/',
            position: 'Front End Developer',
            details: 'Shopify+, ReCharge, Shopify Scripts',
            launchDate: '2023'
          },
          {
            brand: 'Sleep.me',
            brandURL: 'https://sleep.me/',
            position: 'Front End Developer',
            details: 'Nuxt, Vue, Shopify+, Headless, Headless ReCharge, Shopify Scripts, Extend & Affirm',
            launchDate: '2023'
          },
          {
            brand: 'Hangar9',
            brandURL: 'https://hangar9.ca/',
            position: 'Front End Developer',
            details: 'Shopify',
            agency: 'Driver Digital',
            agencyURL: 'https://driver-digital.com/',
            launchDate: ' 2023',
          },
          {
            brand: 'Hanky Panky',
            brandURL: 'https://www.hankypanky.com/',
            position: 'Front End Developer',
            details: 'Shopify+',
            agency: 'Driver Digital',
            agencyURL: 'https://driver-digital.com/',
            launchDate: ' 2023'
          },
          {
            brand: 'Chilisleep',
            position: 'Front End Developer',
            details: 'Vue, Shopify+, Shopify Scripts, Clyde & Affirm',
            launchDate: '2022'
          },
          {
            brand: 'Rosetta Getty',
            brandURL: 'https://rosettagetty.com/',
            position: 'Front End Developer',
            details: 'Shopify',
            launchDate: '2021'
          },
          {
            brand: 'Woosh Beauty',
            brandURL: 'https://wooshbeauty.com/',
            position: 'Front End Developer',
            details: 'Shopify',
            launchDate: '2022'
          },
          {
            brand: 'Griffin',
            brandURL: 'https://www.griffingam.com/',
            position: 'Front End Developer',
            details: 'Webflow',
            launchDate: '2022'
          },
          {
            brand: 'Beauty Blender',
            brandURL: 'https://beautyblender.com/',
            position: 'Front End Developer',
            details: 'Shopify+',
            agency: 'Sweden Unlimited',
            agencyURL: 'https://swedenunlimited.com/',
            launchDate: ' 2021'
          },
          {
            brand: 'MahZeDahr',
            brandURL: 'https://mahzedahrbakery.com/',
            position: 'Front End Developer',
            details: 'Shopify+, ReCharge',
            agency: 'Sweden Unlimited',
            agencyURL: 'https://swedenunlimited.com/',
            launchDate: ' 2021'
          },
          {
            brand: 'Monrow',
            brandURL: 'https://www.monrow.com/',
            position: 'Front End Developer',
            details: 'Shopify+',
            agency: 'Sweden Unlimited',
            agencyURL: 'https://swedenunlimited.com/',
            launchDate: ' 2021'
          },
          {
            brand: 'Pat Mcgrath Labs',
            brandURL: 'https://www.patmcgrath.com',
            position: 'Front End Developer',
            details: 'Shopify+',
            agency: 'Verbal + Visual',
            agencyURL: 'https://verbalplusvisual.com/',
            launchDate: ' 2020'
          },
          {
            brand: 'Bala Bangles',
            brandURL: 'https://www.shopbala.com/',
            position: 'Technical Director',
            details: 'Shopify+',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: ' 2020'
          },
          {
            brand: 'Radswan',
            brandURL: 'https://radswan.com/',
            position: 'Technical Director',
            details: 'Shopify+',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: ' 2020'
          },
          {
            brand: 'Aavrani',
            brandURL: 'https://aavrani.com/',
            position: 'Technical Director',
            details: 'Shopify',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: ' 2020'
          },
          {
            brand: 'HeTime',
            brandURL: 'https://hetime.com/',
            position: 'Technical Director',
            details: 'Shopify+, ReCharge',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: ' 2020'
          },
          {
            brand: 'Ohza',
            brandURL: 'https://drinkohza.com/',
            position: 'Technical Director',
            details: 'Shopify+',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: ' 2020'
          },
          {
            brand: 'Olo',
            brandURL: 'https://oloband.com/',
            position: 'Technical Director',
            details: 'Shopify',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: ' 2020'
          },
          {
            brand: 'Vanessa Lundborg',
            brandURL: 'https://www.vanessalundborg.com/',
            position: 'Technical Director',
            details: 'Webflow',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: ' 2020'
          },
          {
            brand: 'Rachel Lynn x Corri Lynn',
            brandURL: 'https://www.rlbycl.com/',
            position: 'Front End Developer',
            details: 'Shopify, Excel Large Inventory Organization',
            launchDate: '2020'
          },
          {
            brand: 'Linneas Lights',
            brandURL: 'https://linneaslights.com/',
            position: 'Technical Director',
            details: 'Shopify',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: ' 2020'
          },
          {
            brand: 'Grabanzos',
            brandURL: 'https://grabanzos.com/',
            position: 'Technical Director',
            details: 'Shopify',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: ' 2020'
          },
          {
            brand: 'Kolsvart',
            brandURL: 'https://www.kolsvart.com/',
            position: 'Technical Director',
            details: 'Shopify+',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: ' 2020'
          },
          {
            brand: 'Popup Mob',
            brandURL: 'https://www.popupmob.com/',
            position: 'Technical Director',
            details: 'Webflow',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: ' 2020'
          },
          {
            brand: 'Oral7',
            brandURL: 'https://oral7us.com/',
            position: 'Technical Director',
            details: 'Shopify, Yotpo',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: ' 2020'
          },
          {
            brand: 'Vive Sana',
            brandURL: 'https://vivesana.com/',
            position: 'Technical Director',
            details: 'Shopify',
            agency: 'Lustre',
            agencyURL: 'https://www.lustre.nyc/',
            launchDate: ' 2020'
          },
          {
            brand: 'Come Tees',
            brandURL: 'https://shop-cometees.biz/',
            position: 'Front End Developer',
            details: 'Shopify',
            launchDate: '2019'
          },
          {
            brand: 'DumbGood',
            brandURL: 'https://dumbgood.com/',
            position: 'Front End Developer',
            details: 'Shopify+, GSAP',
            agency: 'Verbal + Visual',
            agencyURL: 'https://verbalplusvisual.com/',
            launchDate: ' 2019'
          },
          {
            brand: 'Greats',
            brandURL: 'https://www.greats.com/',
            position: 'Front End Developer',
            details: 'Shopify+',
            agency: 'Verbal + Visual',
            agencyURL: 'https://verbalplusvisual.com/',
            launchDate: ' 2018'
          },
          {
            brand: 'The Sak',
            brandURL: 'https://www.thesak.com/',
            position: 'Front End Developer',
            details: 'Shopify+, Excel large inventory organization',
            agency: 'Verbal + Visual',
            agencyURL: 'https://verbalplusvisual.com/',
            launchDate: ' 2018'
          },
          {
            brand: 'Paul Evans',
            brandURL: 'https://www.paulevansny.com/',
            position: 'Front End Developer',
            details: 'Shopify+',
            agency: 'Verbal + Visual',
            agencyURL: 'https://verbalplusvisual.com/',
            launchDate: ' 2018'
          },
          {
            brand: 'Carhartt WIP',
            brandURL: 'https://us.carhartt-wip.com/',
            position: 'Front End Developer',
            details: 'Shopify+',
            agency: 'Verbal + Visual',
            agencyURL: 'https://verbalplusvisual.com/',
            launchDate: ' 2018'
          },
          {
            brand: 'Irving Farm',
            brandURL: 'https://irvingfarm.com/',
            position: 'Front End Developer',
            details: 'Shopify+',
            agency: 'Verbal + Visual',
            agencyURL: 'https://verbalplusvisual.com/',
            launchDate: ' 2018'
          }
          
        ]        
      }
  }
}
</script>