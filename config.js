var config = {
    style: 'mapbox://styles/bmoscona-remnitz/cl0fwfqxn004d14px0gufq8hk',
    accessToken: 'pk.eyJ1IjoiYm1vc2NvbmEtcmVtbml0eiIsImEiOiJja3lmMTdyNWIwbW1tMm9zZXBjYWFjdmtpIn0.8jfksaBi_ejxeE0RU4E9mQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Rice Stubble Burning and Biogeochemical Cycling in North India',
    subtitle: 'by Ben Moscona',
    byline: '',
    footer: 'created by <a href="https://www.linkedin.com/in/ben-moscona/">Ben Moscona</a>',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Rice stubble burning is common across India, China, and Southeast Asia in regions where paddy rice is grown. Rice stubble burning, a form of crop residue burning, is utilized by rice farmers to quickly clear and prepare fields for the sowing of a new season of crop, but it creates significant air pollution. Air pollution exposure in South Asia is responsible for losses of ~58 million disability adjusted life years (DALYs) per year (Sharma, Khanna, and Ghosh 2019). <br><br><hr>' +
                '<br><br><span style = "opacity:1"><img src="./images/legendRiceHa.png" alt="" align="bottom" style="width:400px;height:150px;"></span><br><br><span style = "color:darkgrey;">(Scroll &#x2913; to explore)</span>',
            location: {
                center: { lon: 11.98698, lat: 33.91185 },
                zoom: 2.2,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'riceHa',
                     opacity: 1
                 },
                {
                    layer: 'country-boundaries',
                    opacity: 0
                }
            ],
            onChapterExit: [
                 {
                     layer: 'riceHa',
                     opacity: 0
                 },
                {
                    layer: 'country-boundaries',
                    opacity: 0
                }
            ]
        },
        {
            id: 'ch1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'In the North Indian states of Punjab, Haryana, and Uttar Pradesh, fires are used to manage these residues because: <br> (i) farmers have little time between rice harvest and wheat sowing to clear their fields <br> (ii) the use of combine harvesters leaves 8-12 inches of residue after the harvest <br> (iii) rising yields have increased the amount of rice stubble left to clear <br> (iv) the cost of using labor for manual clearing is high <br>(v) rice crop residues are not a valuable end-product (Venkatramanan et al. 2021). <hr>' +
                '<b> This map shows fire hotspots in North India in November 2020:</b><br> Data: NASA FIRMS, SUOMI VIIRS C2',
            location: {
                center: { lon: 77.79121, lat: 29.21278 },
                zoom: 6.65,
                pitch: 60.00,
                bearing: 1.51
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'firesNovember2020',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'firesNovember2020',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'ch2',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/delhiAir.jpg',
            description: 'The primary negative externality created by field burning is significant declines in air quality across North India, including in the city of New Delhi. Institutional distrust and corruption have made it challenging to prevent burning through legislation or government programs (Shehrawat 2020). <br><hr> Image credit: The Wire India, 2020',
            location: {
                center: { lon: 77.23598, lat: 28.63259 },
                zoom: 13.98,
                pitch: 60.00,
                bearing: -4.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'noxNorthIndia',
                     opacity: 0.80
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'noxNorthIndia',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'ch3',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/airpollutioncities.png',
            description: 'Rice stubble burning presents three major problems: air pollution, soil nutrient depletion, ' +
                'and erosion. Despite bans on crop residue burning in China and North India, the practice' +
                ' is still widespread (Shi et al. 2014).<br><hr> Figure credit: Brookings, 2020<br>' +
                '<a href="https://www.brookings.edu/blog/future-development/2020/11/25/delhi-the-worlds-most-air-polluted-capital-fights-back/">Delhi, the world’s most air polluted capital fights back</a>' +
                '<hr> <b>This map shows tropospheric NOx levels in November 2019 </b><br> Data: Copernicus Sentinel-5P',
            location: {
                center: { lon: 77.22823, lat: 28.65510 },
                zoom: 7.2,
                pitch: 24.00,
                bearing: 4.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'noxNorthIndia',
                    opacity: 0.80
                 }
            ],
            onChapterExit: [
                 {
                    layer: 'noxNorthIndia',
                    opacity: 0
                 }
            ]
        },
        {
            id: 'ch4',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './images/cropBurnField.jpeg',
            description: 'The biogeochemical implications of rice stubble burning can be framed as ' +
                'changes to the carbon, nitrogen, and hydrologic cycles (for brevity, I do not explore the phosphorus' +
                ' and sulphur cycles). Additionally, particulate matter is emitted into the atmosphere through burning and' +
                ' the soil loses net nutrients after the rice stubble is burned (Lohan et al. 2018). In 2000, wheat' +
                ' and rice stubble burning in India had estimated emissions for CH4, CO, N2O, and NOx of 110, 2306, 2,' +
                ' and 84 Gg, respectively (Gupta et al. 2004). <br><hr> Image credit: Deccan Herald, 2021' ,
            location: {
                center: { lon: 75.547, lat: 30.770 },
                zoom: 14.82,
                pitch: 41.00,
                bearing: -4.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ch5',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'The carbon cycle is altered because carbon taken up by rice plants or stored in soil is only partially returned to the soil after burning, especially after repeated burns, resulting in a loss of organic soil carbon (Lohan et al. 2018). However, the deposition of ash and the resulting increase in pH and addition of certain micronutrients can mitigate some of these losses in soil carbon (Chungu et al. 2020). Unfortunately, some ash may be lost to the wind or through leaching, reducing this liming effect (de Neergaard, Magid, and Mertz 2008). Some of the carbon species that are emitted by crop burning are CO2, CO, non-methane hydrocarbons (NMHCs), and volatile organic compounds (VOCs). CO2 emissions contribute to worsening the effects of climate change, while CO is toxic to humans and other animals. Certain VOCs from smoke can also be toxic to humans and other animals. Black carbon from smoke significantly contributes to elevated PM2.5 levels in North India and Delhi, which has an average PM2.5 level of 98 µg/m3, ten times that of World Health Organization (WHO) air quality guidelines (Bhuvaneshwari, Hettiarachchi, and Meegoda 2019). <br><hr> <b>Here is a map of tropospheric CO concentrations in November 2019 </b> <br>' +
                'Data: Copernicus Sentinel-5P',
            location: {
                    center: { lon: 76.47170, lat: 29.22105 },
                    zoom: 7.18,
                    pitch: 0.00,
                    bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'bmoscona-remnitz-co-northindia',
                    opacity: 0.6
                 }
            ],
            onChapterExit: [
                 {
                    layer: 'bmoscona-remnitz-co-northindia',
                    opacity: 0
                 }
            ]
        },
        {
            id: 'ch6',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Crop burning alters the nitrogen cycle because soil, fertilizer, and plant nitrogen can easily enter the atmosphere when burned. Lost nitrogen must be replaced with more fertilizer, increasing farmers’ reliance on external inputs. Crop residue burning emits NH3 and NOx into the atmosphere through volatilization. Gaseous ammonia is extremely toxic and nitric oxides form smog and acid rain. Consequently, acid rain harms soil health by aiding the leaching of other nutrients and chemicals from the soil. There may also be less nitrification in the soil post-burning because burning can selectively kill nitrifying bacteria, which are particularly sensitive to heat (Covington and Sackett 1986). This may mitigate the release of more nitrogen taken up by denitrifying bacteria as nitrate in the form of N2 to the atmosphere and increase the amount of nitrogen found as ammonium in soils. However, these effects are likely short-lived because these bacteria are resilient and repopulate fields quickly. Next, we will explore how crop burning affects the hydrologic cycle.' +
                '  <br><hr> <b> Here is a plot of nitrate concentrations in groundwater wells in Punjab. Dots exceeding 10 mg/L of Nitrate (represented by <span style = \'color:red;\'>&#9679;</span>),' +
                ' are above the EPA maximum contaminant level (MCL), while <span style = \'color:blue;\'>&#9679;</span> dots represent wells below the MCL. </b> <br> Data: India WRIS, 2022' ,
            location: {
                    center: { lon: 75.48863, lat: 30.58561 },
                    zoom: 7.94,
                    pitch: 21.00,
                    bearing: -0.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'nitrateGroundwaterPunjab',
                    opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                    layer: 'nitrateGroundwaterPunjab',
                    opacity: 0
                 }
            ]
        },
        {
            id: 'ch7',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Crop burning impacts the hydrologic cycle primarily by increasing soils’ water repellency, decreasing soil structure stability, and increasing soil pH. Field burning may increase water repellency, which slows wetting or infiltration of water into soil (MacDonald and Huffman 2004). This results in a higher potential for overland flow, and consequently erosion. The intensity and duration of fires are key properties for determining the impact of burning on soils. Fire temperatures between 200-250 ºC can result in the gasification of plant lipids, which then cover soil particles (Certini 2005). Rice stubble burning may increase soil temperature to up to ~600 ºC, and the hydrophobic plant lipids may disintegrate completely, potentially decreasing water repellency (Ladatko and Ladatko 2016; Certini 2005). Repellent layers build up over multiple fires and may last up to six years (McDonald and Huffman 2004). Soil structure is also compromised by fires because vaporization of water in the soil leads to compaction, decreasing the porosity of the soil (Spencer, Farmer, and Jury 1982). Finally, soil pH increases immediately after a fire because of liming from the deposition of ash, which returns phosphorus to the soil.' +
                '  <br><hr> <b>Here we visualize surface runoff in North India in November 2019, along with major rivers. Much of this runoff is co-located near rice farms and waterways that flow into Delhi. </b> <br> ' +
                'Data: ERA5-Land monthly averaged data, 2022' ,
            location: {
                    center: { lon: 76.88841, lat: 29.51478 },
                    zoom: 7.75,
                    pitch: 21.00,
                    bearing: -0.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'waterway',
                    opacity: 1
                 },
                {
                    layer: 'nitrateGroundwaterPunjab',
                    opacity: 1
                 },
                 {
                    layer: 'bmoscona-remnitz-surfacerunoffnorthindia',
                    opacity: 0.64
                 }
            ],
            onChapterExit: [
                 {
                    layer: 'waterway',
                    opacity: 0
                 },
                                 {
                    layer: 'bmoscona-remnitz-surfacerunoffnorthindia',
                    opacity: 0
                 },
                                 {
                    layer: 'nitrateGroundwaterPunjab',
                    opacity: 0
                 }
            ]
        },
        {
            id: 'ch8',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Instead of burning, farmers have options for incorporating and retaining crop residues on their fields, like stubble mulching and no-till (Turmel et al. 2015).  Retaining crop residues prevents the loss of nutrients, biodiversity loss, and soil compaction associated with burning.  These techniques can also help farmers prevent erosion and increases in overland flow (Wu et al. 2020).<br><br>' +
                'Other than outright bans on burning, some of the solutions being proposed to combat rice stubble burning are' +
                ' Payment for Ecosystem Services (PES) and subsidies for better harvesting machinery. ' ,
            location: {
                    center: { lon: 77.10628, lat: 29.51633 },
                    zoom: 14.00,
                    pitch: 59.00,
                    bearing: 130.28
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    /// layer: 'firesNovember2020',
                    /// opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                    /// layer: 'firesNovember2020',
                    /// opacity: 0
                 }
            ]
        },
        {
            id: 'ch9',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/Payments_for_Ecosystem_Services_(PES).png',
            description: 'PES methods aim to incentivize farmers not to burn their fields by paying them to not produce bad air quality and other negative externalities. This may work better than banning crop burning because PES programs provide a positive incentive, rather than a solely punitive one, which has proven difficult to enforce for political reasons. Some difficulties associated with PES programs are verifying compliance, which may be done on the ground or with satellite imagery, and overcoming institutional distrust, which may be achieved by paying farmers upfront (Jack, Jayachandran, Kala and Pande 2022). Thus, PES solutions that might appear to work in countries with more trusted institutions are not necessarily representative of regions like North India. PES programs might appear more expensive on paper than other solutions because they require careful design and large capital outlays, making them less appealing to taxpayers.  <hr> ' +
                'Image credit: Bosco Liso <a href="https://commons.wikimedia.org/w/index.php?curid=102384160">Link</a>' ,
            location: {
                    center: { lon: 77.10628, lat: 29.51633 },
                    zoom: 14.00,
                    pitch: 59.00,
                    bearing: 130.28
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    /// layer: 'firesNovember2020',
                    /// opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                    /// layer: 'firesNovember2020',
                    /// opacity: 0
                 }
            ]
        },
        {
            id: 'ch10',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/National_Agro_Happy_Seeder-2.jpg',
            description: 'Subsidies can help allay capital cost barriers that prevent farmers from buying newer harvesting equipment. In 2018, the Indian government provided a no-burn equipment subsidy so that farmers would be more likely to purchase tools like the Happy Seeder, which mechanically mulches rice straw and sows wheat into farmers’ fields (Shyamsundar et al. 2019). However, because burning remains a cheaper alternative, and fines are not enforced, take up and use of these equipment has been disappointing. <hr>' +
                'Image credit: <a href= "https://commons.wikimedia.org/wiki/File:National_Agro_Happy_Seeder.jpg">Link <a/>' ,
            location: {
                    center: { lon: 75.53992, lat: 30.67743 },
                    zoom: 15.28,
                    pitch: 6.00,
                    bearing: 7.08
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    /// layer: 'firesNovember2020',
                    /// opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                    /// layer: 'firesNovember2020',
                    /// opacity: 0
                 }
            ]
        },
        {
            id: 'ch11',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'The biogeochemical effects of rice stubble burning are complex and dependent on the frequency of burning, soil composition, the availability of water, and other environmental factors. However, reducing rice stubble burning will save lives by reducing air pollution and will also help limit excess fertilizer usage. Techniques like mulching and no-till may also help farmers improve their fields’ long-term health and resilience. To transition to these improved techniques, the government of India should continue promoting educational campaigns for farmers, developing PES programs, and supporting farmers’ transitions with subsidies. <hr>' +
                '<b> This map shows the population density of North India </b><br>' +
                'Areas in <span style = \'color:red;\'>&#9679;</span> have a population density of >2,000 per sq km. <br> ' +
                'Areas in <span style = \'color:lightseagreen;\'>&#9679;</span> have a population density of ~500 per sq km. <br> Delhi has a population density of over 11,000 per sq km <br>' +
                'Data source: European Commission, Global Human Settlement Layer, 2015' ,
            location: {
                    center: { lon: 75.91623, lat: 29.47864 },
                    zoom: 7.67,
                    pitch: 6.00,
                    bearing: 7.08
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'popdensitynorthindia',
                    opacity: 0.70
                 },
                                 {
                    layer: 'waterway',
                    opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                    layer: 'waterway',
                    opacity: 0
                 },
                                 {
                    layer: 'popdensitynorthindia',
                    opacity: 0
                 }
            ]
        }
    ]
};
