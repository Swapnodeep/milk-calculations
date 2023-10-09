"use client";
import "@/app/globals.css";

import Link from "next/link";
import { useState } from "react";

export default function CreamYieldForm() {
  type CreamYieldForm = {
    milkWt: number;
    milkFat: number;
    skimMilkFat: number;
    creamFat: number;
    yieldResult: number;
  };

  const initialState: CreamYieldForm = {
    milkWt: NaN,
    milkFat: NaN,
    skimMilkFat: NaN,
    creamFat: NaN,
    yieldResult: NaN,
  };

  const [creamYield, setCreamYield] = useState(initialState);
  const [showResult, setShowResult] = useState(false);

  console.log(creamYield);

  const handleReset = () => {
    setCreamYield(initialState);

    setShowResult(false);
  };

  const handleForm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { milkWt, milkFat, skimMilkFat, creamFat } = creamYield;

    let result = milkWt * ((milkFat - skimMilkFat) / (creamFat - skimMilkFat));

    setCreamYield({ ...creamYield, yieldResult: result });

    if (milkWt && milkFat && skimMilkFat && creamFat) {
      setShowResult(true);
    }
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url("/cardboard-texture.jpg")` }}
        className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center bg-no-repeat bg-fixed -z-20 opacity-30"
      ></div>
      <div className="flex flex-col my-8 mx-auto items-center font-primary">
        <Link
          href="/"
          className="text-center font-serif font-bold text-[2rem] hover:scale-95 duration-150 mb-10"
        >
          Milk.
        </Link>

        {/* Form */}
        <div className="flex flex-col items-center justify-between rounded-md max-w-[36rem] mx-12 min-w-fit h-fit font-primary space-y-5 py-8 px-16 bg-[#f5f6f8] border-[3px] border-secondary/20 shadow-lg">
          <h1 className="text-2xl font-bold text-slate-600 mb-4">
            Determination of Yield of Cream
          </h1>

          <form className="flex flex-col gap-5">
            {/* Weight of Milk */}
            <div>
              <label htmlFor="milk-wt" className="formLabel">
                Weight of Milk:
              </label>
              <input
                className="formInput"
                type="number"
                name="milk-wt"
                value={creamYield.milkWt}
                id="milk-wt"
                required
                onChange={(e) =>
                  setCreamYield({
                    ...creamYield,
                    milkWt: parseInt(e.target.value),
                  })
                }
              />
              <span className="ml-2 text-lg font-semibold">kg</span>
            </div>

            {/* Fat % in Milk */}
            <div>
              <label htmlFor="milk-fat" className="formLabel">
                Fat percentage in Milk:
              </label>
              <input
                className="formInput"
                type="number"
                name="milk-fat"
                value={creamYield.milkFat}
                id="milk-wt"
                required
                onChange={(e) =>
                  setCreamYield({
                    ...creamYield,
                    milkFat: parseInt(e.target.value),
                  })
                }
              />
              <span className="ml-2 text-lg font-semibold">%</span>
            </div>

            {/* Fat % in Skim Milk */}
            <div>
              <label htmlFor="skim-milk-fat" className="formLabel">
                Fat percentage in Skim Milk:
              </label>
              <input
                className="formInput"
                type="number"
                name="skim-milk-fat"
                value={creamYield.skimMilkFat}
                id="skim-milk-fat"
                required
                onChange={(e) =>
                  setCreamYield({
                    ...creamYield,
                    skimMilkFat: parseInt(e.target.value),
                  })
                }
              />
              <span className="ml-2 text-lg font-semibold">%</span>
            </div>

            {/* Fat % in Cream */}
            <div>
              <label htmlFor="cream-fat" className="formLabel">
                Fat percentage in Cream:
              </label>
              <input
                className="formInput"
                type="number"
                name="cream-fat"
                value={creamYield.creamFat}
                id="cream-fat"
                required
                onChange={(e) =>
                  setCreamYield({
                    ...creamYield,
                    creamFat: parseInt(e.target.value),
                  })
                }
              />
              <span className="ml-2 text-lg font-semibold">%</span>
            </div>

            <div className="flex gap-2 justify-center">
              <button
                type="submit"
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md duration-150 hover:bg-blue-500 hover:scale-[1.02] shadow-md active:bg-blue-600 active:scale-[0.98] w-40"
                onClick={() => handleReset()}
              >
                Reset form
              </button>

              <button
                type="submit"
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md duration-150 hover:bg-blue-500 hover:scale-[1.02] shadow-md active:bg-blue-600 active:scale-[0.98] w-40"
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                  handleForm(e)
                }
              >
                Caculate
              </button>
            </div>
          </form>
        </div>

        {/* Result */}
        {showResult && (
          <div className="result-animation rounded-md max-w-[36rem] mx-12 h-fit font-primary space-y-5 py-8 px-16 bg-[#f5f6f8] border-[3px] border-secondary/20 shadow-lg mt-16">
            <h1 className="text-center text-2xl font-bold text-slate-600 mb-4">
              Result
            </h1>
            <p>
              {creamYield.milkWt} kg of Milk with a milk fat percentage of{" "}
              {creamYield.milkFat}, skimmed milk fat percentage of{" "}
              {creamYield.skimMilkFat}, and a cream fat percentage of{" "}
              {creamYield.creamFat} will yield{" "}
              {creamYield.yieldResult.toFixed(2)}% of cream.{" "}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
