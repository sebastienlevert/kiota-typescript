import {WritebackConfiguration} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWritebackConfiguration(writebackConfiguration: WritebackConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isEnabled": n => { writebackConfiguration.isEnabled = n.getBooleanValue() as any ; },
    }
}
