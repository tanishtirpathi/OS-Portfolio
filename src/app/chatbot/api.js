export async function sendToGemini(message) {
  try {
    const res = await fetch("https://portfolio-backend-1-f82j.onrender.com/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Backend error");
    }

    return data.reply;
  } catch (err) {
    console.error("Frontend API error:", err);
    return "bkl ne api khatam kardi {MF used the api limit}";
  }
}
