import {GeolocationColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGeolocationColumn(geolocationColumn: GeolocationColumn | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { geolocationColumn.odataType = n.getStringValue() as any ; },
    }
}
