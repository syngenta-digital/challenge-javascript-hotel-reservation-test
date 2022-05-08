function getCheapestHotel (input) { //DO NOT change the function's name.

    // Hotels
    var Lakewood = ['Lakewood', 3, 110, 80, 90, 80]
    var Bridgewood = ['Bridgewood', 4, 160, 110, 60, 50]
    var Ridgewood = ['Ridgewood', 5, 220, 100, 150, 40]

    // All hotels in an array
    var hotels = [Lakewood, Bridgewood, Ridgewood];

    // Getting the input  and spliting into client name => client and dates => date1, date2, date3
    const client = input.split(':')[0];
    const date1 = input.split(':')[1].split(', ')[0].split('(')[1].split(')')[0];
    const date2 = input.split(':')[1].split(', ')[1].split('(')[1].split(')')[0];
    const date3 = input.split(':')[1].split(', ')[2].split('(')[1].split(')')[0];

    // Starting a variable to store the hotels costs
    var hotelsCost = [0, 0, 0];

    // Adding up the daily costs for regular customers
    if (client === 'Regular') {
        if (date1 === 'mon' || date1 === 'tues' || date1 === 'wed' || date1 === 'thur' || date1 === 'fri') {
            hotelsCost[0] += Lakewood[2];
            hotelsCost[1] += Bridgewood[2];
            hotelsCost[2] += Ridgewood[2];
        }

        if (date1 === 'sat' || date1 === 'sun') {
            hotelsCost[0] += Lakewood[4];
            hotelsCost[1] += Bridgewood[4];
            hotelsCost[2] += Ridgewood[4];
        }

        if (date2 === 'mon' || date2 === 'tues' || date2 === 'wed' || date2 === 'thur' || date2 === 'fri') {
            hotelsCost[0] += Lakewood[2];
            hotelsCost[1] += Bridgewood[2];
            hotelsCost[2] += Ridgewood[2];
        }

        if (date2 === 'sat' || date2 === 'sun') {
            hotelsCost[0] += Lakewood[4];
            hotelsCost[1] += Bridgewood[4];
            hotelsCost[2] += Ridgewood[4];
        }

        if (date3 === 'mon' || date3 === 'tues' || date3 === 'wed' || date3 === 'thur' || date3 === 'fri') {
            hotelsCost[0] += Lakewood[2];
            hotelsCost[1] += Bridgewood[2];
            hotelsCost[2] += Ridgewood[2];
        }

        if (date3 === 'sat' || date3 === 'sun') {
            hotelsCost[0] += Lakewood[4];
            hotelsCost[1] += Bridgewood[4];
            hotelsCost[2] += Ridgewood[4];
        }
    }

    // Adding up the daily costs for rewards customers
    if (client === 'Rewards') {
        if (date1 === 'mon' || date1 === 'tues' || date1 === 'wed' || date1 === 'thur' || date1 === 'fri') {
            hotelsCost[0] += Lakewood[3];
            hotelsCost[1] += Bridgewood[3];
            hotelsCost[2] += Ridgewood[3];
        }

        if (date1 === 'sat' || date1 === 'sun') {
            hotelsCost[0] += Lakewood[5];
            hotelsCost[1] += Bridgewood[5];
            hotelsCost[2] += Ridgewood[5];
        }

        if (date2 === 'mon' || date2 === 'tues' || date2 === 'wed' || date2 === 'thur' || date2 === 'fri') {
            hotelsCost[0] += Lakewood[3];
            hotelsCost[1] += Bridgewood[3];
            hotelsCost[2] += Ridgewood[3];
        }

        if (date2 === 'sat' || date2 === 'sun') {
            hotelsCost[0] += Lakewood[5];
            hotelsCost[1] += Bridgewood[5];
            hotelsCost[2] += Ridgewood[5];
        }

        if (date3 === 'mon' || date3 === 'tues' || date3 === 'wed' || date3 === 'thur' || date3 === 'fri') {
            hotelsCost[0] += Lakewood[3];
            hotelsCost[1] += Bridgewood[3];
            hotelsCost[2] += Ridgewood[3];
        }

        if (date3 === 'sat' || date3 === 'sun') {
            hotelsCost[0] += Lakewood[5];
            hotelsCost[1] += Bridgewood[5];
            hotelsCost[2] += Ridgewood[5];
        }
    }


    // Returning the cheapest hotel based on the costs and the rating 
    //Ridgewood is the cheapest hotel
    if (hotelsCost[2] <= hotelsCost[0] && hotelsCost[2] <= hotelsCost[1]) {
        return hotels[2][0];
    }

    //Bridgewood is the cheapest hotel
    if (hotelsCost[1] <= hotelsCost[0] && hotelsCost[1] < hotelsCost[2]) {
        return hotels[1][0];
    }

    //Lakewood is the cheapest hotel
    if (hotelsCost[0] < hotelsCost[1] && hotelsCost[0] < hotelsCost[2]) {
        return hotels[0][0];
    }

    // Default return
    return 0;
}

exports.getCheapestHotel = getCheapestHotel
