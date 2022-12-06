import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AssignedPlan extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The date and time at which the plan was assigned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    assignedDateTime?: Date;
    /** Condition of the capability assignment. The possible values are Enabled, Warning, Suspended, Deleted, LockedOut. See a detailed description of each value. */
    capabilityStatus?: string;
    /** The OdataType property */
    odataType?: string;
    /** The name of the service; for example, exchange. */
    service?: string;
    /** A GUID that identifies the service plan. For a complete list of GUIDs and their equivalent friendly service names, see Product names and service plan identifiers for licensing. */
    servicePlanId?: string;
}
