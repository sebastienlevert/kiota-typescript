import {AdvancedConfigState} from './advancedConfigState';
import {deserializeIntoFeatureTarget} from './deserializeIntoFeatureTarget';
import {AuthenticationMethodFeatureConfiguration} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodFeatureConfiguration(authenticationMethodFeatureConfiguration: AuthenticationMethodFeatureConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "excludeTarget": n => { authenticationMethodFeatureConfiguration.excludeTarget = n.getObject(deserializeIntoFeatureTarget) as any ; },
        "includeTarget": n => { authenticationMethodFeatureConfiguration.includeTarget = n.getObject(deserializeIntoFeatureTarget) as any ; },
        "@odata.type": n => { authenticationMethodFeatureConfiguration.odataType = n.getStringValue() as any ; },
        "state": n => { authenticationMethodFeatureConfiguration.state = n.getEnumValue<AdvancedConfigState>(AdvancedConfigState) as any ; },
    }
}
