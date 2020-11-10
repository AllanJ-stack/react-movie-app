import React, {createContext, useState} from 'react'

export const DataContext = createContext ();

export const DataProvider = (props) => {
    const [products, setProducts] = useState ([
        {
            "_id": "1",
            "title1": "Captain Marvel",
            "title2": "Extraction",
            "title3": "SHAZAM!",
            "title4": "Enola Holmes",
            "images1": [
                //Movies-Captain Marvel    
                "https://nerdist.com/wp-content/uploads/2019/01/CM_Character_1-Sht_Brie_v3_Lg-338x500.jpg",
                "https://nerdist.com/wp-content/uploads/2019/01/CM_Character_1-Sht_Gemma_v2_Lg-338x500.jpg",
                "https://nerdist.com/wp-content/uploads/2019/01/CM_Character_1-Sht_Djimon_v2_Lg-338x500.jpg",
                "https://nerdist.com/wp-content/uploads/2019/01/CM_Character_1-Sht_Bening_v2_Lg-338x500.jpg"
                ],
            "images2": [
                //Avtion Movies-Extraction
                "https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                "https://www.cavsconnect.com/wp-content/uploads/2020/05/Extraction-poster-600x889-1.jpg",
                "https://static01.nyt.com/images/2020/04/23/arts/23extraction/23extraction-mediumSquareAt3X-v2.jpg",
                "https://i.pinimg.com/474x/84/47/43/8447434924a9299ccf4275e3a476c63b.jpg"
                ],
            "images3": [
                //Comedy Movies-Shazam!
                "https://heroichollywood.com/wp-content/uploads/2019/03/Shazam-Zachary-Levi-Asher-Angel-Billy-Batson-DC-DCEU-David-F.-Sandberg.jpg",
                "https://i.pinimg.com/originals/59/b1/58/59b158567f3f2a48fe5d55e859934c2b.jpg",                
                "https://pisco.trinikid.com/77c467fd-ae5f-47d7-abeb-1f2c035d0a0f.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81dZo1PAfvL._AC_SL1500_.jpg"
                
                ],
            "images4": [
                //Drama Movies - Enola Holmes                
                "https://filmmusicreporter.com/wp-content/uploads/2020/08/vca-83-scaled.jpg",
                "https://img.republicworld.com/republic-prod/stories/images/16003164335f62e411d3ec7.jpg",
                "https://images6.fanpop.com/image/photos/43500000/Enola-Holmes-2020-Poster-Fiona-Shaw-as-Miss-Harrison-netflix-43534780-2025-3000.jpg",
                "https://i.ebayimg.com/images/g/QnIAAOSwfN1fYz6T/s-l400.jpg"
                    ],
            "description": "Watch The Movie",
            "content": "Latest Movie",
            "price1": 10,
            "price2": 10,
            "price3": 10,
            "price4": 10
        },
        {
            "_id": "2",
            "title1": "Batman",
            "title2": "Hard Kill",
            "title3": "Lovebirds",
            "title4": "Mulan",
            "images1": [
                //Movies-Batman
                "https://www.superheromovies.net/img/p/jpMP5ENv2ER6faI1rQx9VidKyfa.jpg",
                "https://talenthouse-res.cloudinary.com/image/upload/c_fill,f_auto,h_965,w_640/v1595546776/user-1079993/submissions/lr2gefqlzbnxwyhwzged.jpg",
                "https://i.ytimg.com/vi/YbxETO5tHO4/maxresdefault.jpg",
                "https://i.pinimg.com/736x/0c/b5/71/0cb571f0355bd3a8b9bc32d478ca466d.jpg"
                ],
            "images2": [
                //Avtion Movies - Hard Kill
                "https://moviesreview101.files.wordpress.com/2020/08/hard-kill-international-poster-copy-2.jpg",
                "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/wrlxe-C9DCAFH2N2B-Full-Image_GalleryBackground-en-US-1598315546877._SX1080_.jpg",
                "https://theplaylist.net/wp-content/uploads/2020/07/Bruce-Willis-Hard-Kill.jpeg",
                "https://i.pinimg.com/736x/93/47/7e/93477e4577ea16877bb0d164a633a41e.jpg"
                
                ],
            "images3": [
                //Comedy Movies -LoveBirds
                "https://m.media-amazon.com/images/M/MV5BNzU1ZTE4YzAtOWNkYi00YWE4LThmY2YtMDNlYzU2ZTgxYTc2XkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_UY1200_CR89,0,630,1200_AL_.jpg",
                "https://occ-0-299-300.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABdPbgoeadJNL-vqG-0M6WaVggRRz9VIhruDZm4xjbneT6YIWhfEIWYQU5bUVHrKGzj1fPoVAHoH3myTQQmcjAknkH6nHJb_ECTFyOUnOGxrID58S_ObxF-KDpzSNWQ.jpg",
                "https://m.media-amazon.com/images/M/MV5BMTg1MjAwMjA3OV5BMl5BanBnXkFtZTcwOTM1MTU2MQ@@._V1_UY1200_CR115,0,630,1200_AL_.jpg",
                "https://i.pinimg.com/474x/4d/1b/5f/4d1b5f991150dd5a2319a959bf2517ad.jpg",
                ],
            "images4": [
                //Drama Movies- Mulan
                "https://images-na.ssl-images-amazon.com/images/I/71c%2BSZbaVVL._AC_SL1293_.jpg",
                "https://i.pinimg.com/originals/c8/11/89/c811894b0e0d456f1d481f4283970b6f.jpg",
                "https://i.pinimg.com/564x/31/8a/fb/318afb5b5002e40a5195d591b0f8e9ea.jpg",
                "https://i.pinimg.com/474x/07/05/8b/07058bfe210003482f3c0338c71fdde6.jpg"
                    ],
            "description": "Watch The Movie",
            "content": "Latest Movie",
            "price1": 10,
            "price2": 5,
            "price3": 10,
            "price4": 10
        },
        {
            "_id": "3",
            "title1": "Hobbs and Shaw",
            "title2": "False Step",
            "title3": "BloodShot",
            "title4": "Peninsula",
            "images1": [
                //Movies-Hobbs and Shaw
                "https://i.pinimg.com/originals/ab/cd/2b/abcd2bc1b5c7bd44d986cea08704696d.jpg",
                "https://i.pinimg.com/originals/d8/2a/72/d82a72f17e7c0e2241ed3bf5f16fbaa3.png",
                "https://images-na.ssl-images-amazon.com/images/I/71MLOvodZWL._AC_SX522_.jpg",
                "https://www.joblo.com/assets/images/joblo/posters/2019/02/hobbs-poster3.jpg"
                ],
            "images2": [
                //Avtion Movies - BloodShot
                "https://www.newdvdreleasedates.com/images/posters/bloodshot-2020-04.jpg",                
                "https://i.pinimg.com/originals/6d/14/8f/6d148f5dd30c7b4a7582ee910da6f49f.jpg",
                "https://news.toyark.com/wp-content/uploads/sites/4/2019/10/McFarlane-Bloodshot-008.jpg",
                "https://i.pinimg.com/564x/9f/fc/9c/9ffc9cc7811c35482c82a8860a669a41.jpg"
                
                ],
            "images3": [
                //Comedy Movies - My Spy 
                "https://i.pinimg.com/564x/d6/86/08/d686089541b81d54c4edf4d04f8c1aa2.jpg",
                "https://www.nikidaily.pro/wp-content/uploads/2020/04/My-Spy-2019-nikidaily6543-min.jpg",
                "https://media-cache.cinematerial.com/p/500x/xvtynr6e/my-spy-thai-movie-poster.jpg",
                "https://cdn3.clickthecity.com/images/movies/poster/400/17348.jpg",
                
                ],
            "images4": [
                //Drama Movies - Peninsula
                "https://www.wellgousa.com/sites/default/files/2020-10/TRAIN%20TO%20BUSAN%20PRESENTS%20PENINSULA-Well%20Go%20USA-Official%20Poster-812x1200-1.jpg",
                "https://pics.filmaffinity.com/Train_to_Busan_2_Peninsula-944615229-large.jpg",
                "https://i.pinimg.com/originals/cf/bf/4c/cfbf4c1d4986b6e41d13adad94db8f19.png",
                "https://cdn.flickeringmyth.com/wp-content/uploads/2020/03/Peninsula-Trian-to-Busan-2-2.jpg"
                    ],
            "description": "Watch The Movie",
            "content": "Latest Movie",
            "price1": 10,
            "price2": 10,
            "price3": 10,
            "price4": 10
        },
        {
            "_id": "4",
            "title1": "Bad Boys for Life",
            "title2": "Black OPS",
            "title3": "Dolittle",
            "title4": "Guilty",
            "images1": [
                //Movies-Bad Boys for Life
                "https://stat.ameba.jp/user_images/20200206/23/lm005228/f1/50/j/o0800118614708888350.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/91OG5kLZ1UL._SL1500_.jpg",
                "https://www.familyvideo.com/media/catalog/product/cache/1613193ac186f16628974dcab15fa459/C/O/COL_D43006D.jpg",
                "https://cultbox.co.uk/wp-content/uploads/2020/01/Bad-Boys-for-Life.jpg"
                ],
            "images2": [
                //Avtion Movies - Black OPS
                "https://cdn.flickeringmyth.com/wp-content/uploads/2020/04/Black-Ops-1-600x889.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/51KuNKZmtrL._AC_.jpg",
                "https://i5.walmartimages.com/asr/f53a39e1-1339-41e2-bd28-10cb9f263bf6_1.c4feaaf2b936c1341b4b59ac2bb19acf.jpeg",
                "https://images-na.ssl-images-amazon.com/images/I/41AtKAF1DEL._AC_UL600_SR414,600_.jpg"
                ],
            "images3": [
                //Comedy Movies-DoLittle
                "https://upload.wikimedia.org/wikipedia/en/1/1f/Dolittle_%282020_film_poster%29.png",
                "https://www.joblo.com/assets/images/joblo/news/2019/11/Dolittle-character-poster-7-913.jpg",
                "https://editorial01.shutterstock.com/wm-preview-450/10569604ag/b6fa4440/dolittle-film-2020-shutterstock-editorial-10569604ag.jpg",
                "https://mir-s3-cdn-cf.behance.net/project_modules/disp/5272ab90885419.5e2309da187ef.png",
                ],
            "images4": [
                //Drama Movies - Guilty
                "https://upload.wikimedia.org/wikipedia/en/4/4f/Guilty_%282020_film%29_poster.jpg",
                "https://pbs.twimg.com/media/ERinGIDXkAAfyvk.jpg",
                "https://pbs.twimg.com/media/ERi-k1gW4AU2ubL.jpg",
                "https://m.media-amazon.com/images/M/MV5BYWYxMjBlZjEtY2ZkYS00OWE1LWEzNTAtNDlkZWE5NzI1NDE1XkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_UY1200_CR100,0,630,1200_AL_.jpg"
                    ],
            "description": "Watch The Movie",
            "content": "Latest Movie",
            "price1": 10,
            "price2": 10,
            "price3": 10,
            "price4": 10
        },
        {
            "_id": "5",
            "title1": "Extraction",
            "title2": "",
            "title3": "",
            "title4": "",
            "images1": [
                //Movies-Extraction
                "https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                "https://www.cavsconnect.com/wp-content/uploads/2020/05/Extraction-poster-600x889-1.jpg",
                "https://static01.nyt.com/images/2020/04/23/arts/23extraction/23extraction-mediumSquareAt3X-v2.jpg",
                "https://i.pinimg.com/474x/84/47/43/8447434924a9299ccf4275e3a476c63b.jpg"
                ],
            "images2": [
                //Avtion Movies
                // "https://i.pinimg.com/736x/66/20/a8/6620a8423d1146595b44ba3bc804ac7e.jpg",
                // "https://nerdist.com/wp-content/uploads/2019/01/CM_Character_1-Sht_Gemma_v2_Lg-338x500.jpg",
                // "https://nerdist.com/wp-content/uploads/2019/01/CM_Character_1-Sht_Djimon_v2_Lg-338x500.jpg"
                ],
            "images3": [
                //Comedy Movies
                // "https://heroichollywood.com/wp-content/uploads/2019/03/Shazam-Zachary-Levi-Asher-Angel-Billy-Batson-DC-DCEU-David-F.-Sandberg.jpg",
                ],
            "images4": [
                //Drama Movies
                
                    ],
            "description": "Watch The Movie",
            "content": "Latest Movie",
            "price1": 10,
            "price2": 0,
            "price3": 0,
            "price4": 0
        },
        {
            "_id": "6",
            "title1": "Black OPS",
            "title2": "",
            "title3": "",
            "title4": "",
            "images1": [
                //Movies-Black Ops
                "https://cdn.flickeringmyth.com/wp-content/uploads/2020/04/Black-Ops-1-600x889.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/51KuNKZmtrL._AC_.jpg",
                "https://i5.walmartimages.com/asr/f53a39e1-1339-41e2-bd28-10cb9f263bf6_1.c4feaaf2b936c1341b4b59ac2bb19acf.jpeg",
                "https://images-na.ssl-images-amazon.com/images/I/41AtKAF1DEL._AC_UL600_SR414,600_.jpg"
                ],
            "images2": [
                //Avtion Movies
                // "https://i.pinimg.com/736x/66/20/a8/6620a8423d1146595b44ba3bc804ac7e.jpg",
                // "https://nerdist.com/wp-content/uploads/2019/01/CM_Character_1-Sht_Gemma_v2_Lg-338x500.jpg",
                // "https://nerdist.com/wp-content/uploads/2019/01/CM_Character_1-Sht_Djimon_v2_Lg-338x500.jpg"
                ],
            "images3": [
                //Comedy Movies
               
                ],
            "images4": [
                //Drama Movies
                
                    ],
            "description": "Watch The Movie",
            "content": "Latest Movie",
            "price1": 10,
            "price2": 0,
            "price3": 0,
            "price4": 0
        },
        {
            "_id": "7",
            "title1": "Avengers",
            "title2": "",
            "title3": "",
            "title4": "",
            "images1": [
                //Movies-Avengers
                "https://i.pinimg.com/originals/3e/3c/b1/3e3cb18f9628b77770355f8d08bb021d.jpg",
                "https://i.pinimg.com/originals/16/89/ec/1689ecd7a4c2955761a55b376d27f337.jpg",
                "https://imgix.bustle.com/uploads/image/2020/4/20/102b0ac5-bd88-4f25-91d3-a100ffe0b364-d3jam4puyaeeqqu.jpg",
                "https://i.pinimg.com/originals/62/86/51/62865141b1d76732efcb6e160adca627.jpg"
                ],
            "images2": [
                //Action Movies
                // "https://i.pinimg.com/736x/66/20/a8/6620a8423d1146595b44ba3bc804ac7e.jpg",
                // "https://nerdist.com/wp-content/uploads/2019/01/CM_Character_1-Sht_Gemma_v2_Lg-338x500.jpg",
                // "https://nerdist.com/wp-content/uploads/2019/01/CM_Character_1-Sht_Djimon_v2_Lg-338x500.jpg"
                ],
            "images3": [
                //Comedy Movies
                
                ],
            "images4": [
                //Drama Movies
              
                    ],
            "description": "Watch The Movie",
            "content": "Latest Movie",
            "price1": 10,
            "price2": 0,
            "price3": 0,
            "price4": 0
        },
        {
            "_id": "8",
            "title1": "No Time To Die",
            "title2": "",
            "title3": "",
            "title4": "",
            "images1": [
                //Movies-No Time To Die
                "https://i.pinimg.com/originals/3f/64/80/3f64803961e5d478d4236ff9c2465156.jpg",
                "https://i.redd.it/33cvhvsj22a51.jpg",
                "https://specials-images.forbesimg.com/imageserve/5f4fdc5f5e0104ff69fd41d7/960x0.jpg",
                "https://i.pinimg.com/originals/f6/7a/8e/f67a8e23fa3ec69127343262522acba1.jpg"
                ],
            "images2": [
                //Avtion Movies
                // "https://i.pinimg.com/736x/66/20/a8/6620a8423d1146595b44ba3bc804ac7e.jpg",
                // "https://nerdist.com/wp-content/uploads/2019/01/CM_Character_1-Sht_Gemma_v2_Lg-338x500.jpg",
                // "https://nerdist.com/wp-content/uploads/2019/01/CM_Character_1-Sht_Djimon_v2_Lg-338x500.jpg"
                ],
            "images3": [
                //Comedy Movies
               
                ],
            "images4": [
                //Drama Movies
               
                    ],
            "description": "Watch The Movie",
            "content": "Latest Movie",
            "price1": 10,
            "price2": 0,
            "price3": 0,
            "price4": 0
        }
    ])
    return (
        <DataContext.Provider value={[products, setProducts]}>
            {props.children}
        </DataContext.Provider>
    )
}
