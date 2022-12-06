import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPrintServiceEndpoint} from './deserializeIntoPrintServiceEndpoint';
import {PrintService} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintService(printService: PrintService | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printService),
        "endpoints": n => { printService.endpoints = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintServiceEndpoint) as any ; },
    }
}
