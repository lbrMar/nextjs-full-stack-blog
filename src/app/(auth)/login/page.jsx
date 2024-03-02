import { handleGitHubLogin } from '@/lib/actions'

export default async function Login() {
  return (
    <div>
      <form action={handleGitHubLogin}>
        <button className='btn-primary'>GitHub</button>
      </form>
    </div>
  );
}
