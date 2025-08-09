import React, { useState } from 'react';
import  '/src/pages/home.css';

const domains = [{
    name: 'Development',
    description: 'Building and maintaining the technical infrastructure of TEDxSIT events, including website development, app creation, and technical support.'
},
{
    name: 'Curations',
    description: 'Identifying and inviting speakers, curating talks, and ensuring the content aligns with TEDxSIT\'s mission of spreading ideas worth sharing.'
},
{
    name: 'Media Forge',
    description: 'Creating and managing all visual and audio content for TEDxSIT, including photography, videography, graphic design, and social media management.'
},
{
    name: 'Arts & Design',
    description: 'Designing event branding, stage setups, and promotional materials to create a visually engaging experience for attendees.'
},
{
    name: 'Posters',
    description: 'Designing and producing posters and other print materials to promote TEDxSIT events and speakers.'
},
{
    name: 'Marketing',
    description: 'Developing and executing marketing strategies to promote TEDxSIT events, including social media campaigns, email marketing, and partnerships.'
},
{
    name: 'Operations',
    description: 'Managing the logistics of TEDxSIT events, including venue selection, catering, registration, and on-site coordination.'
},
{
    name: 'Budgeting',
    description: 'Overseeing the financial aspects of TEDxSIT events, including budgeting, fundraising, and sponsorship management.'
}
];

function Domain() {
    const [selectedDomain, setSelectedDomain] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDomainClick = (domain) => {
        setSelectedDomain(selectedDomain === domain ? null : domain);
    }


    return (
        <div className="domain-container">
            <button className="domain-toggle" onClick={toggleDropdown}>
                {isDropdownOpen ? 'Hide Domains' : 'Show Domains'}
            </button>
            {isDropdownOpen && (
                <div className="domain-list">
                    {domains.map((domain, index) => (
                        <div key={index} className="domain-item" onClick={() => handleDomainClick(domain.name)}>
                    
                            <h3 className="domain-name">{domain.name}</h3>
                        
                            {selectedDomain === domain.name && (
                                <p className="domain-description">{domain.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Domain;