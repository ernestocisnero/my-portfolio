
import './droppingwordAnimation.css';

export const DroppingWordAnimation = () => {
    return (
        <>
            <div className="rotate-words">
                <span style={ {"--d": "0s"} }>Automation Engineer</span>
                <span style={ {"--d": "3s"} }>Frontend Developer</span>
            </div>
        </>
    )
}
