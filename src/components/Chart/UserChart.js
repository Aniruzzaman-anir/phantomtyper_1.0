import React from "react";
import Modal from "react-modal";
import { Bar } from "react-chartjs-2";

const UserChart = ({
  chartBool,
  momentsArray,
  charCodesArray,
  chartCloseHandler,
  userStat,
}) => {
  return (
    <Modal
      isOpen={chartBool}
      className="relative justify-center items-center  flex  w-full h-full"
    >
      <button
        className="absolute text-red-800 top-3.5 right-8 text-3xl font-semibold"
        onClick={chartCloseHandler}
      >
         <i class="close icon text-5xl"></i>
      </button>
      <div className="w-5/6 h-5/6 bg-gray-50 grid grid-cols-8 shadow-2xl">
        <div className="h-full col-span-6">
          <Bar
            data={{
              labels: charCodesArray,
              datasets: [
                {
                  label: "Time expense",
                  data: momentsArray,
                  backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                  hoverOffset: 4,
                },
              ],
            }}
            height={400}
            width={600}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>

        <div className="col-span-2 flex flex-col justify-center items-center">
        <div className="text-4xl mt-8 font-semibold">
             per challenge :{">"}
          </div>
          <div className="text-3xl mt-8 font-semibold">
            {Math.ceil(userStat.avgWpm)}
          </div>
          <div className="text-2xl">Wpm</div>
          <div className="text-3xl mt-4 font-semibold">
            {parseInt(userStat.avgAccuracy)}
            {""}%
          </div>
          <div className="text-2xl">Accuracy</div>
          <div className="text-3xl mt-4 font-semibold">
            {parseInt(userStat.avgCorrect)}
          </div>
          <div className="text-2xl">Correct</div>
          <div className="text-3xl mt-4 font-semibold">
            {parseInt(userStat.avgMisspelled)}
          </div>
          <div className="text-2xl">Misspelled</div>
          <div className="text-3xl mt-4 font-semibold">
            {parseInt(userStat.avgKeystrokes)}
          </div>
          <div className="text-2xl">Keystrokes</div>
        </div>
      </div>
    </Modal>
  );
};

export default UserChart;