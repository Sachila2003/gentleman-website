import React, { useState } from 'react';
import './AdminPage.css';
import {db,storage} from '../config/firebase';
import {collection,addDoc,serverTimestamp} from 'firebase/firestore';
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage';


const AdminPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('Luxury Blazers');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!image) {
            alert("Please select an image!")
            return;
        }
        setLoading(true);
        try {
            //image ekt unique name ekk hdnw ekm name eken files dekk save wen ek nwttnn
            const imageRef = ref(storage,`blazers/${Date.now()}_${image.name}`);
            //image fileek imageref kiyl hdgnn ekt upload krnw
            await uploadBytes(imageRef,image);
            //upload krpu image eke public url ek gnnw
            const imageUrl = await getDownloadURL(imageRef);

            //blazers kiyn collection ekt reference ekk hdnw
            const blazersCollection = collection(db,'blazers');

            //aluth document ekk wdihat data tik gnnw
            await addDoc(blazersCollectionRef, {
                name: name,
                description: description,
                category: category,
                price: Number(price),
                imageUrl: imageUrl,
                createdAt: serverTimestamp()
            });
            alert("Blazer added successfully! You can add another one.");

            //form clear
            setName('');
            setDescription('');
            setPrice('');
            setCategory('Luxury Blazers');
            setImage(null);
            setImagePreview(null);
            document.getElementById('image-input').value = null;
            
        } catch (error) {
            console.error("Error adding blazer:", error);
            alert("Failed to add blazer. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='admin-container'>
            <h2>Add New Kit/ Blazer</h2>
            <form onSubmit={handleSubmit} className='admin-form'>
                <div className='form-group'>
                    <label htmlFor="name">Kit Name/ Title</label>
                    <input type="text"
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                     />
                </div>
                <div className='form-group'>
                    <label htmlFor="description">Description</label>
                    <textarea id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    required
                    ></textarea>
                </div>
                <div className='form-group'>
                    <label htmlFor="category">Category</label>
                    <select  id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    >
                        <option value="Luxury Blazers">Luxury Blazers</option>
                        <option value="Full Wedding Suits">Full Wedding Suits</option>
                        <option value="Elegant Kurthas">Elegant Kurthas</option>
                        <option value="National Kits">National Kits</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor="price">Rental Price (per day in LKR)</label>
                    <input type="number"
                    id='price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required />
                </div>
                <div className='form-group'>
                    <label htmlFor="image-input">Image</label>
                    <input type="file"
                    id='image-input'
                    onChange={handleImageChange}
                    accept='image/png, image/jpeg'
                    required />
                </div>
                {imagePreview && (
                    <div className='image-preview-container'>
                        <img src={imagePreview} alt='Selected' className='image-preview' />
                    </div>
                )}
                <button type="submit" className='submit-button' disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default AdminPage;