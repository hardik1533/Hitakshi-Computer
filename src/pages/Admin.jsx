import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Package, Image as ImageIcon, Trash2, Plus, ArrowLeft } from 'lucide-react';

export default function Admin() {
  const { products, addProduct, deleteProduct, gallery, addGalleryItem, deleteGalleryItem } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState('products');
  const [newProduct, setNewProduct] = useState({ name: '', category: '', desc: '', price: '', image: '' });
  const [newGallery, setNewGallery] = useState({ category: '', desc: '', url: '' });

  const handleAddProduct = (e) => {
    e.preventDefault();
    addProduct(newProduct);
    setNewProduct({ name: '', category: '', desc: '', price: '', image: '' });
  };

  const handleAddGallery = (e) => {
    e.preventDefault();
    addGalleryItem(newGallery);
    setNewGallery({ category: '', desc: '', url: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 p-6 flex flex-col h-auto md:h-screen sticky top-0">
        <Link to="/" className="flex items-center gap-2 mb-10 text-gray-800 hover:text-royal-blue transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Back to Website</span>
        </Link>

        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <nav className="flex flex-col gap-2">
          <button 
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'products' ? 'bg-royal-blue text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <Package className="w-5 h-5" /> Products
          </button>
          <button 
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'gallery' ? 'bg-royal-blue text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <ImageIcon className="w-5 h-5" /> Gallery
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {activeTab === 'products' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">Manage Products</h1>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-10">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2"><Plus className="w-5 h-5" /> Add New Product</h3>
              <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Product Name" required value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} className="border p-3 rounded-lg focus:ring-2 focus:ring-royal-blue outline-none" />
                <input type="text" placeholder="Category" required value={newProduct.category} onChange={(e) => setNewProduct({...newProduct, category: e.target.value})} className="border p-3 rounded-lg focus:ring-2 focus:ring-royal-blue outline-none" />
                <input type="text" placeholder="Description" required value={newProduct.desc} onChange={(e) => setNewProduct({...newProduct, desc: e.target.value})} className="border p-3 rounded-lg focus:ring-2 focus:ring-royal-blue outline-none" />
                <input type="text" placeholder="Price" required value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} className="border p-3 rounded-lg focus:ring-2 focus:ring-royal-blue outline-none" />
                <input type="url" placeholder="Image URL" required value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})} className="border p-3 rounded-lg focus:ring-2 focus:ring-royal-blue outline-none md:col-span-2" />
                <button type="submit" className="bg-royal-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors md:col-span-2">Add Product</button>
              </form>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(p => (
                <div key={p.id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm relative group">
                  <button onClick={() => deleteProduct(p.id)} className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h4 className="font-bold text-lg">{p.name}</h4>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600 mb-2 inline-block">{p.category}</span>
                  <p className="text-gray-500 text-sm mb-2">{p.desc}</p>
                  <p className="font-bold text-royal-blue">{p.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">Manage Gallery</h1>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-10">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2"><Plus className="w-5 h-5" /> Add New Photo</h3>
              <form onSubmit={handleAddGallery} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Category (e.g., Shop, Repair)" required value={newGallery.category} onChange={(e) => setNewGallery({...newGallery, category: e.target.value})} className="border p-3 rounded-lg focus:ring-2 focus:ring-royal-blue outline-none" />
                <input type="text" placeholder="Description" required value={newGallery.desc} onChange={(e) => setNewGallery({...newGallery, desc: e.target.value})} className="border p-3 rounded-lg focus:ring-2 focus:ring-royal-blue outline-none" />
                <input type="url" placeholder="Image URL" required value={newGallery.url} onChange={(e) => setNewGallery({...newGallery, url: e.target.value})} className="border p-3 rounded-lg focus:ring-2 focus:ring-royal-blue outline-none md:col-span-2" />
                <button type="submit" className="bg-royal-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors md:col-span-2">Add Photo</button>
              </form>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {gallery.map(g => (
                <div key={g.id} className="relative group break-inside-avoid rounded-xl overflow-hidden shadow-sm">
                  <img src={g.url} alt={g.desc} className="w-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                    <button onClick={() => deleteGalleryItem(g.id)} className="self-end bg-red-500 text-white p-2 rounded-full">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div>
                      <p className="text-white font-bold">{g.desc}</p>
                      <p className="text-gray-300 text-sm">{g.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
