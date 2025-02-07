const xmlContentGenerate = async (commonData, items) => {
  const list = items.flatMap((item) =>
    item.items.map((variant) => ({
      ...commonData,
      item_group: item.item_group,
      title: item.title, // Renamed to avoid collision with masterData title
      description: item.description,
      gender: item.gender,
      age_group: item.age_group,
      color: item.color,
      material: item.material,
      pattern: item.pattern,
      product_link: item.link,
      image_link: item.image_link,
      additional_image_link: item.additional_image_link,
      google_product_category: item.google_product_category,
      product_type: item.product_type,
      brand: item.brand,
      id: variant.id,
      gtin: variant.gtin,
      mpn: variant.mpn,
      size: variant.size,
      price: variant.price,
      sale_price: variant.sale_price,
      availability: variant.availability,
    }))
  );

  return list;
};

module.exports = xmlContentGenerate;
