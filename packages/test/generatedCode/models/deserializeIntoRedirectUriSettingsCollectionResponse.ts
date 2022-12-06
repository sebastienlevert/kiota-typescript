import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRedirectUriSettings} from './deserializeIntoRedirectUriSettings';
import {RedirectUriSettingsCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRedirectUriSettingsCollectionResponse(redirectUriSettingsCollectionResponse: RedirectUriSettingsCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(redirectUriSettingsCollectionResponse),
        "value": n => { redirectUriSettingsCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRedirectUriSettings) as any ; },
    }
}
