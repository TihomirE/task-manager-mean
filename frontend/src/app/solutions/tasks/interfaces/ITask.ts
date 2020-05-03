export interface ITask {
    id: string;
    title: string;
    description: string;
    create_date: string;
    deadline_date: string;
    completed: boolean;
    deleted: boolean;
    // TODO - create interface / lookup from server
    status: string;
}
