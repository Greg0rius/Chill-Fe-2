import { useState } from "react";
import Header from "./header";
import Logo from "./logo";
import Input from "./input";
import Button from "./button";

// eslint-disable-next-line react/prop-types
export default function Frame({ isLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="frame56">
      <Logo />
      <Header isLogin={isLogin} />
      <Input
        placeholder="masukan username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        label="Username"
      />
      <Input
        placeholder="masukan password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="password"
        isPassword={true}
        isLogin={isLogin}
      />
      {!isLogin && (
        <Input
          placeholder="konfirmasi password"
        value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          label="Konfirmasi Password"
          isPassword={true}
          isSignUp = {true}
        />
      )}
      <Button isLogin={isLogin} />
    </div>
  );
}
