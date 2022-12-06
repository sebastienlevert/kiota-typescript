import {MediaConfig} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaConfig(mediaConfig: MediaConfig | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { mediaConfig.odataType = n.getStringValue() as any ; },
    }
}
