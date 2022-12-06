import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PrintServiceEndpoint} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintServiceEndpoint(printServiceEndpoint: PrintServiceEndpoint | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printServiceEndpoint),
        "displayName": n => { printServiceEndpoint.displayName = n.getStringValue() as any ; },
        "uri": n => { printServiceEndpoint.uri = n.getStringValue() as any ; },
    }
}
