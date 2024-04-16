export const SendFeedBack = async (
  newName,
  newLastName,
  newEmail,
  newMessage
) => {
  try {
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
        lastname: newLastName,
        email: newEmail,
        message: newMessage,
      }),
    });

    if (response.ok) {
      alert("Thanks For your feedback !");
      setUser({
        name: "",
        lastname: "",
        email: "",
        message: "",
      });
    }
  } catch (error) {
    console.error("Error adding new user:", error);
  }
};
