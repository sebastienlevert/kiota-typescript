import {SignInLocation} from './index';
import {serializeGeoCoordinates} from './serializeGeoCoordinates';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSignInLocation(writer: SerializationWriter, signInLocation: SignInLocation | undefined = {}) : void {
            writer.writeStringValue("city", signInLocation.city);
            writer.writeStringValue("countryOrRegion", signInLocation.countryOrRegion);
            writer.writeObjectValueFromMethod("geoCoordinates", signInLocation.geoCoordinates as any, serializeGeoCoordinates);
            writer.writeStringValue("@odata.type", signInLocation.odataType);
            writer.writeStringValue("state", signInLocation.state);
}
