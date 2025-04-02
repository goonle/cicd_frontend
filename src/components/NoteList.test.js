import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import NoteList from './NoteList';
import axios from 'axios';

jest.mock('axios');

describe('NoteList Component', () => {
    const mockNotes = [
        {
            id: 1,
            title: 'Note 1',
            content: 'This is the first note.',
            status: 1 // To Do
        },
        {
            id: 2,
            title: 'Note 2',
            content: 'This is the second note.',
            status: 2 // In Progress
        }
    ];

    beforeEach(() => {
        localStorage.setItem('token', 'test-token');

        axios.request.mockResolvedValueOnce({
            data: mockNotes
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders fetched notes from API and displays them by status', async () => {
        render(<NoteList />);

        // Wait for Note 1 to appear (To Do)
        await waitFor(() => {
            expect(screen.getByText((text) => text.includes('Note 1'))).toBeInTheDocument();
        });

        // Check if Note 2 is also there (In Progress)
        expect(screen.getByText((text) => text.includes('Note 2'))).toBeInTheDocument();

        // Check if contents are rendered
        expect(screen.getByText('This is the first note.')).toBeInTheDocument();
        expect(screen.getByText('This is the second note.')).toBeInTheDocument();

        // Check headings exist
        expect(screen.getByRole('heading', { name: /To Do/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /In Progress/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /Done/i })).toBeInTheDocument();
    });
});
