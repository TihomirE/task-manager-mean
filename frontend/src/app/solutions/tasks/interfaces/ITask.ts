import { IAction } from './IAction';
import { ITaskEmergency } from './ITaskEmergency';

export interface ITask {
    id: string;
    title: string;
    description: string;
    create_date: string;
    deadline_date: string;
    completed: boolean;
    deleted: boolean;

    // TODO - get list from server (couple of locations)
    location: string;
    // TODO - get list from server (1 day, 3 days, week, month)
    emergency: ITaskEmergency;

    actions: IAction[];

    // TODO - create interface / lookup from server
    status: string;
}
