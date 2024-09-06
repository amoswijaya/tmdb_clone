"use client";
import React, { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchSearchParams } from "@/lib/slices/searchParamsSlice";
import CardSearch from "@/components/cardSearch";
const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const { loading, error, searchResults } = useAppSelector(
    (state) => state.search,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (query) {
      dispatch(fetchSearchParams(query));
    }
  }, [dispatch, query]);

  useEffect(() => {
    searchResults && console.log(searchResults);
  }, [searchResults]);
  return (
    <div className=' bg-white text-black py-4 px-2 md: lg:px-48 min-h-screen'>
      <div className='mt-14 flex items-center gap-4 border-b '>
        <FaSearch />
        <input
          type='text'
          className=' bg-white text-black w-full outline-none py-1'
          placeholder='Search for movies,tv shows, person...'
        />
      </div>
      <div className='mt-4 flex gap-4'>
        <div className='w-1/6 flex flex-col  border border-slate-300 rounded-md'>
          <div className='py-4 px-8 text-white bg-[#01B4E4] rounded-ss-md rounded-se-md font-bold text-lg'>
            Search Results
          </div>
          <div className='py-2 px-4 flex justify-between bg-[#ebebeb] mt-2'>
            <span>Movies</span>
            <div className='badge badge-outline'>0</div>
          </div>
          <div className='py-2 px-4 flex justify-between'>
            <span>TV Shows</span>
            <div className='badge badge-outline'>0</div>
          </div>
          <div className='py-2 px-4 flex justify-between'>
            <span>Person</span>
            <div className='badge badge-outline'>0</div>
          </div>
          <div className='py-2 px-4 flex justify-between'>
            <span>Collection</span>
            <div className='badge badge-outline'>0</div>
          </div>
          <div className='py-2 px-4 flex justify-between'>
            <span>Company</span>
            <div className='badge badge-outline'>0</div>
          </div>
          <div className='py-2 px-4 flex justify-between'>
            <span>Genre</span>
            <div className='badge badge-outline'>0</div>
          </div>
          <div className='py-2 px-4 flex justify-between'>
            <span>Keyword</span>
            <div className='badge badge-outline'>0</div>
          </div>
        </div>
        <div className='w-5/6 gap-4 flex flex-col'>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {searchResults &&
            searchResults.map((item: any) => (
              <CardSearch
                poster_path={item.poster_path}
                id={item.id}
                key={item.id}
                original_title={item.title}
                release_date={item.release_date}
                overview={item.overview}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

const Search: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
};

export default Search;
