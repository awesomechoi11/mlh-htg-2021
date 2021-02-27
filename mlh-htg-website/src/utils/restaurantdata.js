import { firestore } from './firebase'

var owo = [
    {
        "hits": [
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranttacoman33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8358492000",
                    "cuisines": "",
                    "address": "P.O. Box 1483, Torrance , CA 90505",
                    "name": "Taco-Man!",
                    "longitude": "-118.3406288000",
                    "zipcode": "CA 90505",
                    "website": "http://taco-man.com",
                    "url": "https://www.zomato.com/torrance-ca/taco-man-torrance",
                    "phone": "(310) 679-0095",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3406288,
                        "lat": 33.8358492
                    }
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranttoluca33831183",
                "_score": null,
                "_source": {
                    "address": "3415 Torrance Blvd , CA 90503",
                    "longitude": "-118.3454440000",
                    "date": "01-03-2017",
                    "cuisines": "Mexican",
                    "type": "restaurant",
                    "url": "https://www.zomato.com/torrance-ca/toluca-torrance",
                    "latitude": "33.8377370000",
                    "phone": "(310) 543-2737",
                    "name": "Toluca",
                    "location": {
                        "lon": -118.345444,
                        "lat": 33.837737
                    }
                },
                "sort": [
                    0.57574823625942
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantthaifoodtogo33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8377370000",
                    "address": "3417 Torrance Blvd , CA 90503",
                    "cuisines": "Thai",
                    "name": "Thai Food To Go",
                    "longitude": "-118.3454850000",
                    "zipcode": "CA 90503",
                    "website": "http://www.thaifoodtogo.biz/",
                    "url": "https://www.zomato.com/torrance-ca/thai-food-to-go-torrance",
                    "phone": "(310) 316-5388",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.345485,
                        "lat": 33.837737
                    }
                },
                "sort": [
                    0.5799998367306
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranthugosdeli33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8375907000",
                    "address": "3437 Torrance Boulevard , CA 90503",
                    "cuisines": "Sandwich * Healthy Food",
                    "name": "Hugos Deli",
                    "longitude": "-118.3456659000",
                    "zipcode": "CA 90503",
                    "website": "http://www.hugodeli.com/",
                    "url": "https://www.zomato.com/torrance-ca/hugos-deli-torrance",
                    "phone": "(424) 247-7057",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3456659,
                        "lat": 33.8375907
                    }
                },
                "sort": [
                    0.59329423257824
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantblackangus33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8315713000",
                    "name": "Black Angus",
                    "cuisines": "American * Steak",
                    "address": "3405 W Carson St, Torrance , CA 90503",
                    "longitude": "-118.3455543000",
                    "zipcode": "CA 90503",
                    "website": "",
                    "url": "https://www.zomato.com/torrance-ca/black-angus-torrance",
                    "phone": "(310) 370-1523",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3455543,
                        "lat": 33.8315713
                    }
                },
                "sort": [
                    0.7262347300424
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantdelitemptation33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8360355000",
                    "cuisines": "Sandwich",
                    "address": "3528 Torrance Blvd , CA 90503",
                    "longitude": "-118.3474372000",
                    "zipcode": "CA 90503",
                    "name": "Deli Temptation",
                    "url": "https://www.zomato.com/torrance-ca/deli-temptation-torrance",
                    "phone": "(310) 540-0121",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -118.3474372,
                        "lat": 33.8360355
                    }
                },
                "sort": [
                    0.75819130887177
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantwetzelspretzels33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8324138000",
                    "cuisines": "American * Fast Food",
                    "address": "3525 W Carson St, Torrance , CA 90503",
                    "name": "Wetzel's Pretzels",
                    "longitude": "-118.3475912000",
                    "zipcode": "CA 90503",
                    "website": "http://www.wetzels.com/",
                    "url": "https://www.zomato.com/torrance-ca/wetzels-pretzels-torrance",
                    "phone": "(310) 371-8007",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3475912,
                        "lat": 33.8324138
                    }
                },
                "sort": [
                    0.86426510503479
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantstoneoven33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8324138000",
                    "address": "3525 W Carson St, Torrance , CA 90503",
                    "cuisines": "",
                    "name": "Stone Oven",
                    "longitude": "-118.3475912000",
                    "zipcode": "CA 90503",
                    "website": "http://www.enjoystoneoven.com/",
                    "url": "https://www.zomato.com/torrance-ca/stone-oven-torrance",
                    "phone": "(310) 214-6620",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3475912,
                        "lat": 33.8324138
                    }
                },
                "sort": [
                    0.86426510503479
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantrasushibarrestaurant33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8324138000",
                    "address": "3525 W Carson St, Torrance , CA 90503",
                    "cuisines": "Asian * Japanese * Sushi",
                    "longitude": "-118.3475912000",
                    "zipcode": "CA 90503",
                    "name": "RA Sushi Bar Restaurant",
                    "url": "https://www.zomato.com/torrance-ca/ra-sushi-bar-restaurant-torrance",
                    "phone": "(310) 370-6700",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.rasushi.com/",
                    "location": {
                        "lon": -118.3475912,
                        "lat": 33.8324138
                    }
                },
                "sort": [
                    0.86426510503479
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantlazydogrestaurantbar33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8324138000",
                    "address": "3525 W Carson St, Torrance , CA 90503",
                    "cuisines": "American * Breakfast",
                    "longitude": "-118.3475912000",
                    "zipcode": "CA 90503",
                    "name": "Lazy Dog Restaurant & Bar",
                    "url": "https://www.zomato.com/torrance-ca/lazy-dog-restaurant-bar-torrance",
                    "phone": "(310) 921-6080",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.lazydogrestaurants.com/",
                    "location": {
                        "lon": -118.3475912,
                        "lat": 33.8324138
                    }
                },
                "sort": [
                    0.86426510503479
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantstackedfoodwellbuilt33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8324138000",
                    "address": "3525 W Carson Street, Suite 172, Torrance , CA 90503",
                    "cuisines": "Burger * Desserts * Pizza",
                    "longitude": "-118.3475912000",
                    "zipcode": "CA 90503",
                    "name": "STACKED: Food Well Built",
                    "url": "https://www.zomato.com/torrance-ca/stacked-food-well-built-torrance",
                    "phone": "(310) 542-5068",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.stacked.com/",
                    "location": {
                        "lon": -118.3475912,
                        "lat": 33.8324138
                    }
                },
                "sort": [
                    0.86426510503479
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbuffalowildwings33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8324138000",
                    "name": "Buffalo Wild Wings",
                    "cuisines": "Bar Food",
                    "address": "3525 W Carson St Ste 163, Torrance , CA 90503",
                    "longitude": "-118.3475912000",
                    "zipcode": "CA 90503",
                    "website": "",
                    "url": "https://www.zomato.com/torrance-ca/buffalo-wild-wings-torrance",
                    "phone": "(310) 542-3400",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3475912,
                        "lat": 33.8324138
                    }
                },
                "sort": [
                    0.86426510503479
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantpandaexpress33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8324138000",
                    "cuisines": "Fast Food",
                    "address": "3525 Carson St, Torrance , CA 90503",
                    "name": "Panda Express",
                    "longitude": "-118.3475912000",
                    "zipcode": "CA 90503",
                    "website": "",
                    "url": "https://www.zomato.com/torrance-ca/panda-express-2-torrance",
                    "phone": "(310) 370-2507",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3475912,
                        "lat": 33.8324138
                    }
                },
                "sort": [
                    0.86426510503479
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantpfchangschinabistro33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8324138000",
                    "cuisines": "Asian * Chinese",
                    "address": "3525 W. Carson St., Torrance , CA 90503",
                    "name": "P.F. Chang's China Bistro",
                    "longitude": "-118.3475912000",
                    "zipcode": "CA 90503",
                    "website": "http://www.pfchangs.com/",
                    "url": "https://www.zomato.com/torrance-ca/p-f-changs-china-bistro-torrance",
                    "phone": "(310) 793-0581",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3475912,
                        "lat": 33.8324138
                    }
                },
                "sort": [
                    0.86426510503479
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantjohnnyrockets33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8324138000",
                    "address": "3525 W. Carson St #75, Torrance , CA",
                    "cuisines": "American * Burger * Desserts",
                    "name": "Johnny Rockets",
                    "longitude": "-118.3475912000",
                    "zipcode": "",
                    "website": "",
                    "url": "https://www.zomato.com/torrance-ca/johnny-rockets-torrance",
                    "phone": "(310) 214-4051",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3475912,
                        "lat": 33.8324138
                    }
                },
                "sort": [
                    0.86426510503479
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantjambajuice33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8324138000",
                    "cuisines": "Beverages",
                    "address": "3525 Carson St Space 80, Torrance , CA 90503",
                    "name": "Jamba Juice",
                    "longitude": "-118.3475912000",
                    "zipcode": "CA 90503",
                    "website": "",
                    "url": "https://www.zomato.com/torrance-ca/jamba-juice-1-torrance",
                    "phone": "(310) 406-3266",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3475912,
                        "lat": 33.8324138
                    }
                },
                "sort": [
                    0.86426510503479
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantgengiskhan33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8324138000",
                    "cuisines": "Asian",
                    "address": "3525 Carson St, Torrance , CA 90503",
                    "name": "Gengis Khan",
                    "longitude": "-118.3475912000",
                    "zipcode": "CA 90503",
                    "website": "",
                    "url": "https://www.zomato.com/torrance-ca/gengis-khan-torrance",
                    "phone": "(310) 370-7823",
                    "type": "restaurant",
                    "date": "09-12-2016",
                    "location": {
                        "lon": -118.3475912,
                        "lat": 33.8324138
                    }
                },
                "sort": [
                    0.86426510503479
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbjsrestaurantandbrewhouse33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8324138000",
                    "address": "3525 W. Carson St., Torrance , CA 90503",
                    "cuisines": "American * Pizza * Bar Food",
                    "longitude": "-118.3475912000",
                    "zipcode": "CA 90503",
                    "name": "BJ's Restaurant and Brewhouse",
                    "url": "https://www.zomato.com/torrance-ca/bjs-restaurant-and-brewhouse-torrance",
                    "phone": "(310) 802-6440",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.bjsrestaurants.com/",
                    "location": {
                        "lon": -118.3475912,
                        "lat": 33.8324138
                    }
                },
                "sort": [
                    0.86426510503479
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantchickendijonrotisserieandgrill33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8372041000",
                    "cuisines": "American * Mediterranean",
                    "address": "3556 Torrance Blvd, Torrance , CA 90503",
                    "name": "Chicken Dijon Rotisserie and Grill",
                    "longitude": "-118.3489851000",
                    "zipcode": "CA 90503",
                    "website": "http://www.chickendijon.com/",
                    "url": "https://www.zomato.com/torrance-ca/chicken-dijon-rotisserie-and-grill-torrance",
                    "phone": "(310) 540-1499",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3489851,
                        "lat": 33.8372041
                    }
                },
                "sort": [
                    0.94236734783923
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantchayoeatery33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8372041000",
                    "cuisines": "American * Italian * Pizza",
                    "address": "3556 W Torrance Blvd , CA 90503",
                    "name": "Chayo Eatery",
                    "longitude": "-118.3489851000",
                    "zipcode": "CA 90503",
                    "website": "http://chayoeatery.com/",
                    "url": "https://www.zomato.com/torrance-ca/chayo-eatery-torrance",
                    "phone": "(310) 540-5440",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3489851,
                        "lat": 33.8372041
                    }
                },
                "sort": [
                    0.94236734783923
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantquiznos33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8372041000",
                    "address": "3556 Torrance Blvd , CA 90503",
                    "cuisines": "Fast Food * Sandwich",
                    "longitude": "-118.3489851000",
                    "zipcode": "CA 90503",
                    "name": "Quiznos",
                    "url": "https://www.zomato.com/torrance-ca/quiznos-5-torrance",
                    "phone": "(310) 316-6525",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -118.3489851,
                        "lat": 33.8372041
                    }
                },
                "sort": [
                    0.94236734783923
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantwahoosfishtaco33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8372041000",
                    "name": "Wahoo's Fish Taco",
                    "cuisines": "Fast Food * Mexican",
                    "address": "3556 Torrance Blvd , CA 90503",
                    "longitude": "-118.3489851000",
                    "zipcode": "CA 90503",
                    "website": "http://www.wahoos.com/",
                    "url": "https://www.zomato.com/torrance-ca/wahoos-fish-taco-torrance",
                    "phone": "(310) 540-7725",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3489851,
                        "lat": 33.8372041
                    }
                },
                "sort": [
                    0.94236734783923
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantacapulcomexican33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8310060000",
                    "address": "3530 W Carson St, Torrance , CA 90503",
                    "cuisines": "Mexican",
                    "name": "Acapulco Mexican",
                    "longitude": "-118.3476210000",
                    "zipcode": "CA 90503",
                    "website": "http://www.acapulcorestaurants.com/",
                    "url": "https://www.zomato.com/torrance-ca/acapulco-mexican-torrance",
                    "phone": "(310) 542-2270",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.347621,
                        "lat": 33.831006
                    }
                },
                "sort": [
                    0.9468535602169
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranthometownbuffet33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8302520000",
                    "address": "3520 W Carson St, Torrance , CA 90503",
                    "cuisines": "American * International",
                    "longitude": "-118.3474500000",
                    "zipcode": "CA 90503",
                    "name": "HomeTown Buffet",
                    "url": "https://www.zomato.com/torrance-ca/hometown-buffet-torrance",
                    "phone": "(310) 921-6546",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.buffet.com/index.htm",
                    "location": {
                        "lon": -118.34745,
                        "lat": 33.830252
                    }
                },
                "sort": [
                    0.98224812301648
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantebar33831183",
                "_score": null,
                "_source": {
                    "address": "21450 Hawthorne Boulevard, Torrance , CA 90503",
                    "date": "01-03-2017",
                    "longitude": "-118.3491924000",
                    "url": "https://www.zomato.com/torrance-ca/ebar-torrance",
                    "phone": "(310) 542-9440",
                    "latitude": "33.8333480000",
                    "location": {
                        "lat": 33.833348,
                        "lon": -118.3491924
                    },
                    "cuisines": "Coffee and Tea",
                    "type": "restaurant",
                    "name": "Ebar"
                },
                "sort": [
                    0.99312488437291
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantlajuice33821183",
                "_score": null,
                "_source": {
                    "latitude": "33.8298831000",
                    "address": "3550 W Carson St, Torrance , CA 90503",
                    "cuisines": "Beverages",
                    "name": "L a Juice",
                    "longitude": "-118.3472891000",
                    "zipcode": "CA 90503",
                    "website": "",
                    "url": "https://www.zomato.com/torrance-ca/l-a-juice-torrance",
                    "phone": "(310) 542-6771",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3472891,
                        "lat": 33.8298831
                    }
                },
                "sort": [
                    0.99538515724145
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantrainwinebar33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8358020000",
                    "address": "3635 Fashion Way, Torrance , CA 90503",
                    "cuisines": "",
                    "name": "Rain Wine Bar",
                    "longitude": "-118.3499950000",
                    "zipcode": "CA 90503",
                    "website": "http://www.rainwinebar.com/",
                    "url": "https://www.zomato.com/torrance-ca/rain-wine-bar-torrance",
                    "phone": "(310) 792-6102",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.349995,
                        "lat": 33.835802
                    }
                },
                "sort": [
                    1.0426538537855
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantserenitygardens33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8358020000",
                    "address": "3635 Fashion Way, Torrance , CA 90503",
                    "cuisines": "American * Japanese",
                    "longitude": "-118.3499950000",
                    "zipcode": "CA 90503",
                    "name": "Serenity Gardens",
                    "url": "https://www.zomato.com/torrance-ca/serenity-gardens-torrance",
                    "phone": "(310) 316-3636",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.rainwinebar.com/",
                    "location": {
                        "lon": -118.349995,
                        "lat": 33.835802
                    }
                },
                "sort": [
                    1.0426538537855
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantgardencourt33831183",
                "_score": null,
                "_source": {
                    "latitude": "33.8358020000",
                    "cuisines": "",
                    "address": "3635 Fashion Way, Torrance , CA 90503",
                    "name": "Garden Court",
                    "longitude": "-118.3499950000",
                    "zipcode": "CA 90503",
                    "website": "http://www.marriott.com/hotels/travel/laxtr-torrance-marriott-south-bay/",
                    "url": "https://www.zomato.com/torrance-ca/garden-court-torrance",
                    "phone": "(310) 316-3636",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.349995,
                        "lat": 33.835802
                    }
                },
                "sort": [
                    1.0426538537855
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurant21squarebarkitchen33831183",
                "_score": null,
                "_source": {
                    "location": {
                        "lon": -118.350545,
                        "lat": 33.835857
                    },
                    "phone": "(310) 543-6034",
                    "cuisines": "American",
                    "latitude": "33.8358570000",
                    "date": "01-03-2017",
                    "name": "21 Square Bar + Kitchen",
                    "url": "https://www.zomato.com/torrance-ca/21-square-bar-kitchen-torrance",
                    "type": "restaurant",
                    "address": "3635 Fashion Way , CA 90503",
                    "longitude": "-118.3505450000"
                },
                "sort": [
                    1.103866676099
                ]
            }
        ]
    }, {
        "hits": [
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbambinospizza33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8315396000",
                    "address": "246 West Carson St , CA 90745",
                    "cuisines": "American * Italian * Pizza",
                    "name": "Bambino's Pizza",
                    "longitude": "-118.2814762000",
                    "zipcode": "CA 90745",
                    "website": "http://bambinospizzala.com/",
                    "url": "https://www.zomato.com/carson-ca/bambinos-pizza-carson",
                    "phone": "(310) 513-6666",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2814762,
                        "lat": 33.8315396
                    }
                },
                "sort": [
                    0.028424696846449
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantlittlecaesarspizza33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8320925000",
                    "cuisines": "Fast Food * Pizza",
                    "address": "243 W Carson St , CA 90745",
                    "name": "Little Caesars Pizza",
                    "longitude": "-118.2814516000",
                    "zipcode": "CA 90745",
                    "website": "",
                    "url": "https://www.zomato.com/carson-ca/little-caesars-pizza-carson",
                    "phone": "(310) 834-1223",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2814516,
                        "lat": 33.8320925
                    }
                },
                "sort": [
                    0.053733764845202
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantlafangasianfusionkitchen33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8320866000",
                    "cuisines": "Asian * Filipino",
                    "address": "241 W Carson St , CA 90745",
                    "name": "La Fang Asian Fusion Kitchen",
                    "longitude": "-118.2813668000",
                    "zipcode": "CA 90745",
                    "website": "",
                    "url": "https://www.zomato.com/carson-ca/la-fang-asian-fusion-kitchen-carson",
                    "phone": "(310) 834-4840",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2813668,
                        "lat": 33.8320866
                    }
                },
                "sort": [
                    0.058507140558927
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranttaquerialagunillas33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8313048000",
                    "cuisines": "Mexican",
                    "address": "238 W Carson St , CA 90745",
                    "name": "Taqueria Lagunillas",
                    "longitude": "-118.2812912000",
                    "zipcode": "CA 90745",
                    "website": "",
                    "url": "https://www.zomato.com/carson-ca/taqueria-lagunillas-carson",
                    "phone": "(310) 549-5053",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2812912,
                        "lat": 33.8313048
                    }
                },
                "sort": [
                    0.060780985316334
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantchowking33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8320902000",
                    "cuisines": "Filipino",
                    "address": "131 W Carson St , CA 90745",
                    "longitude": "-118.2797631000",
                    "zipcode": "CA 90745",
                    "name": "Chow King",
                    "url": "https://www.zomato.com/carson-ca/chow-king-carson",
                    "phone": "(310) 835-7100",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -118.2797631,
                        "lat": 33.8320902
                    }
                },
                "sort": [
                    0.2197628466722
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantjollibee33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8318632000",
                    "address": "139 W Carson St , CA 90745",
                    "cuisines": "Burger * Fast Food * Filipino",
                    "name": "Jollibee",
                    "longitude": "-118.2797183000",
                    "zipcode": "CA 90745",
                    "website": "http://www.jollibeeusa.com/",
                    "url": "https://www.zomato.com/carson-ca/jollibee-carson",
                    "phone": "(310) 513-1941",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2797183,
                        "lat": 33.8318632
                    }
                },
                "sort": [
                    0.22082397135802
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantpopeyeslouisianakitchen33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8313340000",
                    "address": "154 W Carson St , CA 90745",
                    "cuisines": "Fast Food",
                    "name": "Popeye's Louisiana Kitchen",
                    "longitude": "-118.2788581000",
                    "zipcode": "CA 90745",
                    "website": "",
                    "url": "https://www.zomato.com/carson-ca/popeyes-louisiana-kitchen-carson",
                    "phone": "(310) 549-3271",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2788581,
                        "lat": 33.831334
                    }
                },
                "sort": [
                    0.31784781627762
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantlittledimsum33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8320646000",
                    "cuisines": "Chinese",
                    "address": "107 W Carson St , CA 90745",
                    "name": "Little Dim Sum",
                    "longitude": "-118.2788275000",
                    "zipcode": "CA 90745",
                    "website": "",
                    "url": "https://www.zomato.com/carson-ca/little-dim-sum-carson",
                    "phone": "(310) 830-0808",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2788275,
                        "lat": 33.8320646
                    }
                },
                "sort": [
                    0.32192835082904
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantpapajohnspizza33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8320708000",
                    "cuisines": "Fast Food * Pizza",
                    "address": "105 W Carson St , CA 90745",
                    "name": "Papa John's Pizza",
                    "longitude": "-118.2787291000",
                    "zipcode": "CA 90745",
                    "website": "",
                    "url": "https://www.zomato.com/carson-ca/papa-johns-pizza-carson",
                    "phone": "(310) 522-9600",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2787291,
                        "lat": 33.8320708
                    }
                },
                "sort": [
                    0.33287611973231
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantchowfunexpress33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8313370000",
                    "cuisines": "Chinese",
                    "address": "148 W Carson St , CA 90745",
                    "longitude": "-118.2787023000",
                    "zipcode": "CA 90745",
                    "name": "Chow Fun Express",
                    "url": "https://www.zomato.com/carson-ca/chow-fun-express-carson",
                    "phone": "(310) 549-3231",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -118.2787023,
                        "lat": 33.831337
                    }
                },
                "sort": [
                    0.3350363971236
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantmanilaslechonmanok33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8314630000",
                    "address": "118 W Carson St , CA 90745",
                    "cuisines": "Filipino",
                    "name": "Manila's Lechon Manok",
                    "longitude": "-118.2784700000",
                    "zipcode": "CA 90745",
                    "website": "",
                    "url": "https://www.zomato.com/carson-ca/manilas-lechon-manok-carson",
                    "phone": "(310) 513-9867",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.27847,
                        "lat": 33.831463
                    }
                },
                "sort": [
                    0.35955439459104
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbluelotus33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8313812000",
                    "address": "21705 Main Street, Carson , CA 90745",
                    "cuisines": "Vietnamese",
                    "name": "Blue Lotus",
                    "longitude": "-118.2783817000",
                    "zipcode": "CA 90745",
                    "website": "http://www.thebluecuisine.com/",
                    "url": "https://www.zomato.com/carson-ca/blue-lotus-carson",
                    "phone": "(310) 518-9538",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2783817,
                        "lat": 33.8313812
                    }
                },
                "sort": [
                    0.37005539982537
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantyoshinoyabeefbowl33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8318835000",
                    "address": "101 E Carson St , CA 90745",
                    "cuisines": "Fast Food * Japanese",
                    "longitude": "-118.2777467000",
                    "zipcode": "CA 90745",
                    "name": "Yoshinoya Beef Bowl",
                    "url": "https://www.zomato.com/carson-ca/yoshinoya-beef-bowl-carson",
                    "phone": "(310) 835-9043",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://yoshinoyaamerica.com/",
                    "location": {
                        "lon": -118.2777467,
                        "lat": 33.8318835
                    }
                },
                "sort": [
                    0.43991576444513
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantelpolloloco33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8324212000",
                    "address": "111 E Carson St , CA 90745",
                    "cuisines": "Fast Food * Mexican",
                    "longitude": "-118.2777469000",
                    "zipcode": "CA 90745",
                    "name": "El Pollo Loco",
                    "url": "https://www.zomato.com/carson-ca/el-pollo-loco-carson",
                    "phone": "(310) 830-3491",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -118.2777469,
                        "lat": 33.8324212
                    }
                },
                "sort": [
                    0.44707307428671
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantjennyscakespastries33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8324212000",
                    "cuisines": "",
                    "address": "111 E Carson St , CA 90745",
                    "name": "Jenny's Cakes & Pastries",
                    "longitude": "-118.2777469000",
                    "zipcode": "CA 90745",
                    "website": "",
                    "url": "https://www.zomato.com/carson-ca/jennys-cakes-pastries-carson",
                    "phone": "(310) 834-6906",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2777469,
                        "lat": 33.8324212
                    }
                },
                "sort": [
                    0.44707307428671
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantpollovermontjr33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8323050000",
                    "url": "https://www.zomato.com/carson-ca/pollo-vermont-jr-carson",
                    "name": "Pollo Vermont Jr",
                    "cuisines": "Mexican",
                    "phone": "(310) 212-7970",
                    "date": "01-03-2017",
                    "address": "21620 Figueroa Street , CA 90745",
                    "type": "restaurant",
                    "longitude": "-118.2858590000",
                    "location": {
                        "lon": -118.285859,
                        "lat": 33.832305
                    }
                },
                "sort": [
                    0.46903812232086
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantmamitasgrill33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8320165000",
                    "cuisines": "Peruvian",
                    "address": "21620 Figueroa St, Carson , CA 90745",
                    "longitude": "-118.2859445000",
                    "zipcode": "CA 90745",
                    "name": "Mamita's Grill",
                    "url": "https://www.zomato.com/carson-ca/mamitas-grill-carson",
                    "phone": "(310) 212-7970",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://mamitasgrill.com/",
                    "location": {
                        "lon": -118.2859445,
                        "lat": 33.8320165
                    }
                },
                "sort": [
                    0.47480361403235
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranthanduganrestaurant33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8320380000",
                    "cuisines": "Filipino",
                    "address": "21616 Figueroa St, Carson , CA 90745",
                    "name": "Handugan Restaurant",
                    "longitude": "-118.2859447000",
                    "zipcode": "CA 90745",
                    "website": "http://www.carson-losangelescounty-california.com/",
                    "url": "https://www.zomato.com/carson-ca/handugan-restaurant-carson",
                    "phone": "(310) 320-4500",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2859447,
                        "lat": 33.832038
                    }
                },
                "sort": [
                    0.47502369590682
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantfostersoldfashionfreeze33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8318775000",
                    "cuisines": "Desserts * Fast Food",
                    "address": "117 E Carson St , CA 90745",
                    "name": "Foster's Old Fashion Freeze",
                    "longitude": "-118.2772917000",
                    "zipcode": "CA 90745",
                    "website": "",
                    "url": "https://www.zomato.com/carson-ca/fosters-old-fashion-freeze-carson",
                    "phone": "(310) 835-5050",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2772917,
                        "lat": 33.8318775
                    }
                },
                "sort": [
                    0.49047133546078
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantkfc33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8318503000",
                    "cuisines": "Fast Food",
                    "address": "619 W Carson St , CA 90745",
                    "name": "KFC",
                    "longitude": "-118.2863837000",
                    "zipcode": "CA 90745",
                    "website": "",
                    "url": "https://www.zomato.com/carson-ca/kfc-2-carson",
                    "phone": "(310) 533-1147",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2863837,
                        "lat": 33.8318503
                    }
                },
                "sort": [
                    0.52253293243558
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantmanilasunrise33821182",
                "_score": null,
                "_source": {
                    "latitude": "33.8296858000",
                    "address": "21828 Main St, Carson , CA 90745",
                    "cuisines": "Filipino",
                    "name": "Manila Sunrise",
                    "longitude": "-118.2771335000",
                    "zipcode": "CA 90745",
                    "website": "http://www.manilasunrise.net/",
                    "url": "https://www.zomato.com/carson-ca/manila-sunrise-carson",
                    "phone": "(310) 835-1999",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2771335,
                        "lat": 33.8296858
                    }
                },
                "sort": [
                    0.55373998324251
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranttitacelias33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8318539000",
                    "name": "Tita Celia's",
                    "cuisines": "Filipino",
                    "address": "621 W Carson St , CA 90745",
                    "longitude": "-118.2867915000",
                    "zipcode": "CA 90745",
                    "website": "",
                    "url": "https://www.zomato.com/carson-ca/tita-celias-carson",
                    "phone": "(310) 834-6289",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2867915,
                        "lat": 33.8318539
                    }
                },
                "sort": [
                    0.56791366812597
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantlupitasfamily33821182",
                "_score": null,
                "_source": {
                    "latitude": "33.8284981000",
                    "cuisines": "Mexican",
                    "address": "21917 Main St, Carson , CA 90745",
                    "name": "Lupitas Family",
                    "longitude": "-118.2774670000",
                    "zipcode": "CA 90745",
                    "website": "",
                    "url": "https://www.zomato.com/carson-ca/lupitas-family-carson",
                    "phone": "(310) 830-8081",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.277467,
                        "lat": 33.8284981
                    }
                },
                "sort": [
                    0.58850639361147
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantlospaisastacosandmariscos33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8315900000",
                    "cuisines": "Mexican",
                    "address": "1151 W. Carson St. , CA 90745",
                    "name": "Los Paisas Tacos and Mariscos",
                    "longitude": "-118.2872590000",
                    "zipcode": "CA 90745",
                    "website": "",
                    "url": "https://www.zomato.com/carson-ca/los-paisas-tacos-and-mariscos-carson",
                    "phone": "(310) 618-9197",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.287259,
                        "lat": 33.83159
                    }
                },
                "sort": [
                    0.61967568381528
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranttacolipino33821182",
                "_score": null,
                "_source": {
                    "address": "22005 S Main Street, Carson , CA 90745",
                    "date": "01-03-2017",
                    "longitude": "-118.2772090000",
                    "url": "https://www.zomato.com/carson-ca/tacolipino-carson",
                    "phone": "(310) 803-9989",
                    "latitude": "33.8276820000",
                    "location": {
                        "lat": 33.827682,
                        "lon": -118.277209
                    },
                    "cuisines": "Mexican",
                    "type": "restaurant",
                    "name": "TACOLIPINO"
                },
                "sort": [
                    0.66834642801741
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantkimtar33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8314630000",
                    "cuisines": "",
                    "address": "174 E Carson St , CA 90745",
                    "name": "Kim Tar",
                    "longitude": "-118.2754170000",
                    "zipcode": "CA 90745",
                    "website": "",
                    "url": "https://www.zomato.com/carson-ca/kim-tar-carson",
                    "phone": "(310) 549-2634",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.275417,
                        "lat": 33.831463
                    }
                },
                "sort": [
                    0.69903772701476
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranttedsburgers33821182",
                "_score": null,
                "_source": {
                    "latitude": "33.8276280000",
                    "cuisines": "Burger",
                    "address": "22000 Main St, Carson , CA 90745",
                    "longitude": "-118.2766200000",
                    "zipcode": "CA 90745",
                    "name": "Ted's Burgers",
                    "url": "https://www.zomato.com/carson-ca/teds-burgers-carson",
                    "phone": "(310) 830-4412",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -118.27662,
                        "lat": 33.827628
                    }
                },
                "sort": [
                    0.72237250641886
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantinnoutburger33831182",
                "_score": null,
                "_source": {
                    "latitude": "33.8311247000",
                    "name": "In-N-Out Burger",
                    "cuisines": "American * Burger * Fast Food",
                    "address": "730 W Carson St, Torrance , CA 90502",
                    "longitude": "-118.2883863000",
                    "zipcode": "CA 90502",
                    "website": "",
                    "url": "https://www.zomato.com/torrance-ca/in-n-out-burger-1-torrance",
                    "phone": "(800) 786-1000",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2883863,
                        "lat": 33.8311247
                    }
                },
                "sort": [
                    0.74760420418827
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantveronicasbakery33821182",
                "_score": null,
                "_source": {
                    "latitude": "33.8267038000",
                    "cuisines": "",
                    "address": "22035 Main St, Carson , CA 90745",
                    "name": "Veronica's Bakery",
                    "longitude": "-118.2770778000",
                    "zipcode": "CA 90745",
                    "website": "",
                    "url": "https://www.zomato.com/carson-ca/veronicas-bakery-carson",
                    "phone": "(310) 522-9970",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2770778,
                        "lat": 33.8267038
                    }
                },
                "sort": [
                    0.75507059164577
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbakeshop33821182",
                "_score": null,
                "_source": {
                    "latitude": "33.8267038000",
                    "address": "22035 Main St, Carson , CA 90745",
                    "cuisines": "",
                    "longitude": "-118.2770778000",
                    "zipcode": "CA 90745",
                    "name": "Bake Shop",
                    "url": "https://www.zomato.com/carson-ca/bake-shop-carson",
                    "phone": "(310) 834-0066",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -118.2770778,
                        "lat": 33.8267038
                    }
                },
                "sort": [
                    0.75507059164577
                ]
            }
        ]
    }, {
        "hits": [
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantfuraibojapanese33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8889181000",
                    "address": "1741 W Redondo Beach Blvd, Gardena , CA 90247",
                    "cuisines": "Japanese * Tapas",
                    "name": "Furaibo Japanese",
                    "longitude": "-118.3085162000",
                    "zipcode": "CA 90247",
                    "website": "",
                    "url": "https://www.zomato.com/gardena-ca/furaibo-japanese-gardena",
                    "phone": "(310) 329-9441",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3085162,
                        "lat": 33.8889181
                    }
                },
                "sort": [
                    0.080528768930714
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbowlthai33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8891605000",
                    "cuisines": "Thai",
                    "address": "15490 Western Ave, Gardena , CA 90249",
                    "longitude": "-118.3089364000",
                    "zipcode": "CA 90249",
                    "name": "Bowl Thai",
                    "url": "https://www.zomato.com/gardena-ca/bowl-thai-gardena",
                    "phone": "(310) 323-8882",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://bowlthaikitchen.com/",
                    "location": {
                        "lon": -118.3089364,
                        "lat": 33.8891605
                    }
                },
                "sort": [
                    0.090415499585909
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantboilingpoint33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8891969000",
                    "address": "15488 South Western Ave, Gardena , CA 90249",
                    "cuisines": "Asian",
                    "name": "Boiling Point",
                    "longitude": "-118.3089444000",
                    "zipcode": "CA 90249",
                    "website": "",
                    "url": "https://www.zomato.com/gardena-ca/boiling-point-gardena",
                    "phone": "(310) 225-5533",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3089444,
                        "lat": 33.8891969
                    }
                },
                "sort": [
                    0.094442450906699
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantumemura33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8885642000",
                    "address": "1724 W Redondo Beach Blvd, Gardena , CA 90247",
                    "cuisines": "Japanese",
                    "name": "Umemura",
                    "longitude": "-118.3080313000",
                    "zipcode": "CA 90247",
                    "website": "",
                    "url": "https://www.zomato.com/gardena-ca/umemura-gardena",
                    "phone": "(310) 217-0970",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3080313,
                        "lat": 33.8885642
                    }
                },
                "sort": [
                    0.10638949158835
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantyoshinoyabeefbowl33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8883800000",
                    "address": "1825 W Redondo Beach Blvd, Gardena , CA 90247",
                    "cuisines": "Fast Food * Japanese",
                    "name": "Yoshinoya Beef Bowl",
                    "longitude": "-118.3099540000",
                    "zipcode": "CA 90247",
                    "website": "http://www.yoshinoya.com/",
                    "url": "https://www.zomato.com/gardena-ca/yoshinoya-beef-bowl-1-gardena",
                    "phone": "(310) 532-3063",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.309954,
                        "lat": 33.88838
                    }
                },
                "sort": [
                    0.11043938460259
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantsushiboy33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8888376000",
                    "cuisines": "Japanese * Sushi",
                    "address": "1620 Redondo Beach Blvd, Gardena , CA 90247",
                    "name": "Sushiboy",
                    "longitude": "-118.3080838000",
                    "zipcode": "CA 90247",
                    "website": "http://sushiboy.net/",
                    "url": "https://www.zomato.com/gardena-ca/sushiboy-gardena",
                    "phone": "(310) 817-7770",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3080838,
                        "lat": 33.8888376
                    }
                },
                "sort": [
                    0.11192792398314
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantnikumanya33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8888376000",
                    "address": "1620 West Redondo Beach Boulevard, Gardena , CA 90247",
                    "cuisines": "Dim Sum * Japanese * Vegetarian",
                    "longitude": "-118.3080838000",
                    "zipcode": "CA 90247",
                    "name": "Nikuman-ya",
                    "url": "https://www.zomato.com/gardena-ca/nikuman-ya-gardena",
                    "phone": "(310) 538-2929",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -118.3080838,
                        "lat": 33.8888376
                    }
                },
                "sort": [
                    0.11192792398314
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbeardpapa33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8888376000",
                    "address": "1620 West Redondo Beach Boulevard, Gardena , CA 90247",
                    "cuisines": "",
                    "name": "Beard Papa",
                    "longitude": "-118.3080838000",
                    "zipcode": "CA 90247",
                    "website": "",
                    "url": "https://www.zomato.com/gardena-ca/beard-papa-gardena",
                    "phone": "(310) 538-2909",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3080838,
                        "lat": 33.8888376
                    }
                },
                "sort": [
                    0.11192792398314
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantkotohira33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8889910000",
                    "address": "1747 W Redondo Beach Blvd, Gardena , CA 90247",
                    "cuisines": "Japanese",
                    "name": "Kotohira",
                    "longitude": "-118.3081680000",
                    "zipcode": "CA 90247",
                    "website": "",
                    "url": "https://www.zomato.com/gardena-ca/kotohira-gardena",
                    "phone": "(310) 323-3966",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.308168,
                        "lat": 33.888991
                    }
                },
                "sort": [
                    0.11372149045631
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranttsukiji33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8890040000",
                    "cuisines": "Japanese * Sushi",
                    "address": "1745 W Redondo Beach Blvd, Gardena , CA 90247",
                    "name": "Tsukiji",
                    "longitude": "-118.3081310000",
                    "zipcode": "CA 90247",
                    "website": "",
                    "url": "https://www.zomato.com/gardena-ca/tsukiji-gardena",
                    "phone": "(310) 323-4077",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.308131,
                        "lat": 33.889004
                    }
                },
                "sort": [
                    0.11784334347051
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantphoso133881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8889930000",
                    "cuisines": "Vietnamese",
                    "address": "1749 W. Redondo Bch Blvd, Gardena , CA 90247",
                    "name": "Pho So 1",
                    "longitude": "-118.3081150000",
                    "zipcode": "CA 90247",
                    "website": "http://phoso1.com",
                    "url": "https://www.zomato.com/gardena-ca/pho-so-1-gardena",
                    "phone": "(310) 329-7365",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.308115,
                        "lat": 33.888993
                    }
                },
                "sort": [
                    0.11850215999516
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantsushisumo33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8883790000",
                    "address": "1829-1831 Redondo Beach Blvd., Gardena , CA 90247",
                    "cuisines": "Japanese * Sushi",
                    "name": "Sushi Sumo",
                    "longitude": "-118.3100300000",
                    "zipcode": "CA 90247",
                    "website": "",
                    "url": "https://www.zomato.com/gardena-ca/sushi-sumo-gardena",
                    "phone": "(310) 516-0499",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.31003,
                        "lat": 33.888379
                    }
                },
                "sort": [
                    0.1188925437186
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantitsbobatime33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8894312000",
                    "cuisines": "Coffee and Tea",
                    "address": "15482 Western Ave, Gardena , CA 90249",
                    "name": "It's Boba Time",
                    "longitude": "-118.3089279000",
                    "zipcode": "CA 90249",
                    "website": "http://itsbobatime.com/",
                    "url": "https://www.zomato.com/gardena-ca/its-boba-time-gardena",
                    "phone": "(310) 538-2622",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3089279,
                        "lat": 33.8894312
                    }
                },
                "sort": [
                    0.12056453326132
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantajiyoshi33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8890160000",
                    "address": "1743 W Redondo Beach Blvd, Gardena , CA 90247",
                    "cuisines": "",
                    "longitude": "-118.3080950000",
                    "zipcode": "CA 90247",
                    "name": "Ajiyoshi",
                    "url": "https://www.zomato.com/gardena-ca/ajiyoshi-gardena",
                    "phone": "(310) 538-5976",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -118.308095,
                        "lat": 33.889016
                    }
                },
                "sort": [
                    0.12182605145295
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantleestofu33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8890160000",
                    "cuisines": "Asian",
                    "address": "1743 W Redondo Beach Blvd, Gardena , CA 90247",
                    "name": "Lee's Tofu",
                    "longitude": "-118.3080950000",
                    "zipcode": "CA 90247",
                    "website": "",
                    "url": "https://www.zomato.com/gardena-ca/lees-tofu-gardena",
                    "phone": "(310) 323-0006",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.308095,
                        "lat": 33.889016
                    }
                },
                "sort": [
                    0.12182605145295
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranthoneymee33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8894990000",
                    "cuisines": "Ice Cream",
                    "address": "15480 S. Western Avenue Suite 108 , CA 90249",
                    "name": "Honeymee",
                    "longitude": "-118.3089550000",
                    "zipcode": "CA 90249",
                    "website": "http://www.honeymee.com/",
                    "url": "https://www.zomato.com/gardena-ca/honeymee-gardena",
                    "phone": "(310) 516-0122",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.308955,
                        "lat": 33.889499
                    }
                },
                "sort": [
                    0.12805345991264
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantleessoontofu33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8890230000",
                    "address": "1743 w. Redondo Bch Blvd, Gardena , CA 90247",
                    "cuisines": "Asian",
                    "name": "Lee's Soon Tofu",
                    "longitude": "-118.3080200000",
                    "zipcode": "CA 90247",
                    "website": "",
                    "url": "https://www.zomato.com/gardena-ca/lees-soon-tofu-gardena",
                    "phone": "(310) 323-0006",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.30802,
                        "lat": 33.889023
                    }
                },
                "sort": [
                    0.12899610418947
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantyellowcowkoreanbbq33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8883000000",
                    "address": "1835 W Redondo Beach Blvd, Gardena , CA 90247",
                    "cuisines": "BBQ * Korean",
                    "longitude": "-118.3102000000",
                    "zipcode": "CA 90247",
                    "name": "Yellow Cow Korean BBQ",
                    "url": "https://www.zomato.com/gardena-ca/yellow-cow-korean-bbq-gardena",
                    "phone": "(310) 329-7343",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -118.3102,
                        "lat": 33.8883
                    }
                },
                "sort": [
                    0.13787562478468
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranthousenka33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8896355000",
                    "cuisines": "Japanese",
                    "address": "15476 S. Western Ave. #106, Gardena , CA 90249",
                    "name": "Housenka",
                    "longitude": "-118.3089279000",
                    "zipcode": "CA 90249",
                    "website": "",
                    "url": "https://www.zomato.com/gardena-ca/housenka-gardena",
                    "phone": "(310) 323-4129",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3089279,
                        "lat": 33.8896355
                    }
                },
                "sort": [
                    0.14329739503815
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantjunbento33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8881568000",
                    "address": "1841 Redondo Beach Blvd, Gardena , CA 90247",
                    "cuisines": "Japanese",
                    "longitude": "-118.3102980000",
                    "zipcode": "CA 90247",
                    "name": "Jun Bento",
                    "url": "https://www.zomato.com/gardena-ca/jun-bento-gardena",
                    "phone": "(310) 515-4877",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -118.310298,
                        "lat": 33.8881568
                    }
                },
                "sort": [
                    0.15020514125297
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantkiraku33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8897402000",
                    "cuisines": "Japanese",
                    "address": "15472 S Western Ave, Gardena , CA 90249",
                    "longitude": "-118.3089494000",
                    "zipcode": "CA 90249",
                    "name": "Kiraku",
                    "url": "https://www.zomato.com/gardena-ca/kiraku-gardena",
                    "phone": "(310) 515-0966",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -118.3089494,
                        "lat": 33.8897402
                    }
                },
                "sort": [
                    0.15490783126007
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantharryschicken33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8892542000",
                    "cuisines": "Hawaiian",
                    "address": "1721 W. Redondo Beach Blvd, Gardena , CA 90247",
                    "name": "Harry's Chicken",
                    "longitude": "-118.3077960000",
                    "zipcode": "CA 90247",
                    "website": "",
                    "url": "https://www.zomato.com/gardena-ca/harrys-chicken-gardena",
                    "phone": "(310) 324-4231",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.307796,
                        "lat": 33.8892542
                    }
                },
                "sort": [
                    0.16437706089669
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantmariecallenders33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8898339000",
                    "cuisines": "American * Desserts",
                    "address": "15466 S Western Ave, Gardena , CA 90249",
                    "name": "Marie Callender's",
                    "longitude": "-118.3088887000",
                    "zipcode": "CA 90249",
                    "website": "http://www.mcpies.com/",
                    "url": "https://www.zomato.com/gardena-ca/marie-callenders-gardena",
                    "phone": "(310) 516-9595",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3088887,
                        "lat": 33.8898339
                    }
                },
                "sort": [
                    0.16553514200837
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantcrabshack33891183",
                "_score": null,
                "_source": {
                    "latitude": "33.8900513000",
                    "cuisines": "Seafood",
                    "address": "15460 S Western Avenue, Gardena 90249",
                    "longitude": "-118.3089091000",
                    "zipcode": "90249",
                    "name": "Crab Shack",
                    "url": "https://www.zomato.com/gardena-ca/crab-shack-gardena",
                    "phone": "(310) 808-9908",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://tcrabshack.com/",
                    "location": {
                        "lon": -118.3089091,
                        "lat": 33.8900513
                    }
                },
                "sort": [
                    0.18962541389866
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantphoconsomme33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8876358000",
                    "address": "1850 Redondo Beach Blvd, Gardena , CA 90247",
                    "cuisines": "Vietnamese",
                    "longitude": "-118.3108281000",
                    "zipcode": "CA 90247",
                    "name": "Pho Consomme",
                    "url": "https://www.zomato.com/gardena-ca/pho-consomme-gardena",
                    "phone": "(310) 217-1130",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.phoconsomme.com/restaurant-locations.html",
                    "location": {
                        "lon": -118.3108281,
                        "lat": 33.8876358
                    }
                },
                "sort": [
                    0.2223343951373
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranttampoporamenandsushi33891183",
                "_score": null,
                "_source": {
                    "latitude": "33.8904100000",
                    "address": "15462 S Western Ave, Gardena , CA 90249",
                    "cuisines": "Japanese",
                    "name": "Tampopo Ramen and Sushi",
                    "longitude": "-118.3090340000",
                    "zipcode": "CA 90249",
                    "website": "",
                    "url": "https://www.zomato.com/gardena-ca/tampopo-ramen-and-sushi-gardena",
                    "phone": "(310) 323-7882",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.309034,
                        "lat": 33.89041
                    }
                },
                "sort": [
                    0.22960125331569
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantdumplinghouse33891183",
                "_score": null,
                "_source": {
                    "latitude": "33.8905392000",
                    "address": "15486 Western Ave, Gardena , CA 90249",
                    "cuisines": "Chinese",
                    "name": "Dumpling House",
                    "longitude": "-118.3087452000",
                    "zipcode": "CA 90249",
                    "website": "http://www.dumplinghousegardena.com/",
                    "url": "https://www.zomato.com/gardena-ca/dumpling-house-gardena",
                    "phone": "(310) 217-1268",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3087452,
                        "lat": 33.8905392
                    }
                },
                "sort": [
                    0.2450411321662
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantmountain33891183",
                "_score": null,
                "_source": {
                    "latitude": "33.8906501000",
                    "cuisines": "BBQ * Korean",
                    "address": "15460 S Western Ave Ste 101, Gardena , CA 90249",
                    "longitude": "-118.3091503000",
                    "zipcode": "CA 90249",
                    "name": "Mountain",
                    "url": "https://www.zomato.com/gardena-ca/mountain-gardena",
                    "phone": "(310) 327-8494",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -118.3091503,
                        "lat": 33.8906501
                    }
                },
                "sort": [
                    0.25704314926534
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbobshawaiianstylerestaurantoka33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8860173000",
                    "cuisines": "Asian * Hawaiian",
                    "address": "15926 South Western Ave, Gardena , CA 90247",
                    "name": "Bob's Hawaiian Style Restaurant Okazu-Ya",
                    "longitude": "-118.3088827000",
                    "zipcode": "CA 90247",
                    "website": "",
                    "url": "https://www.zomato.com/gardena-ca/bobs-hawaiian-style-restaurant-okazu-ya-gardena",
                    "phone": "(310) 515-2250",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.3088827,
                        "lat": 33.8860173
                    }
                },
                "sort": [
                    0.25968186608455
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbistromiyodanoodlehouse33881183",
                "_score": null,
                "_source": {
                    "latitude": "33.8858163000",
                    "address": "15915 S Western Ave, Gardena , CA 90247",
                    "cuisines": "Japanese",
                    "longitude": "-118.3096547000",
                    "zipcode": "CA 90247",
                    "name": "Bistro Miyoda Noodle House",
                    "url": "https://www.zomato.com/gardena-ca/bistro-miyoda-noodle-house-gardena",
                    "phone": "(310) 538-9790",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -118.3096547,
                        "lat": 33.8858163
                    }
                },
                "sort": [
                    0.29224979328498
                ]
            }
        ]
    }, {
        "hits": [
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantboolkoreanbbqtacospastels34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0522342000",
                    "cuisines": "BBQ * Korean * Latin American",
                    "address": "Various Locations, Los Angeles , CA",
                    "name": "Bool Korean BBQ Tacos & Pastels",
                    "longitude": "-118.2436849000",
                    "zipcode": "",
                    "website": "http://www.boolbbq.com/",
                    "url": "https://www.zomato.com/los-angeles/bool-korean-bbq-tacos-pastels-los-angeles",
                    "phone": "(213) 392-0369",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2436849,
                        "lat": 34.0522342
                    }
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantluckdishcurry34051182",
                "_score": null,
                "_source": {
                    "location": {
                        "lon": -118.2436849,
                        "lat": 34.0522342
                    },
                    "cuisines": "Fast Food * Indian",
                    "latitude": "34.0522342000",
                    "date": "01-03-2017",
                    "name": "Luckdish Curry",
                    "url": "https://www.zomato.com/los-angeles/luckdish-curry-los-angeles",
                    "type": "restaurant",
                    "address": "Various Locations, Los Angeles , CA",
                    "longitude": "-118.2436849000"
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantmesohungrytruck34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0522342000",
                    "cuisines": "Burger",
                    "address": "Food Truck, Los Angeles , CA",
                    "longitude": "-118.2436849000",
                    "zipcode": "",
                    "name": "Me So Hungry Truck",
                    "url": "https://www.zomato.com/los-angeles/me-so-hungry-truck-los-angeles",
                    "phone": "(310) 363-0946",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.mesohungrytruck.com/",
                    "location": {
                        "lon": -118.2436849,
                        "lat": 34.0522342
                    }
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantragincajunonwheels34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0522342000",
                    "cuisines": "Sandwich * Cajun",
                    "address": "Various Locations, Los Angeles , CA",
                    "name": "Ragin Cajun on Wheels",
                    "longitude": "-118.2436849000",
                    "zipcode": "",
                    "website": "http://www.ragincajun.com/ragincajunonwheels/index.html",
                    "url": "https://www.zomato.com/los-angeles/ragin-cajun-on-wheels-los-angeles",
                    "phone": "(310) 376-7878",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2436849,
                        "lat": 34.0522342
                    }
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantcurrywursttruck34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0522342000",
                    "cuisines": "Fast Food",
                    "address": "Various Locations, Los Angeles , CA",
                    "name": "Currywurst Truck",
                    "longitude": "-118.2436849000",
                    "zipcode": "",
                    "website": "http://www.currywurst-losangeles.com/",
                    "url": "https://www.zomato.com/los-angeles/currywurst-truck-los-angeles",
                    "phone": "(323) 835-1222",
                    "type": "restaurant",
                    "date": "04-29-2016",
                    "location": {
                        "lon": -118.2436849,
                        "lat": 34.0522342
                    }
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantwickedkitchen34051182",
                "_score": null,
                "_source": {
                    "location": {
                        "lon": -118.2436849,
                        "lat": 34.0522342
                    },
                    "cuisines": "Asian * Indian * Cajun",
                    "latitude": "34.0522342000",
                    "date": "01-03-2017",
                    "name": "Wicked Kitchen",
                    "url": "https://www.zomato.com/los-angeles/wicked-kitchen-los-angeles",
                    "type": "restaurant",
                    "address": "Location Varies- See FB, Los Angeles , CA",
                    "longitude": "-118.2436849000"
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantgobblesandoinks34051182",
                "_score": null,
                "_source": {
                    "location": {
                        "lon": -118.2436849,
                        "lat": 34.0522342
                    },
                    "cuisines": "American * Fast Food * Sandwich",
                    "latitude": "34.0522342000",
                    "date": "01-03-2017",
                    "name": "Gobbles and Oinks",
                    "url": "https://www.zomato.com/los-angeles/gobbles-and-oinks-los-angeles",
                    "type": "restaurant",
                    "address": "Location Varies, Los Angeles , CA",
                    "longitude": "-118.2436849000"
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantnonnaskitchenette34051182",
                "_score": null,
                "_source": {
                    "location": {
                        "lon": -118.2436849,
                        "lat": 34.0522342
                    },
                    "cuisines": "Italian",
                    "latitude": "34.0522342000",
                    "date": "01-03-2017",
                    "name": "Nonna's Kitchenette",
                    "url": "https://www.zomato.com/los-angeles/nonnas-kitchenette-los-angeles",
                    "type": "restaurant",
                    "address": "Food Truck, Los Angeles , CA",
                    "longitude": "-118.2436849000"
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantsteelcitysandwichtruck34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0522342000",
                    "cuisines": "Sandwich",
                    "address": "Food Truck, Los Angeles , CA",
                    "name": "Steel City Sandwich Truck",
                    "longitude": "-118.2436849000",
                    "zipcode": "",
                    "website": "http://www.steelcitysandwich.com/",
                    "url": "https://www.zomato.com/los-angeles/steel-city-sandwich-truck-los-angeles",
                    "phone": "(301) 873-4838",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2436849,
                        "lat": 34.0522342
                    }
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantlatabela34051182",
                "_score": null,
                "_source": {
                    "location": {
                        "lon": -118.2436849,
                        "lat": 34.0522342
                    },
                    "cuisines": "",
                    "latitude": "34.0522342000",
                    "date": "01-03-2017",
                    "name": "La Tabela",
                    "url": "https://www.zomato.com/los-angeles/la-tabela-los-angeles",
                    "type": "restaurant",
                    "address": "To be decided, Los Angeles , CA",
                    "longitude": "-118.2436849000"
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantreubentruck34051182",
                "_score": null,
                "_source": {
                    "location": {
                        "lon": -118.2436849,
                        "lat": 34.0522342
                    },
                    "cuisines": "Sandwich",
                    "latitude": "34.0522342000",
                    "date": "01-03-2017",
                    "name": "Reuben Truck",
                    "url": "https://www.zomato.com/los-angeles/reuben-truck-los-angeles",
                    "type": "restaurant",
                    "address": "Location Varies, Los Angeles , CA",
                    "longitude": "-118.2436849000"
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantcaesarsrestaurant34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0521700000",
                    "address": "13000 Avalon Boulevard, Los Angeles , CA 90061",
                    "cuisines": "American",
                    "name": "Caesars Restaurant",
                    "longitude": "-118.2434690000",
                    "zipcode": "CA 90061",
                    "website": "http://www.caesarsrestaurantmenu.com/",
                    "url": "https://www.zomato.com/los-angeles/caesars-restaurant-south-los-angeles",
                    "phone": "(310) 515-0080",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.243469,
                        "lat": 34.05217
                    }
                },
                "sort": [
                    0.025073946184336
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbeginscafe34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0511451000",
                    "address": "100 S Main St, Los Angeles , CA 90012",
                    "cuisines": "Sandwich",
                    "longitude": "-118.2435949000",
                    "zipcode": "CA 90012",
                    "name": "Begin's Cafe",
                    "url": "https://www.zomato.com/los-angeles/begins-cafe-los-angeles",
                    "phone": "(213) 620-9565",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.beginscafe.com/",
                    "location": {
                        "lon": -118.2435949,
                        "lat": 34.0511451
                    }
                },
                "sort": [
                    0.12165131319834
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranthomeboydiner34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0531930000",
                    "address": "201 N Main St Fl 2, Los Angeles , CA 90012",
                    "cuisines": "Pizza * Sandwich",
                    "longitude": "-118.2427070000",
                    "zipcode": "CA 90012",
                    "name": "Homeboy Diner",
                    "url": "https://www.zomato.com/los-angeles/homeboy-diner-los-angeles",
                    "phone": "(213) 542-6190",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -118.242707,
                        "lat": 34.053193
                    }
                },
                "sort": [
                    0.15245430234191
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbentoman34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0532587000",
                    "address": "228 West 1st Street, Los Angeles , CA 90012",
                    "cuisines": "Japanese",
                    "name": "Bento Man",
                    "longitude": "-118.2449686000",
                    "zipcode": "CA 90012",
                    "website": "",
                    "url": "https://www.zomato.com/los-angeles/bento-man-los-angeles",
                    "phone": "(213) 620-0240",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2449686,
                        "lat": 34.0532587
                    }
                },
                "sort": [
                    0.18283140889308
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantgroundworkcoffeecompany34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0510127000",
                    "address": "108 W 2nd St, Los Angeles , CA 90012",
                    "cuisines": "Coffee and Tea * Tea",
                    "name": "Groundwork Coffee Company",
                    "longitude": "-118.2448223000",
                    "zipcode": "CA 90012",
                    "website": "http://www.groundworkcoffee.com/",
                    "url": "https://www.zomato.com/los-angeles/groundwork-coffee-company-1-los-angeles",
                    "phone": "(213) 620-9668",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2448223,
                        "lat": 34.0510127
                    }
                },
                "sort": [
                    0.18579823321825
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantpitfirepizza34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0510127000",
                    "cuisines": "Italian * Pizza",
                    "address": "108 West 2nd St, Los Angeles , CA 90012",
                    "name": "Pitfire Pizza",
                    "longitude": "-118.2448223000",
                    "zipcode": "CA 90012",
                    "website": "http://www.pitfirepizza.com/",
                    "url": "https://www.zomato.com/los-angeles/pitfire-pizza-los-angeles",
                    "phone": "(213) 808-1200",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2448223,
                        "lat": 34.0510127
                    }
                },
                "sort": [
                    0.18579823321825
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantliliyachinabistro34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0510127000",
                    "cuisines": "Chinese",
                    "address": "108 W 2nd St #102, Los Angeles , CA 90012",
                    "name": "Liliya China Bistro",
                    "longitude": "-118.2448223000",
                    "zipcode": "CA 90012",
                    "website": "http://www.liliyachinabistro.com/",
                    "url": "https://www.zomato.com/los-angeles/liliya-china-bistro-los-angeles",
                    "phone": "(213) 620-1717",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2448223,
                        "lat": 34.0510127
                    }
                },
                "sort": [
                    0.18579823321825
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbadmaash34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0510127000",
                    "cuisines": "Indian",
                    "address": "108 West 2nd St, Los Angeles , CA 90012",
                    "longitude": "-118.2448223000",
                    "zipcode": "CA 90012",
                    "name": "Badmaash",
                    "url": "https://www.zomato.com/los-angeles/badmaash-los-angeles",
                    "phone": "(213) 221-7466",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.badmaashla.com/",
                    "location": {
                        "lon": -118.2448223,
                        "lat": 34.0510127
                    }
                },
                "sort": [
                    0.18579823321825
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranttheedison34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0510127000",
                    "address": "108 W 2nd St, Los Angeles , CA 90012",
                    "cuisines": "Bar Food",
                    "name": "The Edison",
                    "longitude": "-118.2448223000",
                    "zipcode": "CA 90012",
                    "website": "http://www.edisondowntown.com/",
                    "url": "https://www.zomato.com/los-angeles/the-edison-los-angeles",
                    "phone": "(213) 613-0000",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2448223,
                        "lat": 34.0510127
                    }
                },
                "sort": [
                    0.18579823321825
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantsbarro34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0525534000",
                    "address": "201 N Los Angeles St Ste 22a , CA 90012",
                    "cuisines": "Fast Food",
                    "name": "Sbarro",
                    "longitude": "-118.2419713000",
                    "zipcode": "CA 90012",
                    "website": "",
                    "url": "https://www.zomato.com/los-angeles/sbarro-7-los-angeles",
                    "phone": "(213) 437-0707",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2419713,
                        "lat": 34.0525534
                    }
                },
                "sort": [
                    0.19403832182065
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantichibantokyo34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0525534000",
                    "cuisines": "Japanese",
                    "address": "201 N Los Angeles St , CA 90012",
                    "longitude": "-118.2419713000",
                    "zipcode": "CA 90012",
                    "name": "Ichiban-Tokyo",
                    "url": "https://www.zomato.com/los-angeles/ichiban-tokyo-los-angeles",
                    "phone": "(213) 629-3543",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -118.2419713,
                        "lat": 34.0525534
                    }
                },
                "sort": [
                    0.19403832182065
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantdrnkcoffeetea34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0525534000",
                    "address": "201 N Los Angeles St Spc 24 , CA 90012",
                    "cuisines": "Coffee and Tea",
                    "longitude": "-118.2419713000",
                    "zipcode": "CA 90012",
                    "name": "DRNK coffee + tea",
                    "url": "https://www.zomato.com/los-angeles/drnk-coffee-tea-los-angeles",
                    "phone": "(213) 617-0400",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://drnkcoffee.com/",
                    "location": {
                        "lon": -118.2419713,
                        "lat": 34.0525534
                    }
                },
                "sort": [
                    0.19403832182065
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantcaliforniapita34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0525534000",
                    "cuisines": "Burger * Mediterranean",
                    "address": "201 N Los Angeles St , CA 90012",
                    "name": "California Pita",
                    "longitude": "-118.2419713000",
                    "zipcode": "CA 90012",
                    "website": "http://californiapita.com/",
                    "url": "https://www.zomato.com/los-angeles/california-pita-1-los-angeles",
                    "phone": "(213) 346-9400",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2419713,
                        "lat": 34.0525534
                    }
                },
                "sort": [
                    0.19403832182065
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantleons34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0525534000",
                    "cuisines": "",
                    "address": "201 N Los Angeles St , CA 90012",
                    "name": "Leon's",
                    "longitude": "-118.2419713000",
                    "zipcode": "CA 90012",
                    "website": "",
                    "url": "https://www.zomato.com/los-angeles/leons-los-angeles",
                    "phone": "(213) 613-0747",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2419713,
                        "lat": 34.0525534
                    }
                },
                "sort": [
                    0.19403832182065
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantpastryplace34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0525534000",
                    "cuisines": "",
                    "address": "201 N Los Angeles St , CA 90012",
                    "name": "Pastry Place",
                    "longitude": "-118.2419713000",
                    "zipcode": "CA 90012",
                    "website": "",
                    "url": "https://www.zomato.com/los-angeles/pastry-place-los-angeles",
                    "phone": "(213) 629-4252",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2419713,
                        "lat": 34.0525534
                    }
                },
                "sort": [
                    0.19403832182065
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantcaliforniasalsa34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0525534000",
                    "cuisines": "Mexican",
                    "address": "201 N Los Angeles St , CA 90012",
                    "name": "California Salsa",
                    "longitude": "-118.2419713000",
                    "zipcode": "CA 90012",
                    "website": "",
                    "url": "https://www.zomato.com/los-angeles/california-salsa-los-angeles",
                    "phone": "(213) 972-4099",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2419713,
                        "lat": 34.0525534
                    }
                },
                "sort": [
                    0.19403832182065
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantcafestmichel34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0525534000",
                    "cuisines": "European * Sandwich",
                    "address": "201 N Los Angeles St , CA 90012",
                    "name": "Cafe St Michel",
                    "longitude": "-118.2419713000",
                    "zipcode": "CA 90012",
                    "website": "",
                    "url": "https://www.zomato.com/los-angeles/cafe-st-michel-los-angeles",
                    "phone": "(213) 617-2524",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2419713,
                        "lat": 34.0525534
                    }
                },
                "sort": [
                    0.19403832182065
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantredbird34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0504960000",
                    "cuisines": "American",
                    "address": "114 E 2nd St, Los Angeles , CA 90012",
                    "longitude": "-118.2440630000",
                    "zipcode": "CA 90012",
                    "name": "Redbird",
                    "url": "https://www.zomato.com/los-angeles/redbird-los-angeles",
                    "phone": "(213) 788-1191",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.redbird.la/",
                    "location": {
                        "lon": -118.244063,
                        "lat": 34.050496
                    }
                },
                "sort": [
                    0.19802041109478
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantjusticeurbantavern34051182",
                "_score": null,
                "_source": {
                    "latitude": "34.0505282000",
                    "cuisines": "American",
                    "address": "120 S Los Angeles St , CA 90012",
                    "name": "Justice Urban Tavern",
                    "longitude": "-118.2426489000",
                    "zipcode": "CA 90012",
                    "website": "http://www.justicela.com/",
                    "url": "https://www.zomato.com/los-angeles/justice-urban-tavern-los-angeles",
                    "phone": "(213) 253-9235",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -118.2426489,
                        "lat": 34.0505282
                    }
                },
                "sort": [
                    0.22218578395916
                ]
            }
        ]
    }, {
        "hits": [
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantomininja37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3384750000",
                    "address": "Various Locations, San Jose , CA",
                    "cuisines": "Vietnamese",
                    "name": "Omi Ninja",
                    "longitude": "-121.8857940000",
                    "zipcode": "",
                    "website": "http://omininjasj.com/",
                    "url": "https://www.zomato.com/san-jose/omininjasj-food-truck-san-jose",
                    "phone": "(408) 890-9036",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.885794,
                        "lat": 37.338475
                    }
                },
                "sort": [
                    0.066510894506443
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantsoulnese37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3384750000",
                    "cuisines": "Vietnamese",
                    "address": "Various Locations, San Jose , CA",
                    "longitude": "-121.8857940000",
                    "zipcode": "",
                    "name": "Soulnese",
                    "url": "https://www.zomato.com/san-jose/soulnese-downtown",
                    "phone": "(408) 462-2608",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -121.885794,
                        "lat": 37.338475
                    }
                },
                "sort": [
                    0.066510894506443
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranttaqueriasanjose37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3382444444",
                    "cuisines": "Mexican",
                    "address": "235 E Santa Clara Street, San Jose , CA 95113",
                    "name": "Taqueria San Jose",
                    "longitude": "-121.8851861111",
                    "zipcode": "CA 95113",
                    "website": "",
                    "url": "https://www.zomato.com/san-jose/taqueria-san-jose-downtown",
                    "phone": "(408) 288-8616",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.8851861111,
                        "lat": 37.3382444444
                    }
                },
                "sort": [
                    0.1272452651766
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurant4thstreetpizza37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3374750000",
                    "address": "150 E Santa Clara Street, San Jose , CA 95113",
                    "cuisines": "Pizza",
                    "name": "4th Street Pizza",
                    "longitude": "-121.8874444444",
                    "zipcode": "CA 95113",
                    "website": "http://www.4thstpizzaco.com",
                    "url": "https://www.zomato.com/san-jose/4th-street-pizza-downtown",
                    "phone": "(408) 286-7500",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.8874444444,
                        "lat": 37.337475
                    }
                },
                "sort": [
                    0.14863094627598
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantelagavemexicangrill37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3372070000",
                    "address": "17 S 4th Street, San Jose , CA 95113",
                    "cuisines": "Mexican",
                    "name": "El Agave Mexican Grill",
                    "longitude": "-121.8872820000",
                    "zipcode": "CA 95113",
                    "website": "",
                    "url": "https://www.zomato.com/san-jose/el-agave-mexican-grill-downtown",
                    "phone": "(408) 294-2838",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.887282,
                        "lat": 37.337207
                    }
                },
                "sort": [
                    0.15390188336731
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantnewtungkeenoodlehouse37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3381055556",
                    "cuisines": "Chinese",
                    "address": "264 E Santa Clara Street, San Jose , CA 95113",
                    "longitude": "-121.8849250000",
                    "zipcode": "CA 95113",
                    "name": "New Tung Kee Noodle House",
                    "url": "https://www.zomato.com/san-jose/new-tung-kee-noodle-house-downtown",
                    "phone": "(408) 289-8688",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -121.884925,
                        "lat": 37.3381055556
                    }
                },
                "sort": [
                    0.15666528012099
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantlaurelsdelights37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3374833333",
                    "cuisines": "Sandwich",
                    "address": "138 Santa Clara Street , CA 95113",
                    "name": "Laurel's Delights",
                    "longitude": "-121.8876333333",
                    "zipcode": "CA 95113",
                    "website": "",
                    "url": "https://www.zomato.com/san-jose/laurels-delights-downtown",
                    "phone": "(408) 292-5211",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.8876333333,
                        "lat": 37.3374833333
                    }
                },
                "sort": [
                    0.16615196501033
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantsevenseassushi37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3373611111",
                    "cuisines": "Japanese",
                    "address": "130 E Santa Clara Street, San Jose , CA 95113",
                    "name": "Seven Seas Sushi",
                    "longitude": "-121.8878555556",
                    "zipcode": "CA 95113",
                    "website": "http://www.sevenseassushi.net/",
                    "url": "https://www.zomato.com/san-jose/seven-seas-sushi-downtown",
                    "phone": "(408) 899-6271",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.8878555556,
                        "lat": 37.3373611111
                    }
                },
                "sort": [
                    0.19438413670925
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantliquidrestaurantlounge37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3367470000",
                    "address": "32 S 3rd Street, San Jose , CA 95113",
                    "cuisines": "Asian * Bar Food",
                    "longitude": "-121.8877170000",
                    "zipcode": "CA 95113",
                    "name": "Liquid Restaurant & Lounge",
                    "url": "https://www.zomato.com/san-jose/liquid-restaurant-lounge-downtown",
                    "phone": "(408) 293-3800",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.liquidloungesj.com/",
                    "location": {
                        "lon": -121.887717,
                        "lat": 37.336747
                    }
                },
                "sort": [
                    0.22437878657197
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantflameseateryandbar37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3361550000",
                    "address": "88 S 4th Street, San Jose , CA 95112",
                    "cuisines": "American * Bar Food",
                    "name": "Flames Eatery and Bar",
                    "longitude": "-121.8860770000",
                    "zipcode": "CA 95112",
                    "website": "http://www.flameseatery.com/index.html",
                    "url": "https://www.zomato.com/san-jose/flames-eatery-and-bar-downtown",
                    "phone": "(408) 971-1960",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.886077,
                        "lat": 37.336155
                    }
                },
                "sort": [
                    0.23027083939783
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantcafepomegranate37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3366360000",
                    "address": "221 E San Fernando Street, San Jose , CA 95112",
                    "cuisines": "Mediterranean * American * Cafe",
                    "name": "Cafe Pomegranate",
                    "longitude": "-121.8846080000",
                    "zipcode": "CA 95112",
                    "website": "http://www.cafepomegranate.com/",
                    "url": "https://www.zomato.com/san-jose/cafe-pomegranate-downtown",
                    "phone": "(408) 271-8822",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.884608,
                        "lat": 37.336636
                    }
                },
                "sort": [
                    0.2594550765814
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantsmokeeaters37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3364910000",
                    "cuisines": "American",
                    "address": "29 South 3rd Street, San Jose , CA 95113",
                    "name": "Smoke Eaters",
                    "longitude": "-121.8881320000",
                    "zipcode": "CA 95113",
                    "website": "http://www.smoke-eaters.com/",
                    "url": "https://www.zomato.com/san-jose/smoke-eaters-downtown",
                    "phone": "(408) 293-9976",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.888132,
                        "lat": 37.336491
                    }
                },
                "sort": [
                    0.27720626176068
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantsmokeaters37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3363222222",
                    "address": "29 S 3rd Street, San Jose , CA 95113",
                    "cuisines": "American",
                    "longitude": "-121.8880083333",
                    "zipcode": "CA 95113",
                    "name": "Smokeaters",
                    "url": "https://www.zomato.com/san-jose/smokeaters-downtown",
                    "phone": "(408) 293-9976",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -121.8880083333,
                        "lat": 37.3363222222
                    }
                },
                "sort": [
                    0.28114323570252
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantaknoodlehouse37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3392222222",
                    "address": "304 E Santa Clara Street, San Jose , CA 95113",
                    "cuisines": "Asian",
                    "name": "A&K Noodle House",
                    "longitude": "-121.8839416667",
                    "zipcode": "CA 95113",
                    "website": "",
                    "url": "https://www.zomato.com/san-jose/a-k-noodle-house-downtown",
                    "phone": "(408) 885-0339",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.8839416667,
                        "lat": 37.3392222222
                    }
                },
                "sort": [
                    0.28869528151083
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantfreddiejs37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3372880000",
                    "cuisines": "Drinks Only",
                    "address": "97 E Santa Clara Street, Downtown , San Jose , CA 95113",
                    "name": "Freddie J's",
                    "longitude": "-121.8887540000",
                    "zipcode": "CA 95113",
                    "website": "http://www.freddiejs.com/",
                    "url": "https://www.zomato.com/san-jose/the-downtown",
                    "phone": "(408) 292-2420",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.888754,
                        "lat": 37.337288
                    }
                },
                "sort": [
                    0.28877342739674
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbistronoodle37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3394910000",
                    "cuisines": "Chinese",
                    "address": "301 E Santa Clara Street, San Jose , CA 95113",
                    "longitude": "-121.8840650000",
                    "zipcode": "CA 95113",
                    "name": "Bistro Noodle",
                    "url": "https://www.zomato.com/san-jose/bistro-noodle-downtown",
                    "phone": "(408) 320-4425",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -121.884065,
                        "lat": 37.339491
                    }
                },
                "sort": [
                    0.28963313821796
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantpowerbowl37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3356030000",
                    "address": "132 E San Fernando Street, San Jose , CA 95112",
                    "cuisines": "Healthy Food",
                    "name": "Power Bowl",
                    "longitude": "-121.8864290000",
                    "zipcode": "CA 95112",
                    "website": "",
                    "url": "https://www.zomato.com/san-jose/power-bowl-downtown",
                    "phone": "(408) 217-8477",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.886429,
                        "lat": 37.335603
                    }
                },
                "sort": [
                    0.29022481876415
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranthawaiiandrivein37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3390170000",
                    "cuisines": "Hawaiian",
                    "address": "304 E Santa Clara Street, San Jose , CA 95113",
                    "name": "Hawaiian Drive In",
                    "longitude": "-121.8838080000",
                    "zipcode": "CA 95113",
                    "website": "http://hawaiiandriveinn.com/",
                    "url": "https://www.zomato.com/san-jose/hawaiian-drive-in-downtown",
                    "phone": "(408) 275-9888",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.883808,
                        "lat": 37.339017
                    }
                },
                "sort": [
                    0.29468314695424
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantthejointeatery37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3371586000",
                    "cuisines": "American * Burger * Sandwich",
                    "address": "93 E Santa Clara Street, San Jose , CA 95113",
                    "name": "The Joint Eatery",
                    "longitude": "-121.8888271000",
                    "zipcode": "CA 95113",
                    "website": "http://www.jointeatery.com",
                    "url": "https://www.zomato.com/san-jose/the-joint-eatery-downtown",
                    "phone": "(408) 297-2474",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.8888271,
                        "lat": 37.3371586
                    }
                },
                "sort": [
                    0.30167710186421
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantamorcafeandtea37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3354359000",
                    "address": "110 East San Fernando Street, San Jose , CA 95112",
                    "cuisines": "Bubble Tea",
                    "name": "Amor Cafe and Tea",
                    "longitude": "-121.8865727000",
                    "zipcode": "CA 95112",
                    "website": "http://www.amorcafeandtea.com/",
                    "url": "https://www.zomato.com/san-jose/amor-cafe-and-tea-downtown",
                    "phone": "(408) 286-2000",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.8865727,
                        "lat": 37.3354359
                    }
                },
                "sort": [
                    0.30980500485103
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantpunjabcafe37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3393388889",
                    "cuisines": "Indian",
                    "address": "322 E Santa Clara Street, San Jose , CA 95113",
                    "longitude": "-121.8836583333",
                    "zipcode": "CA 95113",
                    "name": "Punjab Cafe",
                    "url": "https://www.zomato.com/san-jose/punjab-cafe-downtown",
                    "phone": "(408) 295-5470",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://punjabcafesanjose.com/",
                    "location": {
                        "lon": -121.8836583333,
                        "lat": 37.3393388889
                    }
                },
                "sort": [
                    0.32280313840665
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbakerymexico37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3371472222",
                    "cuisines": "Mexican",
                    "address": "87 E Santa Clara Street, San Jose , CA 95113",
                    "name": "Bakery Mexico",
                    "longitude": "-121.8890444444",
                    "zipcode": "CA 95113",
                    "website": "",
                    "url": "https://www.zomato.com/san-jose/bakery-mexico-downtown",
                    "phone": "(408) 920-2518",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.8890444444,
                        "lat": 37.3371472222
                    }
                },
                "sort": [
                    0.32457764120247
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantfahrenheit37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3353722222",
                    "address": "99 East San Fernando Street, Downtown , San Jose , CA 95113",
                    "cuisines": "California * American",
                    "longitude": "-121.8870388889",
                    "zipcode": "CA 95113",
                    "name": "Fahrenheit",
                    "url": "https://www.zomato.com/san-jose/fahrenheit-downtown",
                    "phone": "(408) 998-9998",
                    "type": "restaurant",
                    "date": "09-12-2016",
                    "website": "http://www.fahrenheitsj.com/",
                    "location": {
                        "lon": -121.8870388889,
                        "lat": 37.3353722222
                    }
                },
                "sort": [
                    0.32545068273419
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantdivebar37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3370750000",
                    "address": "78 E Santa Clara Street, San Jose , CA 95113",
                    "cuisines": "Drinks Only",
                    "name": "Dive Bar",
                    "longitude": "-121.8890305556",
                    "zipcode": "CA 95113",
                    "website": "http://www.sjdivebar.com/",
                    "url": "https://www.zomato.com/san-jose/dive-bar-downtown",
                    "phone": "(408) 288-5252",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.8890305556,
                        "lat": 37.337075
                    }
                },
                "sort": [
                    0.3261624284647
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantosheyo37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3370620000",
                    "cuisines": "Sushi",
                    "address": "273 East San Fernando Street, San Jose , CA 95112",
                    "longitude": "-121.8835930000",
                    "zipcode": "CA 95112",
                    "name": "Osheyo",
                    "url": "https://www.zomato.com/san-jose/osheyo-downtown",
                    "phone": "(408) 288-8461",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -121.883593,
                        "lat": 37.337062
                    }
                },
                "sort": [
                    0.3301759704374
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranthomkoreankitchen37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3366840000",
                    "cuisines": "Korean",
                    "address": "76 E Santa Clara Street, San Jose , CA 95113",
                    "name": "Hom Korean Kitchen",
                    "longitude": "-121.8889580000",
                    "zipcode": "CA 95113",
                    "website": "",
                    "url": "https://www.zomato.com/san-jose/hom-korean-kitchen-downtown",
                    "phone": "(415) 568-7646",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.888958,
                        "lat": 37.336684
                    }
                },
                "sort": [
                    0.3383257375853
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantisobeers37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3370277778",
                    "address": "75 E Santa Clara Street, San Jose , CA 95113",
                    "cuisines": "Drinks Only",
                    "longitude": "-121.8891750000",
                    "zipcode": "CA 95113",
                    "name": "Iso: Beers",
                    "url": "https://www.zomato.com/san-jose/iso-beers-downtown",
                    "phone": "(408) 298-2337",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.isobeers.com/",
                    "location": {
                        "lon": -121.889175,
                        "lat": 37.3370277778
                    }
                },
                "sort": [
                    0.34302644608552
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantpeanutsdeluxesandwichshop37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3372110000",
                    "address": "275 East San Fernando Street, San Jose , CA 95112",
                    "cuisines": "American",
                    "longitude": "-121.8833410000",
                    "zipcode": "CA 95112",
                    "name": "Peanuts Deluxe Sandwich Shop",
                    "url": "https://www.zomato.com/san-jose/peanuts-deluxe-sandwich-shop-downtown",
                    "phone": "(408) 998-9778",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -121.883341,
                        "lat": 37.337211
                    }
                },
                "sort": [
                    0.35061507459581
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantcinebar37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3352239000",
                    "cuisines": "Drinks Only",
                    "address": "69 E San Fernando Street, San Jose , CA 95113",
                    "name": "Cinebar",
                    "longitude": "-121.8878519000",
                    "zipcode": "CA 95113",
                    "website": "",
                    "url": "https://www.zomato.com/san-jose/cinebar-downtown",
                    "phone": "(408) 292-9562",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.8878519,
                        "lat": 37.3352239
                    }
                },
                "sort": [
                    0.37298657121528
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantcomganaman37331218",
                "_score": null,
                "_source": {
                    "latitude": "37.3395583333",
                    "address": "348 E Santa Clara Street, San Jose , CA 95113",
                    "cuisines": "Vietnamese",
                    "longitude": "-121.8832333333",
                    "zipcode": "CA 95113",
                    "name": "Com Ga Nam An",
                    "url": "https://www.zomato.com/san-jose/com-ga-nam-an-downtown",
                    "phone": "(408) 297-3402",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -121.8832333333,
                        "lat": 37.3395583333
                    }
                },
                "sort": [
                    0.37591614433899
                ]
            }
        ]
    }, {
        "hits": [
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbostonmarket37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5488360000",
                    "name": "Boston Market",
                    "cuisines": "American",
                    "address": "3962 Mowry Avenue , CA 94538",
                    "longitude": "-121.9879310000",
                    "zipcode": "CA 94538",
                    "website": "https://www.bostonmarket.com/",
                    "url": "https://www.zomato.com/fremont-ca/boston-market-fremont",
                    "phone": "(510) 791-1191",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.987931,
                        "lat": 37.548836
                    }
                },
                "sort": [
                    0.079728147725669
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantyogurtland37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5480944444",
                    "cuisines": "Frozen Yogurt",
                    "address": "4069 Mowry Avenue, Fremont , CA 94538",
                    "name": "Yogurtland",
                    "longitude": "-121.9891666667",
                    "zipcode": "CA 94538",
                    "website": "http://www.yogurt-land.com/",
                    "url": "https://www.zomato.com/fremont-ca/yogurtland-fremont",
                    "phone": "(510) 795-7359",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.9891666667,
                        "lat": 37.5480944444
                    }
                },
                "sort": [
                    0.081714142157727
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantjambajuice37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5486666667",
                    "address": "3962 Mowry Avenue, Fremont , CA 94538",
                    "cuisines": "Beverages",
                    "longitude": "-121.9878083333",
                    "zipcode": "CA 94538",
                    "name": "Jamba Juice",
                    "url": "https://www.zomato.com/fremont-ca/jamba-juice-fremont",
                    "phone": "(510) 608-5820",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.jambajuice.com",
                    "location": {
                        "lon": -121.9878083333,
                        "lat": 37.5486666667
                    }
                },
                "sort": [
                    0.08738788783247
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantmcdonalds37541219",
                "_score": null,
                "_source": {
                    "address": "38860 Fremont Boulevard, Fremont , CA 94536",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "cuisines": "Fast Food",
                    "location": {
                        "lon": -121.9893333333,
                        "lat": 37.5492777778
                    },
                    "url": "https://www.zomato.com/fremont-ca/mcdonalds-fremont",
                    "latitude": "37.5492777778",
                    "phone": "(510) 790-3954",
                    "name": "McDonald's",
                    "longitude": "-121.9893333333"
                },
                "sort": [
                    0.11717171086458
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantchaatcafe37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5487583333",
                    "address": "3954 Mowry Avenue, Fremont , CA 94538",
                    "cuisines": "Indian",
                    "name": "Chaat Cafe",
                    "longitude": "-121.9871833333",
                    "zipcode": "CA 94538",
                    "website": "http://www.chaatcafe.com/",
                    "url": "https://www.zomato.com/fremont-ca/chaat-cafe-fremont",
                    "phone": "(510) 796-3408",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.9871833333,
                        "lat": 37.5487583333
                    }
                },
                "sort": [
                    0.15770130296031
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantnoahsbagels37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5487166667",
                    "cuisines": "Bagels * Cafe * Beverages",
                    "address": "3958 Mowry Avenue, Fremont , CA 94538",
                    "name": "Noah's Bagels",
                    "longitude": "-121.9871527778",
                    "zipcode": "CA 94538",
                    "website": "http://www.noahs.com/",
                    "url": "https://www.zomato.com/fremont-ca/noahs-bagels-fremont",
                    "phone": "(510) 744-9142",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.9871527778,
                        "lat": 37.5487166667
                    }
                },
                "sort": [
                    0.160427112242
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbanhthai37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5485805556",
                    "cuisines": "Thai",
                    "address": "39060 Fremont Boulevard, Fremont , CA 94538",
                    "name": "Banh Thai",
                    "longitude": "-121.9870444444",
                    "zipcode": "CA 94538",
                    "website": "http://banhthaifremont.com/",
                    "url": "https://www.zomato.com/fremont-ca/banh-thai-fremont",
                    "phone": "(510) 739-1138",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.9870444444,
                        "lat": 37.5485805556
                    }
                },
                "sort": [
                    0.17133189646623
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantohanahawaiianbbq37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5469972222",
                    "cuisines": "Hawaiian",
                    "address": "100 Fremont Boulevard, Fremont , CA 94538",
                    "longitude": "-121.9884944444",
                    "zipcode": "CA 94538",
                    "name": "Ohana Hawaiian BBQ",
                    "url": "https://www.zomato.com/fremont-ca/ohana-hawaiian-bbq-fremont",
                    "phone": "(510) 790-2888",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.hawaiianislandbbq.com/",
                    "location": {
                        "lon": -121.9884944444,
                        "lat": 37.5469972222
                    }
                },
                "sort": [
                    0.17197947590833
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantcurrypizzahouse37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5481230000",
                    "address": "39070 Fremont Boulevard, Fremont , CA 94538",
                    "cuisines": "Pizza",
                    "name": "Curry Pizza House",
                    "longitude": "-121.9870270000",
                    "zipcode": "CA 94538",
                    "website": "http://www.currypizzahouse.com",
                    "url": "https://www.zomato.com/fremont-ca/curry-pizza-house-fremont",
                    "phone": "(510) 796-7800",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.987027,
                        "lat": 37.548123
                    }
                },
                "sort": [
                    0.17931395131713
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbaskinrobbins37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5494694444",
                    "address": "3850 Mowry Avenue, Fremont , CA 94538",
                    "cuisines": "Ice Cream",
                    "longitude": "-121.9866250000",
                    "zipcode": "CA 94538",
                    "name": "Baskin Robbins",
                    "url": "https://www.zomato.com/fremont-ca/baskin-robbins-fremont",
                    "phone": "(510) 793-9923",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://baskinrobbins.com",
                    "location": {
                        "lon": -121.986625,
                        "lat": 37.5494694444
                    }
                },
                "sort": [
                    0.24129317135221
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantgatersmediterraneangrill37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5494944444",
                    "cuisines": "Middle Eastern",
                    "address": "3846 Mowry Avenue, Fremont , CA 94538",
                    "longitude": "-121.9866166667",
                    "zipcode": "CA 94538",
                    "name": "Gaters Mediterranean Grill",
                    "url": "https://www.zomato.com/fremont-ca/gaters-mediterranean-grill-fremont",
                    "phone": "(510) 494-9944",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.gogaters.com",
                    "location": {
                        "lon": -121.9866166667,
                        "lat": 37.5494944444
                    }
                },
                "sort": [
                    0.24333418306186
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantanikissushi37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5495305556",
                    "cuisines": "Sushi",
                    "address": "3810 Mowry Avenue, Fremont , CA 94538",
                    "name": "Aniki's Sushi",
                    "longitude": "-121.9865638889",
                    "zipcode": "CA 94538",
                    "website": "http://www.anikis-sushi.com/",
                    "url": "https://www.zomato.com/fremont-ca/anikis-sushi-fremont",
                    "phone": "(510) 797-3474",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.9865638889,
                        "lat": 37.5495305556
                    }
                },
                "sort": [
                    0.25037737341241
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantposhbagel37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5460110000",
                    "cuisines": "Bagels * Sandwich",
                    "address": "39124 Fremont Hub, Fremont , CA 94538",
                    "longitude": "-121.9885120000",
                    "zipcode": "CA 94538",
                    "name": "Posh Bagel",
                    "url": "https://www.zomato.com/fremont-ca/posh-bagel-fremont",
                    "phone": "(510) 790-2999",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -121.988512,
                        "lat": 37.546011
                    }
                },
                "sort": [
                    0.2815934054521
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantqcup37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5462916667",
                    "cuisines": "Crepes * Bubble Tea * Taiwanese",
                    "address": "210 Fremont Hub Courtyard, Fremont , CA 94538",
                    "name": "Q Cup",
                    "longitude": "-121.9874194444",
                    "zipcode": "CA 94538",
                    "website": "",
                    "url": "https://www.zomato.com/fremont-ca/q-cup-fremont",
                    "phone": "(510) 793-0171",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.9874194444,
                        "lat": 37.5462916667
                    }
                },
                "sort": [
                    0.28177392505825
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantlasen37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5461722222",
                    "name": "La Sen",
                    "cuisines": "Vietnamese",
                    "address": "181 Fremont Hub Courtyard, Fremont , CA 94538",
                    "longitude": "-121.9872750000",
                    "zipcode": "CA 94538",
                    "website": "",
                    "url": "https://www.zomato.com/fremont-ca/la-sen-fremont",
                    "phone": "(510) 494-8300",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.987275,
                        "lat": 37.5461722222
                    }
                },
                "sort": [
                    0.30108458291522
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantcoldstonecreamery37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5457310000",
                    "cuisines": "Ice Cream * Bakery",
                    "address": "39085 Fremont Hub, Fremont , CA 94538",
                    "name": "Cold Stone Creamery",
                    "longitude": "-121.9882260000",
                    "zipcode": "CA 94538",
                    "website": "http://www.coldstonecreamery.com/",
                    "url": "https://www.zomato.com/fremont-ca/cold-stone-creamery-fremont",
                    "phone": "(510) 505-0556",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.988226,
                        "lat": 37.545731
                    }
                },
                "sort": [
                    0.31516753630265
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantsaravanaabhavan37551219",
                "_score": null,
                "_source": {
                    "latitude": "37.5503833333",
                    "cuisines": "Indian * Vegetarian",
                    "address": "3720 Mowry Avenue, Fremont , CA 94538",
                    "name": "Saravanaa Bhavan",
                    "longitude": "-121.9863138889",
                    "zipcode": "CA 94538",
                    "website": "http://www.saravanabhavan.com/",
                    "url": "https://www.zomato.com/fremont-ca/saravanaa-bhavan-fremont",
                    "phone": "(510) 791-7755",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.9863138889,
                        "lat": 37.5503833333
                    }
                },
                "sort": [
                    0.32546852608526
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantchilisgrillbar37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5472055556",
                    "name": "Chili's Grill & Bar",
                    "cuisines": "Tex-Mex * Latin American * New American * Mexican",
                    "address": "39131 Fremont Boulevard, Fremont , CA 94538",
                    "longitude": "-121.9859777778",
                    "zipcode": "CA 94538",
                    "website": "http://chilis.com",
                    "url": "https://www.zomato.com/fremont-ca/chilis-grill-bar-fremont",
                    "phone": "(510) 792-2800",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.9859777778,
                        "lat": 37.5472055556
                    }
                },
                "sort": [
                    0.32582317717158
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranthyderabadpavilion37541219",
                "_score": null,
                "_source": {
                    "location": {
                        "lon": -121.990292,
                        "lat": 37.545319
                    },
                    "phone": "(510) 713-0183",
                    "cuisines": "Indian * Pakistani",
                    "latitude": "37.5453190000",
                    "date": "01-03-2017",
                    "name": "Hyderabad Pavilion",
                    "url": "https://www.zomato.com/fremont-ca/hyderabad-pavilion-fremont",
                    "type": "restaurant",
                    "address": "39030 Argonaut Way, Fremont , CA 94538",
                    "longitude": "-121.9902920000"
                },
                "sort": [
                    0.40586520521122
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantindianchili37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5453190000",
                    "name": "Indian Chili",
                    "cuisines": "Indian",
                    "address": "39030 Argonaut Way, Fremont , CA 94538",
                    "longitude": "-121.9902920000",
                    "zipcode": "CA 94538",
                    "website": "",
                    "url": "https://www.zomato.com/fremont-ca/indian-food-res-fremont",
                    "phone": "(510) 713-0183",
                    "type": "restaurant",
                    "date": "09-12-2016",
                    "location": {
                        "lon": -121.990292,
                        "lat": 37.545319
                    }
                },
                "sort": [
                    0.40586520521122
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantpopeyeslouisianakitchen37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5459000000",
                    "address": "39234 Argonaut Way , CA 94538",
                    "cuisines": "Fast Food * Cajun",
                    "name": "Popeyes Louisiana Kitchen",
                    "longitude": "-121.9860000000",
                    "zipcode": "CA 94538",
                    "website": "http://www.popeyes.com",
                    "url": "https://www.zomato.com/fremont-ca/popeyes-chicken-biscuits-fremont",
                    "phone": "(510) 791-8836",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.986,
                        "lat": 37.5459
                    }
                },
                "sort": [
                    0.41111988242367
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantoriginalpancakehouse37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5473555556",
                    "cuisines": "Diner",
                    "address": "39222 Fremont Boulevard, Fremont , CA 94538",
                    "name": "Original Pancake House",
                    "longitude": "-121.9850000000",
                    "zipcode": "CA 94538",
                    "website": "http://www.originalpancakehouse.com",
                    "url": "https://www.zomato.com/fremont-ca/original-pancake-house-fremont",
                    "phone": "(510) 744-1957",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.985,
                        "lat": 37.5473555556
                    }
                },
                "sort": [
                    0.42007217991613
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantmigakoreanrestaurant37551219",
                "_score": null,
                "_source": {
                    "latitude": "37.5503498000",
                    "cuisines": "Korean",
                    "address": "39033 State Street, Fremont , CA 94538",
                    "name": "Miga Korean Restaurant",
                    "longitude": "-121.9852685000",
                    "zipcode": "CA 94538",
                    "website": "http://miga.orengeo.com/",
                    "url": "https://www.zomato.com/fremont-ca/miga-korean-restaurant-fremont",
                    "phone": "(510) 797-2949",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.9852685,
                        "lat": 37.5503498
                    }
                },
                "sort": [
                    0.42040958287821
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantmunchnerhaus37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5476305556",
                    "cuisines": "Sandwich * Deli",
                    "address": "39212 Fremont Boulevard, Fremont , CA 94538",
                    "longitude": "-121.9848416667",
                    "zipcode": "CA 94538",
                    "name": "Munchner Haus",
                    "url": "https://www.zomato.com/fremont-ca/munchner-haus-fremont",
                    "phone": "(510) 793-6411",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -121.9848416667,
                        "lat": 37.5476305556
                    }
                },
                "sort": [
                    0.42860080783933
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantnations37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5483138889",
                    "cuisines": "Burger * Diner",
                    "address": "39180 Fremont Boulevard, Fremont , CA 94538",
                    "name": "Nation's",
                    "longitude": "-121.9847333333",
                    "zipcode": "CA 94538",
                    "website": "http://www.nationsrestaurants.com",
                    "url": "https://www.zomato.com/fremont-ca/nations-giant-hamburgers-fremont",
                    "phone": "(510) 797-3211",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.9847333333,
                        "lat": 37.5483138889
                    }
                },
                "sort": [
                    0.4292788916047
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranttacobell37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5448374000",
                    "cuisines": "Fast Food * Tex-Mex",
                    "address": "39080 Argonaut Way #1308 , CA 94538",
                    "name": "Taco Bell",
                    "longitude": "-121.9896850000",
                    "zipcode": "CA 94538",
                    "website": "http://www.tacobell.com/",
                    "url": "https://www.zomato.com/fremont-ca/taco-bell-4-fremont",
                    "phone": "(510) 857-0158",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.989685,
                        "lat": 37.5448374
                    }
                },
                "sort": [
                    0.42999722006029
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantfalafeletc37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5479166667",
                    "address": "39200 Fremont Boulevard, Fremont , CA 94538",
                    "cuisines": "Middle Eastern",
                    "longitude": "-121.9846111111",
                    "zipcode": "CA 94538",
                    "name": "Falafel, Etc",
                    "url": "https://www.zomato.com/fremont-ca/falafel-etc-fremont",
                    "phone": "(510) 795-7170",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.falafeletc.com/",
                    "location": {
                        "lon": -121.9846111111,
                        "lat": 37.5479166667
                    }
                },
                "sort": [
                    0.44755346559256
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantcherrygarden37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5477222222",
                    "address": "39206 Fremont Boulevard, Fremont , CA 94538",
                    "cuisines": "Chinese * Filipino",
                    "name": "Cherry Garden",
                    "longitude": "-121.9846333333",
                    "zipcode": "CA 94538",
                    "website": "",
                    "url": "https://www.zomato.com/fremont-ca/cherry-garden-fremont",
                    "phone": "(510) 792-8882",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.9846333333,
                        "lat": 37.5477222222
                    }
                },
                "sort": [
                    0.44899131393785
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantelephantbar37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5464972222",
                    "address": "39233 Fremont Boulevard, Fremont , CA 94538",
                    "cuisines": "Asian * Fusion",
                    "name": "Elephant Bar",
                    "longitude": "-121.9848722222",
                    "zipcode": "CA 94538",
                    "website": "http://www.elephantbar.com/",
                    "url": "https://www.zomato.com/fremont-ca/elephant-bar-fremont",
                    "phone": "(510) 742-6221",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -121.9848722222,
                        "lat": 37.5464972222
                    }
                },
                "sort": [
                    0.47151628869031
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantjacksbrewing37541219",
                "_score": null,
                "_source": {
                    "latitude": "37.5442830000",
                    "cuisines": "American * Pub Food",
                    "address": "39176 Argonaut Way, Fremont , CA 94538",
                    "longitude": "-121.9883200000",
                    "zipcode": "CA 94538",
                    "name": "Jack's Brewing",
                    "url": "https://www.zomato.com/fremont-ca/jacks-brewing-fremont",
                    "phone": "(510) 796-2036",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.jacksbrewingcompany.com/",
                    "location": {
                        "lon": -121.98832,
                        "lat": 37.544283
                    }
                },
                "sort": [
                    0.47474614400134
                ]
            }
        ]
    }, {
        "hits": [
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantdelpopolo37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7749295000",
                    "address": "Various Locations, San Francisco , CA",
                    "cuisines": "Pizza",
                    "name": "Del Popolo",
                    "longitude": "-122.4194155000",
                    "zipcode": "",
                    "website": "http://www.delpopolosf.com/",
                    "url": "https://www.zomato.com/san-francisco/del-popolo-soma",
                    "phone": "(415) 967-1853",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.4194155,
                        "lat": 37.7749295
                    }
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantgostreatery37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7749295000",
                    "address": "Location Varies, San Francisco , CA",
                    "cuisines": "California",
                    "name": "Gostreatery",
                    "longitude": "-122.4194155000",
                    "zipcode": "",
                    "website": "http://gostreatery.com/",
                    "url": "https://www.zomato.com/san-francisco/gostreatery-san-francisco",
                    "phone": "(510) 777-9777",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.4194155,
                        "lat": 37.7749295
                    }
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantkojakitchen37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7749295000",
                    "cuisines": "Korean * Japanese",
                    "address": "Location Varies, San Francisco , CA",
                    "longitude": "-122.4194155000",
                    "zipcode": "",
                    "name": "KoJa Kitchen",
                    "url": "https://www.zomato.com/koja-kitchen-food-truck",
                    "phone": "(415) 992-7394 (510) 328-3799",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.kojakitchen.com/",
                    "location": {
                        "lon": -122.4194155,
                        "lat": 37.7749295
                    }
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantkasaindiantruck37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7749295000",
                    "cuisines": "Indian",
                    "address": "Location Varies, San Francisco , CA",
                    "name": "Kasa Indian Truck",
                    "longitude": "-122.4194155000",
                    "zipcode": "",
                    "website": "http://www.kasaindian.com/",
                    "url": "https://www.zomato.com/kasa-indian-truck-food-truck",
                    "phone": "(415) 621-6940",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.4194155,
                        "lat": 37.7749295
                    }
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantcoreelations37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7749295000",
                    "address": "Ferry Plaza Farmers's Market, 1 Ferry Bldg, SOMA , San Francisco , CA 94114",
                    "cuisines": "Vegetarian",
                    "name": "Core Elations",
                    "longitude": "-122.4194155000",
                    "zipcode": "CA 94114",
                    "website": "",
                    "url": "https://www.zomato.com/san-francisco/core-elations-soma",
                    "phone": "(831) 262-1928",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.4194155,
                        "lat": 37.7749295
                    }
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantvoodoovan37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7749295000",
                    "address": "Location Varies, San Francisco , CA",
                    "cuisines": "Sandwich",
                    "longitude": "-122.4194155000",
                    "zipcode": "",
                    "name": "Voodoo Van",
                    "url": "https://www.zomato.com/san-francisco/voodoo-van-soma",
                    "phone": "(415) 341-7203",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "https://flavorplease.com/eat/voodoovan",
                    "location": {
                        "lon": -122.4194155,
                        "lat": 37.7749295
                    }
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantallstardonutssandwich37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7751990000",
                    "address": "1500 Market Street, San Francisco , CA 94102",
                    "cuisines": "Donuts * Bagels",
                    "name": "Allstar Donuts & Sandwich",
                    "longitude": "-122.4195450000",
                    "zipcode": "CA 94102",
                    "website": "",
                    "url": "https://www.zomato.com/san-francisco/allstar-donuts-sandwich-western-addition",
                    "phone": "(415) 252-9888",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.419545,
                        "lat": 37.775199
                    }
                },
                "sort": [
                    0.033284434670727
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantlunchgeek37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7756777778",
                    "cuisines": "Cafe * Sandwich",
                    "address": "1475 Market Street, San Francisco , CA 94103",
                    "longitude": "-122.4184416667",
                    "zipcode": "CA 94103",
                    "name": "Lunch Geek",
                    "url": "https://www.zomato.com/san-francisco/lunch-geek-soma",
                    "phone": "(415) 626-8888",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://lunchgeeksf.com/",
                    "location": {
                        "lon": -122.4184416667,
                        "lat": 37.7756777778
                    }
                },
                "sort": [
                    0.1367133407857
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantedencafe37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7750361111",
                    "cuisines": "Cafe",
                    "address": "47 Franklin Street, San Francisco , CA 94102",
                    "name": "Eden Cafe",
                    "longitude": "-122.4206694444",
                    "zipcode": "CA 94102",
                    "website": "",
                    "url": "https://www.zomato.com/san-francisco/eden-cafe-civic-center",
                    "phone": "(415) 861-1888",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.4206694444,
                        "lat": 37.7750361111
                    }
                },
                "sort": [
                    0.14009205134581
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbistro10un37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7741050000",
                    "cuisines": "American",
                    "address": "10 Un Plaza, 6th Floor, 1130 Market Street, San Francisco , CA 94102",
                    "longitude": "-122.4204730000",
                    "zipcode": "CA 94102",
                    "name": "Bistro 10un",
                    "url": "https://www.zomato.com/san-francisco/bistro-10un-western-addition",
                    "phone": "(415) 276-4048",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.bistro10un.com",
                    "location": {
                        "lon": -122.420473,
                        "lat": 37.774105
                    }
                },
                "sort": [
                    0.14927219415528
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantjavalenciacaf37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7744250000",
                    "cuisines": "Bagels * Cafe",
                    "address": "1594 Market Street, San Francisco , CA 94102",
                    "name": "Javalencia Café",
                    "longitude": "-122.4206777778",
                    "zipcode": "CA 94102",
                    "website": "http://javalenciacafe.com/",
                    "url": "https://www.zomato.com/san-francisco/javalencia-café-civic-center",
                    "phone": "(415) 529-2983",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.4206777778,
                        "lat": 37.774425
                    }
                },
                "sort": [
                    0.15132350395924
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantthepastrycupboard37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7743111111",
                    "address": "1596 Market Street, San Francisco , CA 94102",
                    "cuisines": "Bakery * Desserts",
                    "name": "The Pastry Cupboard",
                    "longitude": "-122.4206861111",
                    "zipcode": "CA 94102",
                    "website": "http://www.pastrycupboard.com/",
                    "url": "https://www.zomato.com/san-francisco/the-pastry-cupboard-civic-center",
                    "phone": "(415) 864-2755",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.4206861111,
                        "lat": 37.7743111111
                    }
                },
                "sort": [
                    0.15730580046243
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantcala37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7759970000",
                    "address": "149 Fell Street, San Francisco 94102",
                    "cuisines": "Mexican * Seafood",
                    "name": "Cala",
                    "longitude": "-122.4203660000",
                    "zipcode": "94102",
                    "website": "http://www.calarestaurant.com/",
                    "url": "https://www.zomato.com/san-francisco/cala-civic-center",
                    "phone": "(415) 660-7701",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.420366,
                        "lat": 37.775997
                    }
                },
                "sort": [
                    0.15911315425643
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantminasbrazilianrestaurantcachac37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7747888889",
                    "cuisines": "Brazilian",
                    "address": "41 Franklin Street, San Francisco , CA 94102",
                    "name": "Minas Brazilian Restaurant & Cachacaria",
                    "longitude": "-122.4209361111",
                    "zipcode": "CA 94102",
                    "website": "http://www.minasbrazilianrestaurant.com/",
                    "url": "https://www.zomato.com/san-francisco/minas-brazilian-restaurant-cachacaria-civic-center",
                    "phone": "(415) 626-8727",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.4209361111,
                        "lat": 37.7747888889
                    }
                },
                "sort": [
                    0.16999581903545
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantaltaca37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7759277778",
                    "cuisines": "American",
                    "address": "1420 Market Street, San Francisco , CA 94102",
                    "name": "Alta CA",
                    "longitude": "-122.4178305556",
                    "zipcode": "CA 94102",
                    "website": "http://altaca.co/",
                    "url": "https://www.zomato.com/san-francisco/alta-ca-civic-center",
                    "phone": "(415) 590-2585",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.4178305556,
                        "lat": 37.7759277778
                    }
                },
                "sort": [
                    0.20851561986906
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantzaoh37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7734555556",
                    "cuisines": "Sushi",
                    "address": "1555  Street, San Francisco , CA 94103",
                    "name": "Zaoh",
                    "longitude": "-122.4182583333",
                    "zipcode": "CA 94103",
                    "website": "http://www.zaohsf.com/",
                    "url": "https://www.zomato.com/san-francisco/zaoh-soma",
                    "phone": "(415) 431-3930",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.4182583333,
                        "lat": 37.7734555556
                    }
                },
                "sort": [
                    0.20860294989205
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantshanghaichina37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7733888889",
                    "address": "1559  Street, San Francisco , CA 94103",
                    "cuisines": "Chinese",
                    "longitude": "-122.4182583333",
                    "zipcode": "CA 94103",
                    "name": "Shanghai China",
                    "url": "https://www.zomato.com/san-francisco/shanghai-china-soma",
                    "phone": "(415) 621-8188",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.shanghaichinasf.com/",
                    "location": {
                        "lon": -122.4182583333,
                        "lat": 37.7733888889
                    }
                },
                "sort": [
                    0.21448921317141
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantmavelouscoffeewine37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7760666667",
                    "cuisines": "Coffee and Tea",
                    "address": "1408 Market Street, San Francisco , CA 94102",
                    "name": "Ma'velous Coffee & Wine",
                    "longitude": "-122.4177777778",
                    "zipcode": "CA 94102",
                    "website": "",
                    "url": "https://www.zomato.com/san-francisco/mavelous-coffee-wine-civic-center",
                    "phone": "(415) 626-8884",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.4177777778,
                        "lat": 37.7760666667
                    }
                },
                "sort": [
                    0.22195001979317
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranthotspotbar37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7759138889",
                    "cuisines": "Drinks Only",
                    "address": "1414 Market Street, San Francisco , CA 94102",
                    "name": "Hotspot Bar",
                    "longitude": "-122.4176722222",
                    "zipcode": "CA 94102",
                    "website": "",
                    "url": "https://www.zomato.com/san-francisco/hotspot-bar-civic-center",
                    "phone": "(415) 355-9800",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.4176722222,
                        "lat": 37.7759138889
                    }
                },
                "sort": [
                    0.22286259348356
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantninascafe37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7761194444",
                    "cuisines": "Cafe",
                    "address": "201 Fell Street, San Francisco , CA 94102",
                    "name": "Nina's Cafe",
                    "longitude": "-122.4211194444",
                    "zipcode": "CA 94102",
                    "website": "",
                    "url": "https://www.zomato.com/san-francisco/ninas-cafe-civic-center",
                    "phone": "(415) 437-2734",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.4211194444,
                        "lat": 37.7761194444
                    }
                },
                "sort": [
                    0.2313569930623
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantgrandmasdelicafe37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7733944444",
                    "address": "1551  Street, San Francisco , CA 94103",
                    "cuisines": "Sandwich",
                    "longitude": "-122.4179833333",
                    "zipcode": "CA 94103",
                    "name": "Grandma's Deli & Cafe",
                    "url": "https://www.zomato.com/san-francisco/grandmas-deli-cafe-soma",
                    "phone": "(415) 252-0759",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://grandmasdeliandcafe.com",
                    "location": {
                        "lon": -122.4179833333,
                        "lat": 37.7733944444
                    }
                },
                "sort": [
                    0.23370458415567
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantanthego37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7771250000",
                    "cuisines": "Asian",
                    "address": "Various Locations, San Francisco , CA",
                    "longitude": "-122.4196440000",
                    "zipcode": "",
                    "name": "An the Go",
                    "url": "https://www.zomato.com/san-francisco/an-the-go-western-addition",
                    "phone": "(415) 665-1146",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "https://www.facebook.com/AnTheGoSF",
                    "location": {
                        "lon": -122.419644,
                        "lat": 37.777125
                    }
                },
                "sort": [
                    0.24572204823542
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantflorindasmarketstreetgrill37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7763111111",
                    "cuisines": "American * Breakfast",
                    "address": "Hotel Whitcomb, First Floor, 1231 Market Street, San Francisco , CA 94103",
                    "name": "Florinda's Market Street Grill",
                    "longitude": "-122.4176555556",
                    "zipcode": "CA 94103",
                    "website": "http://www.marketstreetgrillsf.com/",
                    "url": "https://www.zomato.com/san-francisco/florindas-market-street-grill-soma",
                    "phone": "(415) 487-4414",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.4176555556,
                        "lat": 37.7763111111
                    }
                },
                "sort": [
                    0.24907356139775
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranttaqueriacazadores37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7727694444",
                    "address": "1600 Mission Street, San Francisco , CA 94103",
                    "cuisines": "Mexican",
                    "longitude": "-122.4188000000",
                    "zipcode": "CA 94103",
                    "name": "Taqueria Cazadores",
                    "url": "https://www.zomato.com/san-francisco/taqueria-cazadores-soma",
                    "phone": "(415) 503-0340",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://taqueriacazadores.net/",
                    "location": {
                        "lon": -122.4188,
                        "lat": 37.7727694444
                    }
                },
                "sort": [
                    0.25002765152081
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantsouth37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7761194444",
                    "address": "201 Franklin Street, San Francisco , CA 94102",
                    "cuisines": "Mexican",
                    "name": "South",
                    "longitude": "-122.4213250000",
                    "zipcode": "CA 94102",
                    "website": "http://www.southatsfjazz.com",
                    "url": "https://www.zomato.com/san-francisco/south-civic-center",
                    "phone": "(415) 539-3905",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.421325,
                        "lat": 37.7761194444
                    }
                },
                "sort": [
                    0.25046039200743
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantzunicaf37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7736888889",
                    "address": "1658 Market Street, San Francisco , CA 94102",
                    "cuisines": "Italian * French * California",
                    "name": "Zuni Café",
                    "longitude": "-122.4213638889",
                    "zipcode": "CA 94102",
                    "website": "http://www.zunicafe.com/",
                    "url": "https://www.zomato.com/san-francisco/zuni-café-civic-center",
                    "phone": "(415) 552-2522",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.4213638889,
                        "lat": 37.7736888889
                    }
                },
                "sort": [
                    0.25712959528959
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantthebeerhall37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7767944444",
                    "cuisines": "Bar Food",
                    "address": "1 Polk Street, San Francisco , CA 94102",
                    "name": "The Beer Hall",
                    "longitude": "-122.4179527778",
                    "zipcode": "CA 94102",
                    "website": "http://thebeerhallsf.com",
                    "url": "https://www.zomato.com/san-francisco/the-beer-hall-civic-center",
                    "phone": "(415) 800-7416",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.4179527778,
                        "lat": 37.7767944444
                    }
                },
                "sort": [
                    0.2638430181441
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranttheaceofsandwiches37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7742000000",
                    "cuisines": "Sandwich",
                    "address": "3864 El Camino Real, Palo Alto , CA 94306",
                    "name": "The Ace of Sandwiches",
                    "longitude": "-122.4170680000",
                    "zipcode": "CA 94306",
                    "website": "http://theaceofsandwiches.com",
                    "url": "https://www.zomato.com/palo-alto-ca/the-ace-of-sandwiches-palo-alto",
                    "phone": "(650) 855-9993",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.417068,
                        "lat": 37.7742
                    }
                },
                "sort": [
                    0.27364963112882
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantlittlegriddle37771224",
                "_score": null,
                "_source": {
                    "latitude": "37.7765166667",
                    "cuisines": "American",
                    "address": "1400 Market Street, San Francisco , CA 94102",
                    "longitude": "-122.4175027778",
                    "zipcode": "CA 94102",
                    "name": "Little Griddle",
                    "url": "https://www.zomato.com/san-francisco/little-griddle-civic-center",
                    "phone": "(415) 864-4292",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -122.4175027778,
                        "lat": 37.7765166667
                    }
                },
                "sort": [
                    0.27668222280956
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantbluebottle37771224",
                "_score": null,
                "_source": {
                    "address": "1355 Market Street, San Francisco , CA 94103",
                    "date": "01-03-2017",
                    "cuisines": "Coffee and Tea",
                    "type": "restaurant",
                    "url": "https://www.zomato.com/san-francisco/blue-bottle-coffee-soma",
                    "latitude": "37.7760194444",
                    "longitude": "-122.4171361111",
                    "name": "Blue Bottle",
                    "phone": "(510) 653-3394",
                    "location": {
                        "lon": -122.4171361111,
                        "lat": 37.7760194444
                    }
                },
                "sort": [
                    0.28125729186872
                ]
            }
        ]
    }, {
        "hits": [
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranthiyaa37561223",
                "_score": null,
                "_source": {
                    "location": {
                        "lon": -122.3255254,
                        "lat": 37.5629917
                    },
                    "cuisines": "Vietnamese",
                    "latitude": "37.5629917000",
                    "date": "01-03-2017",
                    "name": "Hiyaa",
                    "url": "https://www.zomato.com/san-mateo-ca/hiyaa-san-mateo",
                    "type": "restaurant",
                    "address": "Various Locations, San Mateo , CA",
                    "longitude": "-122.3255254000"
                },
                "sort": [
                    0
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restauranthotaru37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5636610000",
                    "name": "Hotaru",
                    "cuisines": "Japanese",
                    "address": "33 East 3rd Avenue , CA 94401",
                    "longitude": "-122.3255610000",
                    "zipcode": "CA 94401",
                    "website": "",
                    "url": "https://www.zomato.com/san-mateo-ca/hotaru-japanese-restaurant-san-mateo",
                    "phone": "(650) 480-0870",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.325561,
                        "lat": 37.563661
                    }
                },
                "sort": [
                    0.074611455840495
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantthreerestaurantandbar37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5636204000",
                    "cuisines": "American * California",
                    "address": "50 East 3rd Avenue, San Mateo , CA 94401",
                    "name": "Three Restaurant and Bar",
                    "longitude": "-122.3249254000",
                    "zipcode": "CA 94401",
                    "website": "http://www.threesanmateo.com/",
                    "url": "https://www.zomato.com/san-mateo-ca/three-restaurant-and-bar-san-mateo",
                    "phone": "(650) 344-9444",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.3249254,
                        "lat": 37.5636204
                    }
                },
                "sort": [
                    0.096743214605615
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantporterhousesanmateo37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5636640000",
                    "cuisines": "Steak",
                    "address": "60 E 3rd Avenue, San Mateo , CA 94401",
                    "longitude": "-122.3247170000",
                    "zipcode": "CA 94401",
                    "name": "Porterhouse San Mateo",
                    "url": "https://www.zomato.com/san-mateo-ca/porterhouse-san-mateo-san-mateo",
                    "phone": "(650) 579-5911",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "http://www.porterhousesanmateo.com/",
                    "location": {
                        "lon": -122.324717,
                        "lat": 37.563664
                    }
                },
                "sort": [
                    0.11704427132648
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantsibbyscupcakery37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5631000000",
                    "address": "716 South Rail Road Avenue , CA 94401",
                    "cuisines": "Desserts",
                    "name": "Sibby's Cupcakery",
                    "longitude": "-122.3244000000",
                    "zipcode": "CA 94401",
                    "website": "",
                    "url": "https://www.zomato.com/san-mateo-ca/sibbys-cupcakery-san-mateo",
                    "phone": "(415) 613-4373",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.3244,
                        "lat": 37.5631
                    }
                },
                "sort": [
                    0.12585770256962
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantamicis37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5639680000",
                    "cuisines": "Pizza * Italian",
                    "address": "69 E 3rd Avenue, San Mateo , CA 94401",
                    "name": "Amici's",
                    "longitude": "-122.3249160000",
                    "zipcode": "CA 94401",
                    "website": "http://www.amicis.com/",
                    "url": "https://www.zomato.com/san-mateo-ca/amicis-east-coast-pizzeria-san-mateo",
                    "phone": "(650) 342-9392",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.324916,
                        "lat": 37.563968
                    }
                },
                "sort": [
                    0.12811563070712
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantporterhouse37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5635570000",
                    "address": "60 East 3rd Avenue , CA 94401",
                    "cuisines": "American",
                    "name": "Porter House",
                    "longitude": "-122.3244860000",
                    "zipcode": "CA 94401",
                    "website": "",
                    "url": "https://www.zomato.com/san-mateo-ca/porter-house-san-mateo",
                    "phone": "(650) 579-5911",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.324486,
                        "lat": 37.563557
                    }
                },
                "sort": [
                    0.13171106745061
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantsharetea37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5635850000",
                    "cuisines": "Bubble Tea",
                    "address": "60 E 3rd Avenue, San Mateo , CA 94401",
                    "name": "Sharetea",
                    "longitude": "-122.3244820000",
                    "zipcode": "CA 94401",
                    "website": "http://www.shareteaus.com/",
                    "url": "https://www.zomato.com/san-mateo-ca/sharetea-san-mateo",
                    "phone": "(415) 608-6876",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.324482,
                        "lat": 37.563585
                    }
                },
                "sort": [
                    0.1336153175963
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantrubios37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5626660000",
                    "address": "38 East 4th Avenue, San Mateo , CA 94401",
                    "cuisines": "Mexican",
                    "name": "Rubio's",
                    "longitude": "-122.3243350000",
                    "zipcode": "CA 94401",
                    "website": "http://www.rubios.com/",
                    "url": "https://www.zomato.com/san-mateo-ca/rubios-san-mateo",
                    "phone": "(650) 581-7223",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.324335,
                        "lat": 37.562666
                    }
                },
                "sort": [
                    0.13738523944007
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantnimojapanesecuisine37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5639916667",
                    "address": "73 E 3rd Avenue, San Mateo , CA 94401",
                    "cuisines": "Sushi * Japanese",
                    "name": "Ni-Mo Japanese Cuisine",
                    "longitude": "-122.3247222222",
                    "zipcode": "CA 94401",
                    "website": "http://www.ni-mosushi.com/",
                    "url": "https://www.zomato.com/san-mateo-ca/ni-mo-japanese-cuisine-san-mateo",
                    "phone": "(650) 342-0288",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.3247222222,
                        "lat": 37.5639916667
                    }
                },
                "sort": [
                    0.14277686954951
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantcaliforniaroll37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5631210000",
                    "address": "41 E 4th Avenue, San Mateo , CA 94401",
                    "cuisines": "Sushi * Japanese",
                    "name": "California Roll",
                    "longitude": "-122.3242370000",
                    "zipcode": "CA 94401",
                    "website": "http://california.com/",
                    "url": "https://www.zomato.com/san-mateo-ca/california-roll-san-mateo",
                    "phone": "(650) 348-4896",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.324237,
                        "lat": 37.563121
                    }
                },
                "sort": [
                    0.1441444724956
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantclayovencuisineofindia37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5638680000",
                    "address": "78 E 3rd Avenue, San Mateo , CA 94401",
                    "cuisines": "Indian",
                    "name": "Clay Oven Cuisine of India",
                    "longitude": "-122.3245410000",
                    "zipcode": "CA 94401",
                    "website": "http://www.clayovensanmateo.com",
                    "url": "https://www.zomato.com/san-mateo-ca/clay-oven-cuisine-of-india-san-mateo",
                    "phone": "(650) 342-9194",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.324541,
                        "lat": 37.563868
                    }
                },
                "sort": [
                    0.14671153153092
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantkisaku37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5631620000",
                    "cuisines": "Japanese",
                    "address": "47 E 4th Avenue, San Mateo , CA 94401",
                    "longitude": "-122.3241760000",
                    "zipcode": "CA 94401",
                    "name": "Kisaku",
                    "url": "https://www.zomato.com/san-mateo-ca/kisaku-san-mateo",
                    "phone": "(650) 347-4121",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -122.324176,
                        "lat": 37.563162
                    }
                },
                "sort": [
                    0.15140606666736
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantskylounge37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5638370000",
                    "address": "76 East 3rd Avenue , CA 94401",
                    "cuisines": "Drinks Only",
                    "name": "Sky Lounge",
                    "longitude": "-122.3244449000",
                    "zipcode": "CA 94401",
                    "website": "http://www.skylounge76.net/",
                    "url": "https://www.zomato.com/san-mateo-ca/sky-lounge-san-mateo",
                    "phone": "(650) 342-6623",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.3244449,
                        "lat": 37.563837
                    }
                },
                "sort": [
                    0.15271526299961
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantcafe40037561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5616333333",
                    "cuisines": "Cafe",
                    "address": "400 S El Camino Real, San Mateo , CA 94402",
                    "name": "Cafe 400",
                    "longitude": "-122.3252861111",
                    "zipcode": "CA 94402",
                    "website": "",
                    "url": "https://www.zomato.com/san-mateo-ca/cafe-400-san-mateo",
                    "phone": "(650) 579-5544",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.3252861111,
                        "lat": 37.5616333333
                    }
                },
                "sort": [
                    0.15354098740598
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantblock3437561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5627998000",
                    "address": "34 E 4th Avenue, San Mateo , CA 94401",
                    "cuisines": "American",
                    "name": "Block 34",
                    "longitude": "-122.3241196000",
                    "zipcode": "CA 94401",
                    "website": "",
                    "url": "https://www.zomato.com/san-mateo-ca/block-34-san-mateo",
                    "phone": "(650) 434-3403",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.3241196,
                        "lat": 37.5627998
                    }
                },
                "sort": [
                    0.15794424442578
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurant3rdavesportsbargrill37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5640833333",
                    "address": "77 E 3rd Avenue, San Mateo , CA 94401",
                    "cuisines": "American * Bar Food",
                    "name": "3rd Ave Sports Bar & Grill",
                    "longitude": "-122.3246083333",
                    "zipcode": "CA 94401",
                    "website": "",
                    "url": "https://www.zomato.com/san-mateo-ca/3rd-ave-sports-bar-grill-san-mateo",
                    "phone": "(650) 340-9872",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.3246083333,
                        "lat": 37.5640833333
                    }
                },
                "sort": [
                    0.15871031024252
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantjambajuice37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5629310000",
                    "cuisines": "Beverages",
                    "address": "48 E 4th Avenue, San Mateo , CA 94401",
                    "name": "Jamba Juice",
                    "longitude": "-122.3239830000",
                    "zipcode": "CA 94401",
                    "website": "http://www.jambajuice.com",
                    "url": "https://www.zomato.com/san-mateo-ca/jamba-juice-1-san-mateo",
                    "phone": "(650) 558-3918",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.323983,
                        "lat": 37.562931
                    }
                },
                "sort": [
                    0.1718320913351
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantmasujapanesebistro37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5641722222",
                    "cuisines": "Sushi * Japanese",
                    "address": "79 E 3rd Avenue, San Mateo , CA 94401",
                    "name": "Masu Japanese Bistro",
                    "longitude": "-122.3245305556",
                    "zipcode": "CA 94401",
                    "website": "",
                    "url": "https://www.zomato.com/san-mateo-ca/masu-japanese-bistro-san-mateo",
                    "phone": "(650) 342-5254",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.3245305556,
                        "lat": 37.5641722222
                    }
                },
                "sort": [
                    0.1718560972505
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantkaffeehaus37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5639890000",
                    "cuisines": "Cafe",
                    "address": "92 E 3rd Avenue, San Mateo , CA 94401",
                    "name": "Kaffeehaus",
                    "longitude": "-122.3243270000",
                    "zipcode": "CA 94401",
                    "website": "http://www.mykaffeehaus.com/",
                    "url": "https://www.zomato.com/san-mateo-ca/kaffeehaus-san-mateo",
                    "phone": "(650) 347-4242",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.324327,
                        "lat": 37.563989
                    }
                },
                "sort": [
                    0.1735573984244
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantnoahsbagels37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5629720000",
                    "cuisines": "Bagels * Cafe * Beverages",
                    "address": "50 E 4th Avenue, San Mateo , CA 94401",
                    "name": "Noah's Bagels",
                    "longitude": "-122.3239220000",
                    "zipcode": "CA 94401",
                    "website": "http://www.noahs.com/",
                    "url": "https://www.zomato.com/san-mateo-ca/noahs-bagels-san-mateo",
                    "phone": "(650) 347-2364",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.323922,
                        "lat": 37.562972
                    }
                },
                "sort": [
                    0.17850314302153
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantkazterriyakigrill37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5633260000",
                    "cuisines": "Japanese",
                    "address": "71B 4th Avenue, San Mateo , CA 94401",
                    "name": "Kaz Terriyaki Grill",
                    "longitude": "-122.3239300000",
                    "zipcode": "CA 94401",
                    "website": "",
                    "url": "https://www.zomato.com/san-mateo-ca/kaz-terriyaki-grill-san-mateo",
                    "phone": "(650) 347-5777",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.32393,
                        "lat": 37.563326
                    }
                },
                "sort": [
                    0.18145615320089
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantsozaicorner37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5633260000",
                    "cuisines": "Asian",
                    "address": "71 East 4th Avenue , CA 94401",
                    "name": "Sozai Corner",
                    "longitude": "-122.3239300000",
                    "zipcode": "CA 94401",
                    "website": "",
                    "url": "https://www.zomato.com/san-mateo-ca/sozai-corner-san-mateo",
                    "phone": "(650) 342-6803",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.32393,
                        "lat": 37.563326
                    }
                },
                "sort": [
                    0.18145615320089
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantstarbucks37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5630000000",
                    "name": "Starbucks",
                    "cuisines": "Cafe",
                    "address": "54 E 4th Avenue, San Mateo , CA 94401 54 E 4th Avenue San Mateo United States",
                    "longitude": "-122.3238810000",
                    "zipcode": "CA 94401",
                    "website": "http://www.starbucks.com",
                    "url": "https://www.zomato.com/san-mateo-ca/starbucks-4-san-mateo",
                    "phone": "(650) 548-1764",
                    "type": "restaurant",
                    "date": "11-26-2015",
                    "location": {
                        "lon": -122.323881,
                        "lat": 37.563
                    }
                },
                "sort": [
                    0.18305610243867
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantleboulanger37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5630120000",
                    "cuisines": "Cafe * Bakery",
                    "address": "62 E 4th Avenue, San Mateo , CA 94401",
                    "name": "Le Boulanger",
                    "longitude": "-122.3238490000",
                    "zipcode": "CA 94401",
                    "website": "http://www.leboulanger.com/",
                    "url": "https://www.zomato.com/san-mateo-ca/le-boulanger-san-mateo",
                    "phone": "(650) 548-9244",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.323849,
                        "lat": 37.563012
                    }
                },
                "sort": [
                    0.1866296760559
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantsandwichspot37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5631870000",
                    "address": "65 E 4th Avenue, San Mateo , CA 94401",
                    "cuisines": "Sandwich",
                    "name": "Sandwich Spot",
                    "longitude": "-122.3238570000",
                    "zipcode": "CA 94401",
                    "website": "http://www.sandwichspotsm.com",
                    "url": "https://www.zomato.com/san-mateo-ca/sandwich-spot-san-mateo",
                    "phone": "(650) 347-3301",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.323857,
                        "lat": 37.563187
                    }
                },
                "sort": [
                    0.18699357307166
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantllhawaiianbarbecue37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5639650000",
                    "cuisines": "Hawaiian * BBQ",
                    "address": "94 E 3rd Avenue, San Mateo , CA 94401",
                    "name": "L & L Hawaiian Barbecue",
                    "longitude": "-122.3240690000",
                    "zipcode": "CA 94401",
                    "website": "http://www.hawaiianbarbecue.com/",
                    "url": "https://www.zomato.com/san-mateo-ca/l-l-hawaiian-barbecue-san-mateo",
                    "phone": "(650) 347-8885",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.324069,
                        "lat": 37.563965
                    }
                },
                "sort": [
                    0.19499711153546
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantzabuzabu37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5640220000",
                    "address": "98 E 3rd Avenue, San Mateo , CA 94401",
                    "cuisines": "Sushi",
                    "name": "Zabu Zabu",
                    "longitude": "-122.3240630000",
                    "zipcode": "CA 94401",
                    "website": "http://www.zabu-zabu.com/",
                    "url": "https://www.zomato.com/san-mateo-ca/zabu-zabu-san-mateo",
                    "phone": "(650) 340-9228",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.324063,
                        "lat": 37.564022
                    }
                },
                "sort": [
                    0.19913846134521
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantoidon37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5634961000",
                    "cuisines": "Sushi * Japanese",
                    "address": "71 E 4th Avenue, San Mateo , CA 94401",
                    "longitude": "-122.3236915000",
                    "zipcode": "CA 94401",
                    "name": "Oidon",
                    "url": "https://www.zomato.com/san-mateo-ca/oidon-san-mateo",
                    "phone": "(650) 347-5288",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "website": "",
                    "location": {
                        "lon": -122.3236915,
                        "lat": 37.5634961
                    }
                },
                "sort": [
                    0.21172980522533
                ]
            },
            {
                "_index": "places",
                "_type": "place",
                "_id": "restaurantfierocaffe37561223",
                "_score": null,
                "_source": {
                    "latitude": "37.5639916667",
                    "address": "110 El Camino Real, San Mateo , CA",
                    "cuisines": "Cafe",
                    "name": "Fiero Caffe",
                    "longitude": "-122.3272083333",
                    "zipcode": "",
                    "website": "",
                    "url": "https://www.zomato.com/san-mateo-ca/fiero-caffe-san-mateo",
                    "phone": "(650) 685-8210",
                    "type": "restaurant",
                    "date": "01-03-2017",
                    "location": {
                        "lon": -122.3272083333,
                        "lat": 37.5639916667
                    }
                },
                "sort": [
                    0.21791903896895
                ]
            }
        ]
    }

]


export function go() {

    var newarr = []
    var batch = firestore.batch();

    owo.forEach(item => {
        console.log(item)
        item.hits.forEach((data, index) => {
            var src = data._source
            if (
                src.address &&
                src.latitude &&
                src.longitude &&
                src.zipcode &&
                src.name &&
                src.website
            ) {
                let docRef = firestore.collection('hackathonstuff/mlhhtg2021/restaurants').doc()
                //newarr.push(src)
                batch.set(docRef, { ...src, id: data._id })
            }
        })
    })

    batch.commit().then(() => {
        console.log('done!')
    }).catch(e => {
        console.log(e)
    })
}

//console.log(go)

//export var newarr;
