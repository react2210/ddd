import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../common/Layout';

function Member() {
    const history = useHistory();

    const initVal = {
        userid: '',
        email: '',
        pwd1: '',
        pwd2: '',
        comments: '',
        edu: '',
        gender: null,
        interests: null,
    };

    const [Val, setVal] = useState(initVal);

    const [Err, setErr] = useState({});

    const [Submit, setSubmit] = useState(false);

    const check = (value) => {
        const errs = {};

        const eng = /[a-zA-Z]/;
        const num = /[0-9]/;
        const spc = /[~!@#$%^&*()_+]/;


        if (value.userid.length < 5) {
            errs.userid = '아이디를 5글자 이상 입력하세요';
        }
        //이메일 인증은 8글자 이상, @있어야한다
        if (value.email.length < 8 || !/@/.test(Val.email)) {
            errs.email = "이메일은 8글자 이상 @를 포함하세요";
        }
        if (
            value.pwd1 < 5 ||
            !eng.test(value.pwd1) ||
            !num.test(value.pwd1) ||
            !spc.test(value.pwd1)
            //5글자보다 작으면 참이므로 이후의 것은 판단하지 않고 밑으로 내려가서 에러메세지를 출력, 거짓이면 ||을 넘어가서 영어글자수를 물어보는것 영어글자가 없으면 참이므로 밑에 에러메세지 있으면? 거짓이므로 ||을 넘어감 이렇게 모두 거짓이어야 에러메세지가 없이 통과
        ) {
            errs.pwd1 = '비밀번호는 5글자이상, 영문, 숫자, 특수문자를 모두 포함하세요';
        }
        if (value.pwd1 !== value.pwd2 || value.pwd2 < 5) {
            errs.pwd2 = '두개의 비밀번호를 동일하게 입력하세요';
        }
        if (!Val.gender) {
            errs.gender = '성별을 선택하세요';
        }
        if (!Val.interests) {
            errs.interests = "관심사를 하나이상 선택하세요";
        }
        if (Val.comments.length < 20) {
            errs.comments = '남기는 말을 20글자 이상 입력하세요';
        }
        if (Val.edu === '') {
            errs.edu = "최종학력을 선택하세요";
        }
        return errs;
    };

    const handleChange = (e) => {
        //순서 2 - 입력하고 있는 인풋요소의 네임, 벨류값을 변수로 비구조화 할당
        const { name, value } = e.target;
        //순서 3 - 비구조화 할당으로 받은 값을 Val state에 저장하고 
        //순서 4 -setVal함수가 렌더링해서 우리가 볼 수 있도록 함
        setVal({ ...Val, [name]: value });
    };

    const handleRadio = (e) => {
        const { name } = e.target;
        const isChecked = e.target.checked;
        setVal({ ...Val, [name]: isChecked });
    }

    const handleSelect = (e) => {
        const { name } = e.target;
        const isSelected = e.target.value;
        setVal({ ...Val, [name]: isSelected });
    }

    const handleCheck = (e) => {
        let isChecked = false;
        const { name } = e.target;
        const inputs = e.target.parentElement.querySelectorAll('input');
        inputs.forEach((el) => {
            if (el.checked) isChecked = true;
        });
        setVal({ ...Val, [name]: isChecked });
    }
    const handleReset = () => {
        setSubmit(false);
        setErr({});
        setVal(initVal);
    }

    const handleSubmit = (e) => {
        //순서 6 일단 서버전송은 막아준다
        e.preventDefault();
        //순서 7 Val state값을 인수로 전달해서 check함수에서 인증검사 시작 <={ check(Val)}
        setErr(check(Val));
        //순서 8 인증검사 결과 errs가 존재한다면 반환된 에러 객체를 Err state에 옮겨 담음
    };

    useEffect(() => {
        const len = Object.keys(Err).length;
        if (len === 0 && Submit) {
            alert('회원가입이 완료되었습니다. 메인페이지로 이동합니다.');
            history.push('/youtube');
        }
    }, [Err]);


    return (
        <Layout name={'Member'}>
            {/* 순서 5 전송버튼 클릭시 핸들서브밋함수를 호출 */}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend className='h'>회원가입 폼 양식</legend>
                    <table border='1'>
                        <caption className='h'>회원가입 정보입력</caption>
                        <tbody>
                            {/* userid */}
                            <tr>
                                <th scope='row'>
                                    <label htmlFor="userid">USER ID</label>
                                </th>
                                <td>
                                    <input type="text"
                                        placeholder='아이디를 입력하세요'
                                        name='userid'
                                        id='userid'

                                        value={Val.userid}
                                        //순서1 - 인풋에 값을 입력시 핸들체인지 함수가 호출
                                        onChange={handleChange}
                                    />
                                    {/* 순서 9 만약 에러객체가 있다면 화면에 출력 */}
                                    <span className='err'>{Err.userid}</span>
                                </td>
                            </tr>
                            {/* password */}
                            <tr>
                                <th scope='row'>
                                    <label htmlFor="pwd1">PASSWORD</label>
                                </th>
                                <td>
                                    <input type="password" name="pwd1" id="pwd1" placeholder='비밀번호를 입력하세요' onChange={handleChange} />
                                    <span className='err'>{Err.pwd1}</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope='row'>
                                    <label htmlFor="pwd2">RE-PASSWORD</label>
                                </th>
                                <td>
                                    <input type="password" name="pwd2" id="pwd2" placeholder='비밀번호를 재입력하세요' onChange={handleChange} />
                                    <span className='err'>{Err.pwd2}</span>
                                </td>
                            </tr>
                            {/* email */}
                            <tr>
                                <th scope='row'>
                                    <label htmlFor="email">E-MAIL</label>
                                </th>
                                <td>
                                    <input type="text"
                                        id='email'
                                        name='email'
                                        placeholder='이메일 주소를 입력하세요'
                                        value={Val.email}
                                        onChange={handleChange}
                                    />
                                    <span className='err'>{Err.email}</span>
                                </td>
                            </tr>
                            {/* edu */}
                            <tr>
                                <th scope='row'>
                                    <label htmlFor="edu">EDUCATION</label>
                                </th>
                                <td>
                                    <select name="edu" id="edu" onChange={handleSelect}>
                                        <option value="">학력을 선택하세요</option>
                                        <option value="elementary">초등학교 졸업</option>
                                        <option value="middle">중학교 졸업</option>
                                        <option value="high">고등학교 졸업</option>
                                        <option value="college">대학교 졸업</option>
                                    </select>
                                    <span className='err'>{Err.edu}</span>
                                </td>
                            </tr>
                            {/* gender */}
                            <tr>
                                <th scope='row'>GENDER</th>
                                <td>
                                    <label htmlFor="male">MALE</label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        id="male"
                                        onChange={handleRadio} />

                                    <label htmlFor="female">FEMALE</label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        id="female"
                                        onChange={handleRadio} />
                                    <span className='err'>{Err.gender}</span>
                                </td>
                            </tr>
                            {/* check box */}
                            <tr>
                                <th scope='row'>INTERESTS</th>
                                <td>
                                    <label htmlFor="sports">SPORTS</label>
                                    <input type="checkbox" name="interests" id="sports"
                                        onChange={handleCheck} />

                                    <label htmlFor="music">MUSIC</label>
                                    <input type="checkbox" name="interests" id="music"
                                        onChange={handleCheck} />

                                    <label htmlFor="game">GAME</label>
                                    <input type="checkbox" name="interests" id="game"
                                        onChange={handleCheck} />
                                    <span className='err'>{Err.interests}</span>
                                </td>

                            </tr>
                            {/* comments */}
                            <tr>
                                <th scope='row'>
                                    <label htmlFor="comments">COMMENTS</label>

                                </th>
                                <td>
                                    <textarea
                                        name="comments"
                                        id="comments"
                                        cols="30"
                                        rows="5"
                                        value={Val.comments}
                                        onChange={handleChange}
                                    ></textarea>
                                    <span className='err'>{Err.comments}</span>
                                </td>
                            </tr>
                            {/* btn set */}
                            <tr>
                                <th colSpan='2'>
                                    <input
                                        type="reset"
                                        value="CANCLE"
                                        onClick={handleReset}
                                    />
                                    <input
                                        type="submit"
                                        value="SEND"
                                        onClick={() => setSubmit(true)}
                                    />
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>

            </form>
        </Layout>

    );
}
export default Member;