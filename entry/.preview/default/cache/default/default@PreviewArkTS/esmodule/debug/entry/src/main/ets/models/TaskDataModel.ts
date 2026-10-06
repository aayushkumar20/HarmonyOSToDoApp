export class TaskDataModel {
    id: string;
    title: string;
    details: string;
    isMLGenerated: boolean;
    dueDate: Date;
    locationName: string;
    latitude: number;
    longitude: number;
    completed: boolean;
    constructor(title: string, details: string, isMLGenerated: boolean, dueDate: Date) {
        this.id = Math.random().toString(36).substring(2, 15);
        this.title = title;
        this.details = details;
        this.isMLGenerated = isMLGenerated;
        this.dueDate = dueDate;
        this.locationName = "";
        this.latitude = 0;
        this.longitude = 0;
        this.completed = false;
    }
}
