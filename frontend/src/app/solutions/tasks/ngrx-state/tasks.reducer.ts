import { createReducer, on, createAction } from '@ngrx/store';

export const tasksReducer = createReducer(
    { showTasksOptions: true },
    on(createAction('[Tasks] Toggle Tasks Show Options'), state => {
        // console.log('Original state: ' + JSON.stringify(state));
        return {
            ...state,
            showTasksOptions: !state.showTasksOptions
        };
    })
);
