const MemberCard = ({member}) => {
    return (
        <div className="member-capsule">
            <div className="member-container">
                <div className="member-image-box">
                    <img src={member.img} alt="" />    
                </div>
                <div className="member-name">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <p>{member.year}</p>
                </div>
            </div>
        </div>
    )
}
export default MemberCard