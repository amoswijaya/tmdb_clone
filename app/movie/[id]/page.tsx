"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import BannerDetail from "@/components/bannerDetail";
import { useAppSelector, useAppDispatch } from "../../../lib/hooks";
import {
  DetailCast,
  fetchMediaMovie,
  fetchMovieCast,
  fetchMovieDetails,
  fetctKeywordsMovie,
} from "@/lib/slices/detailMovieSlice";
import CardCast from "@/components/cardCast";
export default function Movie() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, details, detailsCast, keywords, media } =
    useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchMovieDetails(Number(id)));
    dispatch(fetchMovieCast(Number(id)));
    dispatch(fetctKeywordsMovie(Number(id)));
    dispatch(fetchMediaMovie(Number(id)));
  }, [dispatch, id]);
  useEffect(() => {
    if (details) {
      console.log(details);
    }
    console.log(media);
  }, [details, detailsCast, keywords, media]);
  const {
    backdrop_path,
    poster_path,
    title,
    overview,
    genres,
    release_date,
    runtime,
    tagline,
    vote_average,
    revenue,
    budget,
    status,
    spoken_languages,
  } = details;

  return (
    <div className='bg-white text-black'>
      <BannerDetail
        path={backdrop_path}
        poster_path={poster_path}
        title={title}
        overview={overview}
        genres={genres.map((genre: any) => genre.name)}
        release_date={release_date}
        runtime={runtime}
        tagline={tagline}
        vote_average={vote_average}
      />
      <div className='max-w-7xl mx-auto flex-row flex'>
        {/* main content */}
        <section className='w-4/6 h-full '>
          <h1 className='text-2xl font-bold my-4'>Top Billed Cast</h1>
          <div className='flex flex-row overflow-y-auto gap-3'>
            {detailsCast?.map((cast: DetailCast) => (
              <CardCast
                key={cast.id}
                profile_path={cast.profile_path}
                original_name={cast.original_name}
                character={cast.character}
                id={cast.id}
              />
            ))}
          </div>
          <h1 className='text-2xl font-bold my-4'>Media</h1>
        </section>
        <section className='w-2/6  h-full mt-14'>
          <div className='flex flex-col mx-6 gap-2 mb-10'>
            <span className='font-bold'>Status</span>
            <span className='text-sm'>{status}</span>
          </div>
          <div className='flex flex-col mx-6 gap-2 my-14'>
            <span className='font-bold'>Original Language</span>
            <span className='text-sm'>{spoken_languages[0].name}</span>
          </div>
          <div className='flex flex-col mx-6 gap-2 my-14'>
            <span className='font-bold'>Budget</span>
            <span className='text-sm'>${budget.toLocaleString()}</span>
          </div>
          <div className='flex flex-col mx-6 gap-2 my-14'>
            <span className='font-bold'>Revenue</span>
            <span className='text-sm'>${revenue.toLocaleString()}</span>
          </div>
          <div className='flex flex-col mx-6 gap-2 my-14 flex-nowarp '>
            <span className='font-bold'>Keywords</span>
            <div>
              {keywords?.map((keyword: any) => (
                <div
                  key={keyword.id}
                  className='rounded-md p-2 border  w-fit inline-flex bg-[#E5E5E5] text-xs m-1 cursor-pointer '
                >
                  {keyword.name}
                </div>
              ))}
            </div>
          </div>
          <div className='w-full h-[1px]  bg-slate-200 my-6' />
          <div className='mb-10'>
            <span className='font-bold'>Content Score</span>
            <div className=' rounded-full flex flex-col mt-4'>
              <span className='text-white bg-black h-1/2 w-full p-2 rounded-ss-xl rounded-se-xl'>
                100
              </span>
              <span className='h-1/2 w-ful p-1 bg-[#E5E5E5]  rounded-ee-lg rounded-es-lg'>
                Yes! Looking good!
              </span>
            </div>
          </div>
          <div className='w-full h-[1px]  bg-slate-200 my-6' />
          <div className='mb-10'>
            <span className='font-bold'>Top Contributor</span>
            <div className='flex flex-row mt-4 items-center'>
              <img
                className='w-20'
                src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Blank&facialHairType=MoustacheFancy&facialHairColor=BlondeGolden&clotheType=ShirtCrewNeck&clotheColor=Blue02&eyeType=Hearts&eyebrowType=UnibrowNatural&mouthType=Vomit&skinColor=Brown'
              />
              <div className='flex flex-col gap-2'>
                <span className='font-semibold'>1,711</span>
                <span className=' text-gray-400'>Jon Smith</span>
              </div>
            </div>
            <div className='flex flex-row mt-4 items-center'>
              <img
                className='w-20'
                src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=Platinum&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=Hearts&eyebrowType=SadConcernedNatural&mouthType=Sad&skinColor=DarkBrown'
              />
              <div className='flex flex-col gap-2'>
                <span className='font-semibold'>2,721</span>
                <span className=' text-gray-400'>Jaden</span>
              </div>
            </div>
            <div className='flex flex-row mt-4 items-center'>
              <img
                className='w-20'
                src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairFroBand&accessoriesType=Prescription01&hairColor=Red&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=Hoodie&clotheColor=Blue02&eyeType=Squint&eyebrowType=Angry&mouthType=Sad&skinColor=Pale'
              />
              <div className='flex flex-col gap-2'>
                <span className='font-semibold'>1,400</span>
                <span className=' text-gray-400'>Jhon Doe</span>
              </div>
            </div>
            <div className='flex flex-row mt-4 items-center'>
              <img
                className='w-20'
                src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Round&hairColor=Auburn&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=PastelRed&eyeType=Happy&eyebrowType=Angry&mouthType=Smile&skinColor=DarkBrown'
              />
              <div className='flex flex-col gap-2'>
                <span className='font-semibold'>3,211</span>
                <span className=' text-gray-400'>Raca</span>
              </div>
            </div>
          </div>
        </section>
        {/* side content */}
      </div>
    </div>
  );
}
