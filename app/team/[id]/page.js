"use client";

import React, { useEffect, useState } from "react";
import teamData from "/public/API/teamData.json";

export default function TeamDetails({ params }) {
	const { id } = params;

	const [member, setMember] = useState([]);

	useEffect(() => {
		setMember(teamData);
	}, []);

	// console.log(member[0]);

	return (
		<main>
			<section className="team-details-area py-20">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl text-center mb-10">
						Team Details Page {id}
					</h1>
					<div className="grid lg:grid-cols-12 gap-10 items-center">
						<div className="team-details__image lg:col-span-5">
							<img
								className="w-full"
								src={
									"https://img.freepik.com/free-photo/portrait-handsome-young-man_158595-262.jpg?t=st=1722358906~exp=1722362506~hmac=65cfd91f68549b82b3d25a430a904c2a35015f87c88abeaf2478d59d7e2094aa&w=1060"
								}
								alt={"teamimage"}
							/>
						</div>
						<div className="team-details__content lg:col-span-7">
							<h3 className="text-3xl font-medium mb-1">
								Kawser Ahmed Roni
							</h3>
							<span className="mb-5 inline-block">
								Frontend Developer
							</span>
							<p className="text-justify">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Labore ab natus quibusdam unde doloribus exercitationem,
								voluptates at quos sint illo ut quis ex odio cum sunt
								enim ad ullam suscipit, harum eveniet corrupti
								reiciendis reprehenderit quo? Nobis possimus laboriosam
								ut fuga repudiandae facilis nulla adipisci, recusandae
								tenetur minus. Architecto recusandae voluptas eum! Aut
								voluptates nam similique veritatis fugit sit veniam!
								Voluptatem ipsa ad sapiente nobis ipsum, tenetur quaerat
								distinctio eveniet quo nulla saepe minus qui magni eos.
								Inventore, tempore quia qui illum nulla fuga sequi culpa
								corrupti eum quisquam incidunt saepe eveniet tenetur
								accusamus est reprehenderit! Expedita nesciunt nihil
								aliquam. Sunt dolores at rem eligendi natus. At, tempore
								ipsa sequi ex quidem culpa cum nobis quae expedita
								dolore molestiae quos libero. Lorem, ipsum dolor sit
								amet consectetur adipisicing elit. Vero, assumenda.
								Dolorem voluptatum at enim architecto totam porro?
								Aliquid rerum perspiciatis, nam cumque modi harum
								voluptates officia eum dicta odit nobis quisquam. Ea
								dolores corporis necessitatibus, cumque, voluptatem
								natus ipsam distinctio temporibus, doloremque neque fuga
								ratione incidunt ipsa impedit. Nihil error aliquid
								necessitatibus nostrum quibusdam, minima doloremque
								totam. Vel, fugiat voluptas ipsa rerum eligendi suscipit
								dolor asperiores.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
