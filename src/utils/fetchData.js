export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  try {
    console.log("Fetching:", url);
    const res = await fetch(url, options);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("API Error:", res.status, res.statusText, errorText);
      return null;
    }

    const data = await res.json();
    console.log(
      "API Success:",
      url,
      "Data length:",
      Array.isArray(data) ? data.length : "N/A",
    );
    return data;
  } catch (error) {
    console.error("Fetch Error:", error, "URL:", url);
    return null;
  }
};
