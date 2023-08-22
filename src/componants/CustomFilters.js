import React from 'react'

function CustomFilters() {
  return (
    <div className='Custom-filters'>
        <div className='filterCard'>
           <h5>Product Filters</h5>
        </div>
        <div className='Filters'>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label for="vehicle1">Price High to Low</label>
        <input type="checkbox" id="vehicle1" name="vehicle2" value="Car"/>
        <label for="vehicle2">Price Low to High</label>
        <input type="checkbox" id="vehicle1" name="vehicle3" value="Boat"/>
        <label for="vehicle3">Stock</label>
        <input type="checkbox" id="vehicle1" name="vehicle3" value="Boat"/>
        <label for="vehicle3">Rating</label>
        <label for="vehicle3">★★★☆☆</label>
        </div>
    </div>
  )
}

export default CustomFilters;