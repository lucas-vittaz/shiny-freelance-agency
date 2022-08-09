import DefaultPicture from '../../assets/profile.png'

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jean neige',
        jobTitle: 'Développeur Fullstack',
        picture: DefaultPicture,
    },
]

function Freelances() {
  return (
      <div>
          <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
          {freelanceProfiles.map((profile, index) => (
              <Card
                  key={`${profile.name}-${index}`}
                  label={profile.jobTitle}
                  picture={profile.picture}
                  title={profile.name}
              />
          ))}
      </div>
  )
}
export default Freelances
