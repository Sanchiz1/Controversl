import { Link } from "react-router";
import useLocalStorage from "../../hooks/useLocalStorage";

function CookiePopup() {
  const [isVisible, setIsVisible] = useLocalStorage<string>("cookieConsent");

  const handleConsent = (consent: string) => {
    setIsVisible(consent);
  };
  
  return (
    <dialog
      open={!isVisible}
      aria-label="search"
      className="appearing fixed bg-global-bg text-inherit border border-zinc-400 shadow-sm open:flex bottom-0 mx-auto mb-32 h-max max-h-[calc(100%-8rem)] w-5/6 max-w-[48rem] rounded-md">
      <div className="flex grow flex-col gap-4 p-6 pt-6">
        <p>We use cookies to enhance your browsing experience.
          By clicking 'Accept,' you agree to our use of cookies.
          You can review our <Link to="/privacy-policy" className="text-accent underline-offset-2 hover:underline">Privacy Policy</Link> for more details.</p>
        <div className="flex ">
          <button
            className="cursor-pointer rounded-md bg-zinc-700 p-2 font-semibold"
            onClick={() => handleConsent("accepted")}>
            Accept
          </button>
          <button
            className="ms-4 cursor-pointer rounded-md bg-zinc-700 p-2 font-semibold"
            onClick={() => handleConsent("declined")}>
            Decline
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default CookiePopup;