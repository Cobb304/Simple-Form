import { useSelector } from "react-redux";

export default function OutputSection() {
  const dataList = useSelector(state => state);

  return (<>
    <h1>Output Field:</h1>
    <section>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {dataList.length === 0 ? <p>No data has given.</p> :
          dataList.map(data => <><li key={data.id}>
            <h2>ID: {data.id}</h2>
            <p>input1: {data.input1}</p>
            <p>input2: {data.input2}</p>
            <p>date: {data.input3}</p>
          </li>
            <hr />
          </>)
        }
      </ul>
    </section>
  </>);
}