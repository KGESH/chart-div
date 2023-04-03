import CommonChart from './components/chart';

export default function App() {
  return (
    <div className="flex flex-col h-full w-full">
      <button className="bg-red-500">button</button>
      <div className="flex">
        <div className="grid grid-rows-3 h-screen w-4/5">
          <div>
            <CommonChart />
          </div>
          <div>
            <CommonChart />
          </div>
          <div>
            <CommonChart />
          </div>
        </div>

        <div className="flex flex-col w-1/5">
          <div>
            <p>content</p>
          </div>
          <div>
            <CommonChart />
          </div>
          <div>
            <CommonChart />
          </div>
        </div>
      </div>
    </div>
  );
}
