import { useQuery } from "@tanstack/react-query";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useLoaderData, useParams } from "react-router-dom";
import paymentHistoryApi from "../../api/PaymentHistory/paymentHistory.api";
import { Box } from "../ui";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export const PaymentHistoryChart = ({ selectedMonth }) => {
  const { user } = useParams();
  const paymentHistoryList = useLoaderData();

  const { data } = useQuery({
    queryKey: ["history"],
    queryFn: () => paymentHistoryApi.getPaymentHistoryById(user),
    initialData: paymentHistoryList,
  });

  const filteredList = data.filter(({ date }) => {
    const formattedDate = new Date(date);
    return formattedDate.getMonth() + 1 === selectedMonth;
  });

  const chartData = {
    labels: filteredList.map(({ title }) => title),
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: filteredList.map(({ amount }) => amount),
      },
    ],
  };

  return (
    <Box>
      <Bar data={chartData} />
    </Box>
  );
};
