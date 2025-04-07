const express = require("express");
const prisma = require("../../../config/prisma");
const { generateId } = require("../../../helpers/generateId");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;
  const localeCode = req.localeCode;
  const {} = req.query;

  try {
    return res.status(200).json({});
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const accountId = req.accountId;
  const localeCode = req.localeCode;
  const { id } = req.params;

  try {
    return res.status(200).json({});
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const localeCode = req.localeCode;
  const {} = req.body; //data

  try {
    return res.status(201).json({});
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;

  try {
    return res.status(204).send();
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
