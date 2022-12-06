import {deserializeIntoGeoCoordinates} from './deserializeIntoGeoCoordinates';
import {SignInLocation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSignInLocation(signInLocation: SignInLocation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "city": n => { signInLocation.city = n.getStringValue() as any ; },
        "countryOrRegion": n => { signInLocation.countryOrRegion = n.getStringValue() as any ; },
        "geoCoordinates": n => { signInLocation.geoCoordinates = n.getObject(deserializeIntoGeoCoordinates) as any ; },
        "@odata.type": n => { signInLocation.odataType = n.getStringValue() as any ; },
        "state": n => { signInLocation.state = n.getStringValue() as any ; },
    }
}
