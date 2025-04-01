let selectedBus = null; // Store the selected bus details

function searchBuses() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;
    const results = document.getElementById("results");

    // Clear previous results
    results.innerHTML = "";

    if (from === "" || to === "" || date === "") {
        results.innerHTML = "<p style='color:red;'>Please fill all fields!</p>";
        return;
    }

    // Mock bus data with images, available seats, and timing
    const buses = [
        {
            name: "Express Bus",
            time: "10:00 AM",
            price: "$15",
            seatsAvailable: 25,
            type: "AC Sleeper",
            img: "bus1.jpg"
        },
        {
            name: "Super Travel",
            time: "12:30 PM",
            price: "$20",
            seatsAvailable: 12,
            type: "Non-AC Seater",
            img: "bus2.jpg"
        },
        {
            name: "Fast Wheels",
            time: "3:45 PM",
            price: "$18",
            seatsAvailable: 8,
            type: "AC Sleeper",
            img: "bus3.jpg"
        },
        {
            name: "A1 Bus",
            time: "1:00 AM",
            price: "$19",
            seatsAvailable: 29,
            type: "AC Sleeper",
            img: "bus4.jpg"
        },
        {
            name: "Tamilnadu Bus",
            time: "9:00 AM",
            price: "$90",
            seatsAvailable: 5,
            type: "AC Sleeper",
            img: "bus5.jpg"
        },
    ];

    let output = `<h2>Available Buses from ${from} to ${to} on ${date}</h2>`;
    buses.forEach(bus => {
        output += `<div class="bus-card">
                    <img src="${bus.img}" alt="${bus.name}">
                    <h3>${bus.name}</h3>
                    <p>Departure Time: ${bus.time}</p>
                    <p>Price: ${bus.price}</p>
                    <p class="bus-info">Bus Type: ${bus.type}</p>
                    <p class="bus-seats">Seats Available: ${bus.seatsAvailable}</p>
                    <button onclick="bookBus('${bus.name}', '${bus.price}', '${bus.img}', '${bus.time}', ${bus.seatsAvailable}, '${bus.type}')">Book Now</button>
                   </div>`;
    });

    results.innerHTML = output;
}

// Book Bus function with confirmation and congratulations
function bookBus(name, price, img, time, seatsAvailable, type) {
    if (seatsAvailable <= 0) {
        alert("Sorry, no seats available.");
        return;
    }

    selectedBus = { name, price, img, time, seatsAvailable, type }; // Store the selected bus details

    // Create a booking confirmation card
    const bookingConfirmation = document.getElementById("bookingConfirmation");
    bookingConfirmation.innerHTML = `
        <div class="booking-card">
            <h3>Booking Confirmation</h3>
            <img src="${selectedBus.img}" alt="${selectedBus.name}">
            <h4>${selectedBus.name}</h4>
            <p>Departure Time: ${selectedBus.time}</p>
            <p>Price: ${selectedBus.price}</p>
            <p>Bus Type: ${selectedBus.type}</p>
            <p>Seats Available: ${selectedBus.seatsAvailable - 1}</p> <!-- Update seat availability -->
        </div>
    `;

    // Display the Congratulations message
    const congratulations = document.getElementById("congratulations");
    congratulations.innerHTML = `
        <div class="congratulations">
            <h3>🎉 Congratulations! 🎉</h3>
            <p>You have successfully booked your bus from ${selectedBus.name}. We wish you a safe and pleasant journey!</p>
        </div>
    `;

    // Update the top booking info with the amount
    const topBookingInfo = document.getElementById("topBookingInfo");
    topBookingInfo.style.display = "block"; // Show the top booking info
    topBookingInfo.innerHTML = `You have booked a bus. Total Amount: ${selectedBus.price}`;

    // Show the pay bill button
    const payBillButton = document.getElementById("payBillButton");
    payBillButton.style.display = "inline-block";
}

// Pay Bill Function
function payBill() {
    alert("Your payment has been processed. Thank you for booking!");
    const topBookingInfo = document.getElementById("topBookingInfo");
    topBookingInfo.style.display = "none"; // Hide the top booking info after payment
    const payBillButton = document.getElementById("payBillButton");
    payBillButton.style.display = "none"; // Hide the pay bill button after payment
}
