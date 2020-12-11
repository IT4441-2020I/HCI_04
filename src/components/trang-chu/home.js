import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBView,
  MDBTable,
  MDBDatePicker,
  MDBBadge
} from "mdbreact";
import { Line } from "react-chartjs-2";

const rankings = [
  { name: "Solo Daxua", wordsPerMinute: 204, change: 1 },
  { name: "HyTunCng", wordsPerMinute: 192, change: -1 },
  { name: "bigcitymoi", wordsPerMinute: 191, change: 2 },
  { name: "cobengokngek", wordsPerMinute: 185, change: 100 },
  { name: "No Love", wordsPerMinute: 184, change: 34 },
  { name: "congchua2k3", wordsPerMinute: 184, change: 123 },
  { name: "boy dep trai", wordsPerMinute: 182, change: -3 },
  { name: "anonymous", wordsPerMinute: 180, change: -4 },
  { name: "whassup", wordsPerMinute: 179, change: -1 },
  { name: "Sérgio Vladimir F. N.", wordsPerMinute: 177, change: -1 },
];

const fiveDayAgo = new Date();
fiveDayAgo.setDate(fiveDayAgo.getDate() - 5);

const SEEDS = [14, 0, 9, 10, 12, 7, 3, 4, 1, 2, 5, 13, 6, 11, 8];

const Home = () => {
  const [dates, setDates] = useState([]);
  const [values, setValues] = useState([]);
  const [avgValues, setAvgValues] = useState([]);
  const [parameters, setParameters] = useState({ words: 0, numbers: 0, personalRank: 0 });
  const [from, setFrom] = useState(fiveDayAgo);
  const [to, setTo] = useState(new Date());

  const getValues = (date, from, to) => {
    const length = SEEDS.length;
    const value =
      SEEDS[date.getDate() % length] +
      SEEDS[date.getDay() % length] +
      SEEDS[date.getMonth() % length] +
      SEEDS[date.getYear() % length];

    return Math.floor((value * (to - from)) / (4 * length) + from);
  };

  useEffect(() => {
    const start = new Date(from);
    const finish = new Date(to);

    const dates = [];
    const values = [];
    const avgValues = [];
    const parameters = { words: 0, numbers: 0 , personalRank: 0};

    while (start <= finish && start <= new Date()) {
      dates.push(new Date(start).toISOString().substring(0, 10));
      values.push(getValues(start, 50, 200));
      avgValues.push(162);
      parameters.numbers += getValues(start, 0, 10);
      parameters.words += getValues(start, 0, parameters.numbers * 200);
      parameters.personalRank += getValues(start, 5, 10);
      start.setDate(start.getDate() + 1);
    }

    setDates(dates);
    setValues(values);
    setAvgValues(avgValues);
    setParameters(parameters);
  }, [from, to]);

  const lineChartData = {
    labels: dates,
    datasets: [
      {
        label: "Tốc độ gõ của bản thân (wpm)",
        backgroundColor: "rgba(255,255,255,0.4)",
        borderColor: "#fff",
        pointBackgroundColor: "transparent",
        borderWidth: 2,
        pointBorderColor: "#fff",
        pointBorderWidth: 1,
        data: values,
      },
      {
        label: "Tốc độ gõ trung bình của tất cả người dùng",
        fill: false,
        backgroundColor: "#FFFF00",
        borderColor: "#FFFF00",
        pointBackgroundColor: "transparent",
        borderWidth: 2,
        pointBorderColor: "#FFFF00",
        pointBorderWidth: 1,
        data: avgValues
      }
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 18,
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
            color: "rgba(255, 255, 255, 0.2)",
          },
          ticks: {
            fontColor: "#fff",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            color: "rgba(255, 255, 255, 0.2)",
          },
          ticks: {
            fontColor: "#fff",
          },
        },
      ],
    },
  };

  return (
    <MDBContainer fluid className="mb-5">
      <section className="mb-5">
        <MDBCard narrow>
          <MDBRow>
            <MDBCol xl="5" md="12" className="mb-4">
              <MDBView cascade className="gradient-card-header mdb-color">
                <h4 className="h4-responsive mb-0 font-weight-bold">
                  Thống kê
                </h4>
              </MDBView>

              <MDBCardBody cascade className="pb-0">
                <MDBRow className="card-body pt-3">
                  <MDBCol md="12" className="mb-3">
                    <h4>
                      <MDBBadge color="primary" className="big-badge">
                        Phạm vi
                      </MDBBadge>
                    </h4>
                    <div className="mb-1">
                      <MDBRow>
                        <MDBCol size="6">
                          <small className="grey-text">Từ ngày:</small>
                          <MDBDatePicker
                            className="my-0 d-inline ml-3"
                            getValue={(e) => setFrom(e)}
                            valueDefault={from}
                          />
                        </MDBCol>
                        <MDBCol size="6">
                          <small className="grey-text">Đến ngày:</small>
                          <MDBDatePicker
                            className="my-0 d-inline ml-3"
                            getValue={(e) => setTo(e)}
                            valueDefault={to}
                          />
                        </MDBCol>
                      </MDBRow>
                    </div>
                    <h4>
                      <MDBBadge color="primary color" className="big-badge">
                        Thông số
                      </MDBBadge>
                    </h4>
                    <MDBTable responsive className="large-header">
                      <tbody>
                        <tr>
                          <td>
                            <strong>{"Số từ đã gõ"}</strong>
                          </td>
                          <td>{parameters?.words || 0}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>{"Số lần kiểm tra"}</strong>
                          </td>
                          <td>{parameters?.numbers || 0}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>{"Xếp hạng hiện tại"}</strong>
                          </td>
                          <td>{parameters?.personalRank || 0}</td>
                        </tr>
                      </tbody>
                    </MDBTable>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCol>
            <MDBCol xl="7" md="12" className="mb-4">
              <MDBView cascade className="gradient-card-header mdb-color">
                <Line data={lineChartData} options={lineChartOptions} />
              </MDBView>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </section>
      <section>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard narrow>
              <MDBView cascade className="gradient-card-header  mdb-color">
                <h4 className="h4-responsive mb-0 font-weight-bold">
                  Bảng xếp hạng
                </h4>
              </MDBView>
              <MDBCardBody>
                <MDBTable responsive className="mb-12">
                  <thead>
                    <tr className="d-flex">
                      <th className="font-weight-bold dark-grey-text1 col-2 text-center">
                        <strong>Xếp hạng</strong>
                      </th>
                      <th className="font-weight-bold dark-grey-text col-6">
                        <strong>Tên</strong>
                      </th>
                      <th className="font-weight-bold dark-grey-text col-2 text-center">
                        <strong>Tốc độ gõ</strong>
                      </th>
                      <th className="font-weight-bold dark-grey-text col-2 text-center">
                        <strong>Thay đổi</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rankings.map((el, index) => (
                      <tr className="d-flex" key={index}>
                        <td className="col-2 text-center">{index+1}</td>
                        <td className="col-6">{el.name}</td>
                        <td className="col-2 text-center">
                          {el.wordsPerMinute}
                        </td>
                        {el.change > 0 ? (
                          <td className="col-2 green-text font-weight-bold text-center">
                            +{el.change}
                          </td>
                        ) : (
                          <td className="col-2 red-text font-weight-bold text-center">
                            {el.change}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
};

export default Home;
