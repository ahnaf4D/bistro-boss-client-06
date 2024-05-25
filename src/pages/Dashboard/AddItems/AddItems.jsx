import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const AddItems = () => {
  return (
    <div className='p-6  min-h-screen bg-gray-100'>
      <SectionTitle
        heading={'ADD AN ITEM'}
        subheading={"What's new?"}
      ></SectionTitle>
      <form className='bg-white mx-auto h-auto rounded-lg p-8 shadow-xl max-w-3xl'>
        <div className='form-control mb-6'>
          <label className='label mb-2'>
            <span className='label-text text-2xl font-semibold'>
              Recipe Name*
            </span>
          </label>
          <input
            type='text'
            placeholder='Recipe Name'
            className='input input-bordered w-full text-xl p-4 rounded-md border-2 focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className='form-control mb-6'>
          <label className='label mb-2'>
            <span className='label-text text-2xl font-semibold'>Category*</span>
          </label>
          <select className='h-12 input-bordered w-full  p-3 rounded-md border-2 focus:outline-none focus:border-blue-500'>
            <option value='salad'>Salad</option>
            <option value='drinks'>Drinks</option>
            <option value='popular'>Popular</option>
            <option value='desserts'>Desserts</option>
            <option value='pizza'>Pizza</option>
            <option value='soup'>Soup</option>
            <option value='offered'>Offered</option>
          </select>
        </div>
        <div className='form-control mb-6'>
          <label className='label mb-2'>
            <span className='label-text text-2xl font-semibold'>Price*</span>
          </label>
          <input
            type='number'
            placeholder='$00.00'
            className='input input-bordered w-full text-xl p-4 rounded-md border-2 focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className='form-control mb-6'>
          <label className='label mb-2'>
            <span className='label-text text-2xl font-semibold'>
              Recipe Details*
            </span>
          </label>
          <textarea
            placeholder='Enter the recipe details here...'
            className='textarea textarea-bordered w-full text-xl p-4 rounded-md border-2 focus:outline-none focus:border-blue-500 h-32 resize-none'
          ></textarea>
          <label className='label mt-4 mb-2'>
            <span className='label-text text-2xl font-semibold'>
              Upload Image
            </span>
          </label>
          <input
            type='file'
            className='file-input file-input-bordered file-input-md w-full max-w-xs'
          />
        </div>
        <div className='form-control'>
          <input
            type='submit'
            className='btn btn-primary btn-wide text-xl text-white mx-auto'
            value='Add Item'
          />
        </div>
      </form>
    </div>
  );
};

export default AddItems;
