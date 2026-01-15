import './ProfileHeader.css'

export default function ProfileHeader() {
  return (
    <div className="sidebar-header">
      <div className="profile-img">
        <img src="https://via.placeholder.com/80" alt="Profile" />
      </div>
      <h2>John Doe</h2>
      <p>Full Stack Developer</p>
    </div>
  )
}
