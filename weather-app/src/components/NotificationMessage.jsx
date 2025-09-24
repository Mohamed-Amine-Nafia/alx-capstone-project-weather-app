import { useNotification } from "../store/useNotification";
function NotificationMessage() {
  const { setNotification } = useNotification();
  return (
    <div className="bg-black/10 backdrop-blur-2xl lg:py-6 lg:px-10 absolute flex items-center max-w-5/6 py-5 px-6   text-center  flex-col left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
      <img width="54px" src="../src/assets/error.png" alt="error" />
      <h2 className="text-xl w-64 font-medium my-3">Something Went Wrong!</h2>
      <p className="mb-6 w-80 text-md text-center text-black">
        Enter a city or pick one from the suggestions below 🌍
      </p>
      <button
        onClick={() => setNotification(false)}
        className="bg-white w-full p-2.5 text-lg font-medium text-black hover:bg-white/85"
      >
        Ok
      </button>
    </div>
  );
}
export default NotificationMessage;
