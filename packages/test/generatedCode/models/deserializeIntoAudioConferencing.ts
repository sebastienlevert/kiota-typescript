import {AudioConferencing} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAudioConferencing(audioConferencing: AudioConferencing | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "conferenceId": n => { audioConferencing.conferenceId = n.getStringValue() as any ; },
        "dialinUrl": n => { audioConferencing.dialinUrl = n.getStringValue() as any ; },
        "tollFreeNumber": n => { audioConferencing.tollFreeNumber = n.getStringValue() as any ; },
        "tollFreeNumbers": n => { audioConferencing.tollFreeNumbers = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "tollNumber": n => { audioConferencing.tollNumber = n.getStringValue() as any ; },
        "tollNumbers": n => { audioConferencing.tollNumbers = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
