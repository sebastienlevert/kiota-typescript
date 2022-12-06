import {Compliance} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCompliance(compliance: Compliance | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { compliance.odataType = n.getStringValue() as any ; },
    }
}
