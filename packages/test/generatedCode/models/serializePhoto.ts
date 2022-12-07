import {Photo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePhoto(writer: SerializationWriter, photo: Photo | undefined = {}) : void {
            writer.writeStringValue("cameraMake", photo.cameraMake);
            writer.writeStringValue("cameraModel", photo.cameraModel);
            writer.writeNumberValue("exposureDenominator", photo.exposureDenominator);
            writer.writeNumberValue("exposureNumerator", photo.exposureNumerator);
            writer.writeNumberValue("fNumber", photo.fNumber);
            writer.writeNumberValue("focalLength", photo.focalLength);
            writer.writeNumberValue("iso", photo.iso);
            writer.writeNumberValue("orientation", photo.orientation);
            writer.writeDateValue("takenDateTime", photo.takenDateTime);
}
