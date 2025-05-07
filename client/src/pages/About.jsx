import splashPic from './../assets/southside.png';;
import '../App.css';

export default function About() {
  return (
    <div>

      <h1>About</h1>

      <p className="separator-line"></p>

      <img className="profile-picture" src={splashPic} alt="Profile" />

      <div className="separator-line"></div>

      <p className='portfolio-bio'>
        This is a smaller sibling blog to my other site Fiction Map. This is a resource
        for writers looking to improve their craft and write scarier, better horror stories.
        I hope you find it useful!
      </p>

      <p className='portfolio-bio'>
        Horror is a special genre. It is definable by what it does not possess;
        including clear plot goals, antagonists, positive themes, tidy resolutions, and happy endings.

        If a reader is left with an overall sense of dread, confusion, bewilderment and upset, according
        to all other genres, the story is a failure...
      </p>
      <p className='portfolio-bio'> ...Except for horror, where this is the aim.</p>

      <p className='portfolio-bio'>Special storytelling rules apply, which are covered in this blog. </p>

      <div className="separator-line"></div>

    </div>
  );
}
