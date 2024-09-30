export default function Story(props) {

    const {story} = props;

    return(
        <div className="story-container">
            <span>x</span>
            <div className="story-header">
                <div className="story-image">
                    <img src={story.image_url} alt=""/>
                </div>
                <h1>
                    <a></a>
                    <span className="author"></span>
                </h1>
            </div>
            <p>

            </p>
        </div>
    );
}