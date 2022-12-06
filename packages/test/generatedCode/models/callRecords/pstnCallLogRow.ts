import {PstnCallDurationSource} from './pstnCallDurationSource';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PstnCallLogRow extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The source of the call duration data. If the call uses a third-party telecommunications operator via the Operator Connect Program, the operator may provide their own call duration data. In this case, the property value is operator. Otherwise, the value is microsoft. */
    callDurationSource?: PstnCallDurationSource;
    /** Number dialed in E.164 format. */
    calleeNumber?: string;
    /** Number that received the call for inbound calls or the number dialed for outbound calls. E.164 format. */
    callerNumber?: string;
    /** Call identifier. Not guaranteed to be unique. */
    callId?: string;
    /** Whether the call was a PSTN outbound or inbound call and the type of call such as a call placed by a user or an audio conference. */
    callType?: string;
    /** Amount of money or cost of the call that is charged to your account. */
    charge?: number;
    /** ID of the audio conference. */
    conferenceId?: string;
    /** Connection fee price. */
    connectionCharge?: number;
    /** Type of currency used to calculate the cost of the call (ISO 4217). */
    currency?: string;
    /** Whether the call was domestic (within a country or region) or international (outside a country or region) based on the user's location. */
    destinationContext?: string;
    /** Country or region dialed. */
    destinationName?: string;
    /** How long the call was connected, in seconds. */
    duration?: number;
    /** Call end time. */
    endDateTime?: Date;
    /** Unique call identifier. GUID. */
    id?: string;
    /** User's phone number type, such as a service of toll-free number. */
    inventoryType?: string;
    /** The license used for the call. */
    licenseCapability?: string;
    /** The OdataType property */
    odataType?: string;
    /** The telecommunications operator which provided PSTN services for this call. This may be Microsoft, or it may be a third-party operator via the Operator Connect Program. */
    operator?: string;
    /** Call start time. */
    startDateTime?: Date;
    /** Country code of the tenant, ISO 3166-1 alpha-2. */
    tenantCountryCode?: string;
    /** Country code of the user, ISO 3166-1 alpha-2. */
    usageCountryCode?: string;
    /** Display name of the user. */
    userDisplayName?: string;
    /** Calling user's ID in Graph. GUID. This and other user info will be null/empty for bot call types (ucap_in, ucap_out). */
    userId?: string;
    /** UserPrincipalName (sign-in name) in Azure Active Directory. This is usually the same as user's SIP Address, and can be same as user's e-mail address. */
    userPrincipalName?: string;
}
