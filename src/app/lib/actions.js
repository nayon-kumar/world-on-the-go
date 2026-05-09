import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteUser = async (userID) => {
  "use server";
  const res = await fetch(`http://localhost:8000/users/${userID}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (data.deletedCount > 0) {
    revalidatePath("/users");
  }
  return data;
};

export const createUser = async (formData) => {
  "use server";
  const newUser = Object.fromEntries(formData.entries());
  const res = await fetch("http://localhost:8000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  const data = await res.json();
  if (data.insertedId) {
    revalidatePath("/users");
  }
  return data;
};

export const updateUser = async (userID, formData) => {
  "use server";
  const updatedUser = Object.fromEntries(formData.entries());
  const res = await fetch(`http://localhost:8000/users/${userID}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  });
  const data = await res.json();
  if (data.modifiedCount > 0) {
    revalidatePath("/users");
    redirect("/users");
  }
  return data;
};
