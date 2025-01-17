
    const events = {
      party: {
        title: "Party Time!",
        description: "Celebrate birthdays, anniversaries, or any joyous occasion at Lury. Our vibrant ambiance and delicious menu options make every party unforgettable.",
        image: "../images/eventparty.jpg",
      },
      wedding: {
        title: "Wedding Bliss",
        description: "Make your wedding magical with our stunning venue, gourmet catering, and exceptional service. Let us handle the details for your big day.",
        image: "../images/eventwedding.jpg",
      },
      meeting: {
        title: "Corporate Meetings",
        description: "Host your meetings in a professional yet cozy environment. Equipped with all necessary amenities, Lury is perfect for productive gatherings.",
        image: "../images/meeting.jpg",
      },
      music: {
        title: "Music Night",
        description: "Enjoy live music performances while savoring delicious meals. A perfect evening to unwind with friends and family.",
        image: "../images/Music Night.jpg",
      },
      conference: {
        title: "Conferences",
        description: "Our well-equipped conference facilities ensure your business meetings and presentations are seamless and professional.",
        image: "../images/Conferences.avif",
      },
      reunion: {
        title: "Reunion Parties",
        description: "Reconnect with your loved ones at our cozy and welcoming venue. We make reunions unforgettable!",
        image: "../images/Reunion Parties.jpg",
      },
      workshop: {
        title: "Workshops",
        description: "From culinary arts to professional development, our workshop spaces are versatile and fully equipped.",
        image: "../images/Workshops.jpg",
      },
      seminar: {
        title: "Seminars",
        description: "Deliver impactful seminars with our excellent facilities, ensuring a comfortable and engaging experience.",
        image: "../images/Seminars.jpg",
      },
      festival: {
        title: "Festivals",
        description: "Celebrate cultural and festive events with grandeur and joy at our venue.",
        image: "../images/Festivals.jpg",
      },
      anniversary: {
        title: "Anniversary Celebrations",
        description: "Celebrate milestones with elegance and style at Lury Restaurant.",
        image: "../images/Anniversary Celebrations.jpg",
      },
      sports: {
        title: "Sports Events",
        description: "Host or enjoy sports events with a lively and comfortable setting.",
        image: "../images/Sports Event.jpg",
      },
      theatre: {
        title: "Theatre Shows",
        description: "Experience captivating performances in our intimate and well-equipped venue.",
        image: "../images/Theatre Shows.jpg",
      },
      fashion: {
        title: "Fashion Shows",
        description: "Showcase the latest trends in style and fashion at our elegant venue.",
        image: "../images/Fashion Shows.jpg",
      },
    };

    const eventSelector = document.getElementById("eventSelector");
    const eventDisplay = document.getElementById("eventDisplay");

    eventSelector.addEventListener("change", function () {
      const selectedEvent = this.value;
      const eventData = events[selectedEvent];

      if (eventData) {
        eventDisplay.innerHTML = `
          <div class="event-info">
            <h2>${eventData.title}</h2>
            <p>${eventData.description}</p>
          </div>
          <div class="event-info">
            <img src="${eventData.image}" alt="${eventData.title}">
          </div>
        `;
      }
    });
 