import {PhysicalAddress} from './index';
import {PhysicalAddressType} from './physicalAddressType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPhysicalAddress(physicalAddress: PhysicalAddress | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "city": n => { physicalAddress.city = n.getStringValue() as any ; },
        "countryOrRegion": n => { physicalAddress.countryOrRegion = n.getStringValue() as any ; },
        "postalCode": n => { physicalAddress.postalCode = n.getStringValue() as any ; },
        "postOfficeBox": n => { physicalAddress.postOfficeBox = n.getStringValue() as any ; },
        "state": n => { physicalAddress.state = n.getStringValue() as any ; },
        "street": n => { physicalAddress.street = n.getStringValue() as any ; },
        "type": n => { physicalAddress.type = n.getEnumValue<PhysicalAddressType>(PhysicalAddressType) as any ; },
    }
}
