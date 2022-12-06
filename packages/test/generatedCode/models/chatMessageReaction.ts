import {ChatMessageReactionIdentitySet} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageReaction extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    createdDateTime?: Date;
    /** The OdataType property */
    odataType?: string;
    /** Supported values are like, angry, sad, laugh, heart, surprised. */
    reactionType?: string;
    /** The user property */
    user?: ChatMessageReactionIdentitySet;
}
