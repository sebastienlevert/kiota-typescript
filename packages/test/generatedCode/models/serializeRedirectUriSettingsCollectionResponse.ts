import {RedirectUriSettingsCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRedirectUriSettings} from './serializeRedirectUriSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRedirectUriSettingsCollectionResponse(writer: SerializationWriter, redirectUriSettingsCollectionResponse: RedirectUriSettingsCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, redirectUriSettingsCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", redirectUriSettingsCollectionResponse.value as any, serializeRedirectUriSettings);
}
