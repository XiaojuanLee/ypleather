'use server';

import db from './db';

export const createContact = async (p0: FormData, { name, email, message }: { name: string; email: string; message: string; }) => {
  if (!name || !email || !message) {
    throw new Error("All fields are required.");
  }

  try {
    await db.contactUs.create({
      data: { name, email, message },
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    throw new Error("Failed to save contact.");
  }
};
