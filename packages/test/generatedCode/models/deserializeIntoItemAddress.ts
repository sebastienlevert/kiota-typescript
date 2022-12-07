import {deserializeIntoGeoCoordinates} from './deserializeIntoGeoCoordinates';
import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {deserializeIntoPhysicalAddress} from './deserializeIntoPhysicalAddress';
import {ItemAddress} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemAddress(itemAddress: ItemAddress | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(itemAddress),
        "detail": n => { itemAddress.detail = n.getObject(deserializeIntoPhysicalAddress) as any ; },
        "displayName": n => { itemAddress.displayName = n.getStringValue() as any ; },
        "geoCoordinates": n => { itemAddress.geoCoordinates = n.getObject(deserializeIntoGeoCoordinates) as any ; },
    }
}
