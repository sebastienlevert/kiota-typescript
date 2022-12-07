import {ChatMessageActions} from './chatMessageActions';
import {ChatMessageReaction} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageHistoryItem extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** The actions property */
    actions?: ChatMessageActions;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The modifiedDateTime property */
    modifiedDateTime?: Date;
    /** The reaction property */
    reaction?: ChatMessageReaction;
}
