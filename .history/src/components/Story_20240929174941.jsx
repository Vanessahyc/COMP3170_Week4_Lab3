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
                    <a href={story.link} target="_blank"></a>
                    <span className="creator">{story.creator}</span>
                </h1>
            </div>
            <p className="description">

            </p>
        </div>
    );
}