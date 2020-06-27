export const populateEditForm = (editLeadData, editContactData) => {
  console.log(editLeadData, editContactData);
  const editFormData = {
    productId: editLeadData.id,
    contactId: editContactData.id,
    product: editLeadData.product,
    description: editLeadData.description,
    urgency: editLeadData.urgency,
    status: editLeadData.status,
    contact_name: editContactData.contact_name,
    email: editContactData.email,
    phone_number: editContactData.phone_number,
  };
  return {
    type: "POPULATE_EDIT_FORM",
    editFormData,
  };
};
