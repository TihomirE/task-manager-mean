import { createReducer, on, createAction } from '@ngrx/store';

export const tasksReducer = createReducer(
    { showTasksOptions: true },
    // TODO - needs to be strongly typed, check
    on(createAction('[Tasks] Toggle Tasks Show Options'), state => {
        // console.log('Original state: ' + JSON.stringify(state));
        return {
            ...state,
            showTasksOptions: !state.showTasksOptions
        };
    })
);
