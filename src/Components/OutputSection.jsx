import { useSelector } from "react-redux";

export default function OutputSection() {
  const dataList = useSelector(state => state);

  return (
    <main className="h-full sm:w-1/2 bg-sky-900">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-rose-50 mb-8">Output Field</h1>
        <section>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {dataList.length === 0 ? <li className="bg-sky-950 border-dotted border-stone-300 border-3 rounded-xl p-8 text-stone-300 text-center">No data has been given.</li> :
              dataList.map(data => <><li key={data.id} className="bg-sky-950 border-dotted border-stone-300 border-3 rounded-xl px-6 py-4 text-stone-300 text-center flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-4 mb-3">
                <h2 className="sm:col-span-3 text-left text-2xl font-bold text-stone-300"><span className="text-amber-400">ID:</span> {data.id}</h2>
                <p className="sm:text-left text-stone-300"><span className="text-amber-400 font-bold">Input 1:</span> {data.input1}</p>
                <p className="sm:text-center text-stone-300"><span className="text-amber-400 font-bold">Input 2:</span> {data.input2}</p>
                <p className="sm:text-right text-stone-300"><span className="text-amber-400 font-bold">Input 3:</span> {data.input3}</p>
              </li>
              </>)
            }
          </ul>
        </section>
      </div>
    </main>
  );
}