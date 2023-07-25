// Directory Component
function Directory() {
    return (
        <div>
            <select name="directory" id="directory">
                <option value="gallery">Gallery</option>
                <option value="list">List</option>
            </select>
            <nav>
                <button>
                    &lt;&lt; Back
                </button>
                <span>120/3000</span>
                <button>Next</button>
            </nav>
        </div>
    )
}

//Export Directory Component
export default Directory;