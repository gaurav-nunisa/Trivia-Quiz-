"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import ScoreCounter from "@/app/store/scoreCounter";
import Link from "next/link";

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const { score, increaseScore, removeAllScore } = ScoreCounter();

  const [data, setData] = useState([]);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clickedOption, setClickedOption] = useState({}); // Store clicked option for each question
  const convertedId = Number(categoryId) || 9;
  console.log(score);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=15&category=${convertedId}&difficulty=medium&type=multiple`
        );
        const responseData = response.data.results;

        // Set data and shuffled options
        setData(responseData);
        setShuffledOptions(
          responseData.map((item) =>
            shuffleArray([...item.incorrect_answers, item.correct_answer])
          )
        );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [convertedId]);

  const handleOptionClick = (questionIndex, option, correctAnswer) => {
    setClickedOption((prevClickedOption) => ({
      ...prevClickedOption,
      [questionIndex]: option, // Track clicked option for this question
    }));

    if (option === correctAnswer) {
      increaseScore();
    }
  };

  return (
    <div>
      <div>
        {loading ? (
          <h1 className="text-3xl text-center mt-10">Loading...</h1>
        ) : (
          data.map((item, questionIndex) => (
            <div key={questionIndex} className="m-5">
              <p className="text-2xl font-bold">Question: {item.question}</p>
              <div className="my-5">
                {shuffledOptions[questionIndex]?.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    className={`m-2 p-4 gap-4 rounded-md ${
                      clickedOption[questionIndex] === option
                        ? "bg-blue-500 text-white" // Change color if this option was clicked
                        : "bg-white text-black"
                    }`}
                    onClick={() =>
                      handleOptionClick(questionIndex, option, item.correct_answer)
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="bg-blue-600 text-center p-4">
        <Link href="/score">
          <button>Check Results</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryPage;
