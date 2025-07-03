const Page = () => {
    return(
        <div className="container-xl py-lg-4">
            <h1 className="text-center pb-3">Add new</h1>
            <form className="row mx-auto" style={{maxWidth:1000,width:"100%"}}>
                <div className="col-lg-4 mt-5">
                    <select name="type" id="type" className="form-select bg-body-secondary rounded-4 border-0">
                        <option value="human">Human</option>
                        <option value="human">Brand</option>
                    </select>
                </div>
                <div className="col-lg-4 mt-5">
                    <input type="text" name="title" className="form-control bg-body-secondary rounded-4 border-0" placeholder="Title" id="title" />
                </div>
                <div className="col-lg-4 mt-5">
                    <input type="text" name="keywords" className="form-control bg-body-secondary rounded-4 border-0" placeholder="Keywords" id="keywords" />
                </div>
                <div className="col-lg-6 mt-5">
                    <textarea name="description" className="form-control bg-body-secondary rounded-4 border-0" placeholder="Mini desc" id="description"></textarea>
                </div>
                <div className="col-lg-6 mt-5">
                    <textarea name="prompt" className="form-control bg-body-secondary rounded-4 border-0" placeholder="Prompt" id="prompt"></textarea>
                </div>
                <div className="col-12 mt-5">
                    <input type="file" name="image" className="form-control bg-body-secondary rounded-4 border-0" id="image" />
                </div>
                <button type="submit" className="btn btn-primary rounded-4 mt-5">Submit</button>
            </form>
        </div>
    )
}

export default Page;