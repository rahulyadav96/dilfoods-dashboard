import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/slices/appSlice";
export default function Dashboard() {
  const isLoading = useSelector((state) => state.application.isLoading);
  const dispatch = useDispatch();
  const showhandler = () => {
    dispatch(showLoading());
  };
  const hideHandler = () => {
    dispatch(hideLoading());
  };

  return (
    <div>
      <h1>Is Show Loading: {isLoading ? "Yes" : "No"}</h1>
      <button onClick={showhandler}>Show</button>
      <button onClick={hideHandler}>Hide</button>
    </div>
  );
}
