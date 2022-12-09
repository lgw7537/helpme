import { useSession, signIn, signOut } from 'next-auth/react'

export default function Component() {
  // session에서 OAuth 사용자 정보 확인하기
  const { data: session } = useSession()

  // 사용자 정보 있으면, 이메일과 로그아웃 버튼 출력
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  // 사용자 정보 없으면, 로그인 버튼 출력 - signIn() 함수는 next-auth기본 로그인화면으로 이동시켜준다.
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
