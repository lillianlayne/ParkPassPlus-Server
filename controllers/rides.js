const express = require("express");
const { Ride } = require("../models");

const index = async (req, res, next) => {
  try {
    //get all rides
    res.json(await Ride.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
};

const show = async (req, res, next) => {
  try {
    res.json(await Ride.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
};

const create = async (req, res, next) => {
  try {
    res.json(await Ride.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
};

//same as create
const destroy = async (req, res, next) => {
  try {
    res.json(await Ride.findByIdAndDelete(req.params.id));
  } catch (errord) {
    res.status(400).json(error);
  }
};

//same as other two coded out
const update = async (req, res, next) => {
  try {
    res.json(
      await Ride.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  index,
  show,
  create,
  update,
  delete: destroy,
};
