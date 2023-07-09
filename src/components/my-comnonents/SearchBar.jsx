
// components/SearchBar.js
import {Search} from 'lucide-react'
import { useState } from 'react';
import { useRouter } from 'next/navigation'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const lowerCaseQuery = searchQuery.toLowerCase(); // Convert search query to lowercase

    if (lowerCaseQuery.includes('female') || lowerCaseQuery.includes('girl') ) {
      router.push('/category/female');
    } else if (lowerCaseQuery.includes('male') || lowerCaseQuery.includes('boy')){
    router.push('/category/male');
    }else if (lowerCaseQuery.includes('kid') || lowerCaseQuery.includes('bab')){
    router.push('/category/kids') 
    } else  {
        router.push('/allProducts')
    }
  };

  return (
  
    
<form action="" onSubmit={handleSubmit}>
          <div className='my-2   rounded-md flex xl:w-96 mx-2 border-2 border-orange-300
           md:border-gray-200  '>
<Search
onClick={handleSubmit}
className='cursor-pointer hover:scale-110 duration-500'
/>

<input 
type="text" 
value={searchQuery} 
onChange={(e) => setSearchQuery(e.target.value)}
placeholder='what are you looking for '
 className=' ml-2  text-[15px] w-[90%] rounded-md 
 bg-orange-100 pl-2  md:bg-white' />
</div>

</form>

    

  );
};

export default SearchBar;
