import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DirectRoutingLogRow extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Number of the user or bot who received the call. E.164 format, but may include additional data. */
    calleeNumber?: string;
    /** In addition to the SIP codes, Microsoft has own subcodes that indicate the specific issue. */
    callEndSubReason?: number;
    /** Number of the user or bot who made the call. E.164 format, but may include additional data. */
    callerNumber?: string;
    /** Call type and direction. */
    callType?: string;
    /** Identifier for the call that you can use when calling Microsoft Support. GUID. */
    correlationId?: string;
    /** Duration of the call in seconds. */
    duration?: number;
    /** Only exists for successful (fully established) calls. Time when call ended. */
    endDateTime?: Date;
    /** Only exists for failed (not fully established) calls. */
    failureDateTime?: Date;
    /** The code with which the call ended, RFC 3261. */
    finalSipCode?: number;
    /** Description of the SIP code and Microsoft subcode. */
    finalSipCodePhrase?: string;
    /** Unique call identifier. GUID. */
    id?: string;
    /** When the initial invite was sent. */
    inviteDateTime?: Date;
    /** Indicates if the trunk was enabled for media bypass or not. */
    mediaBypassEnabled?: boolean;
    /** The datacenter used for media path in non-bypass call. */
    mediaPathLocation?: string;
    /** The OdataType property */
    odataType?: string;
    /** The datacenter used for signaling for both bypass and non-bypass calls. */
    signalingLocation?: string;
    /** Call start time.For failed and unanswered calls, this can be equal to invite or failure time. */
    startDateTime?: Date;
    /** Success or attempt. */
    successfulCall?: boolean;
    /** Fully qualified domain name of the session border controller. */
    trunkFullyQualifiedDomainName?: string;
    /** Display name of the user. */
    userDisplayName?: string;
    /** Calling user's ID in Graph. This and other user info will be null/empty for bot call types. GUID. */
    userId?: string;
    /** UserPrincipalName (sign-in name) in Azure Active Directory. This is usually the same as user's SIP Address, and can be same as user's e-mail address. */
    userPrincipalName?: string;
}
