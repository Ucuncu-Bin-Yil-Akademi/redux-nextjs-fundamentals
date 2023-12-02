import CounterButtons from "@/components/CounterButtons";
import { useSelector } from "react-redux";

export default function Counter() {
  let counterValue = useSelector((state) => state.counter.count)
  return (
    <>
      <b>Sayaç: {(counterValue)}</b>
     <CounterButtons />
    </>
  );
}
