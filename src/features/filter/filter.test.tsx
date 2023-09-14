import React from 'react';
import {render, screen} from '@testing-library/react';
import {Filter} from '@/features/filter/filter';
import userEvent from '@testing-library/user-event/';
import {filterState} from '@/store/filter';



describe('<Filter />', () => {
    beforeEach(() => {
        filterState.search = '';
        filterState.complexity = 0;
        filterState.attribute = '';
    });

    it('should change attribute filter on attribute buttons click', async () => {
        render(<Filter/>);

        await userEvent.click(screen.getByRole('button', {name: 'attribute int'}));

        expect(filterState.attribute).toBe('int');
    });

    it('should change complexity filter on complexiry buttons click', async () => {
        render(<Filter/>);

        await userEvent.click(screen.getByRole('button', {name: 'complexity 2'}));

        screen.logTestingPlaygroundURL();
        expect(filterState.complexity).toBe(2);
    });

    it('should change search value on input typing', async () => {
        render(<Filter/>);

        await userEvent.type(screen.getByRole('textbox'), 'Search Text ');

        expect(filterState.search).toBe('search text ');
    });
});