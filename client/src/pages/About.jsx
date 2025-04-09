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

      <p>
       Horror is a special genre. Not merely because it's my personal favourite genre, but 
       because it inverts many of the traditional narrative structures and archetypes
       prominent in all other genres. These include clear heroes and villains, plot goals,
       defined conflict, positive messages and themes, clear resolutions and happy endings.
       Horror, by contrast, often features morally ambiguous characters, unclear or absent 
       goals, a lack of resolution, leaving readers with an overall sense of dread, confusion, 
       bewilderment and disturbance. The goal of good horror fiction is to make the reader 
       satisfyingly bothered. Horror storytelling is governed almost by its own special rules, which
       I have tried to amass and expound in this blog.
      </p>

      <div className="separator-line"></div>

    </div>
  );
}
