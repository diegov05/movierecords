using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public MovieController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        // Add a new movie
        [HttpPost]
        public async Task<IActionResult> AddMovie(Movie movie)
        {
            _appDbContext.Movies.Add(movie);
            await _appDbContext.SaveChangesAsync();
            return Ok(movie);
        }

        // Get all movies
        [HttpGet]
        public async Task<IActionResult> GetMovies()
        {
            var movies = await _appDbContext.Movies.ToListAsync();
            return Ok(movies);
        }

        // Get a movie by ID
        [HttpGet("{movieId}")]
        public async Task<IActionResult> GetMovie(int movieId)
        {
            var movie = await _appDbContext.Movies
                .Include(m => m.MovieRatings)  // Include related movie ratings
                .Include(m => m.UserRatings)   // Include related user ratings
                .FirstOrDefaultAsync(m => m.Id == movieId);

            if (movie == null)
            {
                return NotFound("Movie not found.");
            }

            return Ok(movie);
        }

        // Update an existing movie
        [HttpPut("{movieId}")]
        public async Task<IActionResult> UpdateMovie(int movieId, Movie updatedMovie)
        {
            var movie = await _appDbContext.Movies.FindAsync(movieId);

            if (movie == null)
            {
                return NotFound("Movie not found.");
            }

            // Update the movie's properties
            movie.Title = updatedMovie.Title;
            movie.Type = updatedMovie.Type;
            movie.Rated = updatedMovie.Rated;
            movie.Year = updatedMovie.Year;
            movie.Released = updatedMovie.Released;
            movie.Runtime = updatedMovie.Runtime;
            movie.Genre = updatedMovie.Genre;
            movie.Director = updatedMovie.Director;
            movie.Writer = updatedMovie.Writer;
            movie.Actors = updatedMovie.Actors;
            movie.Plot = updatedMovie.Plot;
            movie.Poster = updatedMovie.Poster;
            movie.Metascore = updatedMovie.Metascore;
            movie.ImdbRating = updatedMovie.ImdbRating;
            movie.ImdbVotes = updatedMovie.ImdbVotes;
            movie.ImdbID = updatedMovie.ImdbID;

            await _appDbContext.SaveChangesAsync();

            return Ok(movie);
        }

        // Delete a movie by ID
        [HttpDelete("{movieId}")]
        public async Task<IActionResult> DeleteMovie(int movieId)
        {
            var movie = await _appDbContext.Movies.FindAsync(movieId);

            if (movie == null)
            {
                return NotFound("Movie not found.");
            }

            _appDbContext.Movies.Remove(movie);
            await _appDbContext.SaveChangesAsync();

            return Ok("Movie deleted.");
        }
    }
}
