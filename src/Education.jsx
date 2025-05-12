import React from 'react'
import './cssforE.css';

function Education() {
  return (
    <div className='bg-gray-800 md:pl-[10%]'>
        <h1 className='text-white text-2xl font-bold text-center pt-30'>Education and Certificates</h1>
    <section className="timeline-section">
	<div className="timeline-items">
		<div className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">2019 - 2021</div>
			<div className="timeline-content">
				<h3>High School Degree</h3>
				<p>Gjimnazi 'Skenderbeu' Kaçanik 
                    <br />
                    Shoqëror
                </p>
			</div>
		</div>
		<div className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">2021 - 2024</div>
			<div className="timeline-content">
				<h3>Bachelor's Degreee</h3>
				<p>Universum - Computer Science
                    <br />
                    I am a graduate with a Bachelor of Science (BSc.) degree in Computer Science.
                     </p>
			</div>
		</div>
		<div className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">2024</div>
			<div className="timeline-content">
				<h3>Asu Master Class</h3>
				<p>Asu Master Class-Global Trade in the Modern World:Benefits,Challenges,and the path(s)
Forward- </p>
			</div>
		</div>
		<div className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">2024 - 2025</div>
			<div className="timeline-content">
				<h3>Për Programera Full Stack Web Developer
                </h3>
				<p>Completed Couse Full Stack Web Developer - (HTML , CSS , TailWindCss , JavaScript , ReactJs , PHP , Laravel , Mysql) </p>
			</div>
		</div>
		
	</div>
</section>

    </div>
  )
}

export default Education