function createDetailTemplate (movieValue) {
    let detailsTemplate = `
        <div class="movie-details col-lg-9">
            <div>
                <div class="row">
                    <div class="col-lg-3 col-md-4 intro-section">
                        <div class="info-item">
                            <span><b>Language</b></span>
                            <input type="text" class="form-control-plaintext" itemprop="Language" value="${movieValue.Language}" disabled>
                        </div>

                        <div class="info-item">
                            <span><b>Director</b></span>
                            <input type="text" class="form-control-plaintext" itemprop="Director" value="${movieValue.Director}" disabled>
                        </div>

                        <div class="info-item">
                            <span><b>Country</b></span>
                            <input type="text" class="form-control-plaintext" itemprop="Country" value="${movieValue.Country}" disabled>
                        </div>

                        <div class="info-item">
                            <span><b>Release year</b></span>
                            <input type="text" class="form-control-plaintext" itemprop="Year" value="${movieValue.Released}" disabled>
                        </div>

                        <div class="info-item">
                            <span><b>Genres</b></span>
                            <input type="text" class="form-control-plaintext" itemprop="Genre" value="${movieValue.Genre}" disabled>
                        </div>

                        <div class="info-item">
                            <span><b>Runtime</b></span>
                            <input type="text" class="form-control-plaintext" itemprop="Runtime" value="${movieValue.Runtime}" disabled>
                        </div>

                        <div class="info-item">
                            <span><b>Rated</b></span>
                            <input type="text" class="form-control-plaintext" itemprop="Rated" value="${movieValue.Rated}" disabled>
                        </div>
                    </div>

                    <div class=" col-lg-6 col-md-8 sinopsis-section">
                        <div class="info-item">
                            <span><b>Plot summary</b></span>
                            <input type="text" class="form-control-plaintext" itemprop="Plot" value="${movieValue.Plot}" disabled>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-12 extras-section">
                        <div class="info-item">
                            <i class="fas fa-award"></i>
                            <span><b>Awards</b></span>
                            <input type="text" class="form-control-plaintext" itemprop="Awards" value="${movieValue.Awards}" disabled>
                        </div>

                        <div class="info-item">
                            <i class="fas fa-star"></i>
                            <span><b>Rating</b></span>
                            <input type="text" class="form-control-plaintext" itemprop="imdbRating" value="${movieValue.imdbRating}" disabled>
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
    `;

    return detailsTemplate;
}
