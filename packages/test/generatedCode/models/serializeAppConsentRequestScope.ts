import {AppConsentRequestScope} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppConsentRequestScope(writer: SerializationWriter, appConsentRequestScope: AppConsentRequestScope | undefined = {}) : void {
            writer.writeStringValue("displayName", appConsentRequestScope.displayName);
}
