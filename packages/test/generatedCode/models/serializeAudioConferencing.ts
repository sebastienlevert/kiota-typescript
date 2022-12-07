import {AudioConferencing} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAudioConferencing(writer: SerializationWriter, audioConferencing: AudioConferencing | undefined = {}) : void {
            writer.writeStringValue("conferenceId", audioConferencing.conferenceId);
            writer.writeStringValue("dialinUrl", audioConferencing.dialinUrl);
            writer.writeStringValue("tollFreeNumber", audioConferencing.tollFreeNumber);
            writer.writeCollectionOfPrimitiveValues<string>("tollFreeNumbers", audioConferencing.tollFreeNumbers);
            writer.writeStringValue("tollNumber", audioConferencing.tollNumber);
            writer.writeCollectionOfPrimitiveValues<string>("tollNumbers", audioConferencing.tollNumbers);
}
