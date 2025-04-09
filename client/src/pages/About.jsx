import splashPic from '../../public/images/southside.png';
import '../App.css';

export default function About () {
  return (
    <div>
      <h1>About</h1>

      <p className="separator-line"></p>

      <img className="profile-picture" src={splashPic} alt="Profile"  />

      <div className="separator-line"></div>

      <p className='portfolio-bio'>
        This is a smaller sibling blog to my other site Fiction Map. Here, you can 
        find advice and examples on various topics related to horror writing,
        including a discussion on what is 'scary', types of horror, effective 
        sentence structure to build tension, writing techniques, and more. 
        Examples are provided and drawn from a variety of horror fiction media,
        including books, movies, and video games. The goal of this blog is to
        provide a resource for writers looking to improve their craft and
        write scarier, better horror stories. I hope you find it useful!
      </p>

      <div className="separator-line"></div>

    </div>
  );
}
