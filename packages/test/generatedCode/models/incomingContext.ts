import {IdentitySet} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IncomingContext extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The ID of the participant that is under observation. Read-only. */
    observedParticipantId?: string;
    /** The OdataType property */
    odataType?: string;
    /** The identity that the call is happening on behalf of. */
    onBehalfOf?: IdentitySet;
    /** The ID of the participant that triggered the incoming call. Read-only. */
    sourceParticipantId?: string;
    /** The identity that transferred the call. */
    transferor?: IdentitySet;
}
