import { useSelector } from "react-redux";

export default function CounterResult() {
  const counter = useSelector((state) => state.counter);
  return (
    <>
    <h1 className="text-3xl text-slate-100">
				Counter value : {counter.value}
			</h1>
    </>
  )
}