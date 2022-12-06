import {deserializeIntoEntity} from './deserializeIntoEntity';
import {NamedLocation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNamedLocation(namedLocation: NamedLocation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(namedLocation),
        "createdDateTime": n => { namedLocation.createdDateTime = n.getDateValue() as any ; },
        "displayName": n => { namedLocation.displayName = n.getStringValue() as any ; },
        "modifiedDateTime": n => { namedLocation.modifiedDateTime = n.getDateValue() as any ; },
    }
}
