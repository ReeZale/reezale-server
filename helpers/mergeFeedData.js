const prisma = require("../config/prisma");
const getItemGroupFromFeed = require("./getItemGroupFromFeed");

async function mergeFeedWithOffers(feedUrl, itemGroupId, sellerId) {
  // Fetch product feed items
  const feedItems = await getItemGroupFromFeed(feedUrl, itemGroupId);

  console.log("Feed items", feedItems);

  // Fetch matching offers from the database
  const offers = await prisma.offer.findMany({
    where: {
      item: {
        itemGroup: {
          sku: itemGroupId,
        },
      },
      sellerId: sellerId,
    },
    select: {
      item: true,
      price: true,
      expirationDate: true,
    },
  });

  console.log("Offers", offers);

  // Update feed items with offer data if available
  return feedItems.map((item) => {
    const matchingOffer = offers.find((offer) => offer.item.sku === item.id);

    return {
      ...item,
      hasOffer: !!matchingOffer,
      offerPrice: matchingOffer ? matchingOffer.price : null,
      offerExpiration: matchingOffer ? matchingOffer.expirationDate : null,
    };
  });
}

module.exports = mergeFeedWithOffers;
