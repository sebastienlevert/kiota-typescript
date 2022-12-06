import {deserializeIntoDeviceInfo} from './deserializeIntoDeviceInfo';
import {deserializeIntoMediaStream} from './deserializeIntoMediaStream';
import {deserializeIntoNetworkInfo} from './deserializeIntoNetworkInfo';
import {Media} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMedia(media: Media | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "calleeDevice": n => { media.calleeDevice = n.getObject(deserializeIntoDeviceInfo) as any ; },
        "calleeNetwork": n => { media.calleeNetwork = n.getObject(deserializeIntoNetworkInfo) as any ; },
        "callerDevice": n => { media.callerDevice = n.getObject(deserializeIntoDeviceInfo) as any ; },
        "callerNetwork": n => { media.callerNetwork = n.getObject(deserializeIntoNetworkInfo) as any ; },
        "label": n => { media.label = n.getStringValue() as any ; },
        "@odata.type": n => { media.odataType = n.getStringValue() as any ; },
        "streams": n => { media.streams = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMediaStream) as any ; },
    }
}
