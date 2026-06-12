const colorGroups = {
  "سرمه ای": ["سرمه ای", "آبی", "نوک مدادی"],
  "آبی": ["آبی", "سرمه ای", "نوک مدادی"],
  "نوک مدادی": ["نوک مدادی", "سرمه ای", "آبی"],
  "کرم": ["کرم", "فیلی"],
  "فیلی": ["فیلی", "کرم"]
};


export function findSimilarProducts(currentProductId, allProducts, count = 5) {
  const currentProduct = allProducts.find(p => p.id === currentProductId);
  if (!currentProduct) return [];

  const currentColor = currentProduct.details.color;
  const closeColors = colorGroups[currentColor] || [currentColor];
  
  const otherProducts = allProducts.filter(p => p.id !== currentProductId);
  

  const closeColorProducts = otherProducts.filter(p => 
    closeColors.includes(p.details.color)
  );
  
  const otherColorProducts = otherProducts.filter(p => 
    !closeColors.includes(p.details.color)
  );
  
  return [...closeColorProducts, ...otherColorProducts].slice(0, count);
}