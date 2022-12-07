import {Photo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPhoto(photo: Photo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "cameraMake": n => { photo.cameraMake = n.getStringValue() as any ; },
        "cameraModel": n => { photo.cameraModel = n.getStringValue() as any ; },
        "exposureDenominator": n => { photo.exposureDenominator = n.getNumberValue() as any ; },
        "exposureNumerator": n => { photo.exposureNumerator = n.getNumberValue() as any ; },
        "fNumber": n => { photo.fNumber = n.getNumberValue() as any ; },
        "focalLength": n => { photo.focalLength = n.getNumberValue() as any ; },
        "iso": n => { photo.iso = n.getNumberValue() as any ; },
        "orientation": n => { photo.orientation = n.getNumberValue() as any ; },
        "takenDateTime": n => { photo.takenDateTime = n.getDateValue() as any ; },
    }
}
