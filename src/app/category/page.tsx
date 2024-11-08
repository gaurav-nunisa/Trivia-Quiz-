"use client";
import React from "react";
import Link from "next/link";



const Category = () => {

 


  return (
    <div className="">
     
      <Link href="/category/9">
      <button className="bg-blue-500 rounded-md p-4 m-5 flex-col"  >
        General Knowledge
      </button></Link>
      <Link href="/category/10">
      <button className="bg-blue-500 rounded-md p-4 m-5 flex-col" >
        Books
      </button></Link>
      <Link href="/category/11">
      <button className="bg-blue-500 rounded-md p-4 m-5 flex-col" >
        Movies
      </button></Link>
      <Link href="/category/14">
      <button className="bg-blue-500 rounded-md p-4 m-5 flex-col" >
        TV series
      </button></Link>
      <Link href="/category/15">
      <button className="bg-blue-500 rounded-md p-4 m-5 flex-col" >
        Video Games
      </button></Link>
      <Link href="/category/17">
      <button className="bg-blue-500 rounded-md p-4 m-5 flex-col" >
        Science/Nature
      </button></Link>
      <Link href="/category/18">
      <button className="bg-blue-500 rounded-md p-4 m-5 flex-col" >
        Computer Science
      </button></Link>
      <Link href="/category/19">
      <button className="bg-blue-500 rounded-md p-4 m-5 flex-col" >
        Maths
      </button></Link>
      <Link href="/category/20">
      <button className="bg-blue-500 rounded-md p-4 m-5 flex-col" >
        Mythology
      </button></Link>
      <Link href="/category/27">
      <button className="bg-blue-500 rounded-md p-4 m-5 flex-col" >
        Animals
      </button></Link>
      <Link href="/category/31">
      <button className="bg-blue-500 rounded-md p-4 m-5 flex-col" >
        Anime / Manga
      </button></Link>
      <Link href="/category/32">
      <button className="bg-blue-500 rounded-md p-4 m-5 flex-col" >
        Cartoon
      </button></Link>
      
    </div>
  );
};

export default Category;
