const INITIAL_STATE = {
  sections: [
    {
      title: "ОНЦЛОХ ЗАР",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/ОНЦЛОХ ЗАР",
    },
    {
      title: "БҮХ ЗАР",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/ЗАР",
    },
    {
      title: "АЖИЛЫН ЗАР",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/АЖИЛЫН ЗАР",
    },
    {
      title: "БАЙР ТҮРЭЭС",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/БАЙР ТҮРЭЭС",
    },
    {
      title: "БУСАД ЗАР",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/БУСАД ЗАР",
    },
    {
      title: "ONLINE ДЭЛГҮҮР",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/ONLINE ДЭЛГҮҮР",
    },
    {
      title: "ХОЛБОО БАРИХ САНАЛ ХҮСЭЛТ",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "shop/САНАЛ ХҮСЭЛТ",
    },
  ],
};
const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
