const stickers = (state = [], action) => {
  switch (action.type) {
    case "ADD_STICKER":
      return [
        ...state,
        {
          id: action.payload._id,
          title: action.payload.title,
          text: action.payload.text
        }
      ];

    default:
      return state;
  }
};

export default stickers;
