import {ApiAuthenticationConfigurationBase} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApiAuthenticationConfigurationBase(writer: SerializationWriter, apiAuthenticationConfigurationBase: ApiAuthenticationConfigurationBase | undefined = {}) : void {
            writer.writeStringValue("@odata.type", apiAuthenticationConfigurationBase.odataType);
}
