import { useRouter } from 'next/router'
import { FaUserCircle } from 'react-icons/fa'
import { ProfileStyled } from '../styles/Profile.Styles'

export default function User({ user }) {
  const router = useRouter()

  if (!user) {
    return (
      <div onClick={() => router.push('/api/auth/login')}>
        <FaUserCircle />
        <h3>Profile</h3>
      </div>
    )
  }

  return (
    <ProfileStyled onClick={() => router.push('/profile')}>
      <img src={user.picture} alt={user.name} referrerPolicy='no-referrer' />
      <h3>{user.given_name}</h3>
    </ProfileStyled>
  )
}
