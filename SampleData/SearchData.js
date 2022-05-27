let sampleSearchData = [
  {
    number: '682',
    name: 'Naruto Uzumaki',
    releaseDate: 'Aug 2021',
    rereleaseDate: null,
    msrp: '5000',
    series: 'Naruto',
    manufacturer: 'Good Smile Company',
    image: [
      'https://images.goodsmile.info/cgm/images/product/20160927/5981/41606/large/e7136317c13b19304a9f6bb7ac16056b.jpg',
      'https://images.goodsmile.info/cgm/images/product/20160927/5981/41607/large/bf6870979404cd812fab0331870417cb.jpg',
      'https://images.goodsmile.info/cgm/images/product/20160927/5981/41608/large/283820e0d12a55d17e3a0f1b855090d0.jpg',
      'https://images.goodsmile.info/cgm/images/product/20160927/5981/41609/large/a41ebf33289a9acb2deca1438c698452.jpg',
      'https://images.goodsmile.info/cgm/images/product/20160927/5981/41610/large/bed758978e7f8d5150484d703c0de25b.jpg'
    ]
  },
  {
    number: '707',
    name: 'Sasuke Uchiha',
    releaseDate: 'Sept 2021',
    rereleaseDate: null,
    msrp: '5000',
    series: 'Naruto',
    manufacturer: 'Good Smile Company',
    image: [
      `https://images.goodsmile.info/cgm/images/product/20161201/6106/42713/large/641ad41e7170aa1d4c0fc3ce38ba9b69.jpg`,
      `https://images.goodsmile.info/cgm/images/product/20161201/6106/42714/large/f9c263929d77fa06dc434b4a745b7809.jpg`,
      `https://images.goodsmile.info/cgm/images/product/20161201/6106/42715/large/53038cbba273aa3f4558596efa2b45e6.jpg`,
      `https://images.goodsmile.info/cgm/images/product/20161201/6106/42716/large/fafc32b10ad786ff5b7194fb0450af0e.jpg`,
      `https://images.goodsmile.info/cgm/images/product/20161201/6106/42717/large/5ab134d1a310d6603eae3df8f3ad7759.jpg`,
    ]
  },
  {
    number: '886',
    name: 'Jiraiya & Gamabunta Set',
    releaseDate: 'July 2018',
    rereleaseDate: null,
    msrp: '5602',
    series: 'Naruto',
    manufacturer: 'Good Smile Company',
    image: [
      'https://images.goodsmile.info/cgm/images/product/20180511/7272/51902/large/98d6cc2c50d0444683d0ade3330b13c2.jpg',
      'https://images.goodsmile.info/cgm/images/product/20180511/7272/51903/large/b1c121317def4fe625783e0894efb426.jpg',
      'https://images.goodsmile.info/cgm/images/product/20180511/7272/51904/large/bf3ec9ddfd559aaaf314a528cda6848a.jpg',
      'https://images.goodsmile.info/cgm/images/product/20180511/7272/51905/large/08c4d1e10e79f91f0864ae2a6dd52450.jpg',
      'https://images.goodsmile.info/cgm/images/product/20180511/7272/51906/large/cea6e9ae1be413f68d0647331fce341f.jpg',
    ]
  },
  {
    number: '1814',
    name: 'Nemesis Prime',
    releaseDate: 'June 2022',
    rereleaseDate: null,
    msrp: '5500',
    series: 'Tranformers',
    manufacturer: 'Sentinel',
    image: [
      'https://images.goodsmile.info/cgm/images/product/20220128/12297/94940/large/00437cf9dc4a42679eaca23536798e9f.jpg',
      'https://images.goodsmile.info/cgm/images/product/20220128/12297/94941/large/91b2d422d8ba063006859cae6fb0e3cd.jpg',
      'https://images.goodsmile.info/cgm/images/product/20220128/12297/94942/large/c4720212ceef3461a2286d2728f48097.jpg',
      'https://images.goodsmile.info/cgm/images/product/20220128/12297/94943/large/65da54ec9993dfda2ad99937ae6613d2.jpg',
      'https://images.goodsmile.info/cgm/images/product/20220128/12297/94944/large/84aad3d962e260f849b592db60b91d0d.jpg',
    ]
  },
  {
    number: '1765',
    name: 'Optimus Prime',
    releaseDate: 'May 2022',
    rereleaseDate: null,
    msrp: '5500',
    series: 'Transformers',
    manufacturer: 'Sentinel',
    image: [
      'https://images.goodsmile.info/cgm/images/product/20211122/12031/92321/large/4d186c72d553b4120e130374b40f4ae5.jpg',
      'https://images.goodsmile.info/cgm/images/product/20211122/12031/92322/large/df08807577e2f2067c9e1978ed480af0.jpg',
      'https://images.goodsmile.info/cgm/images/product/20211122/12031/92323/large/48f86ee52474462b5f459f6e6b6b8411.jpg',
      'https://images.goodsmile.info/cgm/images/product/20211122/12031/92324/large/2c6eb7fac5d0a32b14c2111fe00c323a.jpg',
      'https://images.goodsmile.info/cgm/images/product/20211122/12031/92325/large/74f01a5fd4f9772d4355bd541c0d8ae6.jpg',
    ]
  },
  {
    number: '1875',
    name: 'Ryang-Ha Song',
    releaseDate: 'Nov 2022',
    rereleaseDate: null,
    msrp: '6200',
    series: 'Love of Kill',
    manufacturer: 'ORANGE ROUGE',
    image: [
      'https://images.goodsmile.info/cgm/images/product/20220427/12658/98400/large/fe2d557e48660d70fe29a4ada126dd84.jpg',
      'https://images.goodsmile.info/cgm/images/product/20220427/12658/98401/large/0185cc4e8258bbd1c05b67c29b001d1e.jpg',
      'https://images.goodsmile.info/cgm/images/product/20220427/12658/98402/large/c99bd1e584faee635613dd8c82c3e825.jpg',
      'https://images.goodsmile.info/cgm/images/product/20220427/12658/98403/large/62cb3c4b19eb7c011245f9e2eccf382d.jpg',
      'https://images.goodsmile.info/cgm/images/product/20220427/12658/98404/large/79c2385a52b1e43f9fd95198ce501751.jpg',
    ]
  },
  {
    number: '956',
    name: 'Gaara',
    releaseDate: 'Dec 2018',
    rereleaseDate: 'Sept 2022',
    msrp: '5000',
    series: 'Naruto',
    manufacturer: 'Good Smile Company',
    image: [
      'https://images.goodsmile.info/cgm/images/product/20180625/7379/52816/large/2d7027ed961d09b0cc175079f4802348.jpg',
      'https://images.goodsmile.info/cgm/images/product/20180625/7379/52817/large/f8dcbe397a7766899e9676121068a73f.jpg',
      'https://images.goodsmile.info/cgm/images/product/20180625/7379/52818/large/2a5f7c820da6982a9814a1ce89271728.jpg',
      'https://images.goodsmile.info/cgm/images/product/20180625/7379/52819/large/c43151fe329b779deddab4ecfae74f9a.jpg',
      'https://images.goodsmile.info/cgm/images/product/20180625/7379/52820/large/3778f8ac6ae5c4dbfd25caf4eae221df.jpg',
    ]
  },
  {
    number: '1136',
    name: 'Raphtalia',
    releaseDate: 'Nov 2019',
    rereleaseDate: 'Feb 2023',
    msrp: '5500',
    series: 'The Rising of the Shield Hero',
    manufacturer: 'Good Smile Company',
    image: [
      'https://images.goodsmile.info/cgm/images/product/20190520/8343/60324/large/48ac93a5bc0d2ce7f11ce02db7aecd90.jpg',
      'https://images.goodsmile.info/cgm/images/product/20190520/8343/60325/large/b2bfba5537b150b8addd93d2bc4eddc5.jpg',
      'https://images.goodsmile.info/cgm/images/product/20190520/8343/60326/large/f7e6dee9a8b9fef9aee3121d598a81eb.jpg',
      'https://images.goodsmile.info/cgm/images/product/20190520/8343/60327/large/60d8f1993b08f7945a1a13580fd3396d.jpg',
      'https://images.goodsmile.info/cgm/images/product/20190520/8343/60328/large/07f5eb4640f8c9c3f86996910853e9a7.jpg',
    ]
  },
  {
    number: '1113',
    name: 'Shield Hero',
    releaseDate: 'Oct 2019',
    rereleaseDate: 'Feb 2023',
    msrp: '5900',
    series: 'The Rising of the Shield Hero',
    manufacturer: 'Good Smile Company',
    image: [
      'https://images.goodsmile.info/cgm/images/product/20190327/8210/59215/large/4029346b1229b26c4f6e5a4dab2644cb.jpg',
      'https://images.goodsmile.info/cgm/images/product/20190327/8210/59216/large/bb813df2a63761d47a7351ce548110f9.jpg',
      'https://images.goodsmile.info/cgm/images/product/20190327/8210/59217/large/70c4b34de65f2b3b8873fa165a4058c8.jpg',
      'https://images.goodsmile.info/cgm/images/product/20190327/8210/59218/large/02cab721317b2bf65b55d2a2bad7db0a.jpg',
      'https://images.goodsmile.info/cgm/images/product/20190327/8210/59219/large/4df7a162ee3a7bfeec6bbcb87e4bdb05.jpg',
    ]
  },
  {
    number:   '1295',
    name: 'Filo',
    releaseDate: 'Oct 2020',
    rereleaseDate: null,
    msrp: '5000',
    series: 'The Rising of the Shield Hero',
    manufacturer: 'Good Smile Company',
    image: [
      'https://images.goodsmile.info/cgm/images/product/20200313/9348/68260/large/a316ebac3fd92faf58847d5aee6de664.jpg',
      'https://images.goodsmile.info/cgm/images/product/20200313/9348/68261/large/e5412390e9fcf17747b5c50e8eefe1c9.jpg',
      'https://images.goodsmile.info/cgm/images/product/20200313/9348/68262/large/f2a3903cf0fae40e0dfd954ee6b45090.jpg',
      'https://images.goodsmile.info/cgm/images/product/20200313/9348/68263/large/7972556fefeb904e0636b4c515bba6e6.jpg',
      'https://images.goodsmile.info/cgm/images/product/20200313/9348/68264/large/b1498c0e5afa9dd41a4254250f755465.jpg',
    ],
}];

export default sampleSearchData;