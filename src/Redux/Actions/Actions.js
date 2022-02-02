export const StarToggleActon = (payload) => {
  return {
    type: "STARTOGGLEACTION",
    payload,
  };
};

export const ReadMailAction = (payload) => {
  return {
    type: "READMAILACTION",
    payload,
  };
};

export const TrashMailAction = (payload) => {
  console.log("TrashMailAction", payload);
  return {
    type: "TRASHMAILACTION",
    payload,
  };
};
export const ArchiveMailAction = (payload) => {
  console.log("ArchiveMailAction", payload);
  return {
    type: "ARCHIVEMAILACTION",
    payload,
  };
};
