export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://business-api.tiktok.com/open_api/v1.3/event/track/",
      {
        method: "POST",
        headers: {
          "Access-Token": "YOUR_ACCESS_TOKEN",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          event_source: "web",
          event_source_id: "D5GPFGJC77UAODHQ17N0",
          data: [
            {
              event: "Lead",
              event_time: Math.floor(Date.now() / 1000),
              user: {
                email: "hashed_email_here",
                phone: "hashed_phone_here",
                external_id: "id_here"
              },
              properties: {
                currency: "NGN",
                content_type: null
              },
              page: {
                url: "https://bodyshop.ju.mp/",
                referrer: null
              }
            }
          ]
        })
      }
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
