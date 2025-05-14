import splashPic from './../assets/southside.png';
import '../App.css';

export default function About() {
  return (
    <div>

      <h1>About</h1>

      <p className="separator-line"></p>

      <img className="profile-picture" src={splashPic} alt="Profile" />

      <div className="separator-line"></div>

      <div className="jumbotron p-3 p-md-3 text-white rounded bg-dark">

        <div className="text-left">
          <p className="lead my-3"><i>We shall see that at which dogs howl in the dark, and that at which cats prick up their ears after midnight. </i></p>
          <i>— H. P. Lovecraft</i>
        </div>
      </div>

      <p className='portfolio-bio'>
        This is a smaller sibling blog to my other site Fiction Map. It's a resource
        for writers looking to improve their craft and write scarier, better horror stories.
      </p>

      <p className='portfolio-bio'>
        Horror is a special genre. It is definable by what it does not possess:
        clear plot goals, antagonists, positive themes, tidy resolutions, and happy endings.

        If a reader is left with an overall sense of dread, confusion, bewilderment and upset, according
        to other genres, the story is a failure...
      </p> 
      <p className='portfolio-bio'> ...Except for horror, where this is the goal.</p>

      <p className='portfolio-bio'>Special storytelling rules apply, which are covered in this blog. I hope you find it useful! </p>

      <div className="separator-line"></div>

<h2>Index</h2>
 
<div className="index-card">
        <ul className="index-list">
          <li>Genre: where this is the goal.</li>
          <li>Types: where this is the goal.</li>
          <li>Techniques: where this is the goal.</li>
          <li>Tropes: where this is the goal.</li>
          <li>Scary Words: where this is the goal.</li>
        </ul>
      </div>
    </div>
  );
}