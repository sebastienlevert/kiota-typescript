import {deserializeIntoPhysicalAddress} from './deserializeIntoPhysicalAddress';
import {InstitutionData} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInstitutionData(institutionData: InstitutionData | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { institutionData.description = n.getStringValue() as any ; },
        "displayName": n => { institutionData.displayName = n.getStringValue() as any ; },
        "location": n => { institutionData.location = n.getObject(deserializeIntoPhysicalAddress) as any ; },
        "webUrl": n => { institutionData.webUrl = n.getStringValue() as any ; },
    }
}
