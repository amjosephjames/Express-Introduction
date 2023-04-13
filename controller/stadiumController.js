const stadiumModel = require("../model/stadiumModel");

const createStadium = async (req, res) => {
  try {
    const stadium = await stadiumModel.create({
      name: req.body.name,
      capacity: req.body.capacity,
      country: req.body.country,
    });
    res.status(201).json({
      status: "success",
      data: {
        stadium,
      },
    });
  } catch (err) {
    res.json({
      message: err,
    });
  }
};
const getStadiums = async (req, res) => {
  try {
    const stadiums = await stadiumModel.find();
    res.status(200).json({
      status: "success",
      data: {
        stadiums,
      },
    });
  } catch (err) {
    res.status(204).json({
      status: "Fail",
      message: err.message,
    });
  }
};

const getStadium = async (req, res) => {
  try {
    const id = req.params.id;
    const stadium = await stadiumModel.findById(id);
    if (!id) {
      res.status(404).json({
        status: "Fail",
        message: `no stadium with this id: ${id}`,
      });
    }
    res.status(200).json({
      status: "Success",
      data: {
        stadium,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

const updateStadium = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedStadium = await stadiumModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        updatedStadium,
      },
    });
  } catch (error) {
    res.status(204).json({
      status: fail,
      message: `stadium id ${id}not found`,
    });
  }
};
const deleteStadium = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedStadium = await stadiumModel.findByIdAndDelete(id);
    res.status(204).json({
      status: "success",
      message: "Deleted",
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: "Failed to find stadium",
    });
  }
};
module.exports = {
  createStadium,
  getStadiums,
  getStadium,
  updateStadium,
  deleteStadium,
};
