function createDetailTemplate (movieValue) {
    let detailsTemplate = `
        <div class="movie-details col-lg-9">
            <div>
                <div class="row">
                    <div class="col-lg-3 col-md-4 intro-section">
                        <div class="info-item">
                            <span><b>Language</b></span>
                            <textarea type="text" class="form-control-plaintext" rows="2" itemprop="Language" disabled="true">${movieValue.Language}</textarea>
                        </div>

                        <div class="info-item">
                            <span><b>Director</b></span>
                            <textarea type="text" class="form-control-plaintext" rows="3" itemprop="Director" disabled="true">${movieValue.Director}</textarea>
                        </div>

                        <div class="info-item">
                            <span><b>Country</b></span>
                            <textarea type="text" class="form-control-plaintext" rows="1" itemprop="Country" disabled="true">${movieValue.Country}</textarea>
                        </div>

                        <div class="info-item">
                            <span><b>Released</b></span>
                            <textarea type="text" class="form-control-plaintext" rows="1" itemprop="Released" disabled="true">${movieValue.Released}</textarea>
                        </div>

                        <div class="info-item">
                            <span><b>Genres</b></span>
                            <textarea type="text" class="form-control-plaintext" rows="3" itemprop="Genre" disabled="true">${movieValue.Genre}</textarea>
                        </div>

                        <div class="info-item">
                            <span><b>Runtime</b></span>
                            <textarea type="text" class="form-control-plaintext" rows="1" itemprop="Runtime" disabled="true">${movieValue.Runtime}</textarea>
                        </div>

                        <div class="info-item">
                            <span><b>Rated</b></span>
                            <textarea type="text" class="form-control-plaintext" rows="1" itemprop="Rated" disabled="true">${movieValue.Rated}</textarea>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-8 plot-section">
                        <div class="info-item">
                            <span><b>Plot summary</b></span>
                            <textarea type="text" class="form-control-plaintext" rows="5" itemprop="Plot" disabled="true">${movieValue.Plot}</textarea>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-12 extras-section">
                        <div class="info-item">
                            <i class="fas fa-award"></i>
                            <span><b>Awards</b></span>
                            <textarea type="text" class="form-control-plaintext" rows="3" itemprop="Awards" disabled="true">${movieValue.Awards}</textarea>
                        </div>

                        <div class="info-item">
                            <i class="fas fa-star"></i>
                            <span><b>Rating</b></span>
                            <textarea type="text" class="form-control-plaintext" rows="1" itemprop="imdbRating" disabled="true">${movieValue.imdbRating}</textarea>
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
