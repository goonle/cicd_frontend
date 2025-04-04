import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import NoteModal from './NoteModal';

describe('NoteModal', () => {
    it('renders modal and submits form including status', () => {
        const mockOnAddNote = jest.fn();
        const mockGetNoteList = jest.fn();
        const mockClose = jest.fn();
        const mockShowModal = jest.fn();

        render(
            <NoteModal
                onAddNote={mockOnAddNote}
                getNoteList={mockGetNoteList}
                clickCloseModalHandler={mockClose}
                showModal={mockShowModal}
            />
        );

        // Fill form fields
        fireEvent.change(screen.getByPlaceholderText('Enter note title'), {
            target: {value: 'Test Note', name: 'title'}
        });
        fireEvent.change(screen.getByPlaceholderText('Enter note content'), {
            target: {value: 'This is a test.', name: 'content'}
        });

        // Change status
        fireEvent.change(screen.getByLabelText('Status'), {
            target: {value: 2, name: 'status'}
        });

        // Click Save button
        fireEvent.click(screen.getByText('Save Note'));

        // Check if parent handlers were called
        expect(mockOnAddNote).toHaveBeenCalledWith({
            title: 'Test Note',
            content: 'This is a test.',
            status: "2"
        });


    });
});