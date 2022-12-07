import {AppConsentRequestScope} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppConsentRequestScope(appConsentRequestScope: AppConsentRequestScope | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { appConsentRequestScope.displayName = n.getStringValue() as any ; },
    }
}
