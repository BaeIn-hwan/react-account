import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useMemo, useState } from "react";
// import Input from "rc-input";

const Login = () => {
  const [loginData, setLoginData] = useState<{ id: string; pw: string }>({
    id: "",
    pw: "",
  });
  const [id, setId] = useState<string>("");
  const [idError, setIdError] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [pwError, setPwError] = useState<string>("");

  const isBtnDisabled = useMemo(() => {
    return id === "" || pw === "";
  }, [id, pw]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const formData = new FormData(target);
    const { id, pw } = Object.fromEntries(formData);

    try {
      // id, pw 입력
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>로그인</legend>

          <div>
            <label>이메일</label>
            <Input placeholder="input" />
            <Input placeholder="input" prepend={<div>aa</div>} clear />
            <Input placeholder="input" clear />

            {/* <Input
              placeholder="이메일 입력"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            /> */}
          </div>

          <div>
            <label>비밀번호</label>
            {/* <Input
              type="password"
              placeholder="비밀번호 입력"
              name="pw"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            /> */}
          </div>

          <div>
            <Button type="submit" disabled={isBtnDisabled}>
              로그인
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
