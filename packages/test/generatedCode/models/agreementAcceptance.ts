import {AgreementAcceptanceState} from './agreementAcceptanceState';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AgreementAcceptance extends Entity, Partial<Parsable> {
    /** ID of the agreement file accepted by the user. */
    agreementFileId?: string;
    /** ID of the agreement. */
    agreementId?: string;
    /** The display name of the device used for accepting the agreement. */
    deviceDisplayName?: string;
    /** The unique identifier of the device used for accepting the agreement. Supports $filter (eq) and eq for null values. */
    deviceId?: string;
    /** The operating system used for accepting the agreement. */
    deviceOSType?: string;
    /** The operating system version of the device used for accepting the agreement. */
    deviceOSVersion?: string;
    /** The expiration date time of the acceptance. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $filter (eq, ge, le) and eq for null values. */
    expirationDateTime?: Date;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $filter (eq) and eq for null values. */
    recordedDateTime?: Date;
    /** The state property */
    state?: AgreementAcceptanceState;
    /** Display name of the user when the acceptance was recorded. */
    userDisplayName?: string;
    /** Email of the user when the acceptance was recorded. */
    userEmail?: string;
    /** ID of the user who accepted the agreement. Supports $filter (eq). */
    userId?: string;
    /** UPN of the user when the acceptance was recorded. */
    userPrincipalName?: string;
}
