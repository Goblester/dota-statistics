import {render, screen} from '@testing-library/react';
import {Heroes} from '@/components/heroes/heroes';
import {HeroDataType} from '@/types';
import React from 'react';
import {filterState} from '@/store/filter';

const heroes: HeroDataType[] = [
    {
        id: 1,
        attack_type: '',
        name: '',
        roles: [''],
        localized_name: 'Test Hero',
        primary_attr: 'all',
    },
    {
        id: 2,
        attack_type: '',
        name: '',
        roles: [''],
        localized_name: 'Test-Hero1',
        primary_attr: 'agi',
    },
    {
        id: 3,
        attack_type: '',
        name: '',
        roles: [''],
        localized_name: 'Test-Hero2',
        primary_attr: 'str',
    }
];

describe('<Heroes/>', () => {
    it('should render main text', () => {
        render(<Heroes heroes={heroes} filter={filterState} />);

        expect(screen.getByText('CHOOSE YOUR HERO')).toBeInTheDocument();
    });
    it('should render all heroes with correct link', () => {
        render(<Heroes heroes={heroes}/>);

        const allHeroes = screen.getAllByRole('link');

        expect(allHeroes.length).toBe(3);
        expect(allHeroes[0]).toHaveAttribute('href', '/heroes/testhero');
        expect(allHeroes[2]).toHaveAttribute('href', '/heroes/testhero2');
    });

    it('should sort heroes', () => {
        heroes[1].localized_name = 'zeus';

        render(<Heroes heroes={heroes} filter={filterState}/>);

        const allHeroes = screen.getAllByRole('link');

        expect(allHeroes[2]).toHaveAttribute('href', '/heroes/zeus');
    });
});