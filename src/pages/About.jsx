import React from "react";

function About() {
	return (
		<div className="aboutPage">
			<div className="content">
				<div className="about-store">
					<div className="about-text store">
						<h2>Access games instantly</h2>
						<h3>
							With nearly 30,000 games from AAA to indie and everything
							in-between. Enjoy exclusive deals, automatic game updates, and
							other great perks.
						</h3>
						<a href="/library">Browse the store</a>
					</div>
				</div>
				<div className="about-container">
					<div className="about-community">
						<div className="about-text">
							<h2>Join the Community</h2>
							<h3>
								Meet new people, join groups, form clans, chat in-game and more!
								With over 100 million potential friends (or enemies), the fun
								never stops.
							</h3>
							<a href="/library">Visit the Community ----→</a>
						</div>
						<div className="about-illustration">
                        <img
								src={`${process.env.PUBLIC_URL}/community.svg`}
								alt="Community"
							/>
                        </div>
					</div>
					<div className="about-schedule">
						<div className="about-illustration">
							<img
								src={`${process.env.PUBLIC_URL}/schedule.svg`}
								alt="Shedule"
							/>
						</div>
						<div className="about-text">
							<h2>Schedule your Games</h2>
							<h3>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim.
							</h3>
							<a href="/schedule">Schedule the Game ----→</a>
						</div>
					</div>
					<div className="about-friends">
						<div className="about-text">
							<h2>Make Friends</h2>
							<h3>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim.
							</h3>
							<a href="/friends">Find a Friend ----→</a>
						</div>
						<div className="about-illustration">
                        <img
								src={`${process.env.PUBLIC_URL}/friends.svg`}
								alt="Friends"
							/>
                        </div>
					</div>
				</div>
				<div className="about-more">
					<div className="about-text">
						<h2>And so much more...</h2>
						<h3>
							Earn achievements, read reviews, explore custom recommendations,
							and more.
						</h3>
					</div>
					<button>Join Now</button>
				</div>
			</div>
		</div>
	);
}

export default About;
