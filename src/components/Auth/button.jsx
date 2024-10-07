import { useNavigate } from "react-router-dom";

export default function Button({isLogin}) {

  const home = useNavigate();

  return (
    <div className="button">
      <button className="button-sign-in" onClick={() => home('/')}>
        <span className="daftar-2">{isLogin ? "Masuk" : "Daftar"}</span>
      </button>
      <div className="atau">Atau</div>
      <button className="button-sign-in">
        <div className="google"></div>
        <span className="daftar-dengan-google">{isLogin ? "Masuk dengan Google" : "Daftar dengan Google"}</span>
      </button>
    </div>
  );
}


