import { useMemo, useState } from 'react';

const Product = () => {
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [product, setProduct] = useState([]);
  const handleSubmit = () => {
    setProduct([...product, { name, price: +price }]);
  };
  const total = useMemo(() => {
    product.reduce((preV, currentV) => {
      console.log('Re caculate');
      return preV + currentV.price;
    }, 0);
  }, [product]);
  return (
    <div className="max-w-[300px] mx-3 my-5">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="product"
        value={name}
        id=""
        placeholder="product name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="price"
        value={price}
        id=""
        onChange={(event) => {
          setPrice(parseInt(event.target.value));
        }}
      />
      <button
        type="button"
        className="bg-neutral-400 text-white mt-2 px-3 py-6 rounded-3xl hover:bg-neutral-800 cursor-pointer"
        onClick={handleSubmit}
      >
        Add product
      </button>
      <br />
      <label className="inline">Total: {total}</label>
      <ul>
        {product.length > 0 && product.map((item, index) => <li key={index}>{`${item.name} - ${item.price}`}</li>)}
      </ul>
    </div>
  );
};

export default Product;
