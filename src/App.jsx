const App = () => {
  return (
    <div>
      <div id="css">
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
        <div className="box">5</div>
        <div className="box">6</div>
        <div className="box">7</div>
        <div className="box">8</div>
        <div className="box last">9</div>
      </div>
      <div className="h-screen grid grid-cols-3 bg-gradient-to-l from-[#605f5f] to-[#000] gap-[1.5rem] p-[1.5rem] sm:grid grid-cols-2">
        <div
          style={{ fontSize: "3rem" }}
          className="flex justify-center items-center text-5xl border-2 border-white text-[#FFF]"
        >
          1
        </div>
        <div
          style={{ fontSize: "3rem" }}
          className="flex justify-center items-center border-2 border-white text-[#FFF] text-5xl"
        >
          2
        </div>
        <div
          style={{ fontSize: "3rem" }}
          className="flex justify-center items-center border-2 border-white text-[#FFF] text-5xl"
        >
          3
        </div>
        <div
          style={{ fontSize: "3rem" }}
          className="flex justify-center items-center border-2 border-white text-[#FFF] text-5xl"
        >
          4
        </div>
        <div
          style={{ fontSize: "3rem" }}
          className="flex justify-center items-center border-2 border-white text-[#FFF] text-5xl"
        >
          5
        </div>
        <div
          style={{ fontSize: "3rem" }}
          className="flex justify-center items-center border-2 border-white text-[#FFF] text-5xl"
        >
          6
        </div>
        <div
          style={{ fontSize: "3rem" }}
          className="flex justify-center items-center border-2 border-white text-[#FFF] text-5xl"
        >
          7
        </div>
        <div
          style={{ fontSize: "3rem" }}
          className="flex justify-center items-center border-2 border-white text-[#FFF] text-5xl"
        >
          8
        </div>
        <div
          style={{ fontSize: "3rem" }}
          className="flex justify-center items-center border-2 border-white text-[#FFF] text-5xl"
        >
          9
        </div>
      </div>
    </div>
  );
};

export default App;
