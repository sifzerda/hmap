import '../App.css'
import genreBanner from '../assets/genrebanner.jpg';
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

export default function Subtext() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <h1 className="display-4">Genre</h1>

        <div className="text-left">
          <p className="lead my-3">A ghost story of which the scene is laid in the twelfth or thirteenth century may succeed in being romantic or poetical  </p>
          <i>— M. R. James</i>
        </div>
      </div>

     <div className="card flex-md-row mb-4 box-shadow h-md-250 p-0">
        <img className="card-img-top w-100" src={genreBanner} alt="Thumbnail" />
      </div>

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">

<div className="p-3 mb-3 bg-light rounded-pixar"><i>Supernatural horror was one of the ways we found that would allow us to
 live with our double selves. By its employ, we discovered how to take all the
things that victimize us in our natural lives and turn them into the very stuff of
 demonic delight in our fantasy lives. In story and song, we could entertain
 ourselves with the worst we could think of, overwriting real pains with ones
 that were unreal and harmless to our species. 
</i><a href="#f1"><sup>1</sup></a></div>
<p>ELABORATION
</p>

              <h2 id="post-10-1" className="blog-post-title">1.1: What is Scary?</h2>

              <div id="content">
                <p>What are the scariest words a character in a horror story will ever hear?  </p>
               <ul>
                <li>Not, “There is a giant spider in your bedroom,”;</li>
                <li>Not, “There is a serial killer in your house,”;</li>
                <li>Not, “A poltergeist has spirited your house away into a fifth dimension”;</li>
                <li>Not, “You are dead. You have been dead this whole time,”;</li>
                <li>Not, “They are coming to get you, Martha,”;</li>
                <li>Not, “You will die in seven days,”;</li>
                <li>Not, “28 days, 6 hours, 42 minutes, 12 seconds, that is when the world will end,”;</li>
               </ul>
<p>None of these, because the answer to all of these is: “Thanks for letting me know, now I can respond appropriately.”</p>
<p>But – </p>
<p>“It's nothing.”</p>
<p>Horror is not about what you know – it’s about what you don’t know.</p>


                <p>When your characters are in a position where they wouldn’t realistically express what they mean, you use subtext to communicate.</p>
                <p>Footnote<a href="#f1"><sup>1</sup></a></p>
                <p>Footnote<a href="#f2"><sup>2</sup></a></p>
                <p>Footnote<a href="#f3"><sup>3</sup></a></p>
                <p>Footnote<a href="#f4"><sup>4</sup></a></p>
                <p>Footnote<a href="#f5"><sup>5</sup></a></p>
                <p>Footnote<a href="#f6"><sup>6</sup></a></p>
                <p>Footnote<a href="#f7"><sup>7</sup></a></p>
                <p>Footnote<a href="#f8"><sup>8</sup></a></p>
                <p>Footnote<a href="#f9"><sup>9</sup></a></p>








                <p className='indent-text-1'>Indent text.</p>

                <h5>10.1.1 Heading h5</h5>


                <ol>
                  <li>Concurrent, and</li>
                  <li>Contradictory.</li>
                </ol>

                <h6>Heading h6</h6>


                <h2 id="post-10-2" className="blog-post-title">10.2 Title 2</h2>

                <p>Symbolism is far less important than subtext, so don’t worry too much about it, but it’s still worth knowing what it is and what it does.</p>


{/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

<ThoughtForm />

<ThoughtList />

{/* ------------------------------------------------- footnotes --------------------------------------------- */}

<div className="footnotes">
                  <h4>Footnotes</h4>
                  <ol>
                    <li id="f1">Professor Nobody's Little Lectures on Supernatural Horror, <i>Thomas Ligotti.</i></li>
                  </ol>
                </div>

{/* ---------------------------------------------------------------------------------------------- */}
             
              </div>
            </div>

            <nav className="blog-pagination">
              <a className="btn btn-outline-primary" href="#">Back to Top</a>
            </nav>

          </div>

          <aside className="col-md-4 blog-sidebar">
            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">About</h4>
              <p className="mb-0-1">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Index</h4>
              <ol className="list-unstyled mb-0">
                <li><a href="#post-10-1">10.1: What is Scary?</a></li>
                <li><a href="#post-10-2">10.2: Symbolism</a></li>
              </ol>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Also See</h4>
              <ol className="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ol>
            </div>
          </aside>
        </div>
      </main>


    </div>
  );
}
