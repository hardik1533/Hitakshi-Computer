import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

const initialProducts = [
  { id: 1, name: "Custom Gaming Rig", category: "Gaming PCs", desc: "Ryzen 5, RTX 3060, 16GB RAM", price: "₹65,000", image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=500&q=60" },
  { id: 2, name: "Dell Inspiron 15", category: "Laptops", desc: "Intel i5 11th Gen, 8GB RAM", price: "₹45,000", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=60" },
  { id: 3, name: "Hikvision 4CH Setup", category: "CCTV", desc: "4 HD Cameras, DVR, 1TB HDD", price: "₹12,500", image: "https://images.unsplash.com/photo-1557800636-8ab37d4e797c?auto=format&fit=crop&w=500&q=60" },
];

const initialGallery = [
  { id: 1, category: "Shop", desc: "Front View", url: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=500&q=60" },
  { id: 2, category: "Repair", desc: "Motherboard Repair", url: "https://images.unsplash.com/photo-1597872253303-12cd2a8a58a7?auto=format&fit=crop&w=500&q=60" },
  { id: 3, category: "Setup", desc: "Custom Build", url: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=500&q=60" },
];

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('hitaksi_products');
    return saved ? JSON.parse(saved) : initialProducts;
  });

  const [gallery, setGallery] = useState(() => {
    const saved = localStorage.getItem('hitaksi_gallery');
    return saved ? JSON.parse(saved) : initialGallery;
  });

  useEffect(() => {
    localStorage.setItem('hitaksi_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('hitaksi_gallery', JSON.stringify(gallery));
  }, [gallery]);

  const addProduct = (product) => setProducts([...products, { ...product, id: Date.now() }]);
  const deleteProduct = (id) => setProducts(products.filter(p => p.id !== id));
  
  const addGalleryItem = (item) => setGallery([...gallery, { ...item, id: Date.now() }]);
  const deleteGalleryItem = (id) => setGallery(gallery.filter(g => g.id !== id));

  return (
    <AppContext.Provider value={{ products, addProduct, deleteProduct, gallery, addGalleryItem, deleteGalleryItem }}>
      {children}
    </AppContext.Provider>
  );
};
