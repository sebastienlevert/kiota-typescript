import {MediaConfig} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaConfig(writer: SerializationWriter, mediaConfig: MediaConfig | undefined = {}) : void {
            writer.writeStringValue("@odata.type", mediaConfig.odataType);
}
