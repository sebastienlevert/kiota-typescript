import {DataSubject} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDataSubject(dataSubject: DataSubject | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "email": n => { dataSubject.email = n.getStringValue() as any ; },
        "firstName": n => { dataSubject.firstName = n.getStringValue() as any ; },
        "lastName": n => { dataSubject.lastName = n.getStringValue() as any ; },
        "@odata.type": n => { dataSubject.odataType = n.getStringValue() as any ; },
        "residency": n => { dataSubject.residency = n.getStringValue() as any ; },
    }
}
