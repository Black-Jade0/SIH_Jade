const express = require("express");
const { createApi } = require("unsplash-js");
const fetch = require("node-fetch"); // Ensure node-fetch is installed for Unsplash

const router = express.Router();

const serverApi = createApi({
    accessKey: "-A0uUKLMSWAnLtqg5MsDsS1RFpcugehQ-hKQCnA-x_I", // Replace with your actual access key
});

// API endpoint for searching photos by keyword
router.get("/searchImage", async (req, res) => {
    const query = req.query.query;

    console.log(`Received search request with query: ${query}`);

    if (!query) {
        return res.status(400).json({ error: "Query parameter is required" });
    }

    serverApi.search
        .getPhotos({ query, per_page: 1 }) // Limit the search to 1 photo
        .then((result) => {
            if (result.errors) {
                res.status(500).json({ error: result.errors[0] });
            } else {
                const photo = result.response.results[0]; // Get the first photo
                if (!photo) {
                    res.status(404).json({ error: "No photos found" });
                } else {
                    res.json(photo); // Send the first photo to the client
                }
            }
        })
        .catch((err) => {
            res.status(500).json({ error: "Something went wrong" });
        });
});

module.exports = router;
