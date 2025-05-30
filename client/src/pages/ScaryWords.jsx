import '../App.css'
import scaryBanner from '../assets/scarybanner.jpg';
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

export default function ScaryWords() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <h1 className="display-4">Scary Words</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">I think [horror writing] comes down to the selection of language, not necessarily obviously "atmospheric" words, and the gradual accumulation of detail. </p>
          <i>— Ramsey Campbell</i>
          <p className="lead my-3"> You're writing about events that are preposterous, and the trick is to dress them up in language so compelling that the reader doesn't care.” </p>
          <i>— T. E. D Klein</i>
        </div>
      </div>

     <div className="card flex-md-row mb-4 box-shadow h-md-250 p-0">
        <img className="card-img-top w-100" src={scaryBanner} alt="Thumbnail" />
      </div>

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h2 id="post-6-1" className="blog-post-title">6.1: The Power of Sentence Structure</h2>

              <div id="content">
                <p>WHY IS SENTENCE STRUCTURE IMPORTANT IN CREATING HORROR.
                  Under Techniques I describes broad devices and concepts used to elicit horror. 
                  But it's not enough to come up with a good idea. It must be executed in writing
                  effectively for maximum impact. 
                </p>

                <p>All of the following examples create tension and horror not by describing something 
                  manifestly scary (e.g. a ghost), but by using language effectively to infer the sense that 
                  something is ‘off.’ If you do this effectively, notice you don’t even need an 
                  identifiable source of horror to build suspense or provoke fear.</p>

                <hr></hr>

                <h2 id="post-6-2" className="blog-post-title">6.2: Tranquil Surface</h2>
<p>One sentence contains false comfort or an assurance of normality, which the next sentence abruptly overturns: </p>

<div className="p-3 mb-3 bg-light rounded-pixar"><i>Sandra kept an eye on the boy but she could see the balls bouncing as he moved, so she knew he was okay. Until he came lurching up, screaming. </i><a href="#f1"><sup>1</sup></a></div>
<p>The first sentence is long, almost dawdling, but the second sentence is sharp and short, disrupting the flow, and ‘shocking’ the reader.</p>

<div className="p-3 mb-3 bg-light rounded-pixar"><i>Klein reached down to check her pulse. </i>
<p></p><i>"Now, let's see what the trouble is, dear," he said gently.    
<p></p>And abruptly was reeling, stunned and staggering, across the room from the force of a vicious backward swing of Regan's arm as the girl sat up, her face contorted with a hideous rage. </i><a href="#f2"><sup>2</sup></a></div>

<p>Here, the shock is effected by initially exaggerating politeness.</p>

<div className="p-3 mb-3 bg-light rounded-pixar"><i>All right, boy, he told himself. It's over now. It was a goddamned nightmare, but it's over. You are on your way to San Francisco. You'll get yourself a nice hotel room, order a bottle of expensive Scotch, soak your body in a hot bath and forget. Damn right, he thought.  </i>
<p></p><i>He turned and walked out of the washroom. He jolted to a halt, his breath cut off. Standing rooted, heartbeat hammering at his chest, he gaped through the front window of the cafe.     
<p></p>The truck and trailer were parked outside.  </i><a href="#f3"><sup>3</sup></a></div>

<p>In this story the truck is stalking the protagonist. Here, it’s only right before the protagonist reassures himself that the danger is over that it abruptly rears its head again.</p>

<h2 id="post-6-3" className="blog-post-title">6.3: The Play-by-Play</h2>
<p>Sentences omit pronouns, a full stop replaces a comma: </p>

<div className="p-3 mb-3 bg-light rounded-pixar"><i>If she made any noise or vibration, the spider would form a sonic image of her. Would recognize her as prey. The attack, she knew, would happen in the blink of an eye. She knelt, very slowly, and picked up a rock. Raised her arm slowly.  </i><a href="#f4"><sup>4</sup></a></div>
<p>Full stops chop up mundane events (e.g. lifting a rock) into stages, slowing down pacing and making it seem like every small action is critical. The omission of pronoun (‘she’) links the last chopped up sentence to the one before.</p>

<h2 id="post-6-4" className="blog-post-title">6.4: Camouflaged by Dialogue</h2>
<p>Mundane seeming dialogue contains a veiled threat/danger:</p>
<div className="p-3 mb-3 bg-light rounded-pixar"><i>"You might see St Elmo's fire, what the sailors call foo-lights. It makes funny shapes, but it's nothing. If you should see some of those shapes and they bother you, just look the other way. You may hear sounds like voices, but they are the loons down south toward Prospect. The sound carries. It's funny." </i><a href="#f5"><sup>5</sup></a></div>

<p>The information so poorly elucidates the phenomena (e.g. “it’s nothing,” and “it’s funny.”) – and raises even more questions – leaves the reader feeling uneasy (e.g. a loon bird does not, and should not, sound like human voices). </p>

<h2 id="post-6-5" className="blog-post-title">6.5: Ambiguous Punctuation</h2>
<p>Selective omission of punctuation to open interpretation, effecting mystery or unreliability as to who is referring to what:</p>

<div className="p-3 mb-3 bg-light rounded-pixar"><i>You're asleep now, David.  </i>
<br></br><i>Yes, I'm asleep.     
<br></br>I want you to rest for a minute while I talk to your wife.  
<br></br>All right, Doctor, I'll rest.
<br></br>Your husband is under light hypnosis now, Mrs. Carpenter. We can talk without disturbing him.
<br></br>I understand Dr. Manson.
</i><a href="#f6"><sup>6</sup></a></div>

<p>This story is about a person with multiple personalities, (though the reader doesn’t know that) therefore the lack of dialogue tags (“ ”) reflects the confusion experienced by the characters as to ‘who’ is actually speaking. </p>

<h2 id="post-6-6" className="blog-post-title">6.6: Self-fulfilling Prophecy</h2>

<div className="p-3 mb-3 bg-light rounded-pixar"><i>"It is very singular," he continued, "that thing about ghosts. People are always asking whether anybody has seen a ghost. I have."  </i>
<br></br><i>"Bosh! What, you? You don't mean to say so, Brisbane? Well, for a man of his intelligence!"    
<br></br>A chorus of exclamations greeted Brisbane's remarkable statement. Everybody called for cigars, and Stubbs, the butler, suddenly appeared from the depths of nowhere with a fresh bottle of dry champagne.
</i><a href="#f7"><sup>7</sup></a></div>

<p>The statement by Brisbane that he has seen a ghost is followed by a description that the butler ‘suddenly appeared from the depths of nowhere.’ The butler is not a ghost, but the description acts to make the notion more likely or immediate than it seems.</p>

<h2 id="post-6-7" className="blog-post-title">6.7: Description Reveals Unspoken Reply</h2>
<p>Description suggests what is playing on the characters’ minds.</p>

<div className="p-3 mb-3 bg-light rounded-pixar"><i>"What do you think of our babysitter?" Dolly asks, adjusting a garter. 
<br></br>"Oh, I hardly noticed," he says. "Cute girl. She seems to get along fine with the kids. Why?"
<br></br>"I don't know." His wife tugs her skirt down, glances at a lighted window they are passing, adding: "I'm not sure I trust her completely, that's all..."
</i><a href="#f8"><sup>8</sup></a></div>

<p>Each time Dolly asks about the babysitter, there is a description of her ‘adjusting a garter’ and then ‘tug[ging] her skirt down.’ The focus on sensual conduct while she is speaking suggests she views the babysitter as a threat in relation to her husband and is trying to ‘sexualise’ herself to remind her husband to remain faithful. These descriptions tell us everything we need to know about what Dolly really thinks of the babysitter.</p>

<h2 id="post-6-8" className="blog-post-title">6.8: Forgone Conclusion</h2>
<p>Sequence of events stops short of expressing a predictable likelihood or virtual certainty of an event, giving the reader enough information to suggest a horror outcome, whilst leaving the reader to imagine how that event may play out for themselves.</p>

<div className="p-3 mb-3 bg-light rounded-pixar"><i>And now he had reached the summit </i>[...] <i>Opening his eyes, he looked down, expecting to see, below him, the magnificent jungle, the heights </i>[...] <i>But there was nothing there: no peaks, no life, no climb. Nor was this summit a summit exactly: it had no substance, no firm base. It was crumbling too, whatever it was, collapsing, while he was falling, falling into the volcano </i>[...] <i>there was this noise of foisting lava in his ears, horribly, it was in eruption </i>[...] Suddenly he screamed <i>[...] Somebody threw a dead dog after him down the ravine. 
</i><a href="#f9"><sup>9</sup></a></div>
<p>This sequence of events follows a man climbing a volcano, and then falling into it just before it erupts. We don’t need to be told in bright bold text that the man is about to die. But rather than tell us he died, the reference to the dead dog being thrown in after him evokes the image of a landfill or cemetery – an open grave – supporting this conclusion, and somehow making it more horrible, and visceral, without explicit description, rather than the remote and objective ‘Then he died.’</p>

<h2 id="post-6-9" className="blog-post-title">6.9: The Anxious Assurance</h2>
<p>A character says something to the protagonist, innocently intending it to be comforting or reassuring, but which actually heightens the protagonist unease or panic, because the protagonist -- and we as reader -- knows something the character doesn't know:</p>
<p>In the short story, <i>Don't Look Now</i>, by Daphne Du Maurier, a psychic tells a couple she can see the spirit of their dead daughter sitting at the séance table with them. This, in fact, makes the father feel worse, because it makes him aware that if the daughter was still alive, she would not be there, as it was past her bedtime.</p>
<p>Note, this also could be ominous, suggesting that if something or someone is sitting a the table, it’s not the daughter’s ghost.</p>

<h2 id="post-6-10" className="blog-post-title">6.10: Clashing Descriptions</h2>
<p>Conflicting descriptions of the same thing can cast suspicion or evoke unease by what is said:</p>
<div className="p-3 mb-3 bg-light rounded-pixar"><i>"They wandered from one edifice to another, mounted row upon row of steps, descended them again, saw the rock where Isaac was sacrificed by Abraham and Mohammed rose to Heaven, and still no sign of her friends. The sun, directly overhead, blazed down upon them." </i><a href="#f10"><sup>10</sup></a></div>

<p>The imagery of Mohammed rising to Heaven clashes with the description of the actual biblical Heavens, 'blazing' down on them.</p>

<h2 id="post-6-11" className="blog-post-title">6.11: Mixed Intuition</h2>

<div className="p-3 mb-3 bg-light rounded-pixar"><i>The voice—if that was what it was—came again, this time from the left. Moments later it came from behind him . . . from directly behind him, it seemed, as if he could have turned and seen some blood-drenched thing less than a foot from his back, all bared teeth and glittering eyes . . . but this time Louis did not slow. He looked straight ahead and kept walking.  </i>
<i>Suddenly the mist lost its light and Louis realized that a face was hanging in the air ahead of him, leering and gibbering.    
</i><a href="#f11"><sup>11</sup></a></div>
<p>Here, protagonist senses something (with a scary face) behind him so he keeps looking ahead and keeps walking. This backfires as there is something with a scary face ahead of him. This catches reader off guard and implies the protagonist’s intuition cannot be entirely trusted.</p>
<p>There are some parts ‘I Am Supernatural’ (see above trope) here, as coincidence protagonist had this intuition at that time, like something psychic was going on.</p>

<h2 id="post-6-12" className="blog-post-title">6.12: Linking Unrelated Sentences</h2>

<div className="p-3 mb-3 bg-light rounded-pixar"><i>"You are priest?" Karl asked.  Karras nodded, then looked quickly back to the door of Regan's room. The raging voice had been displaced by the long, strident lowing of some animal that might have been a steer.  </i>
<i>Something prodding at his hand. He looked down. 
<p></p>"That's her," Chris was saying "that's Regan." She was giving him a photograph. He took it.    
</i><a href="#f12"><sup>12</sup></a></div>
<p>The 'steer' noises (actually a possessed Regan) are interupted by something 'prodding' the priest's hand, tricking the reader to link the two subconciously before the interuption is explained. This has a subtle minor 'jumpscare' effect, and works a subconscious suggestion of something absurd: the 'steer' animal in the bedroom may have entered the room between paragraphs and, horribly, made contact with the priest.  </p>
 
<h2 id="post-6-13" className="blog-post-title">6.13: Creating Minor Mysteries</h2>

<div className="p-3 mb-3 bg-light rounded-pixar"><i>When Alb Indys first heard the name of Dr. Thoss, he was flustered by his
 inability to locate the source from which it emanated. Right from the start, though, there seemed to be at least two voices chattering this name just within earshot, saying it over and over as if it were the central topic of some rambling discourse. 
</i><a href="#f13"><sup>13</sup></a></div>
<p>This turns a statement or anecdote -- when Alb first heard of Dr. Thoss -- into a minor question: 'Who is speaking?'  
Instead of just saying 'Alb first heard of Dr. Thoss,' (which is merely a statement) or posing the most obvious question 'Who is Dr Thoss?',
this poses a question that is more provocative because it's oblique and creates tension. Identifying a stranger is more interesting 
than identifying a known individual (the named Dr. Thoss).</p>

<h2 id="post-6-14" className="blog-post-title">6.14: The Illusion of Banality</h2>

<div className="p-3 mb-3 bg-light rounded-pixar"><i>There is a stairway. 
</i><a href="#f13"><sup>14</sup></a></div>
<p>This story opener is so ordinary and self-evident that it elicits a question by what is not said; why is this stairway 
  so special? Particularly in a horror story, which primes readers for suspense, highlighting the mundane and commonplace is an effective 
  way to contradict expectation and create intrigue.
</p>

<h2 id="post-6-15" className="blog-post-title">6.15: Disagreeable Agreement</h2>

<div className="p-3 mb-3 bg-light rounded-pixar"><i>"Is there anything else?" she asked.
<br></br>"Yes. Could you tell me if this festival has anything to do with clowns? I see there's something about a masquerade.
<br></br>“Yes, of course there are some people in . . . costumes. I’ve never been in that position myself . . . that is, yes, there are clowns of a sort.”
</i><a href="#f15"><sup>15</sup></a></div>

<p>A simple way to generate suspense is by using indirect dialogue, or refusing straightforward information/answers. 
  This is a great example of oblique dialogue (see the Fiction Map)</p>


 

{/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

<ThoughtForm />

<ThoughtList />

{/* ------------------------------------------------- footnotes --------------------------------------------- */}

<div className="footnotes">
                  <h4>Footnotes</h4>
                  <ol>
                    <li id="f1"><i>The Ball Room</i>, China Miéville.</li>
                    <li id="f2"><i>The Exorcist</i>, William Blatty.</li>
                    <li id="f3"><i>Duel</i>, Richard Matheson.</li>
                    <li id="f4"><i>Micro</i>, Michael Crichton.</li>
                    <li id="f5"><i>Pet Sematary</i>, Stephen King.</li>
                    <li id="f6"><i>Death is a Dream</i>, Robert Arthur.</li>
                    <li id="f7"><i>The Upper Berth</i>, Francis Marion Crawford.</li>
                    <li id="f8"><i>The Babysitter</i>, Robert Coover.</li>
                    <li id="f9"><i>Under the Volcano </i>, Malcolm Lowry.</li>
                    <li id="f10"><i>The Way of the Cross </i>, Daphne Du Maurier.</li>
                    <li id="f11"><i>Pet Sematary </i>, Stephen King.</li>
                    <li id="f12"><i>The Exorcist </i>, William Peter Blatty Crawford.</li>
                    <li id="f13"><i>The Troubles of Dr. Thoss</i>, Thomas Ligotti.</li>
                    <li id="f14"><i>Dr. Voke and Mr. Veech</i>, Thomas Ligotti.</li>
                    <li id="f15"><i>The Last Feast of Harlequin</i>, Thomas Ligotti.</li>
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
                <li><a href="#post-6-1">6.1: The Power of Sentence Structure</a></li>
                <li><a href="#post-6-2">6.2: Tranquil Surface</a></li>
                <li><a href="#post-6-3">6.3: The Play-by-Play</a></li>
                <li><a href="#post-6-4">6.4: Camouflaged by Dialogue</a></li>
                <li><a href="#post-6-5">6.5: Ambiguous Punctuation</a></li>
                <li><a href="#post-6-6">6.6: Self-fulfilling Prophecy</a></li>
                <li><a href="#post-6-7">6.7: Description Reveals Unspoken Reply</a></li>
                <li><a href="#post-6-8">6.8: Forgone Conclusion</a></li>
                <li><a href="#post-6-9">6.9: The Anxious Assurance</a></li>
                <li><a href="#post-6-10">6.10: Clashing Descriptions</a></li>
                <li><a href="#post-6-11">6.11: Mixed Intuition</a></li>
                <li><a href="#post-6-12">6.12: Linking Unrelated Sentences</a></li>
                <li><a href="#post-6-13">6.13: Creating Minor Mysteries</a></li>
                <li><a href="#post-6-14">6.14: The Illusion of Banality</a></li>
                <li><a href="#post-6-14">6.15: Disagreeable Agreement</a></li>
 
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
