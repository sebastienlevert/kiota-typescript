import {AdvancedConfigState} from './advancedConfigState';
import {AuthenticationMethodFeatureConfiguration} from './index';
import {serializeFeatureTarget} from './serializeFeatureTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodFeatureConfiguration(writer: SerializationWriter, authenticationMethodFeatureConfiguration: AuthenticationMethodFeatureConfiguration | undefined = {}) : void {
            writer.writeObjectValueFromMethod("excludeTarget", authenticationMethodFeatureConfiguration.excludeTarget as any, serializeFeatureTarget);
            writer.writeObjectValueFromMethod("includeTarget", authenticationMethodFeatureConfiguration.includeTarget as any, serializeFeatureTarget);
            writer.writeStringValue("@odata.type", authenticationMethodFeatureConfiguration.odataType);
            writer.writeEnumValue<AdvancedConfigState>("state", authenticationMethodFeatureConfiguration.state);
}
