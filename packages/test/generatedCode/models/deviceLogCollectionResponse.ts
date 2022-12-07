import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceLogCollectionResponse extends Entity, Partial<Parsable> {
    /** The User Principal Name (UPN) of the user that enrolled the device */
    enrolledByUser?: string;
    /** The error code, if any. Valid values -9.22337203685478E+18 to 9.22337203685478E+18 */
    errorCode?: number;
    /** The DateTime of the expiration of the logs */
    expirationDateTimeUTC?: Date;
    /** The UPN for who initiated the request */
    initiatedByUserPrincipalName?: string;
    /** The device Id */
    managedDeviceId?: string;
    /** The DateTime the request was received */
    receivedDateTimeUTC?: Date;
    /** The DateTime of the request */
    requestedDateTimeUTC?: Date;
    /** The size of the logs. Valid values -1.79769313486232E+308 to 1.79769313486232E+308 */
    size?: number;
    /** The status of the log collection request */
    status?: string;
}
