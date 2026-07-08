
import './App.css'
import { Show, SignIn, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/react'

function App() {
  return (
    <>
      <h1>Welcome to the app</h1>
      {/* <SignOutButton>
        <SignInButton mode="modal"/>
      </SignOutButton>

      <SignIn>
        <SignOutButton/>
      </SignIn> */}

      <Show when="signed-out">
          <SignInButton  mode="modal">
            <button>Log In</button>
          </SignInButton>
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
      
    </>
  )
}

export default App
