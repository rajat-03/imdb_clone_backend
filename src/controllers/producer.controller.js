import { Producer } from "../models/producer.modal.js";

// add producer
export const addProducer = async (req, res) => {
  const { name, gender, dob, bio } = req.body;

  if (!name || !gender || !dob || !bio) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newProducer = new Producer({
      name,
      gender,
      dob,
      bio,
    });

    await newProducer.save();

    res
      .status(201)
      .json({ message: "Producer created successfully", newProducer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// get all producers
export const getAllProducers = async (req, res) => {
  try {
    const producersList = await Producer.find({});
    return res.status(200).json(producersList);
  } catch (error) {
    console.log("Failed to get producer list", error);
    res.status(500).json("Failed to get producer list");
  }
};
// get producer by id
export const getProducerById = async (req, res) => {
  const { id } = req.params;

  try {
    const producer = await Producer.findById(id);

    if (!producer) {
      return res.status(404).json({ message: "Producer not found" });
    }

    res.status(200).json(producer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// update producer
export const updateProducer = async (req, res) => {
  const { id } = req.params;
  const { name, gender, dob, bio } = req.body;

  try {
    const updatedProducer = await Producer.findByIdAndUpdate(
      id,
      { name, gender, dob, bio },
      { new: true }
    );

    if (!updatedProducer) {
      return res.status(404).json({ message: "Producer not found" });
    }

    res.status(200).json({ message: "Producer updated successfully", updatedProducer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// delete producer
export const deleteProducer = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProducer = await Producer.findByIdAndDelete(id);

    if (!deletedProducer) {
      return res.status(404).json({ message: "Producer not found" });
    }

    res.status(200).json({ message: "Producer deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};