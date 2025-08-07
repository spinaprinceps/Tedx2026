import React from "react";
import '/src/pages/home.css';

function Testimonials  () {
    const testimonials = [
        {
            name: "Raksha",
            company: "Atlassian",
            feedback: "Leading TEDxSIT has been a transformative experience. Watching members grow and take ownweship is what keeps this platform thriving."
        },
        {
            name: "Krish U",
            company: "RedBus",
            feedback: "Being a part of TEDxSIT was an incredible experience. The team is passionate and dedicated, and the events are well- organized and inspiring."
        },
        {
            name: "Sanjana",
            company: "Saks",
            feedback: "Being part of TEDxSIT gave me unmatched exposure. The Community is inspiring and the experience, unforgettable."
        },
    ];

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <h3 className="testimonial-name">{testimonial.name}</h3>
                        <p className="testimonial-company">{testimonial.company}</p>
                        <p className="testimonial-feedback">{ testimonial.feedback}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials;