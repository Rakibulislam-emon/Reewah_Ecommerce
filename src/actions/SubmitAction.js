"use server";

export async function createOrder(formData) {
  // formData is a FormData instance
  console.log("formData:", formData);

  const name = formData.get("name");
  const phone = formData.get("phone");
  const address = formData.get("address");
  const area = formData.get("area");
  const notes = formData.get("notes");

  console.log("Form Data Received in Action:", name, phone, address, area, notes);

  const orderInfo = {
    name,
    phone,
    address,
    area,
    notes,
  };

  console.log(orderInfo);
  // db insert here

  return {
    success: true,
  };
}
