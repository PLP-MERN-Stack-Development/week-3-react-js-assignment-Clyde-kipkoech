import { useEffect, useState } from "react";

const AdviceCard = () => {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg text-center max-w-md mx-auto mt-10">
      <p className="text-lg italic mb-4">"{advice}"</p>
      <button
        onClick={fetchAdvice}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Get New Advice
      </button>
    </div>
  );
};

export default AdviceCard;
