import React from "react";

const SingleProduct = ({ product, handleDelete }) => {
  const { _id, resalePrice, name } = product;
  return (
    <tr className="bg-white border-b dark:bg-gray-300 dark:border-gray-400">
      <td className="py-4 font-bold px-6 text-gray-600">{name}</td>
      <th
        scope="row"
        className="py-4 px-6 font-semibold text-gray-600 whitespace-nowrap "
      >
        {resalePrice}
      </th>
      <td className="text-blue-500 font-bold py-4 px-6">
        <label className="swap">
          <input type="checkbox" />
          <div className="swap-on">Available</div>
          <div className="swap-off">Sold</div>
        </label>
      </td>
      <td className="py-4 px-6">
        <button
          onClick={() => handleDelete(_id)}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleProduct;
