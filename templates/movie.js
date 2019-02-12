function createMovieTemplate (movie) {
    let movieTemplate = `
        <div class="row">
            <div class="col-lg-3">
                <div class="row">
                    <div class="movie-poster col-lg-12">
                        <img class="w-100" src="${movie.Poster}" alt="madre">
                    </div>
                    <div class="movie-options col-lg-12">
                        <div>
                            <div>
                                <button class="btn btn-primary w-100" type="button">
                                    <i class="fas fa-info-circle"></i>
                                    <span>View details</span>
                                </button>
                            </div>

                            <div>
                                <button class="btn btn-primary w-100" type="button">
                                    <i class="fas fa-edit"></i>
                                    <span>Edit</span>
                                </button>
                            </div>

                            <div>
                                <button class="btn btn-primary w-100" type="button">
                                    <i class="fas fa-trash-alt"></i>
                                    <span>Delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="movie-details col-lg-9">
                <div>
                    <h1 itemprop="name">${movie.Title}</h1>
                </div>

                <div>
                    <div class="row">
                        <div class="col-lg-3 col-md-4 intro-section">
                            <div class="info-item">
                                <span>Language</span>
                                <p>${movie.Language}</p>
                            </div>

                            <div class="info-item">
                                <span>Director</span>
                                <p>${movie.Director}</p>
                            </div>

                            <div class="info-item">
                                <span>Country</span>
                                <p>${movie.Country}</p>
                            </div>

                            <div class="info-item">
                                <span>Release year</span>
                                <p>${movie.Released}</p>
                            </div>

                            <div class="info-item">
                                <span>Genres</span>
                                <p>${movie.Genre}</p>
                            </div>

                            <div class="info-item">
                                <span>Runtime</span>
                                <p>${movie.Runtime}</p>
                            </div>

                            <div class="info-item">
                                <span>Rated</span>
                                <p>${movie.Rated}</p>
                            </div>
                        </div>

                        <div class=" col-lg-6 col-md-8 sinopsis-section">
                            <div class="info-item">
                                <span>Plot summary</span>
                                <p itemprop="description">${movie.Plot}</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-12 extras-section">
                            <div class="info-item">
                                <i class="fas fa-award"></i>
                                <span>Awards</span>
                                <p class="main-award" itemprop="award">${movie.Awards}</p>
                            </div>

                            <div class="info-item">
                                <i class="fas fa-star"></i>
                                <span>Rating</span>
                                <p>${movie.imdbRating}/10</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="slider-header">
                            <h3 class="slider-title">Direction and cast</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    return movieTemplate;
}
