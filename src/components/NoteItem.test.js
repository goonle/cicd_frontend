import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NoteItem from './NoteItem';

describe('NoteItem', () => {
  const mockNote = {
    id: 1,
    title: 'Test Title',
    content: 'This is a test note.'
  };

  it('renders note and handles update', () => {
    const mockOnUpdate = jest.fn();

    render(
      <NoteItem note={mockNote} onUpdate={mockOnUpdate} />
    );

    // Check that title and content are displayed
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('This is a test note.')).toBeInTheDocument();

    // Click the Update button
    fireEvent.click(screen.getByText('Update'));

    // Check that onUpdate was called with the note
    expect(mockOnUpdate).toHaveBeenCalledWith(mockNote);
  });
});

describe('NoteItem Delete', () => {
  const mockNote = {
    id: 1,
    title: 'Sample Title',
    content: 'Sample Content'
  };

  it('calls onDelete with the correct note ID when Delete button is clicked', () => {
    const mockOnDelete = jest.fn();

    render(
      <NoteItem note={mockNote} onDelete={mockOnDelete} onUpdate={() => {}} />
    );

    // Click the Delete button
    fireEvent.click(screen.getByText('Delete'));

    // Check if onDelete was called with the correct ID
    expect(mockOnDelete).toHaveBeenCalledWith(mockNote.id);
  });
});