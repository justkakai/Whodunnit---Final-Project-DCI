import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { IntroPageContext } from "../../contexts/IntroPageContext";

function JimmysReveal() {

    const { containerVariants } = useContext(IntroPageContext);
   const [show, setShow] = useState(false);

   

    return (


        <div className="jimmysreveal">

            You have found Anna-Mae and Jimmy. Jimmy now tells you his side of the story:
            <br/>
            <br/>
    <div>
I was sitting at home preparing for the birthday party of one of my clients, then I heard someone knocking on the door. I was surprised by my brother, who has been absent since 2007. I welcomed him and was happy to see him again. We started talking, but unfortunately it simply ended with a disagreement.
</div> <br/>
<div>
He told me that he had returned to ask me for money. But I refused because I know that he would spend it on shady stuff and I did not want to help him with that. I suggested that he surrenders himself to the police.
</div> <br/>
He then took out a gun. Placed it on the table. I asked him in disbelief: "You are killing people now?" He didn't respond, but his hand started reaching out to the gun. Out of reflex I jumped on him and tried to get the gun off of him. We wrestled and all of a sudden a bullet came shooting out of that thing, straight into his head. It was god awful. You have to believe me. 
<div>
I panicked. I called my girlfriend Anna-Mae and she came right away. I have been in some trouble myself lately. I see my mistake. I should have come clean. But in that moment of panic I saw an opportunity. I could move on with the false identity Jacob was using and start a new life somewhere. I took that passport and left my ID behind. 
</div> <br/>
<div>
But then we were concerned that the police may figure it out. We would need a suspect that could distract them. I texted Buffy to come over. Everyone knows we had an ugly break up. She would have a motive. But she ended up cursing at me. I knew I had her angry letter laying around somewhere. That one would have to do the trick. 
</div> <br/>
<div>
I and Anna-Mae have been dreaming about a future together in South America for a long time, I have to admit. And that adrenaline rush of ours gave us that last little push we needed. We booked a ticket and reached for the stars.
</div> <br/>
<div>
I know what I did was wrong. But really, I never meant to hurt Jacob. It was an accident. Please have mercy on me and let me and Anna-Mae have that new start. If I had to go back to the UK, I would never see her again without bars between us. 
</div> <br/>
<div className="jimmyRevealButton">
<button>Hand Jimmy over to the police</button>
<button>Let Jimmy go</button>
</div> <br/>
 </div>
    )
}

export default JimmysReveal;