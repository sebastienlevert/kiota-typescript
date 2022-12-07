import {IdentitySet} from './index';
import {OnlineMeetingRole} from './onlineMeetingRole';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingParticipantInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The identity property */
    identity?: IdentitySet;
    /** The role property */
    role?: OnlineMeetingRole;
    /** User principal name of the participant. */
    upn?: string;
}
