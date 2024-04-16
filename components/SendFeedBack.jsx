const SendFeedBack = async (
  newName,
  newLastName,
  newEmail,
  newMessage,
  setUser,
  alertError
) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  try {
    if (!emailRegex.test(newEmail)) {
      throw new Error("Please enter a valid email address");
    }
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
    alertError(error.message);
  }
};

export default SendFeedBack;
