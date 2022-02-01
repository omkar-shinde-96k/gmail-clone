export const StarToggleActon = (payload) => {
  return {
    type: "STARTOGGLEACTION",
    payload,
  };
};

export const ReadMailAction = (payload) => {
  console.log("ReadMailAction",payload);
  return {
    type: "READMAILACTION",
    payload,
  };
};
