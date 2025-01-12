const Booking = require("../models/BookingSchema");

const createNewBooking = async (req, res) => {
  try {
    const {
      guide_id,
      tourist_id = req.user?.id,
      package_id,
      date,
      time,
      status
    } = req.body;

    // Validate required fields
    if (!guide_id || !tourist_id || !package_id || !date || !time || !status) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create a new booking instance
    const newBooking = new Booking({
      guide_id,
      tourist_id,
      package_id,
      date,
      time,
      status
    });

    // Save the booking to the database
    const savedBooking = await newBooking.save();

    // Respond with the created booking
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res
      .status(500)
      .json({ message: "Internal server error.", error: error.message });
  }
};

// Update booking
const updateBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const updates = req.body;

    // Check if bookingId is provided
    if (!bookingId) {
      return res.status(400).json({ message: "Booking ID is required." });
    }

    // Find the booking and update it
    const updatedBooking = await Booking.findByIdAndUpdate(bookingId, updates, {
      new: true,
      runValidators: true
    });

    // Check if the booking exists
    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found." });
    }
    res
      .status(200)
      .json({ message: "Booking updated successfully.", data: updatedBooking });
  } catch (error) {
    console.error("Error updating booking:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error.", error: error.message });
  }
};

// Get my bookings
const getMyBookings = async (req, res) => {
  try {
    const { userId, status } = req.query;

    // Validate required fields
    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }

    // Build the query object
    let query = { tourist_id: userId };

    // Add status filter if provided
    if (status) {
      if (status === "COMPLETED") {
        query.status = "COMPLETED";
      } else if (status === "NOT_COMPLETED") {
        query.status = { $ne: "COMPLETED" };
      } else {
        return res.status(400).json({ message: "Invalid status value." });
      }
    }

    // Find bookings for the given user with the optional status filter
    const bookings = await Booking.find(query).populate("guide_id package_id");

    // Respond with the user's bookings
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res
      .status(500)
      .json({ message: "Internal server error.", error: error.message });
  }
};

module.exports = { createNewBooking, updateBooking, getMyBookings };
