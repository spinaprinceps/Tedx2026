const MemberCard = ({member}) => {
    return (
        <div className="member-capsule">
            <div className="member-container">
                <div className="member-image-box">
                    <img src={member.img} alt="" />    
                </div>
                <div className="member-name">
                    <h3>{member.name}</h3>
                    <h4>{member.role}</h4>
                </div>
            </div>
        </div>
    )
}
export default MemberCard