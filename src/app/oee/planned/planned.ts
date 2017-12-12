/* Defines the planned entity */
export interface IPlanned {
    oeeid: number;
    plannedId: number;
    personalPannedId: number;
    plannedDowntimeId: number;
    plannedMaintenace: number;
    tpm: number;
    calibration: number;
    testing: number;
    other: number;
    pmplannedMaintenanceDate: Date;
    break: number;
    meetingPlanned: number;
    shiftChanged: number;
    training: number;
    plannedDate: Date;
    noWorkScheduled: number;
    plannedDownTimeDate: Date;
}