import {PhysicalOfficeAddress} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPhysicalOfficeAddress(physicalOfficeAddress: PhysicalOfficeAddress | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "city": n => { physicalOfficeAddress.city = n.getStringValue() as any ; },
        "countryOrRegion": n => { physicalOfficeAddress.countryOrRegion = n.getStringValue() as any ; },
        "@odata.type": n => { physicalOfficeAddress.odataType = n.getStringValue() as any ; },
        "officeLocation": n => { physicalOfficeAddress.officeLocation = n.getStringValue() as any ; },
        "postalCode": n => { physicalOfficeAddress.postalCode = n.getStringValue() as any ; },
        "state": n => { physicalOfficeAddress.state = n.getStringValue() as any ; },
        "street": n => { physicalOfficeAddress.street = n.getStringValue() as any ; },
    }
}
