//Import Posting Component
import Posting from './Posting.jsx';

//Gallery Component
function Gallery() {
    const craigPost = require('./postings')

    let postList = craigPost.postings.map((element, i) => {
        return <Posting data={element} key= {i}/>
    })

    return (
        <div>
            {postList}
        </div>
    )
}

//Export Gallery Component
export default Gallery;