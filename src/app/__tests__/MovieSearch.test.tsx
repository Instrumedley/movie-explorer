import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MovieSearch from '../../components/molecules/MovieSearch';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockAxios = new MockAdapter(axios);

// Mock movie data (Gladiator, one of my favourite movies)
const movieData = {
    "Title": "Gladiator",
    "Year": "2000",
    "Rated": "R",
    "Released": "05 May 2000",
    "Runtime": "155 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Ridley Scott",
    "Writer": "David Franzoni, John Logan, William Nicholson",
    "Actors": "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
    "Plot": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    "Language": "English",
    "Country": "United States, United Kingdom, Malta, Morocco",
    "Awards": "Won 5 Oscars. 60 wins & 104 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
    {
        "Source": "Internet Movie Database",
        "Value": "8.5/10"
    },
    {
        "Source": "Rotten Tomatoes",
        "Value": "79%"
    },
    {
        "Source": "Metacritic",
        "Value": "67/100"
    }
],
    "Metascore": "67",
    "imdbRating": "8.5",
    "imdbVotes": "1,591,115",
    "imdbID": "tt0172495",
    "Type": "movie",
    "DVD": "15 Jun 2011",
    "BoxOffice": "$187,705,427",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
};

describe('MovieSearch Component 1', () => {
    beforeEach(() => {
        mockAxios.restore();
    });

    test('renders search bar and search results', () => {
        render(<MovieSearch/>);
        expect(screen.getByPlaceholderText(/Search for a movie.../i)).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    test('searches for movies when a search term is submitted', async () => {
        mockAxios.onGet('http://www.omdbapi.com/?t=Gladiator&apikey=c1c9953e', {}).reply(200, movieData);

        render(<MovieSearch/>);
        fireEvent.change(screen.getByRole('textbox'), {target: {value: 'Gladiator'}});
        fireEvent.click(screen.getByRole('button', {name: /search/i}));


        await waitFor(() => {
            expect(screen.getByText('Gladiator')).toBeInTheDocument();
        });
    });
});
describe('Errors reaching API', () => {
    beforeEach(() => {
        mockAxios.restore();
    });
    test('Incorrect search term', async () => {
        const errorMessage = 'Incorrect IMDb ID.';
        mockAxios.onGet('http://www.omdbapi.com/falseUrl').reply(200, { // Mock a successful HTTP response with an error body
            Response: "False",
            Error: errorMessage
        });

        render(<MovieSearch/>);
        fireEvent.change(screen.getByRole('textbox'), {target: {value: ''}});
        fireEvent.click(screen.getByRole('button', {name: /search/i}));

        await waitFor(() => {
            expect(screen.getByText(errorMessage)).toBeInTheDocument();
        });
    });
});

describe('Movie does not exist', () => {
    beforeEach(() => {
        mockAxios.restore();
    });
    test('Movie not found!', async () => {
        const errorMessage = 'Movie not found!';
        mockAxios.onGet('http://www.omdbapi.com/?t=Gladiator&apikey=c1c9953e').reply(200, { // Mock a successful HTTP response with an error body
            Response: "True",
            Error: errorMessage
        });

        render(<MovieSearch />);
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'ErrorMovie' } });
        fireEvent.click(screen.getByRole('button', { name: /search/i }));

        await waitFor(() => {
            expect(screen.getByText(errorMessage)).toBeInTheDocument();
        });
    });
});
