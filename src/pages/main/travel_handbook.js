import React, { useState, useEffect } from 'react';
import SEO from '../../components/seo'
import { Link } from "gatsby";
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../../components/Markdown';
import H from '../../components/Highlight';
import cover from '../../images/covers/handbook.jpg';
import { StaticImage } from "gatsby-plugin-image";
import { handbookLastUpdated } from '../../data/lastUpdated';
import { CustomTableOfContents } from '../../components/CustomTableOfContents';
import 'animate.css/animate.min.css';

const Handbook = () => {

	const [headings, setHeadings] = useState([]);

	useEffect(() => {
		const headingElements = Array.from(
			document.querySelectorAll('.handbookBody h2, .handbookBody h3')
		);

		headingElements.forEach((elem) => {
		if (!elem.id) {
			elem.id = elem.innerText
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^\w-]+/g, '');
		}
		});

		const data = headingElements.map((el) => ({
			id: el.id,
			text: el.innerText,
			level: el.tagName,
		}));

		setHeadings(data);
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }}>

			<StaticImage
				className="pageCover" 
				src="../../images/covers/handbook.jpg" 
				alt="Page cover: a painting depicting a table with a drawn map, pencil, candle, books and compass"
			/>

			<div className="handbookBody">
				<p>The purpose of this page is to gather all my travel experiences in one place to help other adventurers to avoid the same mistakes, not to feel uncomfortable on the road, to plan properly, to save a lot of money and to stay safe. This is my free book with practical tips and tricks — to start thinking of traveling as a science, philosophy and lifestyle.</p>
				<p>The book will be updated with my new experiences, examples and illustrations along the way, as I travel.</p>
				<p><H>Edition: 1 (2025)</H></p>
			</div>
			<br/>
			<div className="handbookBody">
				<CustomTableOfContents headings={headings} />
			</div>
			<br/>
			<div className="handbookBody">
				<h2>Work in progress</h2>
				<p>I need some more time to put the first edition of the handbook up here. Stay tuned!</p>

				{/*

				excerpt from the first draft (o1):
				

				The science of travel
				Why do you want to travel?

				## 1. Embrace the Core Philosophy
				1. **Believe in the Kindness of the World**: Assume people are generally helpful and friendly; this mindset affects your approach and success on the road.
				2. **Practice Mutual Generosity**: Receive free help (rides, food, shelter), and also give help (hosting, feeding, sharing information) whenever you can.
				3. **Stay Flexible**: Each journey is unique. Remain open to changing plans and improvise as events unfold.
				4. **Live Simply**: Use only what you truly need; let go of attachments to material items or strict schedules.

				---

				## 2. Prepare Yourself (Mindset & Equipment)
				1. **Travel with a Purpose**: Know generally where you want to go, but be ready for detours and unforeseen opportunities.
				2. **Carry the Essentials**:
				- Valid ID/passport  
				- A reliable backpack  
				- Weather-appropriate clothing (avoid extremes: neither ragged nor showy)  
				- A sleeping bag and sleeping mat (if you plan to camp or stay outdoors)  
				- Basic kitchen items: a metal cup, spoon, matches, small food stash  
				- Small first-aid kit (bandages, basic medicines)  
				3. **Pack Lightly**: Too many belongings slow you down and become a burden. Only bring what you can carry comfortably.

				---

				## 3. Plan the Route (But Not Too Rigidly)
				1. **Study Maps & Roads**: Know major highways, possible detours, and typical traffic flows for the regions you’re crossing.
				2. **Identify “Magnets”**: Large cities (“capitals” of regions) have heavier traffic; border areas often have sparse traffic.
				3. **Check Season & Weather**: Winter travel in cold climates (e.g., Russia’s North) requires additional preparation (warm clothes, reflectors, knowledge of winter roads).
				4. **Know Border-Crossing Rules**: If going abroad, confirm visa requirements and which international checkpoints allow foreigners.

				---

				## 4. Hitch-Hiking Technique
				1. **Find Good Spots**:
				- Past a feature that forces cars to slow (e.g., junction, traffic light, bridge, toll booth).  
				- Avoid dangerous locations (narrow shoulders, bridges, steep slopes).  
				2. **Signal Clearly**:
				- Face oncoming traffic, make eye contact, raise your arm in a decisive (not begging) gesture.  
				- Vary your gestures: thumbs-up, open palm, or “barrier” arm are all fine, but do it confidently.  
				3. **Evaluate Vehicles Quickly**: Notice if they have space, look approachable, or seem eager to chat.  
				4. **Use Daylight Wisely**:
				- Traffic is highest in morning or early evening “waves.”  
				- At night, wear bright or reflective clothing and stand under lighting.  
				- Do not stand somewhere drivers can’t see you early enough to stop safely.

				---

				## 5. Riding & Interacting with Drivers
				1. **Ask for a Lift Politely**: Clarify early that you have no money to pay. A quick phrase like “I’m traveling for free; is that okay?” avoids confusion.
				2. **Don’t Fall Asleep (Especially at Night)**: If the driver is tired, your conversation might be what keeps everyone safe.
				3. **Share What You Can**:
				- If you have snacks or gum, offer them to the driver.  
				- Maintain friendly chatter; let the driver talk about their life, city, or job.  
				4. **Respect Boundaries**:
				- If a driver seems uncomfortable or changes their mind, get out calmly at a safe spot.  
				- If they suddenly ask for money at the end, clarify politely. If you truly have none, explain.  

				---

				## 6. Handling Low-Traffic & Remote Roads
				1. **Expect Long Waits**: In sparsely populated areas, waiting hours (even days) may happen.
				2. **Be Self-Sufficient**:
				- Carry enough water, some dry food or grains, and a means to cook or make a fire.  
				- If the weather is cold, set up camp near shelter or a place you can warm up if needed.  
				3. **Welcome Fewer Vehicles**: The upside of remote roads is that the few drivers who pass are often more willing to help, even for long distances.
				4. **Never Overextend into Inhospitable Terrain**: Avoid walking too far from inhabited places if storms or winter conditions make it risky.

				---

				## 7. Alternative “Free Travel” Modes
				1. **Train-Hitching** (when it’s feasible and legal):
				- Look for freight stations; ask the locomotive drivers for a lift.  
				- Always get permission before climbing aboard a train car (passenger or cargo).  
				2. **Suburban Trains (Elektrichki)**:
				- In some regions, ticket checks are rare; in others, more common. Evaluate how strictly they monitor fare-dodgers.  
				3. **Watercraft-Hitching**:
				- Ports on rivers or seas can be approached to negotiate space on cargo ships or barges.  
				- Wait while vessels load/unload; talk directly to the captain about traveling on board.  
				4. **Avoid Conflict with Officials**: Be polite; show your ID if asked. If turned away, move on or try a different approach.

				---

				## 8. Finding Food & Sustenance
				1. **Carry Basic Cooking Staples**: Rice, buckwheat, pasta, or potatoes can be cooked easily if you find a kettle or stove.
				2. **Approach Canteens & Kitchens**: Ask to boil your food if you have your own grains. Often people will help if you’re polite and interesting.
				3. **Receive and Offer Meals**: You’ll often be fed by kind people; likewise, when you’re in a position to do so, feed others.

				---

				## 9. Finding Shelter & Sleeping Arrangements
				1. **Plan Ahead for the Night**:
				- In urban areas, use hospitality networks (e.g., Couchsurfing, local tourist clubs, or word-of-mouth).  
				- Ask politely at any organization (schools, fire stations, youth centers) before it gets late.  
				2. **Use Tents Cautiously**:
				- This works well in mild weather and non-urban zones, but in a city or harsh cold it’s often better to find indoor lodging.  
				3. **Monasteries & Churches**: Many religious communities worldwide allow travelers a night’s rest if approached respectfully (dress modestly; be polite).
				4. **Villages**: If you’re in a rural area at dusk without a tent, knock on doors; small villages are often very hospitable—just arrive before late night.

				---

				## 10. Staying Safe & Healthy
				1. **Mind Traffic Risks**:
				- Stand where cars can see you, away from dangerous curves.  
				- Refuse rides with obviously drunk or reckless drivers.  
				2. **Prevent Illness**:
				- Wear season-appropriate clothes; keep dry when it’s cold.  
				- In extremely cold or remote settings, plan stops near warm shelter.  
				3. **Stay Clear of Alcohol & Drugs**: Traveling sober keeps you safer, more aware, and better received by hosts.
				4. **Manage Personal Security**: If confronted by troublemakers, stay calm, talk your way out, or offer a small sum if you sense a threat. Do not escalate conflicts.

				---

				## 11. Dealing with Officials & Formalities
				1. **Always Carry Your ID**: Hand it over calmly if asked; greet police or border guards courteously.
				2. **Explain Honestly**: “I’m a traveler, hitch-hiking to X for personal exploration.”  
				3. **Don’t Lie**: Dishonesty causes more complications.  
				4. **Use “Travel Credentials”**: An official-looking note from a school or club can help you appear more legitimate—especially with train or ship crews.

				---

				## 12. Sustaining the Spirit of “Free Travel”
				1. **Be Generous at Home**: Host strangers, help travelers, and share knowledge once you’re back.
				2. **Connect with Local & Global Communities**: Join gatherings, share stories, learn from others, and plan group trips or meetups.
				3. **Expand Your Horizons**: Once comfortable hitch-hiking locally, consider visiting other regions or countries to experience new cultures and landscapes.
				4. **Keep Learning**: Each journey yields fresh lessons. Adapt them for future travels; pass them on to new travelers.

				---

				## 13. Conclusion & Final Encouragement
				1. **Time is Precious**: Travel when you can, rather than waiting forever for “perfect conditions.”
				2. **You Have the Keys**: The roads, trains, and waterways belong to everyone—use them wisely.
				3. **Live the Adventure**: Hitch-hiking, when done intelligently and kindly, offers unique connections with people and places.
				4. **Rejoice in Human Brotherhood**: You’ll encounter help and kindness across the globe—and can return the favor in your own way.

				*/}

			</div>
			<div className="lastUpdatedTalks">UPDATED ON {handbookLastUpdated}</div>

	  	</motion.div>
	);
};
  
export default Handbook;

export const Head = () => (
  <SEO 
    title="Handbook - avrtt.blog"
    description="Discover a free, practical travel handbook that explores hitch-hiking, budget tips, safety advice, and more. Learn how to plan, stay safe, and embrace the philosophy of traveling — all in one comprehensive guide."
    keywords={[
		"travel handbook",
		"hitchhiking tips",
		"budget travel",
		"road trip advice",
		"travel safety",
		"avrtt blog",
		"free travel guide",
		"travel philosophy"
	  ]}
    image={cover}
    canonicalUrl="https://avrtt.github.io/handbook"
    schemaType=""
    children
  />
)
