import { handleGitHubLogin } from '@/lib/actions'

export default async function Login() {
  return (
    <div>
      <form action={handleGitHubLogin}>
        <button className='btn-primary'>Login</button>
      </form>
    </div>
  );
}
