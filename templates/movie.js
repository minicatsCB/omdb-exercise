function createMovieTemplate (movieKey, movieValue) {
    let movieTemplate = `
        <div id="${movieKey}" class="row">
            <div class="col-lg-3">
                <div class="row">
                    <div class="movie-poster col-lg-12">
                        <img class="w-100" src="${movieValue.Poster}" alt="movie_poster">
                    </div>
                    <div class="movie-options col-lg-12" data-key="${movieKey}">
                        <div>
                            <button class="btn btn-primary w-100" type="button" itemprop="details">
                                <i class="fas fa-info-circle"></i>
                                <span>View details</span>
                            </button>
                        </div>

                        <div>
                            <button class="btn btn-primary w-100" type="button" itemprop="edit">
                                <i class="fas fa-edit"></i>
                                <span>Edit</span>
                            </button>
                        </div>

                        <div>
                            <button class="btn btn-primary w-100" type="button" itemprop="delete">
                                <i class="fas fa-trash-alt"></i>
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    return movieTemplate;
}
