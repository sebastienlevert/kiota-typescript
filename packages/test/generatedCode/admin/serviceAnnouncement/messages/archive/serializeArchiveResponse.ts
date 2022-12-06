import {ArchiveResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeArchiveResponse(writer: SerializationWriter, archiveResponse: ArchiveResponse | undefined = {}) : void {
            writer.writeBooleanValue("value", archiveResponse.value);
}
